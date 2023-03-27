import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./stack.module.css";

function StackPageCodeStack() {
  return (
    <div className="container">
      <h3>The Tech Part:</h3>
      <p className="margin-top--md">
        I created this part of the page while looking for a way to show my expertise and familiarity
        with things in a way that also set people's expectations accordingly. Myself, along
        with what I suspect is the broader population of folks in DevRel are what most people
        might refer to as "polyglots" when it comes to languages, frameworks and services.
      </p>
      <h3>Programming languages:</h3>
      <p>
        I know C extremely well. I'm most comfortable in POSIX environments, but have lots of experience
        as a packager / maintainer across many architectures.
      </p>
      <p>
        I know JS/TS, Python, PHP and Perl well enough that I could ramp-up to relatively proficient within
        a few weeks to a month. I just don't use them consistently enough to have deep habits with them and
        often start "cold."
      </p>
      <p>
        I'm learning Rust (which I'm growing increasingly fond of) as well as Go. However, with URL loading
        becoming more prevelant thanks to Deno, I'm thinking of letting go of Go and buckling down on TypeScript.
      </p>
      <h3>Frameworks:</h3>
      <p>
        I'm comfortable with React and variants. I've built oodles of documentation websites using everything
        from Wordpress to Docusaurus to Django and I still encounter a fair amount of jQuery in the wild. If 
        it has some semblence of documentation, I can usually figure it out. I also love Astro, Gatsby and 
        of course, Docusaurus!
      </p>
      <p>
        I've worked with many tools around REST APIs, and I'm comfortable designing / implementing them.
      </p>
      <h3>Platforms:</h3>
      <p>
        I'm all about the freemium, basically, but I'm familiar with almost all of them. Would love to do
        more with Kubernetes but clusters are expensive.
      </p>
    </div>
  );
}

function StackPageStudioStack() {
  return (
    <div className="container">
      <h3>The Studio Part:</h3>
      <p className="margin-top--md">
        Having a background in live audio and sound reinforcement definitely didn't
        hurt when I decided that communications was about to become a major part of 
        my daily focus. Pepople <em>always</em> ask me about my studio equipment 
        when they see it on Zoom calls, so here's a virtual tour of most of it:
      </p>
      <div className="row margin-top--md">
        <div className="col col--6">
          <div class="card">
            <div class="card__image">
              <img src="/img/gear/mixer-center.jpg" alt="Behringer Xenyx" title="My main mixer" />
            </div>
            <div class="card__body">
              <h4>Main Mixer: Berhinger Xenyx X122</h4>
              <small>
                Three microphones pick up my voice when I'm recording: My Shure SM7B, as well as
                some Audix leveler microphones that catch me if my projection wanders as I record.
                <br />
                <br />
                This mixer has lots of great features, including being an audio interface itself, 
                and supporting outboard compressors / effects. 
              </small>
            </div>
          </div>
        </div>
        <div className="col col--6">
          <div class="card">
            <div class="card__image">
              <img src="/img/gear/compressor-rack.jpg" alt="Sound Effects Rack" title="Sound Effects Rack" />
            </div>
            <div class="card__body">
              <h4>FX / Compressor Rack</h4>
              <small>
                I use VST plugins for most things like modern people do, but I've yet to find vaccume tube
                valve-style compressors & preamps to be replicated in that way. So, I use them outboard, 
                along with some equalizers that provide easy "hands on" control.
              </small>
            </div>
          </div>
        </div>
      </div>
      <div className="row margin-top--md">
        <div className="col col--4">
          <div class="card">
            <div class="card__image">
              <img src="/img/gear/portastudio-controls.jpg" alt="Tascam Portastudio" title="I keep finding new uses for this old thing." />
            </div>
            <div class="card__body">
              <h4>Tascam Portastudio</h4>
              <small>
                Think 8-channel high quality interface + digital audio workstation (DAW) combined, but no 
                PC or MAC - just a barebones interface. I use this to record local podcasts and music, as
                well as an on-demand digital recorder. I use software too, this is just convenient.
              </small>
            </div>
          </div>
        </div>
        <div className="col col--4">
          <div class="card">
            <div class="card__image">
              <img src="/img/gear/desktop.jpg" alt="A desk with USB HID controls" title="A very messy desk" />
            </div>
            <div class="card__body">
              <h4>Basic Human Input</h4>
              <small>
                The Behringer X-Touch is all I really need from MIDI, and the Shuttle Express 
                is all I really need for a video editing control surface (they rock, btw!).
                <br />
                <br />
                The Marshall speaker is my primary monitor when I'm not using headphones. 
              </small>
            </div>
          </div>
        </div>
        <div className="col col--4">
          <div class="card">
            <div class="card__image">
              <img src="/img/gear/zoom-processor.jpg" alt="Zoom Vocal Processor" title="Zoom Vocal Processor" />
            </div>
            <div class="card__body">
              <h4>Vocal Processor</h4>
              <small>
                I have a bunch of vocal processors, but the Zoom v3 is my favorite. I use a variety of 
                mics and preamps in conjunction with it to do everything from change my inflections and 
                speak on-key to voicing cartoon animations.
                <br />
                <br />
                I'm not Foamy, if you're wondering, but I used to donate hosting for his videos. 
              </small>
            </div>
          </div>
        </div>         
      </div>
      <div className="row">
        <div className="col col--12">
          <h3 className="margin-top--md">Microphones & Interfaces</h3>
          <p className="margin-top-md">
            I have too many audio interfaces. Once you get an audio interface, it will just lead
            to more audio interfaces. Primarily, I use the interface in the Xenyx, along with some
            by ART, PreSonus and others by Berhringer. It depends on the application.
          </p>
          <p>
            For Mics, I use a wide variety. Shure SM7B is my battle tank for the usual stuff, but I 
            also have mics by MXL, Audio Technica, Neumann, Samson and more. Even cheap mics can add
            value to sound design, so I tend to have too many of those as well. 
          </p>
          <p>
            As a general rule, I won't spend more than $500 on any single thing, microphones included. 
            While there have been some exceptions to this, I've acquired most of what I have through
            sheer luck, and knowing how to win on Ebay. It takes years to build up a bunch of stuff;
            don't take it as an indication that you need to buy it to be successful.
          </p>
          <p>
            The total value of my stuff is remarkably low, as not many crave the analog side anymore.
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
      <StackPageStudioStack />
      <div className="container">
        <hr />
      </div>
      <StackPageCodeStack />
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
        <StackPageContent />
      </main>
    </Layout>
  );
}
