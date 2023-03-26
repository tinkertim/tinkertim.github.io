import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--secondary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <span>&#91;</span>&nbsp;{siteConfig.title}&nbsp;<span>&#93;</span>
        </h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/latest"
          >Check Out My Latest Work &raquo;
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomePageContent() {
  return (
    <section className="margin-bottom--lg">
      <div className="container">
        <div className="row">
          <div class="col col--12 margin-top--md">
            <h1 className="margin-top--md">When it comes down to it, DevRel Means Funnel Mechanic! 🔧</h1>
            <p className="margin-top-md">
              When nobody knows what it is, we tell the product story. When nobody knows what to change, we tell user
              stories.
            </p> 
            <p className="margin-top--md">
              When we need to hire developers to grow it, we edit job descriptions and help HR know where to advertise. 
              When there are no sales, we're salesfolk; when there are no CS engineers, we're support specialists. 
            </p>
            <p className="margin-top-md">  
              When we need to learn hard lessons, we write the soliloquies. When there are heroes in our midst, we elevate them.  
            </p>
            <p>
              When there are no heroes, we encourage and develop heroes through ambassador programs. We're experts in figuring out
              what funnels should be built, and why they're clogging. DevRel is anything but simple. I'm Tim, and I'm one of the
              first I know of to work in this role. 
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col col--4">
            <img src="/img/tim1.jpeg" alt="Tim Post" title="Tim Post In His Studio" className={styles.vanity} />
          </div>
          <div className="col col--8">
            <p className="margin-top--md">
              Storytelling is my favorite pasttime. I love to make what the people behind developer products come alive 
              when I present and support them. I tell myself that I'm an actor, and it's my job to play the person that 
              put everything they own into the development of what I'm showing. 
            </p>
            <p className="margin-top--md">
              Developers do not like or trust traditional marketing. If you don't authentically like and use the tool
              or library or whatever it is that you're promoting, nobody is going to want to try it. You can't fake 
              a genuine admiration for something, which is why I can't do crypto. 
            </p>
            <p className="margin-top-md">
             But I do just about everything else, so don't hesitate to reach out if you think I can help you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomePageContent />
      </main>
    </Layout>
  );
}
