import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';
export default function BlogSidebarDesktop({sidebar}) {
  return (
    <aside className="col col--3">
      <nav
        className={clsx(styles.sidebar, 'thin-scrollbar')}
        aria-label={translate({
          id: 'theme.blog.sidebar.navAriaLabel',
          message: 'Blog recent posts navigation',
          description: 'The ARIA label for recent posts in the blog sidebar',
        })}>
         <div class="card margin-bottom--lg">
          <div class="card__image">
            <img
              src="/img/tim_header_zoomed.png"
              alt="Tim Post"
              title="An O.G. DevRel" />
          </div>
          <div class="card__body">
            <h2>Code, Coffee, Culture.</h2>
            <small>
              Not necessarily in that order. Sometimes I talk programming, sometimes I wonder
              why people are who they are. Both matter a lot when your code touches lives. Pull 
              a feed if you like!
            </small>
          </div>
          <div class="card__footer" style={{textAlign: "center"}}>
            <Link to="/blog/rss.xml" class="button button--primary button--sm">RSS</Link>
            &nbsp;|&nbsp; 
            <Link to="/blog/atom.xml" class="button button--primary button--sm">ATOM</Link>
            &nbsp;|&nbsp;
            <Link to="/blog/feed.json" class="button button--primary button--sm">JSON</Link>
          </div>
        </div>
        <div className={clsx(styles.sidebarItemTitle, 'margin-bottom--md')}>
          {sidebar.title}
        </div>
        <ul className={clsx(styles.sidebarItemList, 'clean-list')}>
          {sidebar.items.map((item) => (
            <li key={item.permalink} className={styles.sidebarItem}>
              <Link
                isNavLink
                to={item.permalink}
                className={styles.sidebarItemLink}
                activeClassName={styles.sidebarItemLinkActive}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
