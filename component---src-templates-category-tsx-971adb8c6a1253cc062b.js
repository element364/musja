(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"A2+M":function(e,t,r){var n=r("X8hv");e.exports={MDXRenderer:n}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},GsBC:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return p}));var n=r("q1tI"),o=r.n(n),a=r("A2+M"),l=r("soUV"),u=r("1Yd/"),c=r("m4uI"),s=r("Wbzz");function i(e){var t=e.page,r=e.pagesCount,n=e.hrefBuilder;return o.a.createElement("nav",{className:"relative z-0 inline-flex shadow-sm p-4"},Array.from({length:r},(function(e,r){return o.a.createElement(s.Link,{key:r,to:n(r+1),className:"-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300"+(t===r+1?" bg-gray-400":" bg-white")+" text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"},r+1)})))}function p(e){var t=e.data,r=e.pageContext,n=t.category,s=t.posts,p=r.slug,f=r.page,d=r.pagesCount;return o.a.createElement(l.a,null,o.a.createElement(u.a,{title:n.frontmatter.title,description:n.excerpt}),o.a.createElement("h1",null,n.frontmatter.name),o.a.createElement(a.MDXRenderer,null,n.body),o.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},s.edges.map((function(e){return o.a.createElement(c.a,{key:e.node.slug,post:e.node})}))),o.a.createElement(i,{page:f,pagesCount:d,hrefBuilder:function(e){return"/category/"+p+(1===e?"":"/"+e)}}))}},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},RIqP:function(e,t,r){var n=r("Ijbi"),o=r("EbDI"),a=r("ZhPi"),l=r("Bnag");e.exports=function(e){return n(e)||o(e)||a(e)||l()},e.exports.default=e.exports,e.exports.__esModule=!0},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},X8hv:function(e,t,r){var n=r("sXyB"),o=r("RIqP"),a=r("lSNA"),l=r("8OQS");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=r("q1tI"),i=r("7ljp").mdx,p=r("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=l(e,["scope","children"]),u=p(t),f=s.useMemo((function(){if(!r)return null;var e=c({React:s,mdx:i},u),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return s.createElement(f,c({},a))}},ZhPi:function(e,t,r){var n=r("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},m4uI:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("q1tI"),o=r.n(n),a=r("Wbzz"),l=r("9eSz"),u=r.n(l);function c(e){var t=e.post;return o.a.createElement("div",{className:"p-4 md:w-1/3"},o.a.createElement("div",{className:"h-full border-2 border-gray-200 rounded-lg overflow-hidden"},o.a.createElement(a.Link,{to:"/"+t.slug},o.a.createElement(u.a,{fluid:t.frontmatter.thumbnail.childImageSharp.fluid,className:"lg:h-48 md:h-36 w-full object-cover object-center",alt:t.frontmatter.title})),o.a.createElement("div",{className:"p-6"},o.a.createElement(a.Link,{to:"/"+t.slug},o.a.createElement("h2",{className:"title-font text-lg font-medium text-gray-900 mb-3"},t.frontmatter.title)),o.a.createElement("p",{className:"leading-relaxed mb-3"},t.excerpt),o.a.createElement("div",{className:"flex items-center flex-wrap"},o.a.createElement(a.Link,{to:"/"+t.slug,className:"text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"},"Читать далее")))))}},sXyB:function(e,t,r){var n=r("SksO"),o=r("b48C");function a(t,r,l){return o()?(e.exports=a=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.default=e.exports,e.exports.__esModule=!0),a.apply(null,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0}}]);
//# sourceMappingURL=component---src-templates-category-tsx-971adb8c6a1253cc062b.js.map