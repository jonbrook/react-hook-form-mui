import{R as T,n as V,o as b,p as D,N as B,t as F,v as M,x as E}from"./chunk-D5ZWXAHU-k2Hc9ByJ.js";import{r as p}from"./index-Ca8FO3x4.js";import{j as N}from"./jsx-runtime-BjG_zV1W.js";import{r as G,d as O,h as v,e as u,f as U,g as $,m as A,i as h}from"./createTheme-pWRLLLPK.js";const L=T();function q(e){const{theme:s,name:o,props:t}=e;return!s||!s.components||!s.components[o]||!s.components[o].defaultProps?t:G(s.components[o].defaultProps,t)}function z({props:e,name:s,defaultTheme:o,themeId:t}){let n=V(o);return t&&(n=n[t]||n),q({theme:n,name:s,props:e})}const H=O(),I=L("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root});function J(e){return z({props:e,name:"MuiStack",defaultTheme:H})}function K(e,s){const o=p.Children.toArray(e).filter(Boolean);return o.reduce((t,n,c)=>(t.push(n),c<o.length-1&&t.push(p.cloneElement(s,{key:`separator-${c}`})),t),[])}const Q=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],W=({ownerState:e,theme:s})=>{let o={display:"flex",flexDirection:"column",...v({theme:s},u({values:e.direction,breakpoints:s.breakpoints.values}),t=>({flexDirection:t}))};if(e.spacing){const t=U(s),n=Object.keys(s.breakpoints.values).reduce((r,a)=>((typeof e.spacing=="object"&&e.spacing[a]!=null||typeof e.direction=="object"&&e.direction[a]!=null)&&(r[a]=!0),r),{}),c=u({values:e.direction,base:n}),m=u({values:e.spacing,base:n});typeof c=="object"&&Object.keys(c).forEach((r,a,i)=>{if(!c[r]){const l=a>0?c[i[a-1]]:"column";c[r]=l}}),o=$(o,v({theme:s},m,(r,a)=>e.useFlexGap?{gap:h(t,r)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Q(a?c[a]:e.direction)}`]:h(t,r)}}))}return o=A(s.breakpoints,o),o};function X(e={}){const{createStyledComponent:s=I,useThemeProps:o=J,componentName:t="MuiStack"}=e,n=()=>B({root:["root"]},r=>F(t,r),{}),c=s(W);return p.forwardRef(function(r,a){const i=o(r),f=b(i),{component:l="div",direction:k="column",spacing:P=0,divider:y,children:g,className:x,useFlexGap:S=!1,...j}=f,C={direction:k,spacing:P,useFlexGap:S},R=n();return N.jsx(c,{as:l,ownerState:C,ref:a,className:D(R.root,x),...j,children:y?K(g,y):g})})}const ee=X({createStyledComponent:M("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root}),useThemeProps:e=>E({props:e,name:"MuiStack"})});export{ee as S,q as g,z as u};
