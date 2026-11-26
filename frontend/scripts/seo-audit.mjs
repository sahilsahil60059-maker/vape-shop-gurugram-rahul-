#!/usr/bin/env node

/**
 * Brandmingo / GEMINI.md Automated SEO Audit Script
 * Validates Next.js single-page application against technical SEO requirements
 */

import * as cheerio from "cheerio";

// Parse CLI arguments (--url <url>) or default to http://localhost:3000
const args = process.argv.slice(2);
let baseUrl = process.env.AUDIT_URL || "http://localhost:3000";
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--url" && args[i + 1]) {
    baseUrl = args[i + 1];
    i++;
  }
}
baseUrl = baseUrl.replace(/\/+$/, "");

const results = {
  passed: [],
  warnings: [],
  failed: [],
};

function pass(testName, details) {
  results.passed.push({ test: testName, details });
  console.log(`\x1b[32m✔ PASS\x1b[0m [${testName}]: ${details}`);
}

function warn(testName, details) {
  results.warnings.push({ test: testName, details });
  console.log(`\x1b[33m▲ WARN\x1b[0m [${testName}]: ${details}`);
}

function fail(testName, details) {
  results.failed.push({ test: testName, details });
  console.log(`\x1b[31m✖ FAIL\x1b[0m [${testName}]: ${details}`);
}

console.log(`\n==================================================`);
console.log(`🚀 Starting Automated SEO Audit on: ${baseUrl}`);
console.log(`==================================================\n`);

