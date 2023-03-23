// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Tim Post",
  tagline: "Code & Culture With An O.G. DevRel",
  favicon: "img/favicon.ico",
  url: "https://tinkertim.github.io/",
  baseUrl: "/",

  organizationName: "tinkertim",
  projectName: "tinkertim.github.io",
  deploymentBranch: "github-pages",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/tinkertim/tinkertim.github.io/tree/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Tim's Site >>",
        /*
        logo: {
          alt: 'logo',
          src: 'img/logo.svg',
        },
        */
        items: [
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/about", label: "About Tim", position: "left" },
          {
            href: "https://github.com/tinkertim",
            label: "My Github Profile",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Find Me On ...",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/users/50049/tim-post",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/tinkertim",
              },
            ],
          },
        ],
        copyright: `Copyright © ${
          new Date().getFullYear()
        } Tim Post. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      announcementBar: {
        id: "wip",
        content:
          'Not quite done yet - Pardon The Dust. The Only Thing Functional Right Now Is The Blog',
        backgroundColor: "#121212",
        textColor: "orange",
        isCloseable: false,
      },
    }),
};

module.exports = config;
