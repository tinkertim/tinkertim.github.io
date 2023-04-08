"use strict";(self.webpackChunktinkertim_github_io=self.webpackChunktinkertim_github_io||[]).push([[477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"uses-for-edge-functions","metadata":{"permalink":"/blog/uses-for-edge-functions","editUrl":"https://github.com/tinkertim/tinkertim.github.io/tree/main/blog/2023-04-08-uses-for-edge-functions/index.mdx","source":"@site/blog/2023-04-08-uses-for-edge-functions/index.mdx","title":"Things I\'m Thinking About Getting Edgy With","description":"Everyone seems to want to use edge functions, but nobody knows quite what to do with them. Here\'s my current list of things I want to build this year.","date":"2023-04-08T00:00:00.000Z","formattedDate":"April 8, 2023","tags":[{"label":"edge-functions","permalink":"/blog/tags/edge-functions"},{"label":"typescript","permalink":"/blog/tags/typescript"}],"readingTime":3.22,"hasTruncateMarker":true,"authors":[{"name":"Tim Post","title":"Principal DevRel","url":"https://tinkertim.github.io","imageURL":"https://github.com/tinkertim.png","key":"tpost"}],"frontMatter":{"slug":"uses-for-edge-functions","title":"Things I\'m Thinking About Getting Edgy With","description":"Everyone seems to want to use edge functions, but nobody knows quite what to do with them. Here\'s my current list of things I want to build this year.","authors":["tpost"],"image":"./functions-og.png","tags":["edge-functions","typescript"]},"nextItem":{"title":"I\'m Looking For A New Long-Term Adventure!","permalink":"/blog/job-hunting"}},"content":"[Edge functions](https://www.google.com/search?q=edge+functions) <sup><small>(<em>Google Link</em>)</small></sup> \\nare really appealing to me because the majority of web work that I do involves some \\nkind of documentation, which these days usually means using a static site generator \\nof some sort. These well-orchestrated SPAs are great, in fact this blg post is being \\nbrought to you with one of them, but they\'re just that - static.\\n\\n![Functions, \\"Hey, you should use an image, right?\\"](./functions-og.png)\\n\\n\x3c!--truncate--\x3e\\n\\nI used the Google link because the vendors are still figuring it out. This is all \\nstill kinda new, which is neat (IMHO).\\n\\nThere are enough places that provide usable \\"freemium tier\\" edge functions, some\\neven complete with storage, that hobbyists and open-source enthisiasts like me \\ncan build stuff and not need to pay a monthly bill for it. I might even package\\na few I\'m building around my own site, if I can think of a sensible way to \\"package\\"\\nthe serverless part of it. \\n\\nSo without further rambling, here\'s my list in no real order other than recall:\\n\\n### \\"Was this document helpful?\\" plugin for Docusaurus\\n\\nI have no desire to implement comments or anything else that would require moderation,\\nbut getting feedback about the relevancy and usefulness of all of your docs and \\nblog posts would be pretty super duper, right? \\n\\nEdge functions are great at handling all of the rate limiting and other stuff you\'d\\nwant to implement server-side, as well as an API to get stats from it. Many of them \\noffer some kind of storage option on the same physical network to store responses.\\n\\nThe caveat here is, you may or may not be able to access local storage and dependency\\nresolution / loading could be an obstacle. Anyway, I\'m kicking around the idea of \\nbuilding it if I can do it in a portable way manageably.\\n\\nI could probably get a V0 option for that done very quickly on Deno, but that kinda \\nmarries using the plugin to using Deno Deploy or someone that resold it. Not ideal.\\n\\n### My DevRel Discord Bot Box (Awaitbot)\\n\\nIt\'s easy to run user engagement events in Discord when you have droids helping you \\nmanage it. Over the years, I\'ve found that self-service contests work extremely well\\nfor some of the same scenarios you might think about organizing a hackathon to boost.\\n\\nThe idea is, you let the user set their own definition of \\"done\\" for a project by \\nallowing the user to tell a bot that they\'re working on something, and then letting \\nthe bot know when the project was done by including a link or a screen shot. \\n\\nThe bot can then (do a hundred other things) including giving the person a QR code to\\nget their prize shipped, and then someone from the company can reach out if warranted.\\n\\nThis project actually illustrates how you have to think about GDPR ahead of everything\\nelse when you glue lots of stuff together like this, and there are indeed challenges\\nwith the Discord API at scale, but I believe it\'s a project that will work.\\n\\nI have a repo for this I\'ll dust off next month, maybe.\\n\\n### Client Side -> Edge Side Search\\n\\nFor really big sites, it would be interesting if the compiled client-side index used for\\nclient-side search could be just moved to an edge function upon deployment. It\'s not a \\nbad idea, though a little unconventional and prone to timing issues. \\n\\nThird-party search options are getting harder to get working (and more expensive) as the \\nproducts evolve, so this might be a neat hybrid approach. \\n\\n---\\n\\nAnyway, that\'s my list for the year, mostly around static sites. But I\'ve seen people doing\\nall kinds of interesting things from fully-blown functional CRON systems to raw data pipes\\nto worker farms to others - and there\'s plenty of freemium options, so it\'s a fun thing to \\nplay with."},{"id":"job-hunting","metadata":{"permalink":"/blog/job-hunting","editUrl":"https://github.com/tinkertim/tinkertim.github.io/tree/main/blog/2023-04-04-job-hunting-again/index.mdx","source":"@site/blog/2023-04-04-job-hunting-again/index.mdx","title":"I\'m Looking For A New Long-Term Adventure!","description":"I\'m winding down my contracting engagements in hope of getting full-time employment status again. I\'d love any recommendations!","date":"2023-04-04T00:00:00.000Z","formattedDate":"April 4, 2023","tags":[{"label":"meta","permalink":"/blog/tags/meta"},{"label":"job","permalink":"/blog/tags/job"}],"readingTime":2.1,"hasTruncateMarker":true,"authors":[{"name":"Tim Post","title":"Principal DevRel","url":"https://tinkertim.github.io","imageURL":"https://github.com/tinkertim.png","key":"tpost"}],"frontMatter":{"slug":"job-hunting","title":"I\'m Looking For A New Long-Term Adventure!","description":"I\'m winding down my contracting engagements in hope of getting full-time employment status again. I\'d love any recommendations!","authors":["tpost"],"tags":["meta","job"]},"prevItem":{"title":"Things I\'m Thinking About Getting Edgy With","permalink":"/blog/uses-for-edge-functions"},"nextItem":{"title":"New Site! Again!","permalink":"/blog/welcome"}},"content":"## First, some good news!\\n\\nI\'m really thrilled that, after passing some relatively huge health \\nmilestones, it\'s now rational for me to think long-term again. Long-term\\nsurvival is never a sure thing for anyone, but cancer survivors feel a lot \\nbetter every year after their fifth year of remission because even older \\nsurvival numbers go up and to the right afterward.\\n\\nBeing asked something like ...  _where do you see yourself in a few years?_ in \\nan interview no longer summons existential angst, which is a huge deal for me. \\nI can rationally see myself building something long-term, not just contributing \\nwhere I can to short-term needs while I waited to see how things went. \\n\\n\x3c!--truncate--\x3e\\n\\nI\'ve filled in my time by doing some contract work to meet our minimum expenses, \\nwhich has led me to amazing experiences I couldn\'t possibly have had otherwise. \\nHowever, I want to contribute more than just content assignments; I\'m not done \\nmaking my mark on DevRel. \\n\\nI\'ve been in language-agnostic roles for years; I helped to implement Stack Overflow\'s\\nnow famous remote-first work culture for the community growth team, I have \\noodles of management experience and I\'m a pretty darn nice guy. I\'ve also got \\na <a href=\\"/stack\\">pretty capable studio</a>. \\n\\n## So, What do I want to do?\\n\\nI want to help mentor the next age of DevRel pros. I want to bring everything I have \\nlearned from running the world\'s hugest developer community together with my love for \\nhelping people find their own voice and confidence on their feet. I want to direct \\ncontent, sure, but I want to teach others _how_ that process works. \\n\\nI also sorely miss the art of community building and management. And, well, I miss\\nlonger-term relationships in general, which feels a bit lacking when you\'re just \\nan outside contractor.  \\n\\n## What do I want out of it?\\n\\nWhat I need from an employer:\\n\\n - Remote-first culture\\n - Flexible time. For tons of reasons.\\n - Insurance that isn\'t a pain in the ass.\\n - Rapid / fast-pace is great, if we keep it to 50-ish hour weeks.\\n - Some kind of PTO program.\\n - Commitment to a long-term DevRel program. I can be a one-person band, \\n but my goal is to build and lead a team with actually different people.\\n\\nAs long as I can take breaks during the day and limit travel to a few times during\\nthe year, my disability needs are met.  \\n\\nDo you know someone? Please send them to me, or me to them!"},{"id":"welcome","metadata":{"permalink":"/blog/welcome","editUrl":"https://github.com/tinkertim/tinkertim.github.io/tree/main/blog/2023-03-23-new-site/index.mdx","source":"@site/blog/2023-03-23-new-site/index.mdx","title":"New Site! Again!","description":"Did the whole Twitter shakeup make you stop and think about how much time you","date":"2023-03-23T00:00:00.000Z","formattedDate":"March 23, 2023","tags":[{"label":"meta","permalink":"/blog/tags/meta"}],"readingTime":1.175,"hasTruncateMarker":true,"authors":[{"name":"Tim Post","title":"Principal DevRel","url":"https://tinkertim.github.io","imageURL":"https://github.com/tinkertim.png","key":"tpost"}],"frontMatter":{"slug":"welcome","title":"New Site! Again!","authors":["tpost"],"tags":["meta"]},"prevItem":{"title":"I\'m Looking For A New Long-Term Adventure!","permalink":"/blog/job-hunting"}},"content":"Did the whole Twitter shakeup make you stop and think about how much time you\\nspend creating content on other people\'s platforms? I thought about it quite a\\nbit when it was touch-and-go if Twitter would stabilize again, and in all\\nfairness, that\'s still mostly the case.\\n\\nI also realized that I was leaking my own narrative, abut two hundred characters\\nat a time. Instead of writing the stories of my experiences coherently, with my\\nown purpose and vision, I was just adding short quips to the collective\\nnarrative. There\'s nothing wrong with adding to the collective, provided that\\nyou\'re writing your own version, too.\\n\\nSo, I had to do the thing I said I wasn\'t going to do again: I had to build yet\\nanother personal website. I didn\'t feel like getting a degree in hot new\\nframeworks, so I was originally going to go with Astro but Tailwind is just not\\ncomfortable for me for a personal project, so I ended up using:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\n\x3c!--truncate--\x3e\\n\\n... at least for now. I really want to play with Astro, as well as Fresh, but\\nthe ecosystems around both are pretty Tailwind-heavy for the time being.\\n\\nAnd for just a blog with a few static pages - Docusaurus is fine. I may even\\nbring back the docs and create some tutorials eventually, but the goal right now\\nis to just have a better professional presence."}]}')}}]);