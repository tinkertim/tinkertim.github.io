import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./about.module.css";

function HomePageContent() {
  return (
    <section>
      <div className="container">
        <h1 className="margin-top--lg">How To Get In Touch</h1>
        <p>This is a paragraph. This is all inside the "container" tag.</p>
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
        <HomePageContent />
      </main>
    </Layout>
  );
}
