"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[808],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(f,i(i({ref:t},s),{},{components:n})):o.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4993:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],c={},l="With Conditional Logics",u={unversionedId:"yaml/with-conditional",id:"yaml/with-conditional",title:"With Conditional Logics",description:"Sometimes you have parts of a workflow that you only want to run under certain conditions. You can use the precondition field to add conditional branches to your workflow.",source:"@site/docs/yaml/with-conditional.md",sourceDirName:"yaml",slug:"/yaml/with-conditional",permalink:"/docs/yaml/with-conditional",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/yaml/with-conditional.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"With Command Substitution",permalink:"/docs/yaml/with-commands"},next:{title:"With State Handlers",permalink:"/docs/yaml/with-handlers"}},s={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"with-conditional-logics"},"With Conditional Logics"),(0,a.kt)("p",null,"Sometimes you have parts of a workflow that you only want to run under certain conditions. You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"precondition")," field to add conditional branches to your workflow."),(0,a.kt)("p",null,"For example, the below task only runs on the first date of each month."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'name: example\nsteps:\n  - name: A monthly task\n    command: monthly.sh\n    preconditions:\n      - condition: "`date \'+%d\'`"\n        expected: "01"\n')),(0,a.kt)("p",null,"If you want the workflow to continue to the next step regardless of the step's conditional check result, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"continueOn")," field:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'name: example\nsteps:\n  - name: A monthly task\n    command: monthly.sh\n    preconditions:\n      - condition: "`date \'+%d\'`"\n        expected: "01"\n    continueOn:\n      skipped: true\n')))}m.isMDXComponent=!0}}]);