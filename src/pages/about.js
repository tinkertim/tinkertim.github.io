import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import styles from "./about.module.css";

function AboutPageContent() {
  return (
    <section>
      <div className="container">
        <div class="row margin-top--lg">
          <div class="col col--7">
            <h1 className="margin-top--lg">
              About Tim Post: O.G. DevRel & Community Leader!
            </h1>
            <p className="padding-top--md">
              <strong>
                ... and also called an inbound funnel mechanic, a community-whisperer and a teller of terrible dad jokes; I admit to all of it.
              </strong>
            </p>
            <p className="padding-top--md">
              I got my start in tech back in the 1990s, during the first dot-com
              bubble. I'd been writing code pretty regularly since learning C
              when I was about 15 after learning BASIC and simple assembly years
              before on a TRS-80 and C-64.
            </p>
            <p className="padding-top--md">
              The first half of my programming career was spent pretty strictly
              in the UNIX world. I worked on file systems, multiple kernels,
              shells, hypervisors and what led to be known as IAAS / PAAS. It
              was my journey in the hosting industry that ultimately landed me
              in The Philippines, where I settled for nearly 15 years and
              started a family.
            </p>
            <p className="padding-top--md">
              I became known as someone who could pull over-budget death-marches
              back into the black. This was hugely challenging and rewarding,
              but too crushing to continue. I decided to explore the human
              aspects of software development and joined the Stack Overflow
              Community Growth Team.
            </p>
          </div>
          <div class="col col--5">
            <img
              className={clsx(styles.book, "item shadow--tl margin-top--md")}
              src="/img/photog.png"
              alt="Tim Post Holding A Camera (Photographer Selfie)"
              title="I'm a pretty good photographer, too."
            />
          </div>
        </div>
        <div class="row margin-top--md">
          <div className="col col--12">
            <p
              className="padding-top--md" 
              style={{
                fontSize: "32px", 
                fontWeight: "bold", 
                borderLeft: "12px solid #ccc",
                paddingLeft: "22px",
                borderTopLeftRadius: "12px",
                borderBottomLeftRadius: "12px" }}>
              In 2013, "DevRel" really wasn't a thing yet. While DevRel wasn't
              exactly <em>invented</em>{" "}
              at Stack Overflow, we were one of the first teams put in a PR role
              and comprised solely of former developers specifically so we'd
              have that perspective. We may not have been the first, but we were
              definitely some of the originals.
            </p>
          </div>
        </div>
        <div className="row margin-top--md margin-bottom--lg">
          <div className="col col--5">
            <img
              className={clsx(styles.book, "item shadow--tl margin-top--md")}
              src="/img/banner.png"
              alt="Tim Post Was Here!"
              title="I might actually write this one day."
            />            
          </div>
          <div className="col col--7">
            <p className="padding-top--md">
              A few years later, I was running the team as the Director of
              Community Strategy. I had also just been diagnosed with stage IV
              lung cancer that had spread, and spread rapidly, through my brain.
              I was lucky enough to achieve 100% remission, which is soon
              entering its seventh year. But, this came at a cost, both physical
              and financial, and left me with multiple disabilities. I write
              about this experience probably more than I should, but going
              through it really turned me into an advocate on many fronts.
            </p>
            <p className="padding-top--md">
              Now, I do mostly contract work as my physical health allows, while
              also focusing time on putting my experiences to work in advocacy
              for not just disabled folks re-gaining their skills in tech, but
              also those fighting their own cancer battles.
            </p>
            <p className="padding-top--md margin-bottom--xl">
              Curious about the book? It's not real, but it might help you! If
              you ever have to build a "professional" site and feel like one
              more picture of your face online will break the universe: try
              painting yourself as a book cover. You'll have something that is
              "you" without more repetition of your mug shot.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title={`About Tim`}
      description="About Tim Post - O.G. DevRel"
    >
      <main>
        <AboutPageContent />
      </main>
    </Layout>
  );
}
