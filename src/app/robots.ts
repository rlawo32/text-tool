import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export const revalidate = 60
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://textool.site/sitemap.xml',
  }
}