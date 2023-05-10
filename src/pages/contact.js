import React from "react";
import Layout from "@theme/Layout";
import styles from "./contact.module.css";

function ContactPageContent() {
  return (
    <section>
      <div className="container">
        <h1 className="margin-top--lg">How To Get In Touch:</h1>
        <p className="margin-top--md">
          Please note, I no longer work for Stack Overflow, and I can't provide
          support for account issues that you might be having with them.
          Additionally, I can't help with policy type questions, as I'm very
          out-of-the-loop. If there's something I can do as an ordinary
          "citizen" of SO or the Stack Exchange network, feel free to drop in!
        </p>
        <p className="margin-top--md">
          The best way to reach me is via e-mail; I'm{" "}
          <code>tinkertim@gmail.com</code>. If you want to set up a meeting, you 
          can <a href="https://calendly.com/timthepost" target="_blank">grab 30 minutes for us</a> 
          {" "}from my calendar. If you think we'll need more than 30 minutes, please email me in advance.
        </p>
        <p>
          You can also reach out to me on Twitter or LinkedIn - see the links in
          the footer. My DMs on Twitter are open, but it may take me a few days
          to see your message request.
        </p>
        <p>Please email me directly if you'd like a copy of my CV.</p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title={`Contact Tim`}
      description="Contacting Tim Post"
    >
      <main>
        <ContactPageContent />
      </main>
    </Layout>
  );
}
