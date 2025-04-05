import{j as h}from"./jsx-runtime-BjG_zV1W.js";import{j as Ie,k as _e,R as Pe,D as De,G as Ae,T as P,c as pe,l as Ve,s as Ke}from"./createTheme-pWRLLLPK.js";import{r as l}from"./index-Ca8FO3x4.js";const ke=l.createContext(null);function B(){return l.useContext(ke)}const Oe=typeof Symbol=="function"&&Symbol.for,Re=Oe?Symbol.for("mui.nested"):"__THEME_NESTED__";function Ne(e,t){return typeof t=="function"?t(e):{...e,...t}}function We(e){const{children:t,theme:r}=e,i=B(),y=l.useMemo(()=>{const a=i===null?{...r}:Ne(i,r);return a!=null&&(a[Re]=i!==null),a},[r,i]);return h.jsx(ke.Provider,{value:y,children:t})}const Se={};function ge(e,t,r,i=!1){return l.useMemo(()=>{const y=e&&t[e]||t;if(typeof r=="function"){const a=r(y),o=e?{...t,[e]:a}:a;return i?()=>o:o}return e?{...t,[e]:r}:{...t,...r}},[e,t,r,i])}function Me(e){const{children:t,theme:r,themeId:i}=e,y=Ie(Se),a=B()||Se,o=ge(i,y,r),d=ge(i,a,r,!0),L=(i?o[i]:o).direction==="rtl";return h.jsx(We,{theme:d,children:h.jsx(_e.Provider,{value:o,children:h.jsx(Pe,{value:L,children:h.jsx(De,{value:i?o[i].components:o.components,children:t})})})})}const Q="mode",J="color-scheme",Ge="data-color-scheme";function He(e){const{defaultMode:t="system",defaultLightColorScheme:r="light",defaultDarkColorScheme:i="dark",modeStorageKey:y=Q,colorSchemeStorageKey:a=J,attribute:o=Ge,colorSchemeNode:d="document.documentElement",nonce:L}=e||{};let m="",S=o;if(o==="class"&&(S=".%s"),o==="data"&&(S="[data-%s]"),S.startsWith(".")){const u=S.substring(1);m+=`${d}.classList.remove('${u}'.replace('%s', light), '${u}'.replace('%s', dark));
      ${d}.classList.add('${u}'.replace('%s', colorScheme));`}const x=S.match(/\[([^\]]+)\]/);if(x){const[u,w]=x[1].split("=");w||(m+=`${d}.removeAttribute('${u}'.replace('%s', light));
      ${d}.removeAttribute('${u}'.replace('%s', dark));`),m+=`
      ${d}.setAttribute('${u}'.replace('%s', colorScheme), ${w?`${w}.replace('%s', colorScheme)`:'""'});`}else m+=`${d}.setAttribute('${S}', colorScheme);`;return h.jsx("script",{suppressHydrationWarning:!0,nonce:typeof window>"u"?L:"",dangerouslySetInnerHTML:{__html:`(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${y}') || '${t}';
  const dark = localStorage.getItem('${a}-dark') || '${i}';
  const light = localStorage.getItem('${a}-light') || '${r}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${m}
  }
} catch(e){}})();`}},"mui-color-scheme-init")}function ye(e){if(typeof window<"u"&&typeof window.matchMedia=="function"&&e==="system")return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function xe(e,t){if(e.mode==="light"||e.mode==="system"&&e.systemMode==="light")return t("light");if(e.mode==="dark"||e.mode==="system"&&e.systemMode==="dark")return t("dark")}function Fe(e){return xe(e,t=>{if(t==="light")return e.lightColorScheme;if(t==="dark")return e.darkColorScheme})}function z(e,t){if(typeof window>"u")return;let r;try{r=localStorage.getItem(e)||void 0,r||localStorage.setItem(e,t)}catch{}return r||t}function Ue(e){const{defaultMode:t="light",defaultLightColorScheme:r,defaultDarkColorScheme:i,supportedColorSchemes:y=[],modeStorageKey:a=Q,colorSchemeStorageKey:o=J,storageWindow:d=typeof window>"u"?void 0:window,noSsr:L=!1}=e,m=y.join(","),S=y.length>1,[x,u]=l.useState(()=>{const n=z(a,t),s=z(`${o}-light`,r),c=z(`${o}-dark`,i);return{mode:n,systemMode:ye(n),lightColorScheme:s,darkColorScheme:c}}),[w,N]=l.useState(L||!S);l.useEffect(()=>{N(!0)},[]);const W=Fe(x),K=l.useCallback(n=>{u(s=>{if(n===s.mode)return s;const c=n??t;try{localStorage.setItem(a,c)}catch{}return{...s,mode:c,systemMode:ye(c)}})},[a,t]),v=l.useCallback(n=>{n?typeof n=="string"?n&&!m.includes(n)?console.error(`\`${n}\` does not exist in \`theme.colorSchemes\`.`):u(s=>{const c={...s};return xe(s,T=>{try{localStorage.setItem(`${o}-${T}`,n)}catch{}T==="light"&&(c.lightColorScheme=n),T==="dark"&&(c.darkColorScheme=n)}),c}):u(s=>{const c={...s},T=n.light===null?r:n.light,C=n.dark===null?i:n.dark;if(T)if(!m.includes(T))console.error(`\`${T}\` does not exist in \`theme.colorSchemes\`.`);else{c.lightColorScheme=T;try{localStorage.setItem(`${o}-light`,T)}catch{}}if(C)if(!m.includes(C))console.error(`\`${C}\` does not exist in \`theme.colorSchemes\`.`);else{c.darkColorScheme=C;try{localStorage.setItem(`${o}-dark`,C)}catch{}}return c}):u(s=>{try{localStorage.setItem(`${o}-light`,r),localStorage.setItem(`${o}-dark`,i)}catch{}return{...s,lightColorScheme:r,darkColorScheme:i}})},[m,o,r,i]),O=l.useCallback(n=>{x.mode==="system"&&u(s=>{const c=n!=null&&n.matches?"dark":"light";return s.systemMode===c?s:{...s,systemMode:c}})},[x.mode]),I=l.useRef(O);return I.current=O,l.useEffect(()=>{if(typeof window.matchMedia!="function"||!S)return;const n=(...c)=>I.current(...c),s=window.matchMedia("(prefers-color-scheme: dark)");return s.addListener(n),n(s),()=>{s.removeListener(n)}},[S]),l.useEffect(()=>{if(d&&S){const n=s=>{const c=s.newValue;typeof s.key=="string"&&s.key.startsWith(o)&&(!c||m.match(c))&&(s.key.endsWith("light")&&v({light:c}),s.key.endsWith("dark")&&v({dark:c})),s.key===a&&(!c||["light","dark","system"].includes(c))&&K(c||t)};return d.addEventListener("storage",n),()=>{d.removeEventListener("storage",n)}}},[v,K,a,o,m,t,d,S]),{...x,mode:w?x.mode:void 0,systemMode:w?x.systemMode:void 0,colorScheme:w?W:void 0,setMode:K,setColorScheme:v}}const qe="*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function Ye(e){const{themeId:t,theme:r={},modeStorageKey:i=Q,colorSchemeStorageKey:y=J,disableTransitionOnChange:a=!1,defaultColorScheme:o,resolveTheme:d}=e,L={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},m=l.createContext(void 0),S=()=>l.useContext(m)||L,x={},u={};function w(v){var me,he,ue,fe;const{children:O,theme:I,modeStorageKey:n=i,colorSchemeStorageKey:s=y,disableTransitionOnChange:c=a,storageWindow:T=typeof window>"u"?void 0:window,documentNode:C=typeof document>"u"?void 0:document,colorSchemeNode:E=typeof document>"u"?void 0:document.documentElement,disableNestedContext:Te=!1,disableStyleSheetGeneration:$e=!1,defaultMode:we="system",noSsr:Ee}=v,G=l.useRef(!1),H=B(),F=l.useContext(m),U=!!F&&!Te,X=l.useMemo(()=>I||(typeof r=="function"?r():r),[I]),Z=X[t],k=Z||X,{colorSchemes:j=x,components:ee=u,cssVarPrefix:q}=k,te=Object.keys(j).filter(f=>!!j[f]).join(","),_=l.useMemo(()=>te.split(","),[te]),oe=typeof o=="string"?o:o.light,re=typeof o=="string"?o:o.dark,be=j[oe]&&j[re]?we:((he=(me=j[k.defaultColorScheme])==null?void 0:me.palette)==null?void 0:he.mode)||((ue=k.palette)==null?void 0:ue.mode),{mode:ve,setMode:ne,systemMode:se,lightColorScheme:ce,darkColorScheme:ie,colorScheme:je,setColorScheme:le}=Ue({supportedColorSchemes:_,defaultLightColorScheme:oe,defaultDarkColorScheme:re,modeStorageKey:n,colorSchemeStorageKey:s,defaultMode:be,storageWindow:T,noSsr:Ee});let Y=ve,M=je;U&&(Y=F.mode,M=F.colorScheme);const D=l.useMemo(()=>{var V;const f=M||k.defaultColorScheme,g=((V=k.generateThemeVars)==null?void 0:V.call(k))||k.vars,p={...k,components:ee,colorSchemes:j,cssVarPrefix:q,vars:g};if(typeof p.generateSpacing=="function"&&(p.spacing=p.generateSpacing()),f){const $=j[f];$&&typeof $=="object"&&Object.keys($).forEach(b=>{$[b]&&typeof $[b]=="object"?p[b]={...p[b],...$[b]}:p[b]=$[b]})}return d?d(p):p},[k,M,ee,j,q]),A=k.colorSchemeSelector;l.useEffect(()=>{if(M&&E&&A&&A!=="media"){const f=A;let g=A;if(f==="class"&&(g=".%s"),f==="data"&&(g="[data-%s]"),f!=null&&f.startsWith("data-")&&!f.includes("%s")&&(g=`[${f}="%s"]`),g.startsWith("."))E.classList.remove(..._.map(p=>g.substring(1).replace("%s",p))),E.classList.add(g.substring(1).replace("%s",M));else{const p=g.replace("%s",M).match(/\[([^\]]+)\]/);if(p){const[V,$]=p[1].split("=");$||_.forEach(b=>{E.removeAttribute(V.replace(M,b))}),E.setAttribute(V,$?$.replace(/"|'/g,""):"")}else E.setAttribute(g,M)}}},[M,A,E,_]),l.useEffect(()=>{let f;if(c&&G.current&&C){const g=C.createElement("style");g.appendChild(C.createTextNode(qe)),C.head.appendChild(g),window.getComputedStyle(C.body),f=setTimeout(()=>{C.head.removeChild(g)},1)}return()=>{clearTimeout(f)}},[M,c,C]),l.useEffect(()=>(G.current=!0,()=>{G.current=!1}),[]);const Le=l.useMemo(()=>({allColorSchemes:_,colorScheme:M,darkColorScheme:ie,lightColorScheme:ce,mode:Y,setColorScheme:le,setMode:ne,systemMode:se}),[_,M,ie,ce,Y,le,ne,se,D.colorSchemeSelector]);let ae=!0;($e||k.cssVariables===!1||U&&(H==null?void 0:H.cssVarPrefix)===q)&&(ae=!1);const de=h.jsxs(l.Fragment,{children:[h.jsx(Me,{themeId:Z?t:void 0,theme:D,children:O}),ae&&h.jsx(Ae,{styles:((fe=D.generateStyleSheets)==null?void 0:fe.call(D))||[]})]});return U?de:h.jsx(m.Provider,{value:Le,children:de})}const N=typeof o=="string"?o:o.light,W=typeof o=="string"?o:o.dark;return{CssVarsProvider:w,useColorScheme:S,getInitColorSchemeScript:v=>He({colorSchemeStorageKey:y,defaultLightColorScheme:N,defaultDarkColorScheme:W,modeStorageKey:i,...v})}}function Ce({theme:e,...t}){const r=P in e?e[P]:void 0;return h.jsx(Me,{...t,themeId:r?P:void 0,theme:r||e})}const R={attribute:"data-mui-color-scheme",colorSchemeStorageKey:"mui-color-scheme",defaultLightColorScheme:"light",defaultDarkColorScheme:"dark",modeStorageKey:"mui-mode"},{CssVarsProvider:ze,useColorScheme:tt,getInitColorSchemeScript:ot}=Ye({themeId:P,theme:()=>pe({cssVariables:!0}),colorSchemeStorageKey:R.colorSchemeStorageKey,modeStorageKey:R.modeStorageKey,defaultColorScheme:{light:R.defaultLightColorScheme,dark:R.defaultDarkColorScheme},resolveTheme:e=>{const t={...e,typography:Ve(e.palette,e.typography)};return t.unstable_sx=function(i){return Ke({sx:i,theme:this})},t}}),Be=ze;function Qe({theme:e,...t}){return typeof e=="function"?h.jsx(Ce,{theme:e,...t}):"colorSchemes"in(P in e?e[P]:e)?h.jsx(Be,{theme:e,...t}):h.jsx(Ce,{theme:e,...t})}const Je=pe(),rt={decorators:[e=>h.jsx(Qe,{theme:Je,children:h.jsx(e,{})})],parameters:{options:{storySort:{method:"alphabetical",locales:"en-US"}}}};export{rt as default};
