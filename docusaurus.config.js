// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Tim Post's Website",
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
          blogTitle: "Tim Post's Blog",
          blogDescription: "Code, Cannabis, Culture & Coffee. Maybe not in that order.",
          blogSidebarTitle: "Latest Posts & Reviews",
          blogSidebarCount: "ALL",
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
      image: "img/tim_header.png",
      navbar: {
        title: "tinkertim@localhost:~/$ ",
        /*
        logo: {
          alt: 'logo',
          src: 'img/logo.svg',
        },
        */
        items: [
          { to: "/latest", label: "Latest Work/", position: "left" },
          { to: "/about", label: "About Me/", position: "left" },
          { to: "/blog", label: "Blog/", position: "left" },
          { to: "/stack", label: "Tech Stack/", position: "left" },
          { to: "/contact", label: "Contact/", position: "left" },
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
                label: "Github",
                href: "https://github.com/tinkertim",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/tinkertim",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/tim-post28/",
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
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      /*
      announcementBar: {
        id: "wip",
        content:
          'Not quite done yet - Pardon The Dust. The Only Thing Functional Right Now Is The Blog',
        backgroundColor: "#000",
        textColor: "#ccc",
        isCloseable: false,
      },
      */
    }),
};

module.exports = config;
