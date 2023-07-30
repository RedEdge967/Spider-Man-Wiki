module.exports = {
  title: 'Spider Man Wiki',
  tagline: 'An open source Spider man wiki made with ReactJS',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/spiderman.png',
  organizationName: 'RedEdge967', // Usually your GitHub org/user name.
  projectName: 'Spider-Man-Wiki', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Spider Man Wiki',
      logo: {
        alt: 'My Site Logo',
        src: 'img/spiderman.png',
      },
      items: [
        {
          to: 'docs/intro',
          activeBasePath: 'docs',
          label: 'Wiki',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/RedEdge967/Spider-Man-Wiki',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Wiki',
          items: [
            {
              label: 'Introduction',
              to: 'docs/intro',
            },
            {
              label: 'Spider-Man',
              to: 'docs/wiki1',
            },
            {
              label: 'Villains',
              to: 'docs/villain1',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/RedEdge967/Spider-Man-Wiki',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Spider Man Wiki, Built with ReactJS.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/RedEdge967/Spider-Man-Wiki/blob/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/RedEdge967/Spider-Man-Wiki/blob/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
