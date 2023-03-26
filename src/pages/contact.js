import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./contact.module.css";

function ContactPageContent() {
  return (
    <section>
      <div className="container">
        <h1 className="margin-top--lg">How To Get In Touch:</h1>
        <p className="margin-top--md">
          The best way to reach me is via e-mail; I'm <code>tinkertim</code> at the free mail service that Google runs.
        </p>
        <p>
          You can also reach out to me on Twitter. My DMs on Twitter are open, but it may take me a few days to see
          your message request.
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Contacting Tim Post"
    >
      <main>
        <ContactPageContent />
      </main>
    </Layout>
  );
}
