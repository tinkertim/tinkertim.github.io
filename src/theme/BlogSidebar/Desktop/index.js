import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { translate } from "@docusaurus/Translate";
import styles from "./styles.module.css";
export default function BlogSidebarDesktop({ sidebar }) {
  return (
    <aside className="col col--3">
      <nav
        className={clsx(styles.sidebar, "thin-scrollbar")}
        aria-label={translate({
          id: "theme.blog.sidebar.navAriaLabel",
          message: "Blog recent posts navigation",
          description: "The ARIA label for recent posts in the blog sidebar",
        })}
      >
        <div class="avatar avatar--vertical margin-bottom--lg">
          <img
            class="avatar__photo avatar__photo--xl"
            src="/img/timprofile.jpg"
            alt="Tim Post"
            title="Inverted drop kick by Hailey Post"
          />
          <div class="avatar__intro">
            <h2 class="avatar__name margin-top--md">Code, Coffee, Culture</h2>
            <small class="avatar__subtitle">
              Not always in that order, but all three matter when your code
              touches lives. Grab a feed :)
            </small>
            <div class="card__footer" style={{ textAlign: "center" }}>
              <Link
                to="/blog/rss.xml"
                class="button button--secondary button--sm"
              >
                RSS
              </Link>
              &nbsp;|&nbsp;
              <Link
                to="/blog/atom.xml"
                class="button button--secondary button--sm"
              >
                ATOM
              </Link>
              &nbsp;|&nbsp;
              <Link
                to="/blog/feed.json"
                class="button button--secondary button--sm"
              >
                JSON
              </Link>
            </div>
          </div>
        </div>
        <div className={clsx(styles.sidebarItemTitle, "margin-bottom--md")}>
          {sidebar.title}
        </div>
        <ul className={clsx(styles.sidebarItemList, "clean-list")}>
          {sidebar.items.map((item) => (
            <li key={item.permalink} className={styles.sidebarItem}>
              <Link
                isNavLink
                to={item.permalink}
                className={styles.sidebarItemLink}
                activeClassName={styles.sidebarItemLinkActive}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
