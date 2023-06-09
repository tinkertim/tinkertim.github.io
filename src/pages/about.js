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
            <p className="margin-top--md">
                I've also been called an inbound funnel mechanic, a community-whisperer and a teller 
                of terrible puns &amp; dad jokes; I admit to all of it. If you write a bad pun on a piece
                of paper, it's automatically tear-able, right?
            </p>
            <p className="margin-top--md">
              I got my start in tech back in the 1990s, during the first dot-com
              bubble. I'd been writing code pretty regularly since learning C
              when I was about 15 after learning BASIC and simple assembly years
              before on a TRS-80 and C-64.
            </p>
            <p className="margin-top--md">
              The first half of my programming career was spent pretty strictly
              in the UNIX world. I worked on file systems, multiple kernels,
              shells, hypervisors and what led to be known as IAAS / PAAS. It
              was my journey in the hosting industry that ultimately landed me
              in The Philippines, where I settled for nearly 15 years and
              started a family.
            </p>
            <p className="margin-top--md">
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
              className="margin-top--sm margin-bottom--sm" 
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
            <p className="margin-top--lg">
              A few years later, I was running the team as the Director of
              Community Strategy. I had also just been diagnosed with stage IV
              lung cancer that had spread, and spread rapidly, through my brain.
              I was lucky enough to achieve 100% remission, which is soon
              entering its seventh year. But, this came at a cost, both physical
              and financial, and left me with multiple disabilities. I write
              about this experience probably more than I should, but going
              through it really turned me into an advocate on many fronts.
            </p>
            <p className="margin-top--md">
              Now, I'm looking at getting back into a career path after doing mostly 
              contract work while completing my cancer recovery, and the recovery from
              the treatment itself. "Next year" isn't so questionable now that I'm in my
              sixth year of remission, so I'd like to see where else I can go! Meanwhile, 
              I will always remain as an advocate for those navigating tech careers with 
              disabilities. 
            </p>
            <p className="margin-top--md margin-bottom--xl">
              Curious about the book? It's not real. I couldn't stand another 
              picture of me on this site, but I needed another image that felt like "me" 
              to break up the content a bit, so I designed myself as a children's book cover. 
              I can only take seeing but so many mugshots of me in one place, you know?
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
