import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const viewport: Viewport = {
  themeColor: '#FAF9F5',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://mohamedchababe.com'),
  title: 'Mohamed Chababe — Graphic Designer & Web Designer à Paris',
  description:
    'Portfolio de Mohamed Chababe, Graphic Designer & Web Designer basé à Paris. Web design, branding, identité visuelle, e-commerce et design graphique.',
  authors: [{ name: 'Mohamed Chababe', url: 'https://mohamedchababe.com' }],
  creator: 'Mohamed Chababe',
  publisher: 'Mohamed Chababe',
  keywords: [
    'Mohamed Chababe',
    'Graphic Designer Paris',
    'Web Designer Paris',
    'Branding Paris',
    'Identité Visuelle',
    'Web Design France',
    'Direction Artistique',
    'UI/UX Designer',
    'E-commerce',
    'Studio Créatif Paris',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Mohamed Chababe — Graphic Designer & Web Designer à Paris',
    description:
      'Portfolio de Mohamed Chababe, Graphic Designer & Web Designer basé à Paris. Web design, branding, identité visuelle, e-commerce et design graphique.',
    url: 'https://mohamedchababe.com',
    siteName: 'Mohamed Chababe Portfolio',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/images/afamia_landscape.jpg',
        width: 1200,
        height: 675,
        alt: 'Portfolio de Mohamed Chababe - Graphic & Web Designer à Paris',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohamed Chababe — Graphic Designer & Web Designer à Paris',
    description:
      'Portfolio de Mohamed Chababe, Graphic Designer & Web Designer basé à Paris. Web design, branding, identité visuelle, e-commerce et design graphique.',
    images: ['/images/afamia_landscape.jpg'],
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Mohamed Chababe — Graphic Designer & Web Designer',
    image: 'https://mohamedchababe.com/images/portrait.jpg',
    '@id': 'https://mohamedchababe.com',
    url: 'https://mohamedchababe.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Paris',
      addressCountry: 'FR',
    },
    description:
      'Portfolio de Mohamed Chababe, Graphic Designer & Web Designer basé à Paris. Conception de sites web, identités visuelles, branding et expériences digitales modernes.',
    areaServed: 'Paris, Île-de-France, France, International',
    knowsAbout: [
      'Web Design',
      'Graphic Design',
      'Branding & Identité visuelle',
      'E-commerce',
      'Direction Artistique',
      'UI/UX Design',
    ],
  };

  return (
    <html lang="fr" className={`${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground antialiased min-h-screen selection:bg-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}
