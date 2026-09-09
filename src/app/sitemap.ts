import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const lastModified = new Date()

  const routes = [
    '',
    '/about',
    '/pricing',
    '/book-demo',
    '/features',
    '/features/attendance',
    '/features/fees',
    '/features/exams',
    '/features/timetable',
    '/features/parent-portal',
    '/features/analytics',
    '/features/student-management',
    '/features/library',
    '/solutions/k-12',
    '/solutions/higher-ed',
    '/solutions/multi-campus',
    '/solutions/international',
    '/resources/product-tour',
    '/blog',
    '/case-studies'
  ]

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
