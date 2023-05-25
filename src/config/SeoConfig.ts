import type {DefaultSeoProps} from 'next-seo'
import {env} from '~/env.mjs'

const openGraphImage =
  'https://prismic-io.s3.amazonaws.com/gary-blog%2F3297f290-a885-4cc6-9b19-3235e3026646_default.jpg'

const SeoConfig: DefaultSeoProps = {
  title: 'Home',
  titleTemplate: 'BytesOfAI | %s',
  description: 'Next.js + mantine + TypeScript template',

  canonical: env.NEXT_PUBLIC_SITE_URL,

  openGraph: {
    type: 'website',
    site_name: 'Mantine Template',
    title: 'Nextjs Starter',
    description: 'SEO made easy for Next.js projects',
    locale: 'en',

    url: env.NEXT_PUBLIC_SITE_URL,

    images: [
      {
        url: openGraphImage,
        width: 1200,
        height: 1200,
        alt: 'Og site image',
        type: 'image/jpeg',
      },
    ],
  },

  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },

  additionalLinkTags: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: `/favicons/apple-touch-icon.png`,
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: `/favicons/favicon-32x32.png`,
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: `/favicons/favicon-16x16.png`,
    },
    {rel: 'manifest', href: `/manifest.json`},
    {rel: 'shortcut icon', href: `/favicon.ico`},
  ],
}

export default SeoConfig
