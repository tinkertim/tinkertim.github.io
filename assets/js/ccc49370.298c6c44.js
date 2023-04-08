"use strict";(self.webpackChunktinkertim_github_io=self.webpackChunktinkertim_github_io||[]).push([[103],{8964:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});var a=n(7294),l=n(6010),r=n(1944),i=n(5281),o=n(9460),s=n(2462),c=n(8047),m=n(7462),d=n(5999),u=n(2244);function b(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(u.Z,(0,m.Z)({},n,{subLabel:a.createElement(d.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(u.Z,(0,m.Z)({},t,{subLabel:a.createElement(d.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function v(){const{assets:e,metadata:t}=(0,o.C)(),{title:n,description:l,date:i,tags:s,authors:c,frontMatter:m}=t,{keywords:d}=m,u=e.image??m.image;return a.createElement(r.d,{title:n,description:l,keywords:d,image:u},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:i}),c.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:c.map((e=>e.url)).filter(Boolean).join(",")}),s.length>0&&a.createElement("meta",{property:"article:tag",content:s.map((e=>e.label)).join(",")}))}var g=n(6668);function f(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function p(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=p({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function h(e){const t=e.getBoundingClientRect();return t.top===t.bottom?h(e.parentNode):t}function E(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>h(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(h(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function _(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,g.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function L(e){const t=(0,a.useRef)(void 0),n=_();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:i}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:i}),s=E(o,{anchorTopOffset:n.current}),c=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===c)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}function k(e){let{toc:t,className:n,linkClassName:l,isChild:r}=e;return t.length?a.createElement("ul",{className:r?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(k,{isChild:!0,toc:e.children,className:n,linkClassName:l}))))):null}const N=a.memo(k);function C(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:i,maxHeadingLevel:o,...s}=e;const c=(0,g.L)(),d=i??c.tableOfContents.minHeadingLevel,u=o??c.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return(0,a.useMemo)((()=>p({toc:f(t),minHeadingLevel:n,maxHeadingLevel:l})),[t,n,l])}({toc:t,minHeadingLevel:d,maxHeadingLevel:u});return L((0,a.useMemo)((()=>{if(l&&r)return{linkClassName:l,linkActiveClassName:r,minHeadingLevel:d,maxHeadingLevel:u}}),[l,r,d,u])),a.createElement(N,(0,m.Z)({toc:b,className:n,linkClassName:l},s))}const I={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},x="table-of-contents__link toc-highlight",H="table-of-contents__link--active";function y(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,l.Z)(I.tableOfContents,"thin-scrollbar",t)},a.createElement(C,(0,m.Z)({},n,{linkClassName:x,linkActiveClassName:H})))}function Z(e){let{sidebar:t,children:n}=e;const{metadata:l,toc:r}=(0,o.C)(),{nextItem:i,prevItem:m,frontMatter:d}=l,{hide_table_of_contents:u,toc_min_heading_level:v,toc_max_heading_level:g}=d;return a.createElement(s.Z,{sidebar:t,toc:!u&&r.length>0?a.createElement(y,{toc:r,minHeadingLevel:v,maxHeadingLevel:g}):void 0},a.createElement(c.Z,null,n),(i||m)&&a.createElement(b,{nextItem:i,prevItem:m}))}function A(e){const t=e.content;return a.createElement(o.n,{content:e.content,isBlogPostPage:!0},a.createElement(r.FG,{className:(0,l.Z)(i.k.wrapper.blogPages,i.k.page.blogPostPage)},a.createElement(v,null),a.createElement(Z,{sidebar:e.sidebar},a.createElement(t,null))))}},9322:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(7294),l=n(7524),r=n(6010),i=n(9960),o=n(5999);const s={sidebar:"sidebar_brwN",sidebarItemTitle:"sidebarItemTitle_r4Q1",sidebarItemList:"sidebarItemList_QwSx",sidebarItem:"sidebarItem_lnhn",sidebarItemLink:"sidebarItemLink_yNGZ",sidebarItemLinkActive:"sidebarItemLinkActive_oSRm"};function c(e){let{sidebar:t}=e;return a.createElement("aside",{className:"col col--3"},a.createElement("nav",{className:(0,r.Z)(s.sidebar,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{class:"avatar avatar--vertical margin-bottom--lg"},a.createElement("img",{class:"avatar__photo avatar__photo--xl",src:"/img/timprofile.jpg",alt:"Tim Post",title:"Inverted drop kick by Hailey Post"}),a.createElement("div",{class:"avatar__intro"},a.createElement("h2",{class:"avatar__name margin-top--md"},"Code, Coffee, Culture"),a.createElement("small",{class:"avatar__subtitle"},"Not always in that order, but all three matter when your code touches lives. Grab a feed :)"),a.createElement("div",{class:"card__footer",style:{textAlign:"center"}},a.createElement(i.Z,{to:"/blog/rss.xml",class:"button button--secondary button--sm"},"RSS"),"\xa0|\xa0",a.createElement(i.Z,{to:"/blog/atom.xml",class:"button button--secondary button--sm"},"ATOM"),"\xa0|\xa0",a.createElement(i.Z,{to:"/blog/feed.json",class:"button button--secondary button--sm"},"JSON")))),a.createElement("div",{className:(0,r.Z)(s.sidebarItemTitle,"margin-bottom--md")},t.title),a.createElement("ul",{className:(0,r.Z)(s.sidebarItemList,"clean-list")},t.items.map((e=>a.createElement("li",{key:e.permalink,className:s.sidebarItem},a.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:s.sidebarItemLink,activeClassName:s.sidebarItemLinkActive},e.title)))))))}var m=n(3102);function d(e){let{sidebar:t}=e;return a.createElement("ul",{className:"menu__list"},t.items.map((e=>a.createElement("li",{key:e.permalink,className:"menu__list-item"},a.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function u(e){return a.createElement(m.Zo,{component:d,props:e})}function b(e){let{sidebar:t}=e;const n=(0,l.i)();return t?.items.length?"mobile"===n?a.createElement(u,{sidebar:t}):a.createElement(c,{sidebar:t}):null}}}]);