"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[642],{4642:function(e,t,r){r.d(t,{u:function(){return Z}});var n,a,l,i,o=r(4090),s=r.t(o,2);function u(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return Array.from(new Set(t.flatMap(e=>"string"==typeof e?e.split(" "):[]))).filter(Boolean).join(" ")}function c(e,t){for(var r=arguments.length,n=Array(r>2?r-2:0),a=2;a<r;a++)n[a-2]=arguments[a];if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let l=Error('Tried to handle "'.concat(e,'" but there is no handler defined. Only defined handlers are: ').concat(Object.keys(t).map(e=>'"'.concat(e,'"')).join(", "),"."));throw Error.captureStackTrace&&Error.captureStackTrace(l,c),l}var f=((n=f||{})[n.None=0]="None",n[n.RenderStrategy=1]="RenderStrategy",n[n.Static=2]="Static",n),d=((a=d||{})[a.Unmount=0]="Unmount",a[a.Hidden=1]="Hidden",a);function h(e){let{ourProps:t,theirProps:r,slot:n,defaultTag:a,features:l,visible:i=!0,name:o}=e,s=v(r,t);if(i)return m(s,n,a,o);let u=null!=l?l:0;if(2&u){let{static:e=!1,...t}=s;if(e)return m(t,n,a,o)}if(1&u){let{unmount:e=!0,...t}=s;return c(e?0:1,{0:()=>null,1:()=>m({...t,hidden:!0,style:{display:"none"}},n,a,o)})}return m(s,n,a,o)}function m(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,{as:a=r,children:l,refName:i="ref",...s}=b(e,["unmount","static"]),c=void 0!==e.ref?{[i]:e.ref}:{},f="function"==typeof l?l(t):l;"className"in s&&s.className&&"function"==typeof s.className&&(s.className=s.className(t));let d={};if(t){let e=!1,r=[];for(let[n,a]of Object.entries(t))"boolean"==typeof a&&(e=!0),!0===a&&r.push(n);e&&(d["data-headlessui-state"]=r.join(" "))}if(a===o.Fragment&&Object.keys(g(s)).length>0){if(!(0,o.isValidElement)(f)||Array.isArray(f)&&f.length>1)throw Error(['Passing props on "Fragment"!',"","The current component <".concat(n,' /> is rendering a "Fragment".'),"However we need to passthrough the following props:",Object.keys(s).map(e=>"  - ".concat(e)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>"  - ".concat(e)).join("\n")].join("\n"));let e=f.props,t="function"==typeof(null==e?void 0:e.className)?function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return u(null==e?void 0:e.className(...r),s.className)}:u(null==e?void 0:e.className,s.className);return(0,o.cloneElement)(f,Object.assign({},v(f.props,g(b(s,["ref"]))),d,c,function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return{ref:t.every(e=>null==e)?void 0:e=>{for(let r of t)null!=r&&("function"==typeof r?r(e):r.current=e)}}}(f.ref,c.ref),t?{className:t}:{}))}return(0,o.createElement)(a,Object.assign({},b(s,["ref"]),a!==o.Fragment&&c,a!==o.Fragment&&d),f)}function v(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];if(0===t.length)return{};if(1===t.length)return t[0];let n={},a={};for(let e of t)for(let t in e)t.startsWith("on")&&"function"==typeof e[t]?(null!=a[t]||(a[t]=[]),a[t].push(e[t])):n[t]=e[t];if(n.disabled||n["aria-disabled"])return Object.assign(n,Object.fromEntries(Object.keys(a).map(e=>[e,void 0])));for(let e in a)Object.assign(n,{[e](t){for(var r=arguments.length,n=Array(r>1?r-1:0),l=1;l<r;l++)n[l-1]=arguments[l];for(let r of a[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;r(t,...n)}}});return n}function p(e){var t;return Object.assign((0,o.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function g(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function b(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Object.assign({},e);for(let e of t)e in r&&delete r[e];return r}let y=(0,o.createContext)(null);y.displayName="OpenClosedContext";var E=((l=E||{})[l.Open=1]="Open",l[l.Closed=2]="Closed",l[l.Closing=4]="Closing",l[l.Opening=8]="Opening",l);function C(){return(0,o.useContext)(y)}function F(e){let{value:t,children:r}=e;return o.createElement(y.Provider,{value:t},r)}var T=Object.defineProperty,S=(e,t,r)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,N=(e,t,r)=>(S(e,"symbol"!=typeof t?t+"":t,r),r);class O{set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}constructor(){N(this,"current",this.detect()),N(this,"handoffState","pending"),N(this,"currentId",0)}}let w=new O,A=(e,t)=>{w.isServer?(0,o.useEffect)(e,t):(0,o.useLayoutEffect)(e,t)};function j(){let e=(0,o.useRef)(!1);return A(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function P(e){let t=(0,o.useRef)(e);return A(()=>{t.current=e},[e]),t}function R(){let e;let t=(e="undefined"==typeof document,(0,s.useSyncExternalStore)(()=>()=>{},()=>!1,()=>!e)),[r,n]=o.useState(w.isHandoffComplete);return r&&!1===w.isHandoffComplete&&n(!1),o.useEffect(()=>{!0!==r&&n(!0)},[r]),o.useEffect(()=>w.handoff(),[]),!t&&r}let k=function(e){let t=P(e);return o.useCallback(function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.current(...r)},[t])},L=Symbol();function x(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];let n=(0,o.useRef)(t);(0,o.useEffect)(()=>{n.current=t},[t]);let a=k(e=>{for(let t of n.current)null!=t&&("function"==typeof t?t(e):t.current=e)});return t.every(e=>null==e||(null==e?void 0:e[L]))?void 0:a}function H(){let e=[],t={addEventListener:(e,r,n,a)=>(e.addEventListener(r,n,a),t.add(()=>e.removeEventListener(r,n,a))),requestAnimationFrame(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];let a=requestAnimationFrame(...r);return t.add(()=>cancelAnimationFrame(a))},nextFrame(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.requestAnimationFrame(()=>t.requestAnimationFrame(...r))},setTimeout(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];let a=setTimeout(...r);return t.add(()=>clearTimeout(a))},microTask(){for(var e,r=arguments.length,n=Array(r),a=0;a<r;a++)n[a]=arguments[a];let l={current:!0};return e=()=>{l.current&&n[0]()},"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch(e=>setTimeout(()=>{throw e})),t.add(()=>{l.current=!1})},style(e,t,r){let n=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:r}),this.add(()=>{Object.assign(e.style,{[t]:n})})},group(e){let t=H();return e(t),this.add(()=>t.dispose())},add:t=>(e.push(t),()=>{let r=e.indexOf(t);if(r>=0)for(let t of e.splice(r,1))t()}),dispose(){for(let t of e.splice(0))t()}};return t}function q(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];e&&r.length>0&&e.classList.add(...r)}function M(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];e&&r.length>0&&e.classList.remove(...r)}function I(){let[e]=(0,o.useState)(H);return(0,o.useEffect)(()=>()=>e.dispose(),[e]),e}function U(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.split(" ").filter(e=>e.trim().length>1)}let D=(0,o.createContext)(null);D.displayName="TransitionContext";var _=((i=_||{}).Visible="visible",i.Hidden="hidden",i);let B=(0,o.createContext)(null);function V(e){return"children"in e?V(e.children):e.current.filter(e=>{let{el:t}=e;return null!==t.current}).filter(e=>{let{state:t}=e;return"visible"===t}).length>0}function W(e,t){let r=P(e),n=(0,o.useRef)([]),a=j(),l=I(),i=k(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.Hidden,i=n.current.findIndex(t=>{let{el:r}=t;return r===e});-1!==i&&(c(t,{[d.Unmount](){n.current.splice(i,1)},[d.Hidden](){n.current[i].state="hidden"}}),l.microTask(()=>{var e;!V(n)&&a.current&&(null==(e=r.current)||e.call(r))}))}),s=k(e=>{let t=n.current.find(t=>{let{el:r}=t;return r===e});return t?"visible"!==t.state&&(t.state="visible"):n.current.push({el:e,state:"visible"}),()=>i(e,d.Unmount)}),u=(0,o.useRef)([]),f=(0,o.useRef)(Promise.resolve()),h=(0,o.useRef)({enter:[],leave:[],idle:[]}),m=k((e,r,n)=>{u.current.splice(0),t&&(t.chains.current[r]=t.chains.current[r].filter(t=>{let[r]=t;return r!==e})),null==t||t.chains.current[r].push([e,new Promise(e=>{u.current.push(e)})]),null==t||t.chains.current[r].push([e,new Promise(e=>{Promise.all(h.current[r].map(e=>{let[t,r]=e;return r})).then(()=>e())})]),"enter"===r?f.current=f.current.then(()=>null==t?void 0:t.wait.current).then(()=>n(r)):n(r)}),v=k((e,t,r)=>{Promise.all(h.current[t].splice(0).map(e=>{let[t,r]=e;return r})).then(()=>{var e;null==(e=u.current.shift())||e()}).then(()=>r(t))});return(0,o.useMemo)(()=>({children:n,register:s,unregister:i,onStart:m,onStop:v,wait:f,chains:h}),[s,i,n,m,v,h,f])}function Y(){}B.displayName="NestingContext";let z=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function G(e){var t;let r={};for(let n of z)r[n]=null!=(t=e[n])?t:Y;return r}let J=f.RenderStrategy,K=p(function(e,t){let{show:r,appear:n=!1,unmount:a=!0,...l}=e,i=(0,o.useRef)(null),s=x(i,t);R();let u=C();if(void 0===r&&null!==u&&(r=(u&E.Open)===E.Open),![!0,!1].includes(r))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[c,f]=(0,o.useState)(r?"visible":"hidden"),d=W(()=>{f("hidden")}),[m,v]=(0,o.useState)(!0),p=(0,o.useRef)([r]);A(()=>{!1!==m&&p.current[p.current.length-1]!==r&&(p.current.push(r),v(!1))},[p,r]);let g=(0,o.useMemo)(()=>({show:r,appear:n,initial:m}),[r,n,m]);(0,o.useEffect)(()=>{if(r)f("visible");else if(V(d)){let e=i.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&f("hidden")}else f("hidden")},[r,d]);let b={unmount:a},y=k(()=>{var t;m&&v(!1),null==(t=e.beforeEnter)||t.call(e)}),F=k(()=>{var t;m&&v(!1),null==(t=e.beforeLeave)||t.call(e)});return o.createElement(B.Provider,{value:d},o.createElement(D.Provider,{value:g},h({ourProps:{...b,as:o.Fragment,children:o.createElement(Q,{ref:s,...b,...l,beforeEnter:y,beforeLeave:F})},theirProps:{},defaultTag:o.Fragment,features:J,visible:"visible"===c,name:"Transition"})))}),Q=p(function(e,t){var r,n,a;let l;let{beforeEnter:i,afterEnter:s,beforeLeave:f,afterLeave:m,enter:v,enterFrom:p,enterTo:g,entered:b,leave:y,leaveFrom:C,leaveTo:T,...S}=e,N=(0,o.useRef)(null),O=x(N,t),w=null==(r=S.unmount)||r?d.Unmount:d.Hidden,{show:L,appear:_,initial:Y}=function(){let e=(0,o.useContext)(D);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[z,K]=(0,o.useState)(L?"visible":"hidden"),Q=function(){let e=(0,o.useContext)(B);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:X,unregister:Z}=Q;(0,o.useEffect)(()=>X(N),[X,N]),(0,o.useEffect)(()=>{if(w===d.Hidden&&N.current){if(L&&"visible"!==z){K("visible");return}return c(z,{hidden:()=>Z(N),visible:()=>X(N)})}},[z,N,X,Z,L,w]);let $=P({base:U(S.className),enter:U(v),enterFrom:U(p),enterTo:U(g),entered:U(b),leave:U(y),leaveFrom:U(C),leaveTo:U(T)}),ee=(a={beforeEnter:i,afterEnter:s,beforeLeave:f,afterLeave:m},l=(0,o.useRef)(G(a)),(0,o.useEffect)(()=>{l.current=G(a)},[a]),l),et=R();(0,o.useEffect)(()=>{if(et&&"visible"===z&&null===N.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[N,z,et]);let er=_&&L&&Y,en=et&&(!Y||_)?L?"enter":"leave":"idle",ea=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,[t,r]=(0,o.useState)(e),n=j(),a=(0,o.useCallback)(e=>{n.current&&r(t=>t|e)},[t,n]),l=(0,o.useCallback)(e=>!!(t&e),[t]);return{flags:t,addFlag:a,hasFlag:l,removeFlag:(0,o.useCallback)(e=>{n.current&&r(t=>t&~e)},[r,n]),toggleFlag:(0,o.useCallback)(e=>{n.current&&r(t=>t^e)},[r])}}(0),el=k(e=>c(e,{enter:()=>{ea.addFlag(E.Opening),ee.current.beforeEnter()},leave:()=>{ea.addFlag(E.Closing),ee.current.beforeLeave()},idle:()=>{}})),ei=k(e=>c(e,{enter:()=>{ea.removeFlag(E.Opening),ee.current.afterEnter()},leave:()=>{ea.removeFlag(E.Closing),ee.current.afterLeave()},idle:()=>{}})),eo=W(()=>{K("hidden"),Z(N)},Q);!function(e){let{immediate:t,container:r,direction:n,classes:a,onStart:l,onStop:i}=e,o=j(),s=I(),u=P(n);A(()=>{t&&(u.current="enter")},[t]),A(()=>{let e=H();s.add(e.dispose);let t=r.current;if(t&&"idle"!==u.current&&o.current){var n,f,d;let r,o,s,h,m,v,p;return e.dispose(),l.current(u.current),e.add((n=a.current,f="enter"===u.current,d=()=>{e.dispose(),i.current(u.current)},o=f?"enter":"leave",s=H(),h=void 0!==d?(r={called:!1},function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(!r.called)return r.called=!0,d(...t)}):()=>{},"enter"===o&&(t.removeAttribute("hidden"),t.style.display=""),m=c(o,{enter:()=>n.enter,leave:()=>n.leave}),v=c(o,{enter:()=>n.enterTo,leave:()=>n.leaveTo}),p=c(o,{enter:()=>n.enterFrom,leave:()=>n.leaveFrom}),M(t,...n.base,...n.enter,...n.enterTo,...n.enterFrom,...n.leave,...n.leaveFrom,...n.leaveTo,...n.entered),q(t,...n.base,...m,...p),s.nextFrame(()=>{M(t,...n.base,...m,...p),q(t,...n.base,...m,...v),function(e,t){let r=H();if(!e)return r.dispose;let{transitionDuration:n,transitionDelay:a}=getComputedStyle(e),[l,i]=[n,a].map(e=>{let[t=0]=e.split(",").filter(Boolean).map(e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e)).sort((e,t)=>t-e);return t}),o=l+i;if(0!==o){r.group(r=>{r.setTimeout(()=>{t(),r.dispose()},o),r.addEventListener(e,"transitionrun",e=>{e.target===e.currentTarget&&r.dispose()})});let n=r.addEventListener(e,"transitionend",e=>{e.target===e.currentTarget&&(t(),n())})}else t();r.add(()=>t()),r.dispose}(t,()=>(M(t,...n.base,...m),q(t,...n.base,...n.entered),h()))}),s.dispose)),e.dispose}},[n])}({immediate:er,container:N,classes:$,direction:en,onStart:P(e=>{eo.onStart(N,e,el)}),onStop:P(e=>{eo.onStop(N,e,ei),"leave"!==e||V(eo)||(K("hidden"),Z(N))})});let es=S;return er?es={...es,className:u(S.className,...$.current.enter,...$.current.enterFrom)}:(es.className=u(S.className,null==(n=N.current)?void 0:n.className),""===es.className&&delete es.className),o.createElement(B.Provider,{value:eo},o.createElement(F,{value:c(z,{visible:E.Open,hidden:E.Closed})|ea.flags},h({ourProps:{ref:O},theirProps:es,defaultTag:"div",features:J,visible:"visible"===z,name:"Transition.Child"})))}),X=p(function(e,t){let r=null!==(0,o.useContext)(D),n=null!==C();return o.createElement(o.Fragment,null,!r&&n?o.createElement(K,{ref:t,...e}):o.createElement(Q,{ref:t,...e}))}),Z=Object.assign(K,{Child:X,Root:K})}}]);