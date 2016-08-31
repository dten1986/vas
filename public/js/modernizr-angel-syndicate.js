/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundblendmode-backgroundsize-bgpositionshorthand-bgpositionxy-bgsizecover-borderradius-boxshadow-canvas-checked-cssanimations-csscalc-cssgradients-cssmask-cssremunit-cssscrollbar-csstransforms-csstransforms3d-csstransitions-cssvhunit-cssvmaxunit-cssvminunit-cssvwunit-cubicbezierrange-flexbox-flexboxlegacy-flexboxtweener-flexwrap-lastchild-multiplebgs-nthchild-objectfit-preserve3d-rgba-videoautoplay-willchange-wrapflow-setclasses !*/
!function(A,e,t){function n(A,e){return typeof A===e}function r(){var A,e,t,r,o,i,a;for(var s in T)if(T.hasOwnProperty(s)){if(A=[],e=T[s],e.name&&(A.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(t=0;t<e.options.aliases.length;t++)A.push(e.options.aliases[t].toLowerCase());for(r=n(e.fn,"function")?e.fn():e.fn,o=0;o<A.length;o++)i=A[o],a=i.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),x.push((r?"":"no-")+a.join("-"))}}function o(A){var e=b.className,t=Modernizr._config.classPrefix||"";if(R&&(e=e.baseVal),Modernizr._config.enableJSClass){var n=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");e=e.replace(n,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(e+=" "+t+A.join(" "+t),R?b.className.baseVal=e:b.className=e)}function i(){return"function"!=typeof e.createElement?e.createElement(arguments[0]):R?e.createElementNS.call(e,"http://www.w3.org/2000/svg",arguments[0]):e.createElement.apply(e,arguments)}function a(A,e){return A-1===e||A===e||A+1===e}function s(A){return A.replace(/([a-z])-([a-z])/g,function(A,e,t){return e+t.toUpperCase()}).replace(/^-/,"")}function d(){var A=e.body;return A||(A=i(R?"svg":"body"),A.fake=!0),A}function l(A,t,n,r){var o,a,s,l,c="modernizr",u=i("div"),p=d();if(parseInt(n,10))for(;n--;)s=i("div"),s.id=r?r[n]:c+(n+1),u.appendChild(s);return o=i("style"),o.type="text/css",o.id="s"+c,(p.fake?p:u).appendChild(o),p.appendChild(u),o.styleSheet?o.styleSheet.cssText=A:o.appendChild(e.createTextNode(A)),u.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",l=b.style.overflow,b.style.overflow="hidden",b.appendChild(p)),a=t(u,A),p.fake?(p.parentNode.removeChild(p),b.style.overflow=l,b.offsetHeight):u.parentNode.removeChild(u),!!a}function c(A,e){return!!~(""+A).indexOf(e)}function u(A,e){return function(){return A.apply(e,arguments)}}function p(A,e,t){var r;for(var o in A)if(A[o]in e)return t===!1?A[o]:(r=e[A[o]],n(r,"function")?u(r,t||e):r);return!1}function h(A){return A.replace(/([A-Z])/g,function(A,e){return"-"+e.toLowerCase()}).replace(/^ms-/,"-ms-")}function f(e,n){var r=e.length;if("CSS"in A&&"supports"in A.CSS){for(;r--;)if(A.CSS.supports(h(e[r]),n))return!0;return!1}if("CSSSupportsRule"in A){for(var o=[];r--;)o.push("("+h(e[r])+":"+n+")");return o=o.join(" or "),l("@supports ("+o+") { #modernizr { position: absolute; } }",function(A){return"absolute"==getComputedStyle(A,null).position})}return t}function g(A,e,r,o){function a(){l&&(delete Y.style,delete Y.modElem)}if(o=n(o,"undefined")?!1:o,!n(r,"undefined")){var d=f(A,r);if(!n(d,"undefined"))return d}for(var l,u,p,h,g,m=["modernizr","tspan","samp"];!Y.style&&m.length;)l=!0,Y.modElem=i(m.shift()),Y.style=Y.modElem.style;for(p=A.length,u=0;p>u;u++)if(h=A[u],g=Y.style[h],c(h,"-")&&(h=s(h)),Y.style[h]!==t){if(o||n(r,"undefined"))return a(),"pfx"==e?h:!0;try{Y.style[h]=r}catch(w){}if(Y.style[h]!=g)return a(),"pfx"==e?h:!0}return a(),!1}function m(A,e,t,r,o){var i=A.charAt(0).toUpperCase()+A.slice(1),a=(A+" "+k.join(i+" ")+i).split(" ");return n(e,"string")||n(e,"undefined")?g(a,e,r,o):(a=(A+" "+Q.join(i+" ")+i).split(" "),p(a,e,t))}function w(A,e,n){return m(A,t,t,e,n)}function v(A,e){if("object"==typeof A)for(var t in A)P(A,t)&&v(t,A[t]);else{A=A.toLowerCase();var n=A.split("."),r=Modernizr[n[0]];if(2==n.length&&(r=r[n[1]]),"undefined"!=typeof r)return Modernizr;e="function"==typeof e?e():e,1==n.length?Modernizr[n[0]]=e:(!Modernizr[n[0]]||Modernizr[n[0]]instanceof Boolean||(Modernizr[n[0]]=new Boolean(Modernizr[n[0]])),Modernizr[n[0]][n[1]]=e),o([(e&&0!=e?"":"no-")+n.join("-")]),Modernizr._trigger(A,e)}return Modernizr}var x=[],T=[],y={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(A,e){var t=this;setTimeout(function(){e(t[A])},0)},addTest:function(A,e,t){T.push({name:A,fn:e,options:t})},addAsyncTest:function(A){T.push({name:null,fn:A})}},Modernizr=function(){};Modernizr.prototype=y,Modernizr=new Modernizr;var b=e.documentElement;Modernizr.addTest("willchange","willChange"in b.style);var R="svg"===b.nodeName.toLowerCase();Modernizr.addTest("canvas",function(){var A=i("canvas");return!(!A.getContext||!A.getContext("2d"))}),Modernizr.addTest("bgpositionshorthand",function(){var A=i("a"),e=A.style,t="right 10px bottom 10px";return e.cssText="background-position: "+t+";",e.backgroundPosition===t}),Modernizr.addTest("multiplebgs",function(){var A=i("a").style;return A.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(A.background)}),Modernizr.addTest("cssremunit",function(){var A=i("a").style;try{A.fontSize="3rem"}catch(e){}return/rem/.test(A.fontSize)}),Modernizr.addTest("rgba",function(){var A=i("a").style;return A.cssText="background-color:rgba(150,255,150,.5)",(""+A.backgroundColor).indexOf("rgba")>-1}),Modernizr.addTest("preserve3d",function(){var A=i("a"),e=i("a");A.style.cssText="display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);",e.style.cssText="display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);",A.appendChild(e),b.appendChild(A);var t=e.getBoundingClientRect();return b.removeChild(A),t.width&&t.width<4});var C=y._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];y._prefixes=C,Modernizr.addTest("csscalc",function(){var A="width:",e="calc(10px);",t=i("a");return t.style.cssText=A+C.join(e+A),!!t.style.length}),Modernizr.addTest("cubicbezierrange",function(){var A=i("a");return A.style.cssText=C.join("transition-timing-function:cubic-bezier(1,0,0,1.1); "),!!A.style.length}),Modernizr.addTest("cssgradients",function(){for(var A,e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="",r=0,o=C.length-1;o>r;r++)A=0===r?"to ":"",n+=e+C[r]+"linear-gradient("+A+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(n+=e+"-webkit-"+t);var a=i("a"),s=a.style;return s.cssText=n,(""+s.backgroundImage).indexOf("gradient")>-1});var E="CSS"in A&&"supports"in A.CSS,B="supportsCSS"in A;Modernizr.addTest("supports",E||B);var F=y.testStyles=l;Modernizr.addTest("checked",function(){return F("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(A){var e=i("input");return e.setAttribute("type","checkbox"),e.setAttribute("checked","checked"),A.appendChild(e),20===e.offsetLeft})}),F("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(A){Modernizr.addTest("lastchild",A.lastChild.offsetWidth>A.firstChild.offsetWidth)},2),F("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(A){for(var e=A.getElementsByTagName("div"),t=!0,n=0;5>n;n++)t=t&&e[n].offsetWidth===n%2+1;Modernizr.addTest("nthchild",t)},5),F("#modernizr{overflow: scroll; width: 40px; height: 40px; }#"+C.join("scrollbar{width:0px} #modernizr::").split("#").slice(1).join("#")+"scrollbar{width:0px}",function(A){Modernizr.addTest("cssscrollbar",40==A.scrollWidth)}),F("#modernizr { height: 50vh; }",function(e){var t=parseInt(A.innerHeight/2,10),n=parseInt((A.getComputedStyle?getComputedStyle(e,null):e.currentStyle).height,10);Modernizr.addTest("cssvhunit",n==t)}),F("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(e){var t=e.childNodes[2],n=e.childNodes[1],r=e.childNodes[0],o=parseInt((n.offsetWidth-n.clientWidth)/2,10),i=r.clientWidth/100,s=r.clientHeight/100,d=parseInt(50*Math.max(i,s),10),l=parseInt((A.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);Modernizr.addTest("cssvmaxunit",a(d,l)||a(d,l-o))},3),F("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(e){var t=e.childNodes[2],n=e.childNodes[1],r=e.childNodes[0],o=parseInt((n.offsetWidth-n.clientWidth)/2,10),i=r.clientWidth/100,s=r.clientHeight/100,d=parseInt(50*Math.min(i,s),10),l=parseInt((A.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);Modernizr.addTest("cssvminunit",a(d,l)||a(d,l-o))},3),F("#modernizr { width: 50vw; }",function(e){var t=parseInt(A.innerWidth/2,10),n=parseInt((A.getComputedStyle?getComputedStyle(e,null):e.currentStyle).width,10);Modernizr.addTest("cssvwunit",n==t)});var G="Moz O ms Webkit",k=y._config.usePrefixes?G.split(" "):[];y._cssomPrefixes=k;var S=function(e){var n,r=C.length,o=A.CSSRule;if("undefined"==typeof o)return t;if(!e)return!1;if(e=e.replace(/^@/,""),n=e.replace(/-/g,"_").toUpperCase()+"_RULE",n in o)return"@"+e;for(var i=0;r>i;i++){var a=C[i],s=a.toUpperCase()+"_"+n;if(s in o)return"@-"+a.toLowerCase()+"-"+e}return!1};y.atRule=S;var Q=y._config.usePrefixes?G.toLowerCase().split(" "):[];y._domPrefixes=Q;var Z={elem:i("modernizr")};Modernizr._q.push(function(){delete Z.elem});var Y={style:Z.elem.style};Modernizr._q.unshift(function(){delete Y.style}),y.testAllProps=m,y.testAllProps=w,Modernizr.addTest("cssanimations",w("animationName","a",!0)),Modernizr.addTest("bgpositionxy",function(){return w("backgroundPositionX","3px",!0)&&w("backgroundPositionY","5px",!0)}),Modernizr.addTest("backgroundsize",w("backgroundSize","100%",!0)),Modernizr.addTest("bgsizecover",w("backgroundSize","cover")),Modernizr.addTest("borderradius",w("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",w("boxShadow","1px 1px",!0)),Modernizr.addTest("flexbox",w("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",w("boxDirection","reverse",!0)),Modernizr.addTest("flexboxtweener",w("flexAlign","end",!0)),Modernizr.addTest("flexwrap",w("flexWrap","wrap",!0)),Modernizr.addTest("cssmask",w("maskRepeat","repeat-x",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&w("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var A=!!w("perspective","1px",!0),e=Modernizr._config.usePrefixes;if(A&&(!e||"webkitPerspective"in b.style)){var t,n="#modernizr{width:0;height:0}";Modernizr.supports?t="@supports (perspective: 1px)":(t="@media (transform-3d)",e&&(t+=",(-webkit-transform-3d)")),t+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",F(n+t,function(e){A=7===e.offsetWidth&&18===e.offsetHeight})}return A}),Modernizr.addTest("csstransitions",w("transition","all",!0));var I=y.prefixed=function(A,e,t){return 0===A.indexOf("@")?S(A):(-1!=A.indexOf("-")&&(A=s(A)),e?m(A,e,t):m(A,"pfx"))};Modernizr.addTest("backgroundblendmode",I("backgroundBlendMode","text")),Modernizr.addTest("objectfit",!!I("objectFit"),{aliases:["object-fit"]}),Modernizr.addTest("wrapflow",function(){var A=I("wrapFlow");if(!A||R)return!1;var e=A.replace(/([A-Z])/g,function(A,e){return"-"+e.toLowerCase()}).replace(/^ms-/,"-ms-"),n=i("div"),r=i("div"),o=i("span");r.style.cssText="position: absolute; left: 50px; width: 100px; height: 20px;"+e+":end;",o.innerText="X",n.appendChild(r),n.appendChild(o),b.appendChild(n);var a=o.offsetLeft;return b.removeChild(n),r=o=n=t,150==a}),Modernizr.addTest("video",function(){var A=i("video"),e=!1;try{(e=!!A.canPlayType)&&(e=new Boolean(e),e.ogg=A.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),e.h264=A.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),e.webm=A.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),e.vp9=A.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),e.hls=A.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(t){}return e});var P;!function(){var A={}.hasOwnProperty;P=n(A,"undefined")||n(A.call,"undefined")?function(A,e){return e in A&&n(A.constructor.prototype[e],"undefined")}:function(e,t){return A.call(e,t)}}(),y._l={},y.on=function(A,e){this._l[A]||(this._l[A]=[]),this._l[A].push(e),Modernizr.hasOwnProperty(A)&&setTimeout(function(){Modernizr._trigger(A,Modernizr[A])},0)},y._trigger=function(A,e){if(this._l[A]){var t=this._l[A];setTimeout(function(){var A,n;for(A=0;A<t.length;A++)(n=t[A])(e)},0),delete this._l[A]}},Modernizr._q.push(function(){y.addTest=v}),Modernizr.addAsyncTest(function(){function A(i){r++,clearTimeout(e);var a=i&&"playing"===i.type||0!==o.currentTime;return!a&&n>r?void(e=setTimeout(A,t)):(o.removeEventListener("playing",A,!1),v("videoautoplay",a),void o.parentNode.removeChild(o))}var e,t=200,n=5,r=0,o=i("video"),a=o.style;if(!(Modernizr.video&&"autoplay"in o))return void v("videoautoplay",!1);a.position="absolute",a.height=0,a.width=0;try{if(Modernizr.video.ogg)o.src="data:video/ogg;base64,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";else{if(!Modernizr.video.h264)return void v("videoautoplay",!1);o.src="data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ=="}}catch(s){return void v("videoautoplay",!1)}o.setAttribute("autoplay",""),o.style.cssText="display:none",b.appendChild(o),setTimeout(function(){o.addEventListener("playing",A,!1),e=setTimeout(A,t)},0)}),r(),o(x),delete y.addTest,delete y.addAsyncTest;for(var M=0;M<Modernizr._q.length;M++)Modernizr._q[M]();A.Modernizr=Modernizr}(window,document);