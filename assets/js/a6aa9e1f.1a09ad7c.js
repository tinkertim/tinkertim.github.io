"use strict";(self.webpackChunktinkertim_github_io=self.webpackChunktinkertim_github_io||[]).push([[3089],{46:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var l=a(7294),r=a(6010),n=a(2263),i=a(1944),o=a(5281),s=a(2462),m=a(9703),c=a(197),u=a(9985);function d(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,n.Z)(),{blogDescription:r,blogTitle:o,permalink:s}=t,m="/"===s?a:o;return l.createElement(l.Fragment,null,l.createElement(i.d,{title:m,description:r}),l.createElement(c.Z,{tag:"blog_posts_list"}))}function g(e){const{metadata:t,items:a,sidebar:r}=e;return l.createElement(s.Z,{sidebar:r},l.createElement(u.Z,{items:a}),l.createElement(m.Z,{metadata:t}))}function b(e){return l.createElement(i.FG,{className:(0,r.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage)},l.createElement(d,e),l.createElement(g,e))}},9703:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(7294),r=a(5999),n=a(2244);function i(e){const{metadata:t}=e,{previousPage:a,nextPage:i}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&l.createElement(n.Z,{permalink:a,title:l.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),i&&l.createElement(n.Z,{permalink:i,title:l.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},9985:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(7294),r=a(9460),n=a(1164);function i(e){let{items:t,component:a=n.Z}=e;return l.createElement(l.Fragment,null,t.map((e=>{let{content:t}=e;return l.createElement(r.n,{key:t.metadata.permalink,content:t},l.createElement(a,null,l.createElement(t,null)))})))}},1164:(e,t,a)=>{a.d(t,{Z:()=>F});var l=a(7294),r=a(6010),n=a(9460),i=a(4996);function o(e){let{children:t,className:a}=e;const{frontMatter:r,assets:o}=(0,n.C)(),{withBaseUrl:s}=(0,i.C)(),m=o.image??r.image;return l.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},m&&l.createElement("meta",{itemProp:"image",content:s(m,{absolute:!0})}),t)}var s=a(9960);const m={title:"title_xvU1"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:i}=(0,n.C)(),{permalink:o,title:c}=a,u=i?"h1":"h2";return l.createElement(u,{className:(0,r.Z)(m.title,t),itemProp:"headline"},i?c:l.createElement(s.Z,{itemProp:"url",to:o},c))}var u=a(5999),d=a(8824);const g={container:"container_iJTo"};function b(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,d.c)();return t=>{const a=Math.ceil(t);return e(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return l.createElement(l.Fragment,null,a(t))}function p(e){let{date:t,formattedDate:a}=e;return l.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function E(){return l.createElement(l.Fragment,null," \xb7 ")}function h(e){let{className:t}=e;const{metadata:a}=(0,n.C)(),{date:i,formattedDate:o,readingTime:s}=a;return l.createElement("div",{className:(0,r.Z)(g.container,"margin-vert--md",t)},l.createElement(p,{date:i,formattedDate:o}),void 0!==s&&l.createElement(l.Fragment,null,l.createElement(E,null),l.createElement(b,{readingTime:s})))}function v(e){return e.href?l.createElement(s.Z,e):l.createElement(l.Fragment,null,e.children)}function f(e){let{author:t,className:a}=e;const{name:n,title:i,url:o,imageURL:s,email:m}=t,c=o||m&&`mailto:${m}`||void 0;return l.createElement("div",{className:(0,r.Z)("avatar margin-bottom--sm",a)},s&&l.createElement(v,{href:c,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:s,alt:n})),n&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(v,{href:c,itemProp:"url"},l.createElement("span",{itemProp:"name"},n))),i&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},i)))}const _={authorCol:"authorCol_q4o9",imageOnlyAuthorRow:"imageOnlyAuthorRow_lXe7",imageOnlyAuthorCol:"imageOnlyAuthorCol_cxD5"};function N(e){let{className:t}=e;const{metadata:{authors:a},assets:i}=(0,n.C)();if(0===a.length)return null;const o=a.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",o?_.imageOnlyAuthorRow:"row",t)},a.map(((e,t)=>l.createElement("div",{className:(0,r.Z)(!o&&"col col--6",o?_.imageOnlyAuthorCol:_.authorCol),key:t},l.createElement(f,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})))))}function Z(){return l.createElement("header",null,l.createElement(c,null),l.createElement(h,null),l.createElement(N,null))}var k=a(8780),P=a(135);function y(e){let{children:t,className:a}=e;const{isBlogPostPage:i}=(0,n.C)();return l.createElement("div",{id:i?k.blogPostContainerID:void 0,className:(0,r.Z)("markdown",a),itemProp:"articleBody"},l.createElement(P.Z,null,t))}var T=a(4881),I=a(1526),C=a(7462);function w(){return l.createElement("b",null,l.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Continue Reading \xbb"))}function A(e){const{blogPostTitle:t,...a}=e;return l.createElement(s.Z,(0,C.Z)({className:"button button--md button--info","aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),l.createElement(w,null))}const L={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_Wr5y"};function x(){const{metadata:e,isBlogPostPage:t}=(0,n.C)(),{tags:a,title:i,editUrl:o,hasTruncateMarker:s}=e,m=!t&&s,c=a.length>0;return c||m||o?l.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",t&&L.blogPostFooterDetailsFull)},c&&l.createElement("div",{className:(0,r.Z)("col",{"col--9":m})},l.createElement(I.Z,{tags:a})),t&&o&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(T.Z,{editUrl:o})),m&&l.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":c})},l.createElement(A,{blogPostTitle:i,to:e.permalink}))):null}function F(e){let{children:t,className:a}=e;const i=function(){const{isBlogPostPage:e}=(0,n.C)();return e?void 0:"margin-bottom--xl"}();return l.createElement(o,{className:(0,r.Z)(i,a)},l.createElement(Z,null),l.createElement(y,null,t),l.createElement(x,null))}},9322:(e,t,a)=>{a.d(t,{Z:()=>g});var l=a(7294),r=a(7524),n=a(6010),i=a(9960),o=a(5999);const s={sidebar:"sidebar_brwN",sidebarItemTitle:"sidebarItemTitle_r4Q1",sidebarItemList:"sidebarItemList_QwSx",sidebarItem:"sidebarItem_lnhn",sidebarItemLink:"sidebarItemLink_yNGZ",sidebarItemLinkActive:"sidebarItemLinkActive_oSRm"};function m(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.Z)(s.sidebar,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{class:"avatar avatar--vertical margin-bottom--lg"},l.createElement("img",{class:"avatar__photo avatar__photo--xl",src:"/img/timprofile.jpg",alt:"Tim Post",title:"Inverted drop kick by Hailey Post"}),l.createElement("div",{class:"avatar__intro"},l.createElement("h2",{class:"avatar__name margin-top--md"},"Code, Coffee, Culture"),l.createElement("small",{class:"avatar__subtitle"},"Not always in that order, but all three matter when your code touches lives. Grab a feed :)"),l.createElement("div",{class:"card__footer",style:{textAlign:"center"}},l.createElement("a",{href:"/blog/rss.xml",class:"button button--secondary button--sm"},"RSS"),"\xa0|\xa0",l.createElement("a",{href:"/blog/atom.xml",class:"button button--secondary button--sm"},"ATOM"),"\xa0|\xa0",l.createElement("a",{href:"/blog/feed.json",class:"button button--secondary button--sm"},"JSON")))),l.createElement("div",{className:(0,n.Z)(s.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.Z)(s.sidebarItemList,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:s.sidebarItem},l.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:s.sidebarItemLink,activeClassName:s.sidebarItemLinkActive},e.title)))))))}var c=a(3102);function u(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function d(e){return l.createElement(c.Zo,{component:u,props:e})}function g(e){let{sidebar:t}=e;const a=(0,r.i)();return t?.items.length?"mobile"===a?l.createElement(d,{sidebar:t}):l.createElement(m,{sidebar:t}):null}}}]);