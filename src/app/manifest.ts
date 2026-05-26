import type { MetadataRoute } from 'next';
import { personal } from '@/lib/data';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${personal.name} — Portfolio`,
    short_name: 'Chirag.dev',
    description:
      'Portfolio of Chirag Parashar — Microsoft Learn Student Ambassador, AI/ML Engineer, Python Developer.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0B1120',
    theme_color: '#0B1120',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
