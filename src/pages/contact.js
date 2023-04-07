import React from "react";
import Layout from "@theme/Layout";
import styles from "./contact.module.css";

function ContactPageContent() {
  return (
    <section>
      <div className="container">
        <h1 className="margin-top--lg">How To Get In Touch:</h1>
        <p className="margin-top--md">
          Please note, I no longer work for Stack Overflow, and I can't provide support for
          account issues that you might be having with them. Additionally, I can't help with 
          policy type questions, as I'm very out-of-the-loop. If there's something I can do 
          as an ordinary "citizen" of SO or the Stack Exchange network, feel free to drop in!
        </p>
        <p className="margin-top--md">
          The best way to reach me is via e-mail; I'm <code>tinkertim@gmail.com</code>.
        </p>
        <p>
          You can also reach out to me on Twitter or LinkedIn - see the links in the footer. My DMs on 
          Twitter are open, but it may take me a few days to see your message request. If you're a recruiter, 
          or would be interested in exploring hiring me, you can get a copy of my CV from <a href="https://notanothercv.com" target="_new">Not Another CV</a> 
          {" "} who I've teamed up with to host it:
        </p>
        <object 
          allowtransparency="true"
          title="Download CV" 
          data="https://download.notanothercv.com/embed/640b272923b49b1fd71279aa?theme=dynamic" 
          width="100%">Error: Failed to load CV Download Component
        </object>
        <p>Alternately, you can just <a href="https://notanothercv.com/u/640b272923b49b1fd71279aa" target="_new">view my CV</a> at Not Another CV. They're a great
        alternative to LinkedIn!</p>
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
