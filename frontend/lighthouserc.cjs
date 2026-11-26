module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run start -- --port 3000',
      url: ['http://localhost:3000/'],
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:seo': ['error', { minScore: 0.95 }],
        'categories:performance': ['warn', { minScore: 0.90 }],
        'categories:accessibility': ['warn', { minScore: 0.90 }],
        'categories:best-practices': ['warn', { minScore: 0.95 }],
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: './seo-reports/lighthouse',
    },
  },
};
