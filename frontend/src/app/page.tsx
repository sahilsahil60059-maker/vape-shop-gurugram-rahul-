import { HeroSection } from "@/components/sections/Hero";
import { ProductsSection } from "@/components/sections/Products";
import { AboutSection } from "@/components/sections/About";
import { ReviewsSection } from "@/components/sections/Reviews";
import { WhyUsSection } from "@/components/sections/WhyUs";
import { FaqSection } from "@/components/sections/Faq";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <ReviewsSection />
      <WhyUsSection />
      <FaqSection />
    </>
  );
}
