"use strict";(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[9109],{40273:(n,r,e)=>{e.d(r,{Z:()=>A});var o=e(94015);var c=e.n(o);var t=e(23645);var i=e.n(t);var m=i()(c());m.push([n.id,"/*\n  Name:       Moxer Theme\n  Author:     Mattia Astorino (http://github.com/equinusocio)\n  Website:    https://github.com/moxer-theme/moxer-code\n*/\n\n.cm-s-moxer.CodeMirror {\n  background-color: #090A0F;\n  color: #8E95B4;\n  line-height: 1.8;\n}\n\n.cm-s-moxer .CodeMirror-gutters {\n  background: #090A0F;\n  color: #35394B;\n  border: none;\n}\n\n.cm-s-moxer .CodeMirror-guttermarker,\n.cm-s-moxer .CodeMirror-guttermarker-subtle,\n.cm-s-moxer .CodeMirror-linenumber {\n  color: #35394B;\n}\n\n\n.cm-s-moxer .CodeMirror-cursor {\n  border-left: 1px solid #FFCC00;\n}\n\n.cm-s-moxer div.CodeMirror-selected {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-moxer.CodeMirror-focused div.CodeMirror-selected {\n  background: #212431;\n}\n\n.cm-s-moxer .CodeMirror-line::selection,\n.cm-s-moxer .CodeMirror-line>span::selection,\n.cm-s-moxer .CodeMirror-line>span>span::selection {\n  background: #212431;\n}\n\n.cm-s-moxer .CodeMirror-line::-moz-selection,\n.cm-s-moxer .CodeMirror-line>span::-moz-selection,\n.cm-s-moxer .CodeMirror-line>span>span::-moz-selection {\n  background: #212431;\n}\n\n.cm-s-moxer .CodeMirror-activeline-background,\n.cm-s-moxer .CodeMirror-activeline-gutter .CodeMirror-linenumber {\n  background: rgba(33, 36, 49, 0.5);\n}\n\n.cm-s-moxer .cm-keyword {\n  color: #D46C6C;\n}\n\n.cm-s-moxer .cm-operator {\n  color: #D46C6C;\n}\n\n.cm-s-moxer .cm-variable-2 {\n  color: #81C5DA;\n}\n\n\n.cm-s-moxer .cm-variable-3,\n.cm-s-moxer .cm-type {\n  color: #f07178;\n}\n\n.cm-s-moxer .cm-builtin {\n  color: #FFCB6B;\n}\n\n.cm-s-moxer .cm-atom {\n  color: #A99BE2;\n}\n\n.cm-s-moxer .cm-number {\n  color: #7CA4C0;\n}\n\n.cm-s-moxer .cm-def {\n  color: #F5DFA5;\n}\n\n.cm-s-moxer .CodeMirror-line .cm-def ~ .cm-def {\n  color: #81C5DA;\n}\n\n.cm-s-moxer .cm-string {\n  color: #B2E4AE;\n}\n\n.cm-s-moxer .cm-string-2 {\n  color: #f07178;\n}\n\n.cm-s-moxer .cm-comment {\n  color: #3F445A;\n}\n\n.cm-s-moxer .cm-variable {\n  color: #8E95B4;\n}\n\n.cm-s-moxer .cm-tag {\n  color: #FF5370;\n}\n\n.cm-s-moxer .cm-meta {\n  color: #FFCB6B;\n}\n\n.cm-s-moxer .cm-attribute {\n  color: #C792EA;\n}\n\n.cm-s-moxer .cm-property {\n  color: #81C5DA;\n}\n\n.cm-s-moxer .cm-qualifier {\n  color: #DECB6B;\n}\n\n.cm-s-moxer .cm-variable-3,\n.cm-s-moxer .cm-type {\n  color: #DECB6B;\n}\n\n\n.cm-s-moxer .cm-error {\n  color: rgba(255, 255, 255, 1.0);\n  background-color: #FF5370;\n}\n\n.cm-s-moxer .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}","",{version:3,sources:["webpack://./node_modules/codemirror/theme/moxer.css"],names:[],mappings:"AAAA;;;;CAIC;;AAED;EACE,yBAAyB;EACzB,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,cAAc;EACd,YAAY;AACd;;AAEA;;;EAGE,cAAc;AAChB;;;AAGA;EACE,8BAA8B;AAChC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;;EAGE,mBAAmB;AACrB;;AAEA;;;EAGE,mBAAmB;AACrB;;AAEA;;EAEE,iCAAiC;AACnC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;;AAGA;;EAEE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,cAAc;AAChB;;;AAGA;EACE,+BAA+B;EAC/B,yBAAyB;AAC3B;;AAEA;EACE,0BAA0B;EAC1B,uBAAuB;AACzB",sourcesContent:["/*\n  Name:       Moxer Theme\n  Author:     Mattia Astorino (http://github.com/equinusocio)\n  Website:    https://github.com/moxer-theme/moxer-code\n*/\n\n.cm-s-moxer.CodeMirror {\n  background-color: #090A0F;\n  color: #8E95B4;\n  line-height: 1.8;\n}\n\n.cm-s-moxer .CodeMirror-gutters {\n  background: #090A0F;\n  color: #35394B;\n  border: none;\n}\n\n.cm-s-moxer .CodeMirror-guttermarker,\n.cm-s-moxer .CodeMirror-guttermarker-subtle,\n.cm-s-moxer .CodeMirror-linenumber {\n  color: #35394B;\n}\n\n\n.cm-s-moxer .CodeMirror-cursor {\n  border-left: 1px solid #FFCC00;\n}\n\n.cm-s-moxer div.CodeMirror-selected {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-moxer.CodeMirror-focused div.CodeMirror-selected {\n  background: #212431;\n}\n\n.cm-s-moxer .CodeMirror-line::selection,\n.cm-s-moxer .CodeMirror-line>span::selection,\n.cm-s-moxer .CodeMirror-line>span>span::selection {\n  background: #212431;\n}\n\n.cm-s-moxer .CodeMirror-line::-moz-selection,\n.cm-s-moxer .CodeMirror-line>span::-moz-selection,\n.cm-s-moxer .CodeMirror-line>span>span::-moz-selection {\n  background: #212431;\n}\n\n.cm-s-moxer .CodeMirror-activeline-background,\n.cm-s-moxer .CodeMirror-activeline-gutter .CodeMirror-linenumber {\n  background: rgba(33, 36, 49, 0.5);\n}\n\n.cm-s-moxer .cm-keyword {\n  color: #D46C6C;\n}\n\n.cm-s-moxer .cm-operator {\n  color: #D46C6C;\n}\n\n.cm-s-moxer .cm-variable-2 {\n  color: #81C5DA;\n}\n\n\n.cm-s-moxer .cm-variable-3,\n.cm-s-moxer .cm-type {\n  color: #f07178;\n}\n\n.cm-s-moxer .cm-builtin {\n  color: #FFCB6B;\n}\n\n.cm-s-moxer .cm-atom {\n  color: #A99BE2;\n}\n\n.cm-s-moxer .cm-number {\n  color: #7CA4C0;\n}\n\n.cm-s-moxer .cm-def {\n  color: #F5DFA5;\n}\n\n.cm-s-moxer .CodeMirror-line .cm-def ~ .cm-def {\n  color: #81C5DA;\n}\n\n.cm-s-moxer .cm-string {\n  color: #B2E4AE;\n}\n\n.cm-s-moxer .cm-string-2 {\n  color: #f07178;\n}\n\n.cm-s-moxer .cm-comment {\n  color: #3F445A;\n}\n\n.cm-s-moxer .cm-variable {\n  color: #8E95B4;\n}\n\n.cm-s-moxer .cm-tag {\n  color: #FF5370;\n}\n\n.cm-s-moxer .cm-meta {\n  color: #FFCB6B;\n}\n\n.cm-s-moxer .cm-attribute {\n  color: #C792EA;\n}\n\n.cm-s-moxer .cm-property {\n  color: #81C5DA;\n}\n\n.cm-s-moxer .cm-qualifier {\n  color: #DECB6B;\n}\n\n.cm-s-moxer .cm-variable-3,\n.cm-s-moxer .cm-type {\n  color: #DECB6B;\n}\n\n\n.cm-s-moxer .cm-error {\n  color: rgba(255, 255, 255, 1.0);\n  background-color: #FF5370;\n}\n\n.cm-s-moxer .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}"],sourceRoot:""}]);const A=m},23645:n=>{n.exports=function(n){var r=[];r.toString=function r(){return this.map((function(r){var e=n(r);if(r[2]){return"@media ".concat(r[2]," {").concat(e,"}")}return e})).join("")};r.i=function(n,e,o){if(typeof n==="string"){n=[[null,n,""]]}var c={};if(o){for(var t=0;t<this.length;t++){var i=this[t][0];if(i!=null){c[i]=true}}}for(var m=0;m<n.length;m++){var A=[].concat(n[m]);if(o&&c[A[0]]){continue}if(e){if(!A[2]){A[2]=e}else{A[2]="".concat(e," and ").concat(A[2])}}r.push(A)}};return r}},94015:n=>{function r(n,r){return i(n)||t(n,r)||o(n,r)||e()}function e(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(n,r){if(!n)return;if(typeof n==="string")return c(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor)e=n.constructor.name;if(e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return c(n,r)}function c(n,r){if(r==null||r>n.length)r=n.length;for(var e=0,o=new Array(r);e<r;e++){o[e]=n[e]}return o}function t(n,r){var e=n&&(typeof Symbol!=="undefined"&&n[Symbol.iterator]||n["@@iterator"]);if(e==null)return;var o=[];var c=true;var t=false;var i,m;try{for(e=e.call(n);!(c=(i=e.next()).done);c=true){o.push(i.value);if(r&&o.length===r)break}}catch(A){t=true;m=A}finally{try{if(!c&&e["return"]!=null)e["return"]()}finally{if(t)throw m}}return o}function i(n){if(Array.isArray(n))return n}n.exports=function n(e){var o=r(e,4),c=o[1],t=o[3];if(!t){return c}if(typeof btoa==="function"){var i=btoa(unescape(encodeURIComponent(JSON.stringify(t))));var m="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i);var A="/*# ".concat(m," */");var a=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[c].concat(a).concat([A]).join("\n")}return[c].join("\n")}},69109:(n,r,e)=>{e.r(r);e.d(r,{default:()=>A});var o=e(93379);var c=e.n(o);var t=e(40273);var i={};i.insert="head";i.singleton=false;var m=c()(t.Z,i);const A=t.Z.locals||{}},93379:(n,r,e)=>{var o=function n(){var r;return function n(){if(typeof r==="undefined"){r=Boolean(window&&document&&document.all&&!window.atob)}return r}}();var c=function n(){var r={};return function n(e){if(typeof r[e]==="undefined"){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement){try{o=o.contentDocument.head}catch(c){o=null}}r[e]=o}return r[e]}}();var t=[];function i(n){var r=-1;for(var e=0;e<t.length;e++){if(t[e].identifier===n){r=e;break}}return r}function m(n,r){var e={};var o=[];for(var c=0;c<n.length;c++){var m=n[c];var A=r.base?m[0]+r.base:m[0];var a=e[A]||0;var s="".concat(A," ").concat(a);e[A]=a+1;var l=i(s);var u={css:m[1],media:m[2],sourceMap:m[3]};if(l!==-1){t[l].references++;t[l].updater(u)}else{t.push({identifier:s,updater:f(u,r),references:1})}o.push(s)}return o}function A(n){var r=document.createElement("style");var o=n.attributes||{};if(typeof o.nonce==="undefined"){var t=true?e.nc:0;if(t){o.nonce=t}}Object.keys(o).forEach((function(n){r.setAttribute(n,o[n])}));if(typeof n.insert==="function"){n.insert(r)}else{var i=c(n.insert||"head");if(!i){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")}i.appendChild(r)}return r}function a(n){if(n.parentNode===null){return false}n.parentNode.removeChild(n)}var s=function n(){var r=[];return function n(e,o){r[e]=o;return r.filter(Boolean).join("\n")}}();function l(n,r,e,o){var c=e?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet){n.styleSheet.cssText=s(r,c)}else{var t=document.createTextNode(c);var i=n.childNodes;if(i[r]){n.removeChild(i[r])}if(i.length){n.insertBefore(t,i[r])}else{n.appendChild(t)}}}function u(n,r,e){var o=e.css;var c=e.media;var t=e.sourceMap;if(c){n.setAttribute("media",c)}else{n.removeAttribute("media")}if(t&&typeof btoa!=="undefined"){o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(t))))," */")}if(n.styleSheet){n.styleSheet.cssText=o}else{while(n.firstChild){n.removeChild(n.firstChild)}n.appendChild(document.createTextNode(o))}}var d=null;var C=0;function f(n,r){var e;var o;var c;if(r.singleton){var t=C++;e=d||(d=A(r));o=l.bind(null,e,t,false);c=l.bind(null,e,t,true)}else{e=A(r);o=u.bind(null,e,r);c=function n(){a(e)}}o(n);return function r(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap){return}o(n=e)}else{c()}}}n.exports=function(n,r){r=r||{};if(!r.singleton&&typeof r.singleton!=="boolean"){r.singleton=o()}n=n||[];var e=m(n,r);return function n(o){o=o||[];if(Object.prototype.toString.call(o)!=="[object Array]"){return}for(var c=0;c<e.length;c++){var A=e[c];var a=i(A);t[a].references--}var s=m(o,r);for(var l=0;l<e.length;l++){var u=e[l];var d=i(u);if(t[d].references===0){t[d].updater();t.splice(d,1)}}e=s}}}}]);
//# sourceMappingURL=9109.77ab56a2fdca85cd5763.js.map?v=77ab56a2fdca85cd5763