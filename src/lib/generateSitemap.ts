// Sitemap Generator for ENDevo website
// Run this script to generate sitemap.xml: node scripts/generate-sitemap.js

interface SitemapURL {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

const BASE_URL = 'https://endevo.life';

const routes: SitemapURL[] = [
  { loc: '/', changefreq: 'weekly', priority: 1.0 },
  { loc: '/solution', changefreq: 'weekly', priority: 0.9 },
  { loc: '/resources', changefreq: 'weekly', priority: 0.8 },
  { loc: '/company', changefreq: 'monthly', priority: 0.7 },
  { loc: '/contact', changefreq: 'monthly', priority: 0.8 },
  { loc: '/wws-individuals', changefreq: 'weekly', priority: 0.8 },
  { loc: '/wws-service-providers', changefreq: 'weekly', priority: 0.8 },
  { loc: '/wws-employers', changefreq: 'weekly', priority: 0.8 },
  { loc: '/testimonials', changefreq: 'monthly', priority: 0.7 },
  { loc: '/trusted-experts', changefreq: 'monthly', priority: 0.7 },
  { loc: '/learn-and-listen', changefreq: 'weekly', priority: 0.6 },
  { loc: '/privacy-policy', changefreq: 'yearly', priority: 0.3 },
  { loc: '/terms-of-service', changefreq: 'yearly', priority: 0.3 },
];

export function generateSitemap(): string {
  const lastmod = new Date().toISOString().split('T')[0];
  
  const urlEntries = routes.map(route => {
    const changefreq = route.changefreq ? `\n    <changefreq>${route.changefreq}</changefreq>` : '';
    const priority = route.priority ? `\n    <priority>${route.priority}</priority>` : '';
    
    return `  <url>
    <loc>${BASE_URL}${route.loc}</loc>
    <lastmod>${route.lastmod || lastmod}</lastmod>${changefreq}${priority}
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

// Generate and log sitemap
if (typeof window === 'undefined') {
  console.log(generateSitemap());
}

export default generateSitemap;
