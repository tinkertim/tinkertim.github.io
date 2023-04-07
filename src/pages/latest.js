import React from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import styles from "./latest.module.css";
import YouTubePlayer, { YouTubeShortPlayer } from "../components/YouTubePlayer";

function LatestWorkContent() {
  return (
    <section className="margin-bottom--lg">
      <div className="container">
        <h1 className="margin-top--lg">Stuff I've Recently Produced:</h1>
        <p className="margin-top--md" style={{ color: "orange" }}>
          <strong>
            This page loads a lot of external content; please allow a second for
            everything to load, thanks!
          </strong>
        </p>
        <p className="margin-top--md">
          I enjoy creating video content <em>almost</em>{" "}
          as much as I enjoy creating written content. Video is a powerful
          storytelling medium; if you're thinking about learning video editing,
          I highly recommend that you pursue it because it will unlock another
          level of teaching techniques. I like doing voice over text animation
          and code narrations, but I don't do a lot of live coding because it's
          not the best experience for the viewer. Some people pull it off really
          well, but if you're coding live you need to also be a keyboard ninja,
          so I do my typing off-camera.
        </p>
        <div className="row">
          <div className="col col--12">
            <h2>Deno's Release Notes (Series 1.29 - 1.31):</h2>
          </div>
        </div>
        <div className="row">
          <div className="col col--4">
            <div className="card margin-top--lg">
              <div className="card__header">
                <h3>Deno 1.31</h3>
              </div>
              <div className="card__body">
                <p>
                  Release notes are more than just a "book report" on what's
                  usually just a mixed-bag of new features and bug fixes;
                  they're one of the most frequent forms of contact you'll have
                  with your customers.
                </p>
                <p>
                  It's challenging, but you have to find the story buried in
                  there, if there is one. If not, you have to lend your
                  personality where the message lacks interest. I strive to do
                  this.
                </p>
              </div>
            </div>
          </div>
          <div className="col col--8">
            <YouTubePlayer id="cjQiMz0KUY0" />
          </div>
        </div>
        <div className="row margin-top--lg">
          <div className="col col--4">
            <div className="card margin-top--lg">
              <div className="card__header">
                <h3>Deno 1.30</h3>
              </div>
              <div className="card__body">
                <p>
                  Plain text animation with upbeat narration trumps fancy
                  effects for
                  <em>most</em>{" "}
                  kinds of developer content; at least that's been true in my
                  experience.
                </p>
                <p>
                  I think people really pick up on presenters having a genuine
                  emotional connection to what they're presenting. This is why I
                  can't demo products that don't thrill me in some way, it'll
                  look forced and fake.
                </p>
              </div>
            </div>
          </div>
          <div className="col col--8">
            <YouTubePlayer id="ke06eWWBEgk" />
          </div>
        </div>
        <div className="row margin-top--lg">
          <div className="col col--4">
            <div className="card margin-top--lg">
              <div className="card__header">
                <h3>Deno 1.29</h3>
              </div>
              <div className="card__body">
                <p>
                  <strong>
                    WIIFM: (W)hat's (I)n (I)t (F)or (M)e?
                  </strong>
                </p>
                <p>
                  Be entertaining, and be brief. Developers love brevity because
                  they highly value their time. Sometimes it feels like a
                  challenge when you're packing more information that can fit
                  into 1:30 into a video.
                </p>
                <p>
                  But even when there's no story but a slide with 10 unrelated
                  things to get through, I try to still get people excited about
                  it.
                </p>
              </div>
            </div>
          </div>
          <div className="col col--8">
            <YouTubePlayer id="ueHc967hw8A" />
          </div>
        </div>
        <div className="row margin-top--lg">
          <div className="col col--12">
            <h2 className="margin-top--md">Deno's Express Tutorial Series</h2>
          </div>
        </div>
        <div className="row">
          <div className="col col--4">
            <div className="card margin-top--lg">
              <div className="card__header">
                <h3>Express / Deno I</h3>
              </div>
              <div className="card__body">
                <p>
                  Express remains a much-loved framework for REST API
                  implementations and I had a great time making the first one
                  with Deno as soon as NPM compatibility was stable enough.
                </p>
                <p>
                  At times, I code "live" in videos where viewers see me typing
                  in real-time, but only when I want to add emphasis to
                  something. I'd say my videos tend to be 85% talking through
                  code I've written, and 15% coding as I talk.
                </p>
              </div>
            </div>
          </div>
          <div className="col col--8">
            <YouTubePlayer id="TDFv2hBRUtQ" />
          </div>
        </div>
        <div className="row margin-top--lg">
          <div className="col col--4">
            <div className="card margin-top--lg">
              <div className="card__header">
                <h3>Express / Deno II</h3>
              </div>
              <div className="card__body">
                <p>
                  The{" "}
                  <Link href="https://github.com/tinkertim/deno-express-project">
                    companion repository
                  </Link>{" "}
                  for this series also links to the{" "}
                  <Link href="#">blog posts on Deno's site</Link>{" "}
                  that summarizes the episodes.
                </p>
                <p>
                  Adding a "let's play" energy to tutorial videos makes them
                  more enjoyable, at least in my experience as a learner. I can
                  dial my inflections from very conservative to exaggerated for
                  presentation; I'm comfortable anywhere.
                </p>
              </div>
            </div>
          </div>
          <div className="col col--8">
            <YouTubePlayer id="Mz59tNtv8" />
          </div>
        </div>
        <div className="row margin-top--lg">
          <div className="col col--12">
            <h2 className="margin-top--md">
              "Shorts" and "Reels" and TikTok, Oh My!
            </h2>
            <p className="margin-top--md">
              You may have strong feelings about TikTok (and short videos in
              general), but lots of developers enjoy them and even prefer them
              for learning. Creating these has also made me think about my
              process as a whole, since I've developed the muscle to structure
              production so I can target multiple formats with minimal editing!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col col--4">
            <YouTubeShortPlayer id="QT6HuKjxU08" />
          </div>
          <div className="col col--4">
            <YouTubeShortPlayer id="hhWPJWNCFrQ" />
          </div>
          <div className="col col--4">
            <YouTubeShortPlayer id="j8q4_gr9Y1I" />
          </div>
        </div>
        <div className="bottom">&nbsp;</div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title={`Latest Work`}
      description="Tim Post's Latest Productions"
    >
      <main>
        <LatestWorkContent />
      </main>
    </Layout>
  );
}
