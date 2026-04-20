const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/initialFX-cXFxnvCU.js","assets/Navbar-By7Le7Km.js","assets/r3f-Byxg3tKu.js","assets/three-B4OkSOuv.js","assets/ScrollTrigger-D1XJUMov.js","assets/gsap-iNJNUNGO.js","assets/Navbar-wB6fHtnG.css","assets/index-5SdXvrfj.js","assets/MainContainer-BkrOQpAU.js","assets/MainContainer-J6nb-LrW.css"])))=>i.map(i=>d[i]);
import{r as i,_ as q,j as e,c as Y}from"./r3f-Byxg3tKu.js";import"./three-B4OkSOuv.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const m of a.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function l(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=l(n);fetch(n.href,a)}})();var $={};function Z(r){if(typeof window>"u")return;const t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=r,document.head.appendChild(t),r}Object.defineProperty($,"__esModule",{value:!0});var s=i;function J(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var h=J(s);Z(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);const Q=s.forwardRef(function({style:t={},className:l="",autoFill:o=!1,play:n=!0,pauseOnHover:a=!1,pauseOnClick:m=!1,direction:c="left",speed:y=50,delay:d=0,loop:u=0,gradient:v=!1,gradientColor:N="white",gradientWidth:j=200,onFinish:D,onCycleComplete:k,onMount:P,children:_},G){const[S,W]=s.useState(0),[b,B]=s.useState(0),[M,C]=s.useState(1),[L,V]=s.useState(!1),X=s.useRef(null),p=G||X,w=s.useRef(null),E=s.useCallback(()=>{if(w.current&&p.current){const f=p.current.getBoundingClientRect(),I=w.current.getBoundingClientRect();let g=f.width,x=I.width;(c==="up"||c==="down")&&(g=f.height,x=I.height),C(o&&g&&x&&x<g?Math.ceil(g/x):1),W(g),B(x)}},[o,p,c]);s.useEffect(()=>{if(L&&(E(),w.current&&p.current)){const f=new ResizeObserver(()=>E());return f.observe(p.current),f.observe(w.current),()=>{f&&f.disconnect()}}},[E,p,L]),s.useEffect(()=>{E()},[E,_]),s.useEffect(()=>{V(!0)},[]),s.useEffect(()=>{typeof P=="function"&&P()},[]);const A=s.useMemo(()=>o?b*M/y:b<S?S/y:b/y,[o,S,b,M,y]),F=s.useMemo(()=>Object.assign(Object.assign({},t),{"--pause-on-hover":!n||a?"paused":"running","--pause-on-click":!n||a&&!m||m?"paused":"running","--width":c==="up"||c==="down"?"100vh":"100%","--transform":c==="up"?"rotate(-90deg)":c==="down"?"rotate(90deg)":"none"}),[t,n,a,m,c]),K=s.useMemo(()=>({"--gradient-color":N,"--gradient-width":typeof j=="number"?`${j}px`:j}),[N,j]),T=s.useMemo(()=>({"--play":n?"running":"paused","--direction":c==="left"?"normal":"reverse","--duration":`${A}s`,"--delay":`${d}s`,"--iteration-count":u?`${u}`:"infinite","--min-width":o?"auto":"100%"}),[n,c,A,d,u,o]),R=s.useMemo(()=>({"--transform":c==="up"?"rotate(90deg)":c==="down"?"rotate(-90deg)":"none"}),[c]),O=s.useCallback(f=>[...Array(Number.isFinite(f)&&f>=0?f:0)].map((I,g)=>h.default.createElement(s.Fragment,{key:g},s.Children.map(_,x=>h.default.createElement("div",{style:R,className:"rfm-child"},x)))),[R,_]);return L?h.default.createElement("div",{ref:p,style:F,className:"rfm-marquee-container "+l},v&&h.default.createElement("div",{style:K,className:"rfm-overlay"}),h.default.createElement("div",{className:"rfm-marquee",style:T,onAnimationIteration:k,onAnimationEnd:D},h.default.createElement("div",{className:"rfm-initial-child-container",ref:w},s.Children.map(_,f=>h.default.createElement("div",{style:R,className:"rfm-child"},f))),O(M-1)),h.default.createElement("div",{className:"rfm-marquee",style:T},O(M))):null});var U=$.default=Q;const H=({percent:r})=>{const{setIsLoading:t}=te(),[l,o]=i.useState(!1),[n,a]=i.useState(!1),[m,c]=i.useState(!1);i.useEffect(()=>{if(r<100)return;const d=setTimeout(()=>{o(!0);const u=setTimeout(()=>a(!0),1e3);return()=>clearTimeout(u)},600);return()=>clearTimeout(d)},[r]),i.useEffect(()=>{n&&(c(!0),q(()=>import("./initialFX-cXFxnvCU.js"),__vite__mapDeps([0,1,2,3,4,5,6])).then(d=>{const u=setTimeout(()=>{var v;(v=d.initialFX)==null||v.call(d),t(!1)},900);return()=>clearTimeout(u)}))},[n]);function y(d){const{currentTarget:u}=d,v=u.getBoundingClientRect(),N=d.clientX-v.left,j=d.clientY-v.top;u.style.setProperty("--mouse-x",`${N}px`),u.style.setProperty("--mouse-y",`${j}px`)}return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"loading-header",children:[e.jsx("a",{href:"/#",className:"loader-title","data-cursor":"disable",children:"AV"}),e.jsx("div",{className:`loaderGame ${m&&"loader-out"}`,children:e.jsxs("div",{className:"loaderGame-container",children:[e.jsx("div",{className:"loaderGame-in",children:[...Array(27)].map((d,u)=>e.jsx("div",{className:"loaderGame-line"},u))}),e.jsx("div",{className:"loaderGame-ball"})]})})]}),e.jsxs("div",{className:"loading-screen",children:[e.jsx("div",{className:"loading-marquee",children:e.jsxs(U,{children:[e.jsx("span",{children:" Full Stack Developer"})," ",e.jsx("span",{children:"Software Engineer"}),e.jsx("span",{children:" Full Stack Developer"})," ",e.jsx("span",{children:"Software Engineer"})]})}),e.jsxs("div",{className:`loading-wrap ${m&&"loading-clicked"}`,onMouseMove:d=>y(d),children:[e.jsx("div",{className:"loading-hover"}),e.jsxs("div",{className:`loading-button ${l&&"loading-complete"}`,children:[e.jsxs("div",{className:"loading-container",children:[e.jsx("div",{className:"loading-content",children:e.jsxs("div",{className:"loading-content-in",children:["Loading ",e.jsxs("span",{children:[r,"%"]})]})}),e.jsx("div",{className:"loading-box"})]}),e.jsx("div",{className:"loading-content2",children:e.jsx("span",{children:"Welcome"})})]})]})]})]})},ie=r=>{let t=0,l=setInterval(()=>{if(t<=50){let a=Math.round(Math.random()*5);t=t+a,r(t)}else clearInterval(l),l=setInterval(()=>{t=t+Math.round(Math.random()),r(t),t>91&&clearInterval(l)},2e3)},100);function o(){clearInterval(l),r(100)}function n(){return new Promise(a=>{clearInterval(l),l=setInterval(()=>{t<100?(t++,r(t)):(a(t),clearInterval(l))},2)})}return{loaded:n,percent:t,clear:o}},z=i.createContext(null),ee=({children:r})=>{const[t,l]=i.useState(!0),[o,n]=i.useState(0),a={isLoading:t,setIsLoading:l,setLoading:n};return i.useEffect(()=>{},[o]),e.jsxs(z.Provider,{value:a,children:[t&&e.jsx(H,{percent:o}),e.jsx("main",{className:"main-body",children:r})]})},te=()=>{const r=i.useContext(z);if(!r)throw new Error("useLoading must be used within a LoadingProvider");return r},ne=i.lazy(()=>q(()=>import("./index-5SdXvrfj.js"),__vite__mapDeps([7,2,3,5,4]))),re=i.lazy(()=>q(()=>import("./MainContainer-BkrOQpAU.js"),__vite__mapDeps([8,2,3,5,1,4,6,9]))),ae=()=>e.jsx(e.Fragment,{children:e.jsx(ee,{children:e.jsx(i.Suspense,{children:e.jsx(re,{children:e.jsx(i.Suspense,{children:e.jsx(ne,{})})})})})});Y(document.getElementById("root")).render(e.jsx(i.StrictMode,{children:e.jsx(ae,{})}));export{ie as s,te as u};
