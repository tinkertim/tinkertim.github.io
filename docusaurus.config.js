// @ts-check

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Tim Post's Portfolio & Blog",
  tagline: "Code And Culture With An O.G. DevRel & Community Leader",
  favicon: "img/favicon.ico",
  url: "https://tinkertim.github.io",
  baseUrl: "/",

  // GH Pages 
  organizationName: "tinkertim",
  projectName: "tinkertim.github.io",
  deploymentBranch: "github-pages",
  trailingSlash: true,

  // How should broken links be handled?
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  
  /*
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 85,
        steps: 4, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],
  */
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          blogTitle: "Tim Post's Blog",
          blogDescription: "Code, Culture & Coffee. Maybe not in that order.",
          blogSidebarTitle: "My Latest Blog Posts:",
          blogSidebarCount: "ALL",
          showReadingTime: true,
          editUrl: "https://github.com/tinkertim/tinkertim.github.io/tree/main",
          feedOptions: {
            type: "all",
            copyright: "Copyright 2023 Tim Post",
            title: "Tim Post's Blog Feed",
            description: "Let's see what we have here ...",
          }
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: 'G-HTWJL43YVE',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/tim_header.png",
      navbar: {
        title: "@tinkertim.localhost:~/$ ",
        /*
         // for now I just use text, it's fine for me. 
        logo: {
          alt: 'logo',
          src: 'img/logo.svg',
        },
        */
        items: [
          { to: "/about", label: "About Me/", position: "left" },
          { to: "/latest", label: "Latest Work/", position: "left" },
          { to: "/blog", label: "Blog/", position: "left" },
          { to: "/stack", label: "Tech & Studio Stack/", position: "left" },
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
                label: "T2 Social",
                href: "https://t2.social/tinkertim",
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
        } Design, Theme And Content By Tim Post. Built with Docusaurus.&nbsp;<br />
        Code samples are licensed under the <a href="https://opensource.org/license/mit/">MIT license</a>.<br />
        Prosaic content is licensed under the <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC-BY-SA 4.0</a> license, with attribution required.
        Build ${ Math.floor(Date.now() / 1000) }
        `,
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
        id: "banner",
        content:
          "<strong>I'm <a href='/blog/job-hunting'>looking for my next full-time thing</a>; if you're interested or know anyone, <a href='/contact'>please reach out</a>!</strong>",
        backgroundColor: "#666",
        textColor: "#fff",
        isCloseable: true,
      },
      */
      googleTagManager: {
        containerId: 'GTM-TVD72WD',
      },
      mermaid: {
        theme: {light: 'base', dark: 'base'},
        options: {
          themeVariables: {
            pieTitleTextSize: '30px',
            pieSectionTextSize: '24px',
            pieLegendTextSize: '24px'
          }
        }
      }
    }),
};

module.exports = config;
