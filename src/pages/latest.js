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
            <h2>Library &amp; Module / Product Spotlight Videos:</h2>
          </div>
        </div>
        <div className="row margin-top--lg">
          <div className="col col--4">
            <div className="card margin-top--lg">
              <div className="card__header">
                <h3>Dax Community Spotlight</h3>
              </div>
              <div className="card__body">
                <p>
                  Dax is a dream-come-true for anyone that wants the safety of
                  TypeScript as the interface to a really portable abstraction
                  of Windows / Linux / MacOS. You can write extremely defensive
                  scripts with it, or use it as a library in a regular
                  application.
                </p>
                <p>
                  This was fun to do and quite a challenge to cover in a single
                  video.
                </p>
              </div>
            </div>
          </div>
          <div class="col col--8">
            <YouTubePlayer id="jjqongB3ao0" />
          </div>
        </div>
        <div className="row margin-top--lg">
          <div className="col col--12">
            <h2>
              Release Notes (Deno Series 1.29 - 1.31 along with Swimm Feature
              Releases):
            </h2>
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
                <h3>Swimm's Smart Text Update</h3>
              </div>
              <div className="card__body">
                <p>
                  Smart Text is a key feature for Swimm to keep documentation
                  tightly-coupled to and in sync with the code that it supports.
                </p>
                <p>
                  If you've ever had to mass rename a bunch of stuff due to
                  refactoring, you can definitely relate to how well-received
                  this feature was, and you can definitely hear me enjoying it.
                </p>
              </div>
            </div>
          </div>
          <div className="col col--8">
            <YouTubePlayer id="YylvDtK5yzk" />
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
                <h3>Swimm's Snippet Studio Update</h3>
              </div>
              <div className="card__body">
                <p>
                  Swimm has to make creating documentation{" "}
                  <em>fun</em>, or at least not painful, if developers are going
                  to use it. The studio that lets developers select and document
                  regions of code is very fluid, and very easy and natural to
                  use.
                </p>
                <p>
                  I like to record my first exposure to features because you
                  capture a very natural sense of discovery that puts levity
                  into these, which need strong positive energy.
                </p>
              </div>
            </div>
          </div>
          <div className="col col--8">
            <YouTubePlayer id="ywruwiRcvpo" />
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
            <h2 className="margin-top--md">Deno's Express Tutorial Series:</h2>
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

