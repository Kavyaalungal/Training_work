import{r as h,_ as M,R as i,b as F,c as E,P as a,d as T,j as e}from"./index-CWqjTnRe.js";import{c as n}from"./index.es-1mW3naJu.js";import{a as y,C as k,b as D}from"./index.esm-BtwgXwGQ.js";import{a as o,C as B}from"./CRow-CY-QlUB_.js";import{C as W,a as S}from"./CCardBody-BbsyKQog.js";import{C as O}from"./CCardHeader-BMsRTYuJ.js";import{c as H,a as P,b as I}from"./cib-twitter-00_H7eLt.js";import{a as K,b as J,d as g,e as R}from"./cil-people-BKgPdOQQ.js";import{k as b,l as j,m as C,n as r}from"./DefaultLayout-BX3fBPzi.js";var c=h.forwardRef(function(s,l){var t,w=s.action,N=s.chart,p=s.className,u=s.color,m=s.title,x=s.value,f=M(s,["action","chart","className","color","title","value"]);return i.createElement(W,F({className:E((t={},t["bg-".concat(u)]=u,t["text-white"]=u,t),p)},f,{ref:l}),i.createElement(S,{className:"pb-0 d-flex justify-content-between align-items-start"},i.createElement("div",null,x&&i.createElement("div",{className:"fs-4 fw-semibold"},x),m&&i.createElement("div",null,m)),w),N)});c.propTypes={action:a.node,chart:a.oneOfType([a.string,a.node]),className:a.string,color:T,title:a.oneOfType([a.string,a.node]),value:a.oneOfType([a.string,a.node,a.number])};c.displayName="CWidgetStatsA";var d=h.forwardRef(function(s,l){var t,w=s.className,N=s.chart,p=s.color,u=s.icon,m=s.values,x=M(s,["className","chart","color","icon","values"]);return i.createElement(W,F({className:w},x,{ref:l}),i.createElement(O,{className:E("position-relative d-flex justify-content-center align-items-center",(t={},t["bg-".concat(p)]=p,t))},u,N),i.createElement(S,{className:"row text-center"},m&&m.map(function(f,A){return i.createElement(i.Fragment,{key:A},A%2!==0&&i.createElement("div",{className:"vr"}),i.createElement(o,null,i.createElement("div",{className:"fs-5 fw-semibold"},f.value),i.createElement("div",{className:"text-uppercase text-body-secondary small"},f.title)))})))});d.propTypes={chart:a.oneOfType([a.string,a.node]),className:a.string,color:T,icon:a.oneOfType([a.string,a.node]),values:a.arrayOf(a.any)};d.displayName="CWidgetStatsD";const L=s=>{const l={elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}};return e.jsxs(B,{className:s.className,xs:{gutter:4},children:[e.jsx(o,{sm:6,xl:4,xxl:3,children:e.jsx(d,{...s.withCharts&&{chart:e.jsx(y,{className:"position-absolute w-100 h-100",type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:[65,59,84,84,51,55,40],fill:!0}]},options:l})},icon:e.jsx(n,{icon:H,height:52,className:"my-4 text-white"}),values:[{title:"friends",value:"89K"},{title:"feeds",value:"459"}],style:{"--cui-card-cap-bg":"#3b5998"}})}),e.jsx(o,{sm:6,xl:4,xxl:3,children:e.jsx(d,{...s.withCharts&&{chart:e.jsx(y,{className:"position-absolute w-100 h-100",type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:[1,13,9,17,34,41,38],fill:!0}]},options:l})},icon:e.jsx(n,{icon:P,height:52,className:"my-4 text-white"}),values:[{title:"followers",value:"973k"},{title:"tweets",value:"1.792"}],style:{"--cui-card-cap-bg":"#00aced"}})}),e.jsx(o,{sm:6,xl:4,xxl:3,children:e.jsx(d,{...s.withCharts&&{chart:e.jsx(y,{className:"position-absolute w-100 h-100",type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:[78,81,80,45,34,12,40],fill:!0}]},options:l})},icon:e.jsx(n,{icon:I,height:52,className:"my-4 text-white"}),values:[{title:"contacts",value:"500"},{title:"feeds",value:"1.292"}],style:{"--cui-card-cap-bg":"#4875b4"}})}),e.jsx(o,{sm:6,xl:4,xxl:3,children:e.jsx(d,{color:"warning",...s.withCharts&&{chart:e.jsx(y,{className:"position-absolute w-100 h-100",type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:[35,23,56,22,97,23,64],fill:!0}]},options:l})},icon:e.jsx(n,{icon:K,height:52,className:"my-4 text-white"}),values:[{title:"events",value:"12+"},{title:"meetings",value:"4"}]})})]})};L.propTypes={className:a.string,withCharts:a.bool};var v=function(s,l){if(!(typeof window>"u")&&!(typeof document>"u")){var t=document.body;return window.getComputedStyle(t,null).getPropertyValue(s).replace(/^\s/,"")}};const U=s=>{const l=h.useRef(null),t=h.useRef(null);return h.useEffect(()=>{document.documentElement.addEventListener("ColorSchemeChange",()=>{l.current&&setTimeout(()=>{l.current.data.datasets[0].pointBackgroundColor=v("--cui-primary"),l.current.update()}),t.current&&setTimeout(()=>{t.current.data.datasets[0].pointBackgroundColor=v("--cui-info"),t.current.update()})})},[l,t]),e.jsxs(B,{className:s.className,xs:{gutter:4},children:[e.jsx(o,{sm:6,xl:4,xxl:3,children:e.jsx(c,{color:"primary",value:e.jsxs(e.Fragment,{children:["26K"," ",e.jsxs("span",{className:"fs-6 fw-normal",children:["(-12.4% ",e.jsx(n,{icon:J}),")"]})]}),title:"Users",action:e.jsxs(b,{alignment:"end",children:[e.jsx(j,{color:"transparent",caret:!1,className:"text-white p-0",children:e.jsx(n,{icon:g})}),e.jsxs(C,{children:[e.jsx(r,{children:"Action"}),e.jsx(r,{children:"Another action"}),e.jsx(r,{children:"Something else here..."}),e.jsx(r,{disabled:!0,children:"Disabled action"})]})]}),chart:e.jsx(k,{ref:l,className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:v("--cui-primary"),data:[65,59,84,84,51,55,40]}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{border:{display:!1},grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:30,max:89,display:!1,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1,tension:.4},point:{radius:4,hitRadius:10,hoverRadius:4}}}})})}),e.jsx(o,{sm:6,xl:4,xxl:3,children:e.jsx(c,{color:"info",value:e.jsxs(e.Fragment,{children:["$6.200"," ",e.jsxs("span",{className:"fs-6 fw-normal",children:["(40.9% ",e.jsx(n,{icon:R}),")"]})]}),title:"Income",action:e.jsxs(b,{alignment:"end",children:[e.jsx(j,{color:"transparent",caret:!1,className:"text-white p-0",children:e.jsx(n,{icon:g})}),e.jsxs(C,{children:[e.jsx(r,{children:"Action"}),e.jsx(r,{children:"Another action"}),e.jsx(r,{children:"Something else here..."}),e.jsx(r,{disabled:!0,children:"Disabled action"})]})]}),chart:e.jsx(k,{ref:t,className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:v("--cui-info"),data:[1,18,9,17,34,22,11]}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{border:{display:!1},grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:-9,max:39,display:!1,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}}})})}),e.jsx(o,{sm:6,xl:4,xxl:3,children:e.jsx(c,{color:"warning",value:e.jsxs(e.Fragment,{children:["2.49%"," ",e.jsxs("span",{className:"fs-6 fw-normal",children:["(84.7% ",e.jsx(n,{icon:R}),")"]})]}),title:"Conversion Rate",action:e.jsxs(b,{alignment:"end",children:[e.jsx(j,{color:"transparent",caret:!1,className:"text-white p-0",children:e.jsx(n,{icon:g})}),e.jsxs(C,{children:[e.jsx(r,{children:"Action"}),e.jsx(r,{children:"Another action"}),e.jsx(r,{children:"Something else here..."}),e.jsx(r,{disabled:!0,children:"Disabled action"})]})]}),chart:e.jsx(k,{className:"mt-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40],fill:!0}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{display:!1},y:{display:!1}},elements:{line:{borderWidth:2,tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4}}}})})}),e.jsx(o,{sm:6,xl:4,xxl:3,children:e.jsx(c,{color:"danger",value:e.jsxs(e.Fragment,{children:["44K"," ",e.jsxs("span",{className:"fs-6 fw-normal",children:["(-23.6% ",e.jsx(n,{icon:J}),")"]})]}),title:"Sessions",action:e.jsxs(b,{alignment:"end",children:[e.jsx(j,{color:"transparent",caret:!1,className:"text-white p-0",children:e.jsx(n,{icon:g})}),e.jsxs(C,{children:[e.jsx(r,{children:"Action"}),e.jsx(r,{children:"Another action"}),e.jsx(r,{children:"Something else here..."}),e.jsx(r,{disabled:!0,children:"Disabled action"})]})]}),chart:e.jsx(D,{className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July","August","September","October","November","December","January","February","March","April"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40,85,65,23,12,98,34,84,67,82],barPercentage:.6}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1,drawTicks:!1},ticks:{display:!1}},y:{border:{display:!1},grid:{display:!1,drawBorder:!1,drawTicks:!1},ticks:{display:!1}}}}})})})]})};U.propTypes={className:a.string,withCharts:a.bool};export{U as W,L as a,v as g};
