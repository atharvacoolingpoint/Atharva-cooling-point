import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { SURAT_LOCATIONS } from '@/data/locations';
import { REPAIR_SERVICES } from '@/data/services';
import { BRANDS_DATA } from '@/data/brands';
import { BLOG_POSTS } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}`, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${SITE_URL}/services`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/services/washing-machine-repair`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/services/ac-repair`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/services/microwave-oven-repair`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/services/refrigerator-repair`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/brands`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/location`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/book-repair`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/faq`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 }
  ];

  const serviceRoutes: MetadataRoute.Sitemap = REPAIR_SERVICES.map(s => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8
  }));

  const locationRoutes: MetadataRoute.Sitemap = SURAT_LOCATIONS.map(loc => ({
    url: `${SITE_URL}/location/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.85
  }));

  const brandRoutes: MetadataRoute.Sitemap = BRANDS_DATA.map(b => ({
    url: `${SITE_URL}/brands/${b.category === 'all' ? 'washing-machine' : b.category}/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map(p => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6
  }));

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes, ...brandRoutes, ...blogRoutes];
}
