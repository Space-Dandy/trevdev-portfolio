import { getHTMLTextDir } from 'intlayer';
import { Metadata } from 'next';
import { NextLayoutIntlayer } from 'next-intlayer';
import './globals.css';

export { generateStaticParams } from 'next-intlayer';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;

  const metadata = {
    en: {
      title: 'TrevDev - Full Stack Developer | Frontend & Backend Solutions',
      description:
        'Professional full stack developer specializing in modern web applications. Expert in frontend and backend development with cutting-edge technologies.',
      keywords: [
        'full stack developer',
        'frontend developer',
        'backend developer',
        'web development',
        'React',
        'Next.js',
        'TypeScript',
        'portfolio',
      ],
    },
    es: {
      title:
        'TrevDev - Desarrollador Full Stack | Soluciones Frontend & Backend',
      description:
        'Desarrollador full stack profesional especializado en aplicaciones web modernas. Experto en desarrollo frontend y backend con tecnologías de vanguardia.',
      keywords: [
        'desarrollador full stack',
        'desarrollador frontend',
        'desarrollador backend',
        'desarrollo web',
        'React',
        'Next.js',
        'TypeScript',
        'portafolio',
      ],
    },
  };

  const currentMetadata = metadata[locale as 'en' | 'es'] || metadata.en;

  return {
    title: currentMetadata.title,
    description: currentMetadata.description,
    keywords: currentMetadata.keywords,
    authors: [{ name: 'TrevDev' }],
    creator: 'TrevDev',
    publisher: 'TrevDev',
    openGraph: {
      title: currentMetadata.title,
      description: currentMetadata.description,
      url: `https://yourdomain.com/${locale}`,
      siteName: 'TrevDev Portfolio',
      locale: locale,
      type: 'website',
      images: [
        {
          url: '/images/og-image.png',
          width: 1200,
          height: 630,
          alt: 'TrevDev Portfolio',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: currentMetadata.title,
      description: currentMetadata.description,
      creator: '@trevdev',
      images: ['/images/og-image.png'],
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
    alternates: {
      canonical: `https://yourdomain.com/${locale}`,
      languages: {
        en: 'https://yourdomain.com/en',
        es: 'https://yourdomain.com/es',
      },
    },
  };
}

const LocaleLayout: NextLayoutIntlayer = async ({ children, params }) => {
  const { locale } = await params;

  return (
    <html lang={locale} dir={getHTMLTextDir(locale)}>
      <body>{children}</body>
    </html>
  );
};

export default LocaleLayout;
