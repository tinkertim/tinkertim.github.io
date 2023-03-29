import React from "react";
import clsx from "clsx"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./stack.module.css";
import CodeContent from "../mdx-content/TechOverview.mdx";

function StackPageCodeStack() {
  return (
    <div className="container">
      <p className="margin-top--md">
        I created this part of the site while looking for a way to show my
        expertise and familiarity with things in a way that also set people's
        expectations accordingly. Myself, along with what I suspect is the
        broader population of folks in DevRel are what most people might refer
        to as "polyglots" when it comes to languages, frameworks and services.
      </p>
      <p>
        There's a difference between knowing something competently, and knowing
        something well enough to demo it in conjunction with other things. Please,
        step up to my hot dog stand below, where I've organized this in tables:
      </p>
      <CodeContent />
    </div>
  );
}

function StackPageStudioStack() {
  return (
    <div className="container">
      <h2 className="margin-top--lg">Now For The Studio Part:</h2>
      <div className="row margin-top--lg">
        <div className="col col--12">
          <div className={clsx("card", styles.cardNormalizerLarge)}>
            <div class="card_image">
              <img
                src="/img/gear/studio-zoomed.jpg"
                alt="Tim's Studio"
                title="My Office & Studio"
              />
            </div>
            <div class="card__body">
              <h4>Here, I Surround Myself With BlinkyFlashy Things.</h4>
              <small>
                This also illustrates the mic arrangement. Not pictured is the green screen setup, 
                because that's where I threw all of my clutter so that I could take this picture. It's 
                also kinda boring as it's just fabric stapled to a wall with a crapton of lights. My voiceover 
                booth is also not really pictured, because the walls are a mess.
              </small>
            </div>
          </div>
        </div>
      </div>
      <div className="row margin-top--lg">
        <div className="col col--12">
        <p className="margin-top--md">
          Having a background in live audio and sound reinforcement definitely
          didn't hurt when I decided that communications was about to become a
          major part of my daily focus. Pepople <em>always</em> ask me about my 
          studio equipment when they see it on video calls, so here's a virtual 
          tour of most of it:
      </p>
        </div>
      </div>
      <div className="row margin-top--lg">
        <div className="col col--6">
          <div className={clsx("card", styles.cardNormalizerLarge)}>
            <div class="card__image">
              <img
                src="/img/gear/mixer-center.jpg"
                alt="Behringer Xenyx"
                title="My main mixer"
              />
            </div>
            <div class="card__body">
              <h4>Main Mixer: Berhinger Xenyx X122</h4>
              <small>
                Three microphones pick up my voice when I'm recording: My Shure
                SM7B, as well as some Audix leveler microphones that catch me if
                my projection wanders as I record.
                <br />
                <br />
                This mixer has lots of great features, including being an audio
                interface itself, and supporting outboard compressors / effects.
              </small>
            </div>
          </div>
        </div>
        <div className="col col--6">
          <div className={clsx("card", styles.cardNormalizerLarge)}>
            <div class="card__image">
              <img
                src="/img/gear/compressor-rack.jpg"
                alt="Sound Effects Rack"
                title="Sound Effects Rack"
              />
            </div>
            <div class="card__body">
              <h4>FX / Compressor Rack</h4>
              <small>
                I use VST plugins for most things like modern people do, but
                I've yet to find vaccume tube valve-style compressors & preamps
                to be replicated in that way. So, I use them outboard, along
                with some equalizers that provide easy "hands on" control.
              </small>
            </div>
          </div>
        </div>
      </div>
      <div className="row margin-top--lg">
        <div className="col col--12">
          <p className="margin-top--md">
            What you can't really see pictured are two CyberPower 1500VA UPS systems along with a couple 
            Morley hum eliminators. Clean power with a ground that's isolated from noise 
            producers is essential to clean recording. I haven't found APC to be any 
            "cleaner" when it comes to the output of their PDUs.
          </p>
        </div>
      </div>
      <div className="row margin-top--lg">
        <div className="col col--4">
          <div className={clsx("card", styles.cardNormalizerSmall)}>
            <div class="card__image">
              <img
                src="/img/gear/portastudio-controls.jpg"
                alt="Tascam Portastudio"
                title="I keep finding new uses for this old thing."
              />
            </div>
            <div class="card__body">
              <h4>Tascam Portastudio</h4>
              <small>
                Think 8-channel high quality interface + digital audio
                workstation (DAW) combined, but no PC or MAC - just a barebones
                interface. I use this to record local podcasts and music, as
                well as an on-demand digital recorder. I use software too, this
                is just convenient.
              </small>
            </div>
          </div>
        </div>
        <div className="col col--4">
          <div className={clsx("card", styles.cardNormalizerSmall)}>
            <div class="card__image">
              <img
                src="/img/gear/desktop.jpg"
                alt="A desk with USB HID controls"
                title="A very messy desk"
              />
            </div>
            <div class="card__body">
              <h4>Basic Human Input</h4>
              <small>
                The Behringer X-Touch is all I really need from MIDI, and the
                Shuttle Express is all I really need for a video editing control
                surface (they rock, btw!).
                <br />
                <br />
                The Marshall speaker is my primary monitor when I'm not using
                headphones.
              </small>
            </div>
          </div>
        </div>
        <div className="col col--4">
          <div className={clsx("card", styles.cardNormalizerSmall)}>
            <div class="card__image">
              <img
                src="/img/gear/zoom-processor.jpg"
                alt="Zoom Vocal Processor"
                title="Zoom Vocal Processor"
              />
            </div>
            <div class="card__body">
              <h4>Vocal Processor</h4>
              <small>
                I have a bunch of vocal processors, but the Zoom v3 is my
                favorite. I use a variety of mics and preamps in conjunction
                with it to do everything from change my inflections and speak
                on-key to voicing cartoon animations.
                <br />
                <br />
                I'm not Foamy, if you're wondering, but I used to donate hosting
                for his videos.
              </small>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col col--12">
          <h3 className="margin-top--lg">Microphones & Interfaces</h3>
          <p className="margin-top-md">
            I have too many audio interfaces. Once you get an audio interface,
            it will just lead to more audio interfaces. Primarily, I use the
            interface in the Xenyx, along with some by ART, PreSonus and others
            by Berhringer. It depends on the application.
          </p>
          <p>
            I respect legendary microphones, but legendary mics don't
            automatically create pleasant tracks. For both vocals and sound
            design, I use mics that have the properties I need, and they
            frequently don't cost very much. I have mics from the following:
          </p>
          <ul>
            <li>Shure (SM7)</li>
            <li>Samson (Dynamic & Broadcast)</li>
            <li>MXL Ribbon & Cardiod</li>
            <li>Neumann Cardiod (old)</li>
            <li>Audix Leveler Mics</li>
            <li>Rode shotgun & lav mics (for video)</li>
          </ul>
          <p>
            Interfaces can be where audio becomes a rather expensive hobby /
            job. ART, FocusRite, PreSonus and Behringer make great interfaces
            that have very capable and universal mic preamps, as well as lots of
            connectivity options. Unless you're doing multi-track recording, you
            don't need more than a two-channel interface.
          </p>
          <p>
            Preamps can be another temptation that hit your wallet hard. I like
            tube preamps, but solid-state preamps are great too! I never get an
            amp unless I have a specific need and goal for it. When I get them,
            I try to make sure they have high / low pass filters, phase reverse
            and phantom power so they're useful in many settings.
          </p>
          <p>
            As a general rule, I won't spend more than $500 (usually way less)
            on any single thing, microphones included. While there have been
            some exceptions to this, I've acquired most of what I have through
            sheer luck, and knowing how to win on Ebay.
          </p>
          <p className="margin-bottom--xl">
            You could get all of this virtually with one purchase of Pro Tools
            (which I don't use). I like the feel and sound of the tube effects,
            and quirks of each mic and interface. All in, it would cost less
            than $5k to replace all of this stuff, FX included, and you'd save
            lots of room if you went 100% digital. I cling to an older era.
          </p>
        </div>
      </div>
    </div>
  );
}

function StackPageContent() {
  return (
    <section>
      <div className="container">
        <h1 className="margin-top--lg">My Tech & Studio Stack:</h1>
      </div>
      <StackPageCodeStack />
      <StackPageStudioStack />
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Tim's Tech & Studio Stack"
    >
      <main>
        <StackPageContent />
      </main>
    </Layout>
  );
}
