"use strict";(self.webpackChunktinkertim_github_io=self.webpackChunktinkertim_github_io||[]).push([[9110],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),g=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=g(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=g(n),h=i,m=c["".concat(s,".").concat(h)]||c[h]||p[h]||a;return n?o.createElement(m,l(l({ref:t},u),{},{components:n})):o.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:i,l[1]=r;for(var g=2;g<a;g++)l[g]=n[g];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>g});var o=n(7462),i=(n(7294),n(3905));const a={slug:"ga4-internal-filtering",title:'How To Stop Polluting Your GA4 Engagement Data "Almost" Quickly',description:"Google Analytics 4 has the ability to keep your own use from polluting your engagement data. Surprisingly, this functionality is hard-to-find. Here's how!",authors:["tpost"],image:"/img/blog/ga4-internal-filtering/internal-filtering-og.png",tags:["ga4","tutorial"]},l=void 0,r={permalink:"/blog/ga4-internal-filtering",editUrl:"https://github.com/tinkertim/tinkertim.github.io/tree/main/blog/2023-06-06-ga4-internal-filtering/index.mdx",source:"@site/blog/2023-06-06-ga4-internal-filtering/index.mdx",title:'How To Stop Polluting Your GA4 Engagement Data "Almost" Quickly',description:"Google Analytics 4 has the ability to keep your own use from polluting your engagement data. Surprisingly, this functionality is hard-to-find. Here's how!",date:"2023-06-06T00:00:00.000Z",formattedDate:"June 6, 2023",tags:[{label:"ga4",permalink:"/blog/tags/ga-4"},{label:"tutorial",permalink:"/blog/tags/tutorial"}],readingTime:4.045,hasTruncateMarker:!0,authors:[{name:"Tim Post",title:"Principal DevRel & Community Leader",url:"https://tinkertim.github.io",imageURL:"https://github.com/tinkertim.png",key:"tpost"}],frontMatter:{slug:"ga4-internal-filtering",title:'How To Stop Polluting Your GA4 Engagement Data "Almost" Quickly',description:"Google Analytics 4 has the ability to keep your own use from polluting your engagement data. Surprisingly, this functionality is hard-to-find. Here's how!",authors:["tpost"],image:"/img/blog/ga4-internal-filtering/internal-filtering-og.png",tags:["ga4","tutorial"]},prevItem:{title:"Tips On Conducting Successful Product Feedback Interviews",permalink:"/blog/tips-on-product-feedback-interviews"},nextItem:{title:"Yes, You Need A Community Newsletter. Here's Some Inspiration!",permalink:"/blog/you-need-a-community-newsletter"}},s={authorsImageUrls:[void 0]},g=[{value:"Step 1: Define An &quot;internal&quot; <code>traffic_type</code> For The Google Tag:",id:"step-1-define-an-internal-traffic_type-for-the-google-tag",level:3},{value:"Step 2: Activate The Filter Or Testing Mode",id:"step-2-activate-the-filter-or-testing-mode",level:3},{value:"Step 3: Wait A Few Hours, Then Test",id:"step-3-wait-a-few-hours-then-test",level:3},{value:"Closing",id:"closing",level:3},{value:"Update, As Promised!",id:"update-as-promised",level:3}],u={toc:g},c="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'One of the most meaningful metrics for a documentation site is how long\nthe average "engaged" session lasts. Put simply, how much time people stay\non various segments of your site could mean really good, or even potentially\nnot-so-good things, so you really want that number to be accurate.'),(0,i.kt)("p",null,"Your team's early use of the site while setting up often pollutes\nthis engagement data at a really critical time; here's a tutorial on how to avoid\nthat!"),(0,i.kt)("a",{href:"/blog/ga4-internal-filtering/"},(0,i.kt)("img",{src:"/img/blog/ga4-internal-filtering/internal-filtering-og.png",className:"blogImage",title:"Imagine 'complicated' and then take away reason and accountability",alt:"Creative depiction of a need to filter engagement data"})),(0,i.kt)("p",null,"To get the most out of this short tutorial, make sure you have the IP addresses that\nyour own use of your sites originates from handy, and about ten minutes of time. In fact,\nyou'll probably want to set up rules for additional remote workers or even other offices\nthat might interact with the sites like users would. "),(0,i.kt)("p",null,"Depending on how you have Analytics configured (I suggest using Google Tag\nManager; this tutorial assumes you are too), you probably don't load Analytics\ncode while your site is running in development or staging mode. "),(0,i.kt)("p",null,"This means you won't pollute your data by testing and doing development work, but\ntag manager ",(0,i.kt)("em",{parentName:"p"},"will")," always hoist Analytics code when the site is in production mode,\ncausing anything you do to count like you were a user. This isn't ideal, to say the\nleast, and hard-coded IP filter hacks in your site's source code really smells. "),(0,i.kt)("p",null,"Here's how to deal with it using GA alone, step by step:"),(0,i.kt)("h3",{id:"step-1-define-an-internal-traffic_type-for-the-google-tag"},'Step 1: Define An "internal" ',(0,i.kt)("inlineCode",{parentName:"h3"},"traffic_type")," For The Google Tag:"),(0,i.kt)("p",null,"This, unfortunately, entails a lot of clicks. First, go to the Admin\nsection of analytics:"),(0,i.kt)("img",{src:"/img/blog/ga4-internal-filtering/screenshot-1.png",className:"blogImage",title:"Screenshot",alt:"Supplementary Screenshot"}),(0,i.kt)("p",null,'Next, click on "Data Streams" and click on the site you want to modify\non the right:'),(0,i.kt)("img",{src:"/img/blog/ga4-internal-filtering/screenshot-2.png",className:"blogImage",title:"Screenshot",alt:"Supplementary Screenshot"}),(0,i.kt)("p",null,'Then, scroll down to the "Google Tag" settings part of the site. Click on\nthat:'),(0,i.kt)("img",{src:"/img/blog/ga4-internal-filtering/screenshot-3.png",className:"blogImage",title:"Screenshot",alt:"Supplementary Screenshot"}),(0,i.kt)("p",null,'Then click on "Configure Tag Settings":'),(0,i.kt)("img",{src:"/img/blog/ga4-internal-filtering/screenshot-4.png",className:"blogImage",title:"Screenshot",alt:"Supplementary Screenshot"}),(0,i.kt)("p",null,'Once you\'ve done that, click on "Show All" (I ',(0,i.kt)("em",{parentName:"p"},"told")," you this was hidden):"),(0,i.kt)("img",{src:"/img/blog/ga4-internal-filtering/screenshot-5.png",className:"blogImage",title:"Screenshot",alt:"Supplementary Screenshot"}),(0,i.kt)("p",null,'Next, click on "Define Internal Traffic":'),(0,i.kt)("img",{src:"/img/blog/ga4-internal-filtering/screenshot-6.png",className:"blogImage",title:"Screenshot",alt:"Supplementary Screenshot"}),(0,i.kt)("p",null,"Finally! Create a new location, name it meainingfully, and provide IP addresses\nindividually, or with a netmask (like if you want a whole /24 ignored). ",(0,i.kt)("strong",{parentName:"p"},"Make\nabsolutely sure that you save it! Note the save button in the top-right:")),(0,i.kt)("img",{src:"/img/blog/ga4-internal-filtering/screenshot-7.png",className:"blogImage",title:"Screenshot",alt:"Supplementary Screenshot"}),(0,i.kt)("p",null,"PHEW. Need some coffee? Maybe you should go get some coffee or stretch out. I\nkid really, it's not that bad unless you're a product manager.  "),(0,i.kt)("h3",{id:"step-2-activate-the-filter-or-testing-mode"},"Step 2: Activate The Filter Or Testing Mode"),(0,i.kt)("p",null,'This is the easy part. Go back to the main admin route and this time, click on the\n"Data Settings" icon, expand the little menu, and then click on the "Filters" link. You\nwill see that Google so thoughtfully created the filter for you, even though they don\'t\nshow you this functionality when you set it up.'),(0,i.kt)("img",{src:"/img/blog/ga4-internal-filtering/screenshot-8.png",className:"blogImage",title:"Screenshot",alt:"Supplementary Screenshot"}),(0,i.kt)("p",null,"Click on the filter and enable it. Make sure you save! You can set it to testing if you\nwant, but that still makes reporting noisy unless you filter it out later, so I recommend\njust turning it off right away. "),(0,i.kt)("img",{src:"/img/blog/ga4-internal-filtering/screenshot-9.png",className:"blogImage",title:"Screenshot",alt:"Supplementary Screenshot"}),(0,i.kt)("h3",{id:"step-3-wait-a-few-hours-then-test"},"Step 3: Wait A Few Hours, Then Test"),(0,i.kt)("p",null,"Google says it can take a while for changes to be applied to all recent data (which seems\nto be the case in my experience), but you will notice that it almost immediately stops all\nlogging from the addresses you provided. Confirm this by hitting production links from a\nlocation that you squelched."),(0,i.kt)("p",null,'Initially, even the "live" view stopped registering my visists from internally-flagged IPs,\nbut this flickered as changes were applied. I\'ll update this post in several weeks once enough\ntime has passed and note what the end behavior looks like, if it differs from what Google says\nto expect. '),(0,i.kt)("h3",{id:"closing"},"Closing"),(0,i.kt)("p",null,"I think Google should simplify this process, including providing a better tool to\nlook up your own IP address. This is a great example use case for filters in general, and\nyou probably noticed there's a lot more that you can do with them. "),(0,i.kt)("p",null,"This easy enough to add to your setup checklist, now that you know where it lives. I hope you\nfound this useful!"),(0,i.kt)("h3",{id:"update-as-promised"},"Update, As Promised!"),(0,i.kt)("p",null,"I've ",(0,i.kt)("a",{parentName:"p",href:"/blog/ga4-internal-filtering-followup/"},"posted an update")," about how it went and what I\nlearned to expect when I deploy more documentation domains. I'll definitely be doing this early\nin the process from now on, before it has a chance to get in the way."))}p.isMDXComponent=!0}}]);