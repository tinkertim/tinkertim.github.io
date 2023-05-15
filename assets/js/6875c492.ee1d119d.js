"use strict";(self.webpackChunktinkertim_github_io=self.webpackChunktinkertim_github_io||[]).push([[610],{9703:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),r=a(5999),n=a(2244);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&l.createElement(n.Z,{permalink:a,title:l.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&l.createElement(n.Z,{permalink:s,title:l.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},9985:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),r=a(9460),n=a(1164);function s(e){let{items:t,component:a=n.Z}=e;return l.createElement(l.Fragment,null,t.map((e=>{let{content:t}=e;return l.createElement(r.n,{key:t.metadata.permalink,content:t},l.createElement(a,null,l.createElement(t,null)))})))}},1714:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var l=a(7294),r=a(6010),n=a(5999),s=a(8824),i=a(1944),o=a(5281),m=a(9960),c=a(2462),u=a(9703),g=a(197),d=a(9985);function p(e){const t=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,n.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,n.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function b(e){let{tag:t}=e;const a=p(t);return l.createElement(l.Fragment,null,l.createElement(i.d,{title:a}),l.createElement(g.Z,{tag:"blog_tags_posts"}))}function h(e){let{tag:t,items:a,sidebar:r,listMetadata:s}=e;const i=p(t);return l.createElement(c.Z,{sidebar:r},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,i),l.createElement(m.Z,{href:t.allTagsPath},l.createElement(n.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),l.createElement(d.Z,{items:a}),l.createElement(u.Z,{metadata:s}))}function E(e){return l.createElement(i.FG,{className:(0,r.Z)(o.k.wrapper.blogPages,o.k.page.blogTagPostListPage)},l.createElement(b,e),l.createElement(h,e))}},1164:(e,t,a)=>{a.d(t,{Z:()=>F});var l=a(7294),r=a(6010),n=a(9460),s=a(4996);function i(e){let{children:t,className:a}=e;const{frontMatter:r,assets:i}=(0,n.C)(),{withBaseUrl:o}=(0,s.C)(),m=i.image??r.image;return l.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},m&&l.createElement("meta",{itemProp:"image",content:o(m,{absolute:!0})}),t)}var o=a(9960);const m={title:"title_xvU1"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:s}=(0,n.C)(),{permalink:i,title:c}=a,u=s?"h1":"h2";return l.createElement(u,{className:(0,r.Z)(m.title,t),itemProp:"headline"},s?c:l.createElement(o.Z,{itemProp:"url",to:i},c))}var u=a(5999),g=a(8824);const d={container:"container_iJTo"};function p(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,g.c)();return t=>{const a=Math.ceil(t);return e(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return l.createElement(l.Fragment,null,a(t))}function b(e){let{date:t,formattedDate:a}=e;return l.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function h(){return l.createElement(l.Fragment,null," \xb7 ")}function E(e){let{className:t}=e;const{metadata:a}=(0,n.C)(),{date:s,formattedDate:i,readingTime:o}=a;return l.createElement("div",{className:(0,r.Z)(d.container,"margin-vert--md",t)},l.createElement(b,{date:s,formattedDate:i}),void 0!==o&&l.createElement(l.Fragment,null,l.createElement(h,null),l.createElement(p,{readingTime:o})))}function v(e){return e.href?l.createElement(o.Z,e):l.createElement(l.Fragment,null,e.children)}function f(e){let{author:t,className:a}=e;const{name:n,title:s,url:i,imageURL:o,email:m}=t,c=i||m&&`mailto:${m}`||void 0;return l.createElement("div",{className:(0,r.Z)("avatar margin-bottom--sm",a)},o&&l.createElement(v,{href:c,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:o,alt:n})),n&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(v,{href:c,itemProp:"url"},l.createElement("span",{itemProp:"name"},n))),s&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},s)))}const _={authorCol:"authorCol_q4o9",imageOnlyAuthorRow:"imageOnlyAuthorRow_lXe7",imageOnlyAuthorCol:"imageOnlyAuthorCol_cxD5"};function N(e){let{className:t}=e;const{metadata:{authors:a},assets:s}=(0,n.C)();if(0===a.length)return null;const i=a.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",i?_.imageOnlyAuthorRow:"row",t)},a.map(((e,t)=>l.createElement("div",{className:(0,r.Z)(!i&&"col col--6",i?_.imageOnlyAuthorCol:_.authorCol),key:t},l.createElement(f,{author:{...e,imageURL:s.authorsImageUrls[t]??e.imageURL}})))))}function P(){return l.createElement("header",null,l.createElement(c,null),l.createElement(E,null),l.createElement(N,null))}var Z=a(8780),k=a(2805);function T(e){let{children:t,className:a}=e;const{isBlogPostPage:s}=(0,n.C)();return l.createElement("div",{id:s?Z.blogPostContainerID:void 0,className:(0,r.Z)("markdown",a),itemProp:"articleBody"},l.createElement(k.Z,null,t))}var y=a(4881),I=a(1526),w=a(7462);function C(){return l.createElement("b",null,l.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Continue Reading \xbb"))}function A(e){const{blogPostTitle:t,...a}=e;return l.createElement(o.Z,(0,w.Z)({className:"button button--md button--info","aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),l.createElement(C,null))}const L={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_Wr5y"};function x(){const{metadata:e,isBlogPostPage:t}=(0,n.C)(),{tags:a,title:s,editUrl:i,hasTruncateMarker:o}=e,m=!t&&o,c=a.length>0;return c||m||i?l.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",t&&L.blogPostFooterDetailsFull)},c&&l.createElement("div",{className:(0,r.Z)("col",{"col--9":m})},l.createElement(I.Z,{tags:a})),t&&i&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(y.Z,{editUrl:i})),m&&l.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":c})},l.createElement(A,{blogPostTitle:s,to:e.permalink}))):null}function F(e){let{children:t,className:a}=e;const s=function(){const{isBlogPostPage:e}=(0,n.C)();return e?void 0:"margin-bottom--xl"}();return l.createElement(i,{className:(0,r.Z)(s,a)},l.createElement(P,null),l.createElement(T,null,t),l.createElement(x,null))}},9322:(e,t,a)=>{a.d(t,{Z:()=>d});var l=a(7294),r=a(7524),n=a(6010),s=a(9960),i=a(5999);const o={sidebar:"sidebar_brwN",sidebarItemTitle:"sidebarItemTitle_r4Q1",sidebarItemList:"sidebarItemList_QwSx",sidebarItem:"sidebarItem_lnhn",sidebarItemLink:"sidebarItemLink_yNGZ",sidebarItemLinkActive:"sidebarItemLinkActive_oSRm"};function m(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.Z)(o.sidebar,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{class:"avatar avatar--vertical margin-bottom--lg"},l.createElement("img",{class:"avatar__photo avatar__photo--xl",src:"/img/timprofile.jpg",alt:"Tim Post",title:"Inverted drop kick by Hailey Post"}),l.createElement("div",{class:"avatar__intro"},l.createElement("h2",{class:"avatar__name margin-top--md"},"Code, Coffee, Culture"),l.createElement("small",{class:"avatar__subtitle"},"Not always in that order, but all three matter when your code touches lives. Grab a feed :)"),l.createElement("div",{class:"card__footer",style:{textAlign:"center"}},l.createElement("a",{href:"/blog/rss.xml",class:"button button--secondary button--sm"},"RSS"),"\xa0|\xa0",l.createElement("a",{href:"/blog/atom.xml",class:"button button--secondary button--sm"},"ATOM"),"\xa0|\xa0",l.createElement("a",{href:"/blog/feed.json",class:"button button--secondary button--sm"},"JSON")))),l.createElement("div",{className:(0,n.Z)(o.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.Z)(o.sidebarItemList,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:o.sidebarItem},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:o.sidebarItemLink,activeClassName:o.sidebarItemLinkActive},e.title)))))))}var c=a(3102);function u(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function g(e){return l.createElement(c.Zo,{component:u,props:e})}function d(e){let{sidebar:t}=e;const a=(0,r.i)();return t?.items.length?"mobile"===a?l.createElement(g,{sidebar:t}):l.createElement(m,{sidebar:t}):null}}}]);