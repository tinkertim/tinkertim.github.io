"use strict";(self.webpackChunktinkertim_github_io=self.webpackChunktinkertim_github_io||[]).push([[89],{46:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var n=a(7294),r=a(6010),i=a(2263),l=a(1944),s=a(5281),m=a(2462),o=a(9703),c=a(197),b=a(9985);function d(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,i.Z)(),{blogDescription:r,blogTitle:s,permalink:m}=t,o="/"===m?a:s;return n.createElement(n.Fragment,null,n.createElement(l.d,{title:o,description:r}),n.createElement(c.Z,{tag:"blog_posts_list"}))}function g(e){const{metadata:t,items:a,sidebar:r}=e;return n.createElement(m.Z,{sidebar:r},n.createElement(b.Z,{items:a}),n.createElement(o.Z,{metadata:t}))}function u(e){return n.createElement(l.FG,{className:(0,r.Z)(s.k.wrapper.blogPages,s.k.page.blogListPage)},n.createElement(d,e),n.createElement(g,e))}},9703:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(5999),i=a(2244);function l(e){const{metadata:t}=e,{previousPage:a,nextPage:l}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(i.Z,{permalink:a,title:n.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),l&&n.createElement(i.Z,{permalink:l,title:n.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},9985:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(9460),i=a(8047);function l(e){let{items:t,component:a=i.Z}=e;return n.createElement(n.Fragment,null,t.map((e=>{let{content:t}=e;return n.createElement(r.n,{key:t.metadata.permalink,content:t},n.createElement(a,null,n.createElement(t,null)))})))}},9322:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(7294),r=a(7524),i=a(6010),l=a(9960),s=a(5999);const m={sidebar:"sidebar_brwN",sidebarItemTitle:"sidebarItemTitle_r4Q1",sidebarItemList:"sidebarItemList_QwSx",sidebarItem:"sidebarItem_lnhn",sidebarItemLink:"sidebarItemLink_yNGZ",sidebarItemLinkActive:"sidebarItemLinkActive_oSRm"};function o(e){let{sidebar:t}=e;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,i.Z)(m.sidebar,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{class:"avatar avatar--vertical margin-bottom--lg"},n.createElement("img",{class:"avatar__photo avatar__photo--xl",src:"/img/timprofile.jpg",alt:"Tim Post",title:"Inverted drop kick by Hailey Post"}),n.createElement("div",{class:"avatar__intro"},n.createElement("h2",{class:"avatar__name margin-top--md"},"Code, Coffee, Culture"),n.createElement("small",{class:"avatar__subtitle"},"Not always in that order, but all three matter when your code touches lives. Grab a feed :)"),n.createElement("div",{class:"card__footer",style:{textAlign:"center"}},n.createElement(l.Z,{to:"/blog/rss",class:"button button--secondary button--sm"},"RSS"),"\xa0|\xa0",n.createElement(l.Z,{to:"/blog/atom",class:"button button--secondary button--sm"},"ATOM")))),n.createElement("div",{className:(0,i.Z)(m.sidebarItemTitle,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,i.Z)(m.sidebarItemList,"clean-list")},t.items.map((e=>n.createElement("li",{key:e.permalink,className:m.sidebarItem},n.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:m.sidebarItemLink,activeClassName:m.sidebarItemLinkActive},e.title)))))))}var c=a(3102);function b(e){let{sidebar:t}=e;return n.createElement("ul",{className:"menu__list"},t.items.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function d(e){return n.createElement(c.Zo,{component:b,props:e})}function g(e){let{sidebar:t}=e;const a=(0,r.i)();return t?.items.length?"mobile"===a?n.createElement(d,{sidebar:t}):n.createElement(o,{sidebar:t}):null}}}]);