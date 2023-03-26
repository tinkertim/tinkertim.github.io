import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./latest.module.css";
import YouTubePlayer from "../components/YouTubePlayer";

function LatestWorkContent() {
  return (
    <section>
      <div className="container">
        <h1 className="margin-top--lg">Stuff I've Been Working On:</h1>
        <p>
          I very much enjoy the content production side of DevRel! Here are samples of some of the 
          latest things I've been working on, mostly for <Link href="https://deno.com">Deno</Link> 
          &nbsp;for the last few months. These are right from Deno's site & social channels: 
        </p>
        <div className="row">
          <div className="col col--12">
            <h2>"Release Notes" Style Video Content Production</h2>
          </div>
        </div>
        <div className="row">
          <div className="col col--4">
            <div className="card margin-top--lg">
              <div className="card__header">
                <h3>Deno 1.31 Release Notes</h3>
              </div>
              <div className="card__body">
                <p>
                  Release notes can often be a challenging bag of unrelated changes. It's a DevRel's job to
                  weave a story around these, and make users as excited about each release as possible. 
                </p>
                <p>
                  When I record these, I imagine how I used to read changelogs to find out if anything I cared
                  about was changed. I try to bring the same spontaneous sense of discovery to these.
                </p>
              </div>
            </div>
          </div>
          <div className="col col--8">
            <YouTubePlayer id="cjQiMz0KUY0" />
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
      <main>
        <LatestWorkContent />
      </main>
    </Layout>
  );
}
