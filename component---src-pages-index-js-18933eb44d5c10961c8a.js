(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{NLiy:function(e,t,a){e.exports={indexWrapper:"index-module--index-wrapper--1xKmR",cardsHeader:"index-module--cardsHeader--1GWHP",technologies:"index-module--technologies--Nmd5P",postsWrapper:"index-module--posts-wrapper--4rexN",postListItem:"index-module--post-list-item--1m5Yv"}},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),l=a.n(r),n=a("Wbzz"),i=a("6Gk8"),o=a("Bl7J"),s=a("vrFN"),c=a("NLiy"),m=a.n(c);t.default=function(e){var t,a=e.data,r=e.location,c=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",d=a.allMarkdownRemark.nodes;return l.a.createElement(o.a,{location:r,title:c},l.a.createElement(s.a,{title:"All posts"}),l.a.createElement("div",{className:m.a.indexWrapper},l.a.createElement(i.a,{rootPath:!0}),l.a.createElement("div",{className:m.a.postsWrapper},d.map((function(e){var t=e.frontmatter.title||e.fields.slug;return l.a.createElement("article",{key:e.fields.slug,className:m.a.postListItem,itemScope:!0,itemType:"http://schema.org/Article"},l.a.createElement("header",{className:m.a.cardsHeader},l.a.createElement("h2",null,l.a.createElement(n.Link,{to:e.fields.slug,itemProp:"url"},l.a.createElement("span",{itemProp:"headline"},t))),l.a.createElement("small",null,e.frontmatter.date)),l.a.createElement("section",null,l.a.createElement("p",{className:m.a.technologies},l.a.createElement("u",null,"Technologies:")," ",e.frontmatter.technologies),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"})))})))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-18933eb44d5c10961c8a.js.map