async function runAudit() {
  try {
    // 1. Audit Homepage
    console.log(`\n--- Auditing Homepage (${baseUrl}/) ---`);
    const homeRes = await fetch(`${baseUrl}/`, {
      headers: { "User-Agent": "Brandmingo-SEO-Auditor/1.0" },
    });

    if (homeRes.status === 200) {
      pass("HTTP Status", `Homepage returned 200 OK`);
    } else {
      fail("HTTP Status", `Homepage returned status ${homeRes.status}`);
    }

    const contentType = homeRes.headers.get("content-type") || "";
    if (contentType.includes("text/html")) {
      pass("Content-Type", `Returned text/html header (${contentType})`);
    } else {
      fail("Content-Type", `Invalid content-type: ${contentType}`);
    }

    const xRobotsTag = homeRes.headers.get("x-robots-tag");
    if (xRobotsTag && xRobotsTag.toLowerCase().includes("noindex")) {
      fail("X-Robots-Tag", `Found blocking 'noindex' in X-Robots-Tag: ${xRobotsTag}`);
    } else {
      pass("X-Robots-Tag", `No blocking noindex in response headers`);
    }

    const html = await homeRes.text();
    const $ = cheerio.load(html);

    // 2. Title Tag
    const title = $("title").first().text().trim();
    if (!title) {
      fail("Title Tag", `Missing <title> tag on homepage`);
    } else {
      if (title.length >= 30 && title.length <= 75) {
        pass("Title Tag", `Title present (${title.length} chars): "${title}"`);
      } else {
        warn("Title Tag", `Title present but length is ${title.length} chars (recommended 30-70): "${title}"`);
      }
    }

    // 3. Meta Description
    const metaDesc = $('meta[name="description"]').attr("content")?.trim();
    if (!metaDesc) {
      fail("Meta Description", `Missing <meta name="description"> tag`);
    } else {
      if (metaDesc.length >= 100 && metaDesc.length <= 175) {
        pass("Meta Description", `Description optimal (${metaDesc.length} chars): "${metaDesc.slice(0, 80)}..."`);
      } else {
        warn("Meta Description", `Description length is ${metaDesc.length} chars: "${metaDesc.slice(0, 80)}..."`);
      }
    }

    // 4. Meta Robots
    const metaRobots = $('meta[name="robots"]').attr("content")?.toLowerCase() || "";
    if (metaRobots.includes("noindex")) {
      fail("Meta Robots", `Accidental 'noindex' found in meta robots tag!`);
    } else {
      pass("Meta Robots", `Indexable (robots directive: "${metaRobots || "index, follow (default)"}")`);
    }

    // 5. Canonical Link
    const canonical = $('link[rel="canonical"]').attr("href")?.trim();
    if (!canonical) {
      fail("Canonical Tag", `Missing <link rel="canonical"> tag`);
    } else if (canonical.includes("example.com") || canonical.includes("localhost")) {
      warn("Canonical Tag", `Canonical points to local/placeholder URL: ${canonical}`);
    } else {
      pass("Canonical Tag", `Canonical present and absolute: ${canonical}`);
    }

    // 6. OpenGraph & Social Cards
    const ogTitle = $('meta[property="og:title"]').attr("content");
    const ogDesc = $('meta[property="og:description"]').attr("content");
    const ogImage = $('meta[property="og:image"]').attr("content");
    const twitterCard = $('meta[name="twitter:card"]').attr("content");

    if (ogTitle && ogDesc && ogImage) {
      pass("Open Graph Tags", `og:title, og:description, and og:image configured`);
    } else {
      warn("Open Graph Tags", `Some OG tags missing (Title: ${!!ogTitle}, Desc: ${!!ogDesc}, Image: ${!!ogImage})`);
    }

    if (twitterCard) {
      pass("Twitter Card", `twitter:card tag present (${twitterCard})`);
    } else {
      warn("Twitter Card", `Missing twitter:card tag`);
    }

    // 7. Heading Hierarchy & H1 Check
    const h1Elements = $("h1");
    if (h1Elements.length === 1) {
      const h1Text = h1Elements.first().text().trim();
      pass("H1 Heading", `Exactly one H1 found: "${h1Text}"`);
    } else if (h1Elements.length === 0) {
      fail("H1 Heading", `No H1 heading found on homepage!`);
    } else {
      warn("H1 Heading", `Found ${h1Elements.length} H1 tags (single primary H1 recommended)`);
    }

    const h2Count = $("h2").length;
    if (h2Count >= 3) {
      pass("H2 Headings", `Found ${h2Count} H2 headings establishing clean section structure`);
    } else {
      warn("H2 Headings", `Only found ${h2Count} H2 headings; section hierarchy could be richer`);
    }

    // 8. Image Alt Attributes
    const images = $("img");
    let missingAlt = 0;
    images.each((_, el) => {
      const alt = $(el).attr("alt");
      if (alt === undefined) {
        missingAlt++;
      }
    });
    if (images.length === 0) {
      pass("Image Alts", `No raster <img> elements requiring alt checks (SVG icons used)`);
    } else if (missingAlt === 0) {
      pass("Image Alts", `All ${images.length} images have 'alt' attributes present`);
    } else {
      fail("Image Alts", `${missingAlt} out of ${images.length} images are missing the 'alt' attribute`);
    }

    // 9. Duplicate HTML ID Check
    const ids = new Set();
    const duplicateIds = new Set();
    $("[id]").each((_, el) => {
      const id = $(el).attr("id");
      if (id) {
        if (ids.has(id)) {
          duplicateIds.add(id);
        } else {
          ids.add(id);
        }
      }
    });
    if (duplicateIds.size === 0) {
      pass("Duplicate IDs", `All ${ids.size} HTML element IDs are unique`);
    } else {
      fail("Duplicate IDs", `Found duplicate IDs: ${Array.from(duplicateIds).join(", ")}`);
    }

    // 10. Anchor Links Validation (Single-page navigation)
    let brokenInternalAnchors = 0;
    $('a[href^="#"]').each((_, el) => {
      const hash = $(el).attr("href");
      if (hash && hash.length > 1) {
        const targetId = hash.slice(1);
        if ($(`#${targetId}`).length === 0) {
          brokenInternalAnchors++;
        }
      }
    });
    if (brokenInternalAnchors === 0) {
      pass("Anchor Links", `All on-page anchor navigation links point to valid section IDs`);
    } else {
      fail("Anchor Links", `${brokenInternalAnchors} anchor links point to non-existent section IDs`);
    }

    // 11. Structured Data JSON-LD
    const jsonLdScripts = $('script[type="application/ld+json"]');
    if (jsonLdScripts.length === 0) {
      fail("Structured Data", `No JSON-LD structured data scripts found`);
    } else {
      let validSchemas = 0;
      jsonLdScripts.each((i, el) => {
        try {
          const raw = $(el).html();
          const parsed = JSON.parse(raw);
          validSchemas++;
          const types = parsed["@graph"]
            ? parsed["@graph"].map((item) => item["@type"]).join(", ")
            : parsed["@type"] || "Unknown";
          pass(`JSON-LD #${i + 1}`, `Successfully parsed JSON-LD graph. Detected types: [${types}]`);
        } catch (e) {
          fail(`JSON-LD #${i + 1}`, `Malformed JSON-LD syntax: ${e.message}`);
        }
      });
    }

    // 12. Check robots.txt
    console.log(`\n--- Auditing robots.txt (${baseUrl}/robots.txt) ---`);
    const robotsRes = await fetch(`${baseUrl}/robots.txt`);
    if (robotsRes.status === 200) {
      const robotsContent = await robotsRes.text();
      if (robotsContent.toLowerCase().includes("user-agent:") && robotsContent.toLowerCase().includes("sitemap:")) {
        pass("robots.txt", `robots.txt is valid and declares sitemap location`);
      } else {
        warn("robots.txt", `robots.txt returned 200 but may be missing User-agent or Sitemap directive`);
      }
    } else {
      fail("robots.txt", `robots.txt returned status ${robotsRes.status}`);
    }

    // 13. Check sitemap.xml
    console.log(`\n--- Auditing sitemap.xml (${baseUrl}/sitemap.xml) ---`);
    const sitemapRes = await fetch(`${baseUrl}/sitemap.xml`);
    if (sitemapRes.status === 200) {
      const sitemapContent = await sitemapRes.text();
      if (sitemapContent.includes("<urlset") && sitemapContent.includes("<loc>")) {
        pass("sitemap.xml", `sitemap.xml returned valid XML with urlset`);
        if (sitemapContent.includes("#")) {
          fail("sitemap.xml", `Sitemap contains prohibited hash (#) fragments in URLs`);
        } else {
          pass("sitemap.xml", `Sitemap contains clean URLs without hash fragments`);
        }
      } else {
        fail("sitemap.xml", `sitemap.xml content does not appear to be standard urlset XML`);
      }
    } else {
      fail("sitemap.xml", `sitemap.xml returned status ${sitemapRes.status}`);
    }

    // Summary Report
    console.log(`\n==================================================`);
    console.log(`📊 Audit Summary:`);
    console.log(`   Passed:   ${results.passed.length}`);
    console.log(`   Warnings: ${results.warnings.length}`);
    console.log(`   Failed:   ${results.failed.length}`);
    console.log(`==================================================\n`);

    if (results.failed.length > 0) {
      console.error(`\x1b[31mCritical SEO audit failures detected (${results.failed.length}). Exiting with code 1.\x1b[0m\n`);
      process.exit(1);
    } else {
      console.log(`\x1b[32mAll critical SEO audit checks passed successfully! 🎉\x1b[0m\n`);
      process.exit(0);
    }
  } catch (err) {
    console.error(`\x1b[31mFatal error during audit execution:\x1b[0m`, err);
    process.exit(1);
  }
}

runAudit();
