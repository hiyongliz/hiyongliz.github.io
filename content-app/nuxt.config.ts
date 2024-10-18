import MarkdownItMagicLink from 'markdown-it-magic-link'

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/logo.png' },
      ],
    },
  },

  devtools: { enabled: false },
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'nuxt-compile-markdown',
  ],

  routeRules: {
    '/': { prerender: true },
  },

  compatibilityDate: '2024-10-14',

  features: {
    // For UnoCSS
    inlineStyles: false,
  },

  markdown: {
    shiki: {
      themes: {
        light: 'vitesse-light',
        dark: 'vitesse-dark',
      },
    },
    markdownItSetup(md) {
      md.use(MarkdownItMagicLink as any, {
        linksMap: {
          QiFi: 'https://github.com/qifi-dev/qrs',
        },
        imageOverrides: [
          ['https://github.com/qifi-dev/qrs', 'https://cdn.jsdelivr.net/gh/qifi-dev/qrs/public/logo.svg'],
        ],
      })
    },
  },

  css: [
    '@unocss/reset/tailwind.css',
  ],

  ssr: true,
})
