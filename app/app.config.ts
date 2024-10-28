export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: '荔枝博客',
      description: 'Beautifully designed Nuxt Content template built with shadcn-vue. Customizable. Compatible. Open Source.',
    },
    theme: {
      customizable: false,
      color: 'zinc',
      radius: 0.5,
    },
    header: {
      title: '荔枝博客',
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg',
      },
      nav: [
        {
          title: '博客',
          to: '/blog',
          target: '_self',
        },
        {
          title: '周刊',
          to: '/blog',
          target: '_self',
        },
      ],
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
        target: '_blank',
      }],
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: 'Copyright © 2024',
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
        target: '_blank',
      }],
    },
    toc: {
      enable: true,
      title: 'On This Page',
      // links: [{
      //   title: 'Star on GitHub',
      //   icon: 'lucide:star',
      //   to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
      //   target: '_blank',
      // }, {
      //   title: 'Create Issues',
      //   icon: 'lucide:circle-dot',
      //   to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt/issues',
      //   target: '_blank',
      // }],
    },
    search: {
      enable: false,
      inAside: false,
    }
  }
});