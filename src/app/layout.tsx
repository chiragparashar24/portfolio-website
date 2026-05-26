import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { personal } from '@/lib/data';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(personal.siteUrl),
  title: {
    default: `${personal.name} | Microsoft Learn Student Ambassador | AI/ML Engineer Portfolio`,
    template: `%s | ${personal.name}`,
  },
  description:
    'Portfolio of Chirag Parashar, Computer Science Engineering Student, Microsoft Learn Student Ambassador, AI/ML Enthusiast, Python Developer and Open Source Contributor.',
  keywords: [
    'Chirag Parashar',
    'Microsoft Learn Student Ambassador',
    'AI ML Engineer',
    'Python Developer',
    'Software Engineer',
    'Computer Science Student',
    'Machine Learning Portfolio',
    'Data Science',
    'Open Source Contributor',
    'B.Tech CSE Portfolio',
    'India Student Developer',
  ],
  authors: [{ name: personal.name, url: personal.siteUrl }],
  creator: personal.name,
  publisher: personal.name,
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: personal.siteUrl,
    siteName: `${personal.name} — Portfolio`,
    title: `${personal.name} | Microsoft Learn Student Ambassador | AI/ML Engineer`,
    description:
      'Portfolio of Chirag Parashar — AI/ML Engineer, Software Developer, and Microsoft Learn Student Ambassador building intelligent solutions with code.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${personal.name} — AI/ML Engineer & Microsoft Learn Student Ambassador`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personal.name} | AI/ML Engineer & MLSA Portfolio`,
    description:
      'AI/ML Engineer · Software Developer · Microsoft Learn Student Ambassador. Building intelligent solutions with AI, data & code.',
    creator: '@chiragparashar24',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
  verification: {
    google: '5NT7BGixPdBku9jyxqByK7cPFb0QY2Snfgrlrg7zGwM',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0B1120' },
    { media: '(prefers-color-scheme: light)', color: '#F8FAFC' },
  ],
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark light',
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: personal.name,
  alternateName: 'Chirag',
  url: personal.siteUrl,
  email: `mailto:${personal.email}`,
  image: `${personal.siteUrl}/og-image.png`,
  jobTitle: 'AI/ML Engineer · Software Developer · Microsoft Learn Student Ambassador',
  worksFor: {
    '@type': 'Organization',
    name: 'Microsoft (Student Ambassador) · Pimpri Chinchwad University',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Pimpri Chinchwad University',
  },
  knowsAbout: [
    'Artificial Intelligence',
    'Machine Learning',
    'Python',
    'Software Engineering',
    'Open Source',
    'Web Development',
    'Data Science',
  ],
  sameAs: [personal.github, personal.linkedin, personal.twitter],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: personal.siteUrl,
  name: `${personal.name} — Portfolio`,
  description:
    'Portfolio of Chirag Parashar, Computer Science Engineering Student, Microsoft Learn Student Ambassador, AI/ML Enthusiast and Python Developer.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
