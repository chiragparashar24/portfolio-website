import type { MetadataRoute } from 'next';
import { personal, navLinks } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = personal.siteUrl.replace(/\/$/, '');

  return [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    ...navLinks
      .filter((l) => l.href !== '#home')
      .map((l) => ({
        url: `${base}/${l.href}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      })),
  ];
}
