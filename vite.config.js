import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const BASE_URL = 'https://softkhlome.web.app'

const STATIC_ROUTES = [
  {
    file: 'about.html',
    url: `${BASE_URL}/about`,
    title: 'About Softkhlome – Web Agency in Lilongwe, Malawi',
    description:
      "Discover Softkhlome's story, engineering principles, and founder Brian Kamwera. Custom web development and UI design in Lilongwe, Malawi.",
    ogType: 'website',
    imageAlt: 'Softkhlome Web Agency Logo',
    heading: 'About Softkhlome – Web Agency in Lilongwe, Malawi',
    summary:
      'Founded by Brian Kamwera in Lilongwe, Softkhlome builds fast responsive websites, custom React web apps, and strategic UI/UX systems for Malawian businesses.',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'AboutPage',
          '@id': `${BASE_URL}/about#webpage`,
          name: 'About Softkhlome – Web Agency in Lilongwe, Malawi',
          url: `${BASE_URL}/about`,
          description:
            "Discover Softkhlome's story, engineering principles, and founder Brian Kamwera. Custom web development and UI design in Lilongwe, Malawi.",
          inLanguage: 'en-MW',
          isPartOf: { '@id': `${BASE_URL}/#website` },
          mainEntity: { '@id': `${BASE_URL}/#localbusiness` }
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'About', item: `${BASE_URL}/about` }
          ]
        }
      ]
    }
  },
  {
    file: 'developer.html',
    url: `${BASE_URL}/developer`,
    title: 'Brian Kamwera – Web Developer in Lilongwe, Malawi',
    description:
      'Meet Brian Kamwera, founder and full-stack React developer at Softkhlome in Lilongwe, Malawi. Explore skills, experience, and live client work.',
    ogType: 'profile',
    extraHead:
      '    <meta data-rh="true" property="profile:first_name" content="Brian" />\n' +
      '    <meta data-rh="true" property="profile:last_name" content="Kamwera" />\n' +
      '    <meta data-rh="true" property="profile:username" content="BrianKamwera" />',
    imageAlt: 'Brian Kamwera – Softkhlome Lead Web Developer',
    heading: 'Brian Kamwera – Web Developer in Lilongwe, Malawi',
    summary:
      'Founder and lead full-stack developer at Softkhlome specializing in React, Node.js, Python, responsive design, and production web engineering in Malawi.',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ProfilePage',
          '@id': `${BASE_URL}/developer#webpage`,
          name: 'Brian Kamwera – Web Developer in Lilongwe, Malawi',
          url: `${BASE_URL}/developer`,
          inLanguage: 'en-MW',
          isPartOf: { '@id': `${BASE_URL}/#website` },
          mainEntity: { '@id': `${BASE_URL}/#founder` }
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Developer Profile', item: `${BASE_URL}/developer` }
          ]
        }
      ]
    }
  },
  {
    file: 'policy.html',
    url: `${BASE_URL}/policy`,
    title: 'Privacy Policy – Softkhlome Web Studio Malawi',
    description:
      "Read Softkhlome's Privacy Policy to learn how we collect, safeguard, and manage your personal data and cookie preferences in Malawi.",
    ogType: 'website',
    imageAlt: 'Softkhlome – Privacy Policy',
    heading: 'Privacy Policy – Softkhlome Web Studio Malawi',
    summary:
      'Learn how Softkhlome collects, uses, safeguards, and respects your personal information and cookie preferences in Malawi.',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${BASE_URL}/policy#webpage`,
          name: 'Privacy Policy – Softkhlome Web Studio Malawi',
          url: `${BASE_URL}/policy`,
          description:
            "Read Softkhlome's Privacy Policy to learn how we collect, safeguard, and manage your personal data and cookie preferences in Malawi.",
          inLanguage: 'en-MW',
          isPartOf: { '@id': `${BASE_URL}/#website` },
          publisher: { '@id': `${BASE_URL}/#localbusiness` }
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: `${BASE_URL}/policy` }
          ]
        }
      ]
    }
  },
  {
    file: 'terms.html',
    url: `${BASE_URL}/terms`,
    title: 'Terms of Service – Softkhlome Web Studio Malawi',
    description:
      "Review Softkhlome's Terms of Service outlining project engagement guidelines, intellectual property, and service policies in Malawi.",
    ogType: 'website',
    imageAlt: 'Softkhlome – Terms of Service',
    heading: 'Terms of Service – Softkhlome Web Studio Malawi',
    summary:
      'Review project engagement terms, intellectual property policies, and operational guidelines for Softkhlome in Malawi.',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${BASE_URL}/terms#webpage`,
          name: 'Terms of Service – Softkhlome Web Studio Malawi',
          url: `${BASE_URL}/terms`,
          description:
            "Review Softkhlome's Terms of Service outlining project engagement guidelines, intellectual property, and service policies in Malawi.",
          inLanguage: 'en-MW',
          isPartOf: { '@id': `${BASE_URL}/#website` },
          publisher: { '@id': `${BASE_URL}/#localbusiness` }
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Terms of Service', item: `${BASE_URL}/terms` }
          ]
        }
      ]
    }
  }
]

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function staticRouteHtmlPlugin() {
  return {
    name: 'softkhlome-static-route-html',
    closeBundle() {
      const distDir = path.resolve(process.cwd(), 'dist')
      const indexPath = path.join(distDir, 'index.html')
      if (!fs.existsSync(indexPath)) return

      const baseHtml = fs.readFileSync(indexPath, 'utf8')

      for (const route of STATIC_ROUTES) {
        const escapedTitle = escapeHtml(route.title)
        const escapedDesc = escapeHtml(route.description)
        const escapedAlt = escapeHtml(route.imageAlt)
        const schemaTag = `<script data-rh="true" type="application/ld+json">${JSON.stringify(route.schema)}</script>`

        let html = baseHtml
          .replace(/<title[^>]*>[\s\S]*?<\/title>/i, `<title data-rh="true">${escapedTitle}</title>`)
          .replace(
            /<meta[^>]*name="description"[^>]*>/i,
            `<meta data-rh="true" name="description" content="${escapedDesc}" />`
          )
          .replace(
            /<link[^>]*rel="canonical"[^>]*>/i,
            `<link data-rh="true" rel="canonical" href="${route.url}" />`
          )
          .replace(
            /(<link[^>]*rel="alternate"[^>]*hreflang="en-MW"[^>]*href=")[^"]*("[^>]*>)/gi,
            `$1${route.url}$2`
          )
          .replace(
            /(<link[^>]*rel="alternate"[^>]*hreflang="en"[^>]*href=")[^"]*("[^>]*>)/gi,
            `$1${route.url}$2`
          )
          .replace(
            /(<link[^>]*rel="alternate"[^>]*hreflang="x-default"[^>]*href=")[^"]*("[^>]*>)/gi,
            `$1${route.url}$2`
          )
          .replace(
            /<meta[^>]*property="og:type"[^>]*>/i,
            `<meta data-rh="true" property="og:type" content="${route.ogType}" />`
          )
          .replace(
            /<meta[^>]*property="og:title"[^>]*>/i,
            `<meta data-rh="true" property="og:title" content="${escapedTitle}" />`
          )
          .replace(
            /<meta[^>]*property="og:description"[^>]*>/i,
            `<meta data-rh="true" property="og:description" content="${escapedDesc}" />`
          )
          .replace(
            /<meta[^>]*property="og:url"[^>]*>/i,
            `<meta data-rh="true" property="og:url" content="${route.url}" />`
          )
          .replace(
            /<meta[^>]*property="og:image:alt"[^>]*>/i,
            `<meta data-rh="true" property="og:image:alt" content="${escapedAlt}" />`
          )
          .replace(
            /<meta[^>]*name="twitter:url"[^>]*>/i,
            `<meta data-rh="true" name="twitter:url" content="${route.url}" />`
          )
          .replace(
            /<meta[^>]*name="twitter:title"[^>]*>/i,
            `<meta data-rh="true" name="twitter:title" content="${escapedTitle}" />`
          )
          .replace(
            /<meta[^>]*name="twitter:description"[^>]*>/i,
            `<meta data-rh="true" name="twitter:description" content="${escapedDesc}" />`
          )
          .replace(
            /<meta[^>]*name="twitter:image:alt"[^>]*>/i,
            `<meta data-rh="true" name="twitter:image:alt" content="${escapedAlt}" />`
          )
          .replace(
            /<noscript>[\s\S]*?<\/noscript>/i,
            `<noscript><div style="max-width:960px;margin:2rem auto;padding:1.5rem;font-family:sans-serif;line-height:1.6"><h1>${escapeHtml(route.heading)}</h1><p>${escapeHtml(route.summary)}</p><p><a href="/">Home</a> | <a href="/about">About Softkhlome</a> | <a href="/developer">Developer</a> | <a href="/policy">Privacy Policy</a> | <a href="/terms">Terms of Service</a></p></div></noscript>`
          )
          .replace(
            /<\/head>/i,
            `${route.extraHead ? `${route.extraHead}\n` : ''}    ${schemaTag}\n  </head>`
          )

        fs.writeFileSync(path.join(distDir, route.file), html, 'utf8')
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), staticRouteHtmlPlugin()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: true,
  },
})
