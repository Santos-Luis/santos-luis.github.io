(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/eHF":function(e,t,i){"use strict";function a(e,t){var i={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(i[a]=e[a]);return i}function n(e,t){var i=t.distance,a=t.left,n=t.right,r=t.up,o=t.down,s=t.top,d=t.bottom,u=t.big,c=t.mirror,p=t.opposite,h=(i?i.toString():0)+((a?1:0)|(n?2:0)|(s||o?4:0)|(d||r?8:0)|(c?16:0)|(p?32:0)|(e?64:0)|(u?128:0));if(f.hasOwnProperty(h))return f[h];var m=a||n||r||o||s||d,v=void 0,b=void 0;if(m){if(!c!=!(e&&p)){var g=[n,a,d,s,o,r];a=g[0],n=g[1],s=g[2],d=g[3],r=g[4],o=g[5]}var y=i||(u?"2000px":"100%");v=a?"-"+y:n?y:"0",b=o||s?"-"+y:r||d?y:"0"}return f[h]=(0,l.animation)((e?"to":"from")+" {opacity: 0;"+(m?" transform: translate3d("+v+", "+b+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),f[h]}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=e.children,r=(e.out,e.forever),o=e.timeout,s=e.duration,d=void 0===s?l.defaults.duration:s,c=e.delay,f=void 0===c?l.defaults.delay:c,p=e.count,h=void 0===p?l.defaults.count:p,m=a(e,["children","out","forever","timeout","duration","delay","count"]),v={make:n,duration:void 0===o?d:o,delay:f,forever:r,count:h,style:{animationFillMode:"both"},reverse:m.left};return t?(0,u.default)(m,v,v,i):v}Object.defineProperty(t,"__esModule",{value:!0});var o,s=i("17x9"),l=i("ar19"),d=i("eH+L"),u=(o=d)&&o.__esModule?o:{default:o},c={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,big:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,distance:s.string,delay:s.number,count:s.number,forever:s.bool},f={};r.propTypes=c,t.default=r,e.exports=t.default},"28nh":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var i=[],a=!0,n=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(i.push(o.value),!t||i.length!==t);a=!0);}catch(e){n=!0,r=e}finally{try{!a&&s.return&&s.return()}finally{if(n)throw r}}return i}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},s=function(){function e(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}}(),l=i("q1tI"),d=(a=l)&&a.__esModule?a:{default:a},u=i("17x9"),c=i("ar19"),f=(0,u.shape)({make:u.func,duration:u.number.isRequired,delay:u.number.isRequired,forever:u.bool,count:u.number.isRequired,style:u.object.isRequired,reverse:u.bool}),p={collapse:u.bool,collapseEl:u.element,cascade:u.bool,wait:u.number,force:u.bool,disabled:u.bool,appear:u.bool,enter:u.bool,exit:u.bool,fraction:u.number,refProp:u.string,innerRef:u.func,onReveal:u.func,unmountOnExit:u.bool,mountOnEnter:u.bool,inEffect:f.isRequired,outEffect:(0,u.oneOfType)([f,(0,u.oneOf)([!1])]).isRequired,ssrReveal:u.bool,collapseOnly:u.bool,ssrFadeout:u.bool},h={transitionGroup:u.object},m=function(e){function t(e,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i));return a.isOn=void 0===e.when||!!e.when,a.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:a.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},a.savedChild=!1,a.isShown=!1,c.observerMode?a.handleObserve=a.handleObserve.bind(a):(a.revealHandler=a.makeHandler(a.reveal),a.resizeHandler=a.makeHandler(a.resize)),a.saveRef=a.saveRef.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?o({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!c.observerMode&&this.props.collapse&&window.document.dispatchEvent(c.collapseend)))}},{key:"animationEnd",value:function(e,t,i){var a=this,n=i.forever,r=i.count,o=i.delay,s=i.duration;if(!n){this.animationEndTimeout=window.setTimeout((function(){a&&a.el&&(a.animationEndTimeout=void 0,e.call(a))}),o+(s+(t?s:0)*r))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,i){var a=i.duration+(t.cascade?i.duration:0),n=this.isOn?this.getDimensionValue():0,r=void 0,o=void 0;if(t.collapseOnly)r=i.duration/3,o=i.delay;else{var s=a>>2,l=s>>1;r=s,o=i.delay+(this.isOn?0:a-s-l),e.style.animationDuration=a-s+(this.isOn?l:-l)+"ms",e.style.animationDelay=i.delay+(this.isOn?s-l:0)+"ms"}return e.collapse={height:n,transition:"height "+r+"ms ease "+o+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,i=e[t?"outEffect":"inEffect"],a="style"in i&&i.style.animationName||void 0,n=void 0;e.collapseOnly?n={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&i.make&&(a=i.make),n={hasAppeared:!0,hasExited:!1,collapse:void 0,style:o({},i.style,{animationDuration:i.duration+"ms",animationDelay:i.delay+"ms",animationIterationCount:i.forever?"infinite":i.count,opacity:1,animationName:a}),className:i.className}),this.setState(e.collapse?this.collapse(n,e,i):n),t?(this.savedChild=d.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,i)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),c.ssr&&(0,c.disableSsr)()}},{key:"handleObserve",value:function(e,t){r(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&c.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];c.globalHide||(0,c.hideAll)(),this&&this.el&&(e||(e=this.props),c.ssr&&(0,c.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout((function(){return t.reveal(e)}),200)):i||this.inViewport(e)||e.force?this.animate(e):c.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var i=this.context.transitionGroup,a=i&&!i.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!a||c.ssr&&!c.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):c.ssr&&(c.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout((function(){return e.reveal(e.props,!0)}),2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,i=void 0;i="string"==typeof e?e.split("").map((function(e,t){return d.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)})):d.default.Children.toArray(e);var a=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],r=a.duration,s=a.reverse,l=i.length,u=2*r;this.props.collapse&&(u=parseInt(this.state.style.animationDuration,10),r=u/2);var f=s?l:0;return i.map((function(e){return"object"===(void 0===e?"undefined":n(e))&&e?d.default.cloneElement(e,{style:o({},e.props.style,t.state.style,{animationDuration:Math.round((0,c.cascade)(s?f--:f++,0,l,r,u))+"ms"})}):e}))}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===n(this.props.children)){var e=d.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:d.default.createElement("div",null,e)}return d.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var i=!1,a=t.props,n=a.style,r=a.className,s=a.children,l=this.props.disabled?r:(this.props.outEffect?c.namespace:"")+(this.state.className?" "+this.state.className:"")+(r?" "+r:"")||void 0,u=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&s&&this.state.style.animationName?(i=this.cascade(s),u=o({},n,{opacity:1})):u=this.props.disabled?n:o({},n,this.state.style);var f=o({},this.props.props,function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}({className:l,style:u},this.props.refProp,this.saveRef)),p=d.default.cloneElement(t,f,e?i||s:void 0);return void 0!==this.props.collapse?this.props.collapseEl?d.default.cloneElement(this.props.collapseEl,{style:o({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:p}):d.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:p}):p}},{key:"makeHandler",value:function(e){var t=this,i=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,c.raf)(i),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var i=this.el.offsetHeight,a=window.pageYOffset-t.getTop(this.el),n=Math.min(i,window.innerHeight)*(c.globalHide?e.fraction:0);return a>n-window.innerHeight&&a<i-n}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){c.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!c.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(d.default.Component);m.propTypes=p,m.defaultProps={fraction:.2,refProp:"ref"},m.contextTypes=h,m.displayName="RevealBase",t.default=m,e.exports=t.default},"5aZr":function(e,t,i){e.exports={bio:"bio-module--bio--3cpvH",bio__avatar:"bio-module--bio__avatar--bF4TM",bio__authorName:"bio-module--bio__author-name--107Cx",bio__authorDescription:"bio-module--bio__author-description--2jUUg",bio__iconsWrapper:"bio-module--bio__icons-wrapper--3f5mG",nonRootBio:"bio-module--non-root-bio--2NJ-I",nonRootBio__avatarWrapper:"bio-module--non-root-bio__avatar-wrapper--3jrLc",nonRootBio__avatar:"bio-module--non-root-bio__avatar--1hVgk",nonRootBio__iconsWrapper:"bio-module--non-root-bio__icons-wrapper--8Nfed",bio__avatarWrapper:"bio-module--bio__avatar-wrapper--2Kffd",bio__readMoreWrapper:"bio-module--bio__read-more-wrapper--27Zit",nonRootBio__readMoreWrapper:"bio-module--non-root-bio__read-more-wrapper--NXNYi",bio__readMore:"bio-module--bio__read-more--2IJ-J",nonRootBio__readMore:"bio-module--non-root-bio__read-more--3Cqb6",nonRootBio__authorName:"bio-module--non-root-bio__author-name--ii72l",nonRootBio__authorDescription:"bio-module--non-root-bio__author-description--3JueQ"}},"6Gk8":function(e,t,i){"use strict";var a=i("q1tI"),n=i.n(a),r=i("Wbzz"),o=i("9eSz"),s=i.n(o),l=i("/eHF"),d=i.n(l),u=i("gN/f"),c=i.n(u),f=i("xois"),p=i.n(f),h=i("I8so"),m=i.n(h),v=i("vP2Q"),b=i.n(v),g={github:n.a.createElement(c.a,null),linkedin:n.a.createElement(p.a,null),instagram:n.a.createElement(m.a,null)},y=function(e){var t=e.name,i=e.href;return n.a.createElement("li",{className:b.a.icon},n.a.createElement("a",{"aria-label":t,href:i,rel:"noopener noreferrer",target:"_blank"},g[t]))},w=i("5aZr"),E=i.n(w);t.a=function(e){var t,i,o,l,u=e.rootPath,c=Object(r.useStaticQuery)("521915702"),f=null===(t=c.site.siteMetadata)||void 0===t?void 0:t.author,p=null===(i=c.site.siteMetadata)||void 0===i?void 0:i.social,h=null==c||null===(o=c.avatar)||void 0===o||null===(l=o.childImageSharp)||void 0===l?void 0:l.fixed,m=u?"bio":"nonRootBio",v=n.a.createElement("ul",{className:E.a[m+"__iconsWrapper"]},Object.keys(p).map((function(e){return n.a.createElement(y,{name:e,href:p[e],key:e})}))),b=Object(a.useState)(!u),g=b[0],w=b[1],_=Object(a.useState)("Read more"),O=_[0],S=_[1];return function(){var e=Object(a.useState)(!1),t=e[0],i=e[1];return Object(a.useEffect)((function(){var e=void 0===window.navigator?"":navigator.userAgent,t=Boolean(e.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));i(t)}),[]),{isMobile:t}}().isMobile?n.a.createElement("div",{className:E.a[""+m]},n.a.createElement("div",{className:E.a[m+"__avatarWrapper"]},h&&n.a.createElement(s.a,{fixed:h,alt:(null==f?void 0:f.name)||"",className:E.a[m+"__avatar"],imgStyle:{borderRadius:"50%"}}),p&&v),n.a.createElement("div",{className:E.a[m+"__readMoreWrapper"]},(null==f?void 0:f.name)&&n.a.createElement("p",{className:E.a[m+"__authorName"]},n.a.createElement("strong",null,f.name)),u&&n.a.createElement("button",{className:E.a[m+"__readMore"],"aria-label":"Read more",onClick:function(){w(!g),console.log("i am here"),S(g?"Read more":"Read less")}},n.a.createElement("span",null,O))),(null==f?void 0:f.summary)&&u&&n.a.createElement(d.a,{top:!0,collapse:!0,when:g,duration:1e3,distance:"20px"},n.a.createElement("p",{dangerouslySetInnerHTML:{__html:f.summary},className:E.a[m+"__authorDescription"]})),(null==f?void 0:f.summary)&&!u&&n.a.createElement("p",{dangerouslySetInnerHTML:{__html:f.summary},className:E.a[m+"__authorDescription"]})):n.a.createElement("div",{className:E.a[""+m]},n.a.createElement("div",{className:E.a[m+"__avatarWrapper"]},h&&n.a.createElement(s.a,{fixed:h,alt:(null==f?void 0:f.name)||"",className:E.a[m+"__avatar"],imgStyle:{borderRadius:"50%"}}),p&&!u&&v),(null==f?void 0:f.name)&&n.a.createElement("p",{className:E.a[m+"__authorName"]},n.a.createElement("strong",null,f.name)),(null==f?void 0:f.summary)&&n.a.createElement("p",{dangerouslySetInnerHTML:{__html:f.summary},className:E.a[m+"__authorDescription"]}),p&&u&&v)}},"9eSz":function(e,t,i){"use strict";var a=i("TqRt");t.__esModule=!0,t.default=void 0;var n,r=a(i("PJYZ")),o=a(i("VbXa")),s=a(i("8OQS")),l=a(i("pVnL")),d=a(i("q1tI")),u=a(i("17x9")),c=function(e){var t=(0,l.default)({},e),i=t.resolutions,a=t.sizes,n=t.critical;return i&&(t.fixed=i,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=_([].concat(t.fluid))),t.fixed&&(t.fixed=_([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(g&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,i=e.fixed,a=h(t||i||[]);return a&&a.src},h=function(e){if(g&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var i=e.findIndex((function(e){return void 0===e.media}));if(-1!==i)return e[i]}return e[0]},m=Object.create({}),v=function(e){var t=c(e),i=p(t);return m[i]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,g="undefined"!=typeof window,y=g&&window.IntersectionObserver,w=new WeakMap;function E(e){return e.map((function(e){var t=e.src,i=e.srcSet,a=e.srcSetWebp,n=e.media,r=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},a&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:a,sizes:r}),i&&d.default.createElement("source",{media:n,srcSet:i,sizes:r}))}))}function _(e){var t=[],i=[];return e.forEach((function(e){return(e.media?t:i).push(e)})),[].concat(t,i)}function O(e){return e.map((function(e){var t=e.src,i=e.media,a=e.tracedSVG;return d.default.createElement("source",{key:t,media:i,srcSet:a})}))}function S(e){return e.map((function(e){var t=e.src,i=e.media,a=e.base64;return d.default.createElement("source",{key:t,media:i,srcSet:a})}))}function R(e,t){var i=e.srcSet,a=e.srcSetWebp,n=e.media,r=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?a:i)+'" '+(r?'sizes="'+r+'" ':"")+"/>"}var k=function(e,t){var i=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return i&&(i.observe(e),w.set(e,t)),function(){i.unobserve(e),w.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',i=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?R(e,!0):"")+R(e)})).join("")+"<img "+d+o+s+i+a+t+r+n+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=d.default.forwardRef((function(e,t){var i=e.src,a=e.imageVariants,n=e.generateSources,r=e.spreadProps,o=e.ariaHidden,s=d.default.createElement(T,(0,l.default)({ref:t,src:i},r,{ariaHidden:o}));return a.length>1?d.default.createElement("picture",null,n(a),s):s})),T=d.default.forwardRef((function(e,t){var i=e.sizes,a=e.srcSet,n=e.src,r=e.style,o=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,p=e.ariaHidden,h=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":p,sizes:i,srcSet:a,src:n},h,{onLoad:o,onError:u,ref:t,loading:c,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))}));T.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var I=function(e){function t(t){var i;(i=e.call(this,t)||this).seenBefore=g&&v(t),i.isCritical="eager"===t.loading||t.critical,i.addNoScript=!(i.isCritical&&!t.fadeIn),i.useIOSupport=!b&&y&&!i.isCritical&&!i.seenBefore;var a=i.isCritical||g&&(b||!i.useIOSupport);return i.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!i.seenBefore&&t.fadeIn,isHydrated:!1},i.imageRef=d.default.createRef(),i.placeholderRef=t.placeholderRef||d.default.createRef(),i.handleImageLoaded=i.handleImageLoaded.bind((0,r.default)(i)),i.handleRef=i.handleRef.bind((0,r.default)(i)),i}(0,o.default)(t,e);var i=t.prototype;return i.componentDidMount=function(){if(this.setState({isHydrated:g}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:v(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},i.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},i.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,(function(){var e=v(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},i.handleImageLoaded=function(){var e,t,i;e=this.props,t=c(e),(i=p(t))&&(m[i]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},i.render=function(){var e=c(this.props),t=e.title,i=e.alt,a=e.className,n=e.style,r=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,m=e.fluid,v=e.fixed,b=e.backgroundColor,g=e.durationFadeIn,y=e.Tag,w=e.itemProp,_=e.loading,R=e.draggable,k=m||v;if(!k)return null;var I=!1===this.state.fadeIn||this.state.imgLoaded,M=!0===this.state.fadeIn&&!this.state.imgCached,H=(0,l.default)({opacity:I?1:0,transition:M?"opacity "+g+"ms":"none"},s),N="boolean"==typeof b?"lightgray":b,C={transitionDelay:g+"ms"},P=(0,l.default)({opacity:this.state.imgLoaded?0:1},M&&C,s,f),z={title:t,alt:this.state.isVisible?"":i,style:P,className:p,itemProp:w},j=this.state.isHydrated?h(k):k[0];if(m)return d.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:j.maxWidth?j.maxWidth+"px":null,maxHeight:j.maxHeight?j.maxHeight+"px":null},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},d.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),N&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},M&&C)}),j.base64&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:j.base64,spreadProps:z,imageVariants:k,generateSources:S}),j.tracedSVG&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:j.tracedSVG,spreadProps:z,imageVariants:k,generateSources:O}),this.state.isVisible&&d.default.createElement("picture",null,E(k),d.default.createElement(T,{alt:i,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:_,draggable:R})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,l.default)({alt:i,title:t,loading:_},j,{imageVariants:k}))}}));if(v){var V=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},r);return"inherit"===r.display&&delete V.display,d.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:V,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},N&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:N,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},M&&C)}),j.base64&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:j.base64,spreadProps:z,imageVariants:k,generateSources:S}),j.tracedSVG&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:j.tracedSVG,spreadProps:z,imageVariants:k,generateSources:O}),this.state.isVisible&&d.default.createElement("picture",null,E(k),d.default.createElement(T,{alt:i,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:_,draggable:R})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,l.default)({alt:i,title:t,loading:_},j,{imageVariants:k}))}}))}return null},t}(d.default.Component);I.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var M=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),H=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function N(e){return function(t,i,a){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+a+"`, but their values are both `undefined`.");u.default.checkPropTypes(((n={})[i]=e,n),t,"prop",a)}}I.propTypes={resolutions:M,sizes:H,fixed:N(u.default.oneOfType([M,u.default.arrayOf(M)])),fluid:N(u.default.oneOfType([H,u.default.arrayOf(H)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var C=I;t.default=C},I8so:function(e,t,i){var a=i("q1tI");function n(e){return a.createElement("svg",e,a.createElement("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"}))}n.defaultProps={width:"24",height:"24"},e.exports=n,n.default=n},ar19:function(e,t,i){"use strict";function a(e){try{return h.insertRule(e,h.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function n(){u||(t.globalHide=u=!0,window.removeEventListener("scroll",n,!0),a("."+r+" { opacity: 0; }"),window.removeEventListener("orientationchange",n,!0),window.document.removeEventListener("visibilitychange",n))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=a,t.cascade=function(e,t,i,a,n){var r=Math.log(a),o=(Math.log(n)-r)/(i-t);return Math.exp(r+o*(e-t))},t.animation=function(e){if(!h)return"";var t="@keyframes "+(m+f)+"{"+e+"}",i=p[e];return i?""+m+i:(h.insertRule(t,h.cssRules.length),p[e]=f,""+m+f++)},t.hideAll=n,t.default=function(e){var i=e.ssrFadeout;t.fadeOutEnabled=i};var r=t.namespace="react-reveal",o=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),s=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},d=t.disableSsr=function(){return t.ssr=o=!1},u=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),c=(t.ie10=!1,t.collapseend=void 0),f=1,p={},h=!1,m=r+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=s="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=o=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),o&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=o=!1),o&&window.setTimeout(d,1500),s||(t.collapseend=c=document.createEvent("Event"),c.initEvent("collapseend",!0,!0));var v=document.createElement("style");document.head.appendChild(v),v.sheet&&v.sheet.cssRules&&v.sheet.insertRule&&(h=v.sheet,window.addEventListener("scroll",n,!0),window.addEventListener("orientationchange",n,!0),window.document.addEventListener("visibilitychange",n))}},"eH+L":function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e};t.default=function(e,t,i,a){return"in"in e&&(e.when=e.in),r.default.Children.count(a)<2?r.default.createElement(o.default,n({},e,{inEffect:t,outEffect:i,children:a})):(a=r.default.Children.map(a,(function(a){return r.default.createElement(o.default,n({},e,{inEffect:t,outEffect:i,children:a}))})),"Fragment"in r.default?r.default.createElement(r.default.Fragment,null,a):r.default.createElement("span",null,a))};var r=a(i("q1tI")),o=a(i("28nh"));e.exports=t.default},"gN/f":function(e,t,i){var a=i("q1tI");function n(e){return a.createElement("svg",e,a.createElement("path",{d:"M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"}))}n.defaultProps={width:"24",height:"24"},e.exports=n,n.default=n},vP2Q:function(e,t,i){e.exports={icon:"icon-module--icon--HEuXv"}},xois:function(e,t,i){var a=i("q1tI");function n(e){return a.createElement("svg",e,a.createElement("path",{d:"M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"}))}n.defaultProps={width:"24",height:"24"},e.exports=n,n.default=n}}]);
//# sourceMappingURL=cd7d5f864fc9e15ed8adef086269b0aeff617554-fdcbae048dbaf187f766.js.map