function LatestWrittenWorkContent() {
  return (
    <section>
      <div className="container">
        <div className="row margin-top--lg">
          <div class="col col--12">
            <h2>Writing & Engagement Project Samples:</h2>
            <p className="margin-top--md">
              I was Stack Overflow's main outward voice in written form for
              almost eight years. You can get a very good feel for how I relate
              to others from a community management perspective{"  "}
              <a
                href="https://meta.stackexchange.com/users/50049"
                target="_blank"
              >
                on my Meta Stack Exchange profile
              </a>{"  "}
              as well as my{" "}
              <a
                href="https://meta.stackoverflow.com/users/50049"
                target="_blank"
              >
                Meta Stack Overflow
              </a>{" "}
              profile.
            </p>
            <p className="margin-top--md">
              For an idea of how I relate to other developers when it comes to
              helping out, or asking for help, take a look at my{"  "}
              <a href="https://stackoverflow.com/users/50049/tim-post">
                main Stack Overflow profile
              </a>.
            </p>
            <p className="margin-top--md">
              These are all published and live; click on any of the screenshots
              below to view the original post in a new browser tab.
            </p>
          </div>
        </div>
        <div class="row margin-top--lg">
          <div className="col col--5">
            <a
              href="https://area51.meta.stackexchange.com/questions/20987/internationalization-state-of-the-stack-stack-overflow-edition"
              target="_blank"
            >
              <img
                src="/img/samples/internationalization.png"
                alt="screen shot of stack overflow internationalization update"
                title="I managed the internationalization of Stack Overflow"
                className={styles.sample}
              />
            </a>
          </div>
          <div className="col col--7">
            <div className="card margin-top--sm">
              <div className="card__header">
                <h3>
                  The Stack Overflow Internationalization Project (Project Lead,
                  Communications Manager)
                </h3>
              </div>
              <div className="card__body">
                <p>
                  For a very long time, Stack Overflow resisted localizing in
                  multiple languages because their information architecture
                  makes translating and transliterating rather difficult. It's
                  not intentional, there's a reason those sites are so fast, but
                  they're difficult for volunteers to translate using customary
                  tools.
                </p>
                <p className="margin-top--md">
                  It took years and quite a few tears, but the site is now able
                  to properly serve many more developers in their primary
                  working language, which opened up engagement across areas of
                  the world that weren't able to use the main site effectively.
                </p>
                <p className="margin-top--md">
                  Pictured and linked is just one sample from the project.
                  Communications were frequent to stakeholders, our board,
                  communities that were helping, translation teams, the press -
                  it was a big deal at the time.
                </p>
                <p className="margin-top--md">
                  <a
                    href="https://area51.meta.stackexchange.com/questions/20987/internationalization-state-of-the-stack-stack-overflow-edition"
                    target="_blank"
                    className="button button--secondary button--outline button--md"
                  >
                    Read The Post &raquo;
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row margin-top--lg">
          <div className="col col-7">
            <div className="card margin-top--md">
              <div className="card__header">
                <h3>Creative &amp; Unexpected Fun To Drive Engagement</h3>
              </div>
              <div className="card__body">
                <p className="margin-top--md">
                  Do you appreciate it when people go out of their way to make
                  you happy just because they felt like doing that for you?
                  Users do, too!
                </p>
                <p className="margin-top--md">
                  Impromptu "fun" just for the sake of it can come in many
                  forms, even just a quick give-away on social media, or perhaps
                  you actually have some goals for the fun, like I did when I
                  challenged myself to see how absurd I could get and still be
                  taken seriously.
                </p>
                <p className="margin-top--md">
                  In this case, I needed some ideas for the next Winter Bash hat
                  event, and engagement was in a cyclical lull. Events like this
                  helped us make sure that we didn't see as much downturn as
                  other advertisers did during the usual low points of the year,
                  and really made people feel good.
                </p>
                <p className="margin-top--md">
                  All these require is creativity; if you click through, you'll
                  see that dozens of people contributed ideas made out of
                  everything from LEGO bricks to icing. One fun event like this
                  can go a long way toward making people be extra careful to
                  bite their tongues a bit if future discussions become
                  passionate and adversarial
                  <em>
                    because they know you're a person underneath that corporate
                    exterior.
                  </em>
                </p>
                <p className="margin-top--md">
                  I ended up running close to a dozen of these throughout my
                  time there, another funny one being{" "}
                  <a
                    href="https://meta.stackexchange.com/questions/231739/what-happens-when-you-plug-a-ups-into-itself"
                    target="_blank"
                  >
                    What happens when you plug a UPS into itself?
                  </a>{" "}
                  which actually became{" "}
                  <a
                    href="https://meta.stackexchange.com/questions/232040/was-the-stack-exchange-ups-plugged-into-itself-a-joke-or-real"
                    target="_blank"
                  >
                    kind of legendary!
                  </a>
                </p>
                <p className="margin-top--md">
                  <a
                    href="https://meta.stackexchange.com/questions/304500/a-moose-some-silly-putty-and-a-desperate-plea-for-help"
                    target="_blank"
                    className="button button--secondary button--outline button--md"
                  >
                    Read The Post &raquo;
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col col--5">
            <a
              href="https://meta.stackexchange.com/questions/304500/a-moose-some-silly-putty-and-a-desperate-plea-for-help"
              target="_blank"
            >
              <img
                src="/img/samples/contest.png"
                alt="screen shot of stack overflow impromptu contest"
                title="Impromptu contests and surprise group fun are a great way to bolster engagement, show appreciation, and just be awesome."
                className={styles.sample}
              />
            </a>
          </div>
        </div>
        <div class="row margin-top--lg">
          <div className="col col--5">
            <a
              href="https://stackoverflow.blog/2018/11/21/our-theory-of-moderation-re-visited/"
              target="_blank"
            >
              <img
                src="/img/samples/rallying.png"
                alt="blog post screen shot"
                title="It's never a bad idea to reiterate how valuable volunteers are to your mission."
                className={styles.sample}
              />
            </a>
          </div>
          <div className="col col--7">
            <div className="card margin-top--md">
              <div className="card__header">
                <h3>
                  Leading A Community Means Providing Agency &amp; Purpose
                </h3>
              </div>
              <div className="card__body">
                <p className="margin-top--md">
                  Stack Exchange sites are <a href="#">self-moderated</a>{" "}
                  by community-elected leadership that has unparalleled access
                  to the core Q&A engine and ways that users participate with
                  it. Moderators are trusted with everything from keeping PII
                  safe, to upholding a pretty famous code of conduct.
                </p>
                <p className="margin-top--md">
                  Sometimes, however, trust has to be re-invigorated along with
                  that same sense of purpose that initially attracted people to
                  the roles they took on in any given community. Sometimes
                  people like to hear what you told them a while ago, just so
                  they're reminded that it hasn't changed.
                </p>
                <p className="margin-top--md">
                  This later became an integrated part of the engineering VMSO
                  because it came out so inspiring, and so the teams supporting
                  the moderators would subsequently work from the same shared
                  value statement.
                </p>
                <p className="margin-top--md">
                  When you build a group of volunteers such as the Stack
                  Exchange moderators, you positively can not do enough for
                  them. Their time is what addresses every shortcoming that the
                  engine has, and they do it just because they love the
                  communities that they serve.
                </p>
                <p>
                  <a
                    href="https://stackoverflow.blog/2018/11/21/our-theory-of-moderation-re-visited/"
                    target="_blank"
                    className="button button--secondary button--outline button--md"
                  >
                    Read The Post &raquo;
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row margin-top--lg">
          <div className="col col--7">
            <div className="card margin-top--md">
              <div className="card__header">
                <h3>Responsible Disclosure</h3>
              </div>
              <div className="card__body">
                <p className="margin-top--md">
                  We hope we never need to write these, but they're inevitable.
                  We also hope we're never going to be the only one around who
                  can talk to the community when something like this hits, but
                  that's inevitable too.
                </p>
                <p className="margin-top--md">
                  Something cool about Stack Overflow is that they invested in
                  actual press / media training for public-facing people. I
                  recommend anyone working in DevRel go through what LinkedIn
                  learning has on it, which is just as good as the live courses
                  that cost way too much money.
                </p>
                <p>
                  On Stack Overflow's meta site, posting one of these is just
                  like giving a press conference. The comment system puts the
                  poster abruptly in a 1:many dynamic similar to a Reddit AMA,
                  just more "real time" with better moderation tools.
                </p>
                <p>
                  <a
                    href="https://meta.stackoverflow.com/questions/340960/a-post-mortem-on-the-recent-developer-story-information-leak"
                    target="_blank"
                    className="button button--secondary button--outline button--md"
                  >
                    Read The Post &raquo;
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col col--5">
            <a
              href="https://meta.stackoverflow.com/questions/340960/a-post-mortem-on-the-recent-developer-story-information-leak"
              target="_blank"
            >
              <img
                src="/img/samples/disclosure.png"
                alt="screen shot of stack overflow information leak"
                title="We never like writing these, but you can shine with how you handle them."
                className={styles.sample}
              />
            </a>
          </div>
        </div>
        <div class="row margin-top--lg margin-bottom--xl">
          <div className="col col--5">
            <a
              href="https://meta.stackexchange.com/questions/239898/new-three-tiered-badge-idea-explainer-%e2%86%92refiner-%e2%86%92-illuminator"
              target="_blank"
            >
              <img
                src="/img/samples/badges.png"
                alt="badge announcement screen shot"
                title="Sometimes, you need more stinking badges."
                className={styles.sample}
              />
            </a>
          </div>
          <div className="col col--7">
            <div className="card margin-top--md">
              <div className="card__header">
                <h3>
                  Data-driven Engagement Strategies (Directed, Headed Communications)
                </h3>
              </div>
              <div className="card__body">
                <p className="margin-top--md">
                  Stack Overflow isn't just "gamification." Many of the site's features are born{" "}
                  through going over lots of data and seeing trends that suggest the balance between{" "}
                  intrinsic and extrinsic motivation might be slightly out of whack when it comes to{" "}
                  using a particular feature to its full potential.
                </p>
                <p>
                  Pictured is the announcement for some badges that we shipped to bolster our user's{" "}
                  already enormous senses of altruism, and show new users that contributors who help{" "}
                  other users have a better experience on the site are especially revered.
                </p>
                <p>
                  One of my super powers is seeing weird trends in data that are fed to me as hunches{" "}
                  that sort of strike out of nowhere.
                </p>
                <p>
                  <a
                    href="https://meta.stackexchange.com/questions/239898/new-three-tiered-badge-idea-explainer-%e2%86%92refiner-%e2%86%92-illuminator"
                    target="_blank"
                    className="button button--secondary button--outline button--md"
                  >
                    Read The Post &raquo;
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
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
        <LatestWrittenWorkContent />
      </main>
    </Layout>
  );
}
