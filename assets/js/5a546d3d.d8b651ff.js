"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[350],{3905:function(e,n,t){t.d(n,{Zo:function(){return f},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},f=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),p=s(t),d=o,m=p["".concat(u,".").concat(d)]||p[d]||l[d]||a;return t?r.createElement(m,i(i({ref:n},f),{},{components:t})):r.createElement(m,i({ref:n},f))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5821:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={},u="Web UI Configuration Reference",s={unversionedId:"admin/web-config",id:"admin/web-config",title:"Web UI Configuration Reference",description:"You can cutomize URL, port and Basic authentication by creating ~/.dagu/admin.yaml.",source:"@site/docs/admin/web-config.md",sourceDirName:"admin",slug:"/admin/web-config",permalink:"/docs/admin/web-config",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/admin/web-config.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Environment Variables Reference",permalink:"/docs/admin/environ"},next:{title:"All DAGs",permalink:"/docs/web/dags"}},f={},l=[],p={toc:l};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"web-ui-configuration-reference"},"Web UI Configuration Reference"),(0,a.kt)("p",null,"You can cutomize URL, port and Basic authentication by creating ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.dagu/admin.yaml"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"host: <hostname for web UI address>                          # default value is 127.0.0.1\nport: <port number for web UI address>                       # default value is 8000\ndags: <the location of DAG configuration files>              # default value is current working directory\ncommand: <Absolute path to the dagu binary>                  # [optional] required if the dagu command not in $PATH\nisBasicAuth: <true|false>                                    # [optional] basic auth config\nbasicAuthUsername: <username for basic auth of web UI>       # [optional] basic auth config\nbasicAuthPassword: <password for basic auth of web UI>       # [optional] basic auth config\n")))}d.isMDXComponent=!0}}]);