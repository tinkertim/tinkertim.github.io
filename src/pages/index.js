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
          >
            Check Out My Latest Work &raquo;
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
            <h1 className="margin-top--md">
              DevRel Is More Than Just Content - So Much More!
            </h1>
            <p className={styles.coolStory}>
              When nobody knows what it is, we tell the product story. When
              nobody knows what to do next, we tell user stories.
              <br />
              <br />
              When we need to hire developers to grow it, we create job
              descriptions and advise on where to post them.<br />
              When there are no sales, we're salesfolk;<br />
              when there are no CS engineers, we're support specialists.
              <br />
              <br />
              When we need to publicly learn hard lessons, we write the
              soliloquies. When there are heroes in our midst, we elevate them.
              <br />
              <br />
              When there are no heroes, we encourage and develop heroes through
              ambassador programs. We're experts in figuring out what funnels
              should be built, and why they're clogging. DevRel is anything but
              simple, and it's <strong>way</strong>{" "}
              more than just creating content.
              <br />
              <br />
              -- Tim Post
              <br />
            </p>
          </div>
        </div>
        <div className="row row--no--gutters">
          <div className="col col--4 padding-left--lg">
            <img
              src="/img/tim1.jpeg"
              alt="Tim Post"
              title="Tim Post In His Studio"
              className={styles.vanity}
            />
          </div>
          <div className="col col--8">
            <p className="margin-top--md">
              I'm Tim, and I'm one of the first that I know of to work the role
              that we call Developer Relations (DevRel) today. Please believe me
              when I say it was an accidental career move, but the best one I
              ever made.
            </p>
            <p className="margin-top--md">
              Storytelling is my favorite pasttime. I love bring out the care
              and passion that goes into developer products when I demo them. I
              tell myself that I'm an actor, and it's my job to play the person
              that put everything they own into the development of what I'm
              showing.
            </p>
            <p className="margin-top--md">
              Developers do not like or trust traditional marketing. If you
              don't authentically like and use the tool or library or whatever
              it is that you're promoting, nobody is going to want to try it.
              You can't fake a genuine admiration for something, which is why I
              can't do crypto.
            </p>
            <p className="margin-top-md">
              But I do just about everything else, so don't hesitate to reach
              out if you think I can help you!
            </p>
            <p>
              <strong>
                You do you; I recommend this site in{" "}
                <em>dark mode</em>. Top-right. You're welcome.
              </strong>
            </p>
            <Link
              className="button button--primary button--lg"
              to="/blog/welcome"
            >
              Latest Blog: "New Site! Again!" &raquo;
            </Link>
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
      description="About Tim Post - O.G DevRel!"
    >
      <HomepageHeader />
      <main>
        <HomePageContent />
      </main>
    </Layout>
  );
}
