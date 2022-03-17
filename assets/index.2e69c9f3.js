var oe=Object.defineProperty,re=Object.defineProperties;var le=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var C=(e,t,a)=>t in e?oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))B.call(t,a)&&C(e,a,t[a]);if(N)for(var a of N(t))P.call(t,a)&&C(e,a,t[a]);return e},x=(e,t)=>re(e,le(t));var v=(e,t)=>{var a={};for(var r in e)B.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&N)for(var r of N(e))t.indexOf(r)<0&&P.call(e,r)&&(a[r]=e[r]);return a};var d=(e,t,a)=>(C(e,typeof t!="symbol"?t+"":t,a),a);import{j as I,c as p,m as g,u as k,r as i,a as ie,f as se,b as ce,d as M,e as de,I as ue,A as me,R as pe,g as ke,h as he}from"./vendor.e5795c61.js";const _e=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=a(o);fetch(o.href,l)}};_e();const ve="_playlist_dy7d3_1",ge="_title_dy7d3_23",ye="_head_dy7d3_33",fe="_btn_dy7d3_45";var $={playlist:ve,title:ge,head:ye,btn:fe};const xe="_title_xynlk_1";var be={title:xe};const n=I.exports.jsx,s=I.exports.jsxs,W=I.exports.Fragment,we=a=>{var r=a,{className:e}=r,t=v(r,["className"]);return n("div",x(u({className:e},t),{children:n("p",{className:be.title,children:"Connection Error"})}))},Ne="_block_cfywl_1",Te="_center_cfywl_9";var L={block:Ne,center:Te};const F=o=>{var l=o,{children:e,className:t,childsCenter:a}=l,r=v(l,["children","className","childsCenter"]);return n("div",x(u({className:p(L.block,t,{[L.center]:a})},r),{children:e}))},Ve="_loading_clven_1",Se="_load_clven_1";var Ce={loading:Ve,load:Se};const Y=({className:e})=>n("div",{className:p(Ce.loading,e)}),$e="_tracksBlock_diz2w_1";var Ee={tracksBlock:$e};const Ie="_track_i18so_1",Me="_info_i18so_39",Ae="_text_i18so_53",Be="_active_i18so_71",Pe="_trackBox_i18so_85";var y={track:Ie,info:Me,text:Ae,active:Be,trackBox:Pe};const Le=({title:e,active:t,subtitle:a,onClick:r})=>s("button",{onClick:()=>r(),className:p(y.track,{[y.active]:t}),children:[n("div",{className:y.trackBox}),s("div",{className:y.info,children:[n("h2",{className:y.text,children:e}),n("h3",{className:y.text,children:a})]})]});class Fe{constructor(){d(this,"audio",new Audio);d(this,"currentTrackVar",g(null));d(this,"isPlayingVar",g(!1));d(this,"canChangeTimeVar",g(!0));d(this,"volumeVar",g(.5));d(this,"currentTimeVar",g(0));d(this,"durationVar",g(0));d(this,"switchTrack",(t,a)=>{const r=this.currentTrackVar();if(!t||!r)return;const o=t.findIndex(l=>l.id===r.id);switch(a){case"NEXT":o===t.length-1?this.currentTrackVar(t[0]):this.currentTrackVar(t[o+1]);break;case"PREV":o===0?this.currentTrackVar(t[t.length-1]):this.currentTrackVar(t[o-1]);break}});d(this,"prevTrack",t=>this.switchTrack(t,"PREV"));d(this,"nextTrack",t=>this.switchTrack(t,"NEXT"));d(this,"toggleAudio",async()=>{if(this.audio.paused){this.isPlayingVar(!0);try{await this.audio.play()}catch(t){console.log(t)}}else this.isPlayingVar(!1),this.audio.pause()})}}const w=new Fe,De=({data:e})=>{const{currentTrackVar:t}=w,a=k(t),r=o=>()=>t(o);return n("ul",{className:Ee.tracksBlock,children:e.map(o=>n("li",{children:n(Le,{active:o.id===(a==null?void 0:a.id),onClick:r(o),title:o.title,subtitle:o.author})},o.id))})},je="_button_ptj0d_1";var Re={button:je};const Z=r=>{var o=r,{children:e,className:t}=o,a=v(o,["children","className"]);return n("button",x(u({className:p(Re.button,t)},a),{children:e}))},Ue={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"addTrack"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"title"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"author"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"file"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Upload"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"addTrack"},arguments:[{kind:"Argument",name:{kind:"Name",value:"title"},value:{kind:"Variable",name:{kind:"Name",value:"title"}}},{kind:"Argument",name:{kind:"Name",value:"author"},value:{kind:"Variable",name:{kind:"Name",value:"author"}}},{kind:"Argument",name:{kind:"Name",value:"file"},value:{kind:"Variable",name:{kind:"Name",value:"file"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"src"}},{kind:"Field",name:{kind:"Name",value:"author"}},{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"id"}}]}}]}}]},V={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetAllTracks"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"getAllTracks"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"author"}},{kind:"Field",name:{kind:"Name",value:"src"}}]}}]}}]},qe="__lock_1up8e_1",ze="_modal_1up8e_9",Oe="_overlay_1up8e_41";var T={_lock:qe,modal:ze,overlay:Oe};const D=document.getElementById("modal"),Xe=({className:e,children:t,open:a,onClose:r})=>{const o=l=>{(l.key==="Esc"||l.key==="Escape")&&r()};return i.exports.useEffect(()=>{document.body.classList.add(T._lock)},[]),i.exports.useEffect(()=>{if(document.body.classList.toggle(T._lock),a)return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[a]),!a||!D?n(W,{}):ie.exports.createPortal(n(se,{children:n("div",{onClick:()=>r(),className:T.overlay,children:n("div",{onClick:l=>l.stopPropagation(),role:"dialog",className:p(T.modal,e),children:t})})}),D)},Ge="_form_1mtor_1",Ke="_btn_1mtor_15",Qe="_uploadTitle_1mtor_27";var E={form:Ge,btn:Ke,uploadTitle:Qe};const He="_input_uv6sf_1";var Je={input:He};const j=l=>{var c=l,{inputState:e,setInputState:t,labelText:a,className:r}=c,o=v(c,["inputState","setInputState","labelText","className"]);return s("label",{children:[n("h3",{children:a}),n("input",u({required:!0,className:p(Je.input,r),value:e,onChange:h=>t(h.target.value),type:"text"},o))]})},We="_block_r92fe_1",Ye="_title_r92fe_17";var R={block:We,title:Ye};const Ze=({title:e="Uploading track. Please wait.",className:t})=>s("div",{className:p(R.block,t),children:[n("p",{className:R.title,children:e}),n(Y,{})]}),et=({onSubmit:e})=>{const[t,a]=i.exports.useState(null),[r,o]=i.exports.useState(""),[l,c]=i.exports.useState(""),[h,{loading:te}]=ce(Ue),ne=S=>{var A;const f=(A=S.target.files)==null?void 0:A[0];f&&f.type.includes("audio/")?a(f):alert("Select audio/mpeg file")},ae=async S=>{S.preventDefault();try{await h({variables:{title:r,author:l,file:t},refetchQueries:[{query:V}]}),e(),c(""),o("")}catch(f){alert("An error occurred while uploading the track to the server"),console.log("Upload failed: ",f)}};return te?n(Ze,{}):s("form",{className:E.form,action:"",onSubmit:ae,children:[n("h1",{children:"Upload Track"}),n(j,{inputState:l,setInputState:c,labelText:"Author"}),n(j,{inputState:r,setInputState:o,labelText:"Title"}),s("label",{children:[n("h1",{className:E.uploadTitle,children:"Upload audio File"}),n("input",{required:!0,type:"file",accept:"audio/*",onChange:ne})]}),n(Z,{className:E.btn,type:"submit",children:"Upload Track"})]})},tt="_uploadModal_16r2l_1";var nt={uploadModal:tt};const at=({isOpen:e,onClose:t})=>n(Xe,{className:nt.uploadModal,open:e,onClose:t,children:n(et,{onSubmit:t})}),ot=({})=>{const{data:e,loading:t,error:a}=M(V),[r,o]=i.exports.useState(!1),l=()=>o(!1),c=()=>o(!0),h=e==null?void 0:e.getAllTracks;return a?n(F,{children:n(we,{})}):t||!h?n(F,{childsCenter:!0,children:n(Y,{})}):s("div",{className:$.playlist,children:[s("div",{className:$.head,children:[n("h1",{className:$.title,children:`Playlist: ${h.length}`}),n(Z,{onClick:c,children:"Add new track"})]}),n(De,{data:h}),n(at,{isOpen:r,onClose:l})]})},rt="_player_n37p3_1",lt="_musicImage_n37p3_61";var U={player:rt,musicImage:lt};const it="_rewindControls_16ji3_1",st="_button_16ji3_13",ct="_toggleButton_16ji3_41",dt="_toggleIcon_16ji3_59",ut="_arrowIcon_16ji3_67",mt="_inverse_16ji3_75";var m={rewindControls:it,button:st,toggleButton:ct,toggleIcon:dt,arrowIcon:ut,inverse:mt};const pt=e=>i.exports.createElement("svg",u({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 485 485",style:{enableBackground:"new 0 0 485 485"},xmlSpace:"preserve",width:"1em",height:"1em"},e),i.exports.createElement("g",null,i.exports.createElement("path",{d:"M413.974,71.026C368.171,25.225,307.274,0,242.5,0S116.829,25.225,71.026,71.026C25.225,116.829,0,177.726,0,242.5 s25.225,125.671,71.026,171.474C116.829,459.775,177.726,485,242.5,485s125.671-25.225,171.474-71.026 C459.775,368.171,485,307.274,485,242.5S459.775,116.829,413.974,71.026z M242.5,455C125.327,455,30,359.673,30,242.5 S125.327,30,242.5,30S455,125.327,455,242.5S359.673,455,242.5,455z"}),i.exports.createElement("rect",{x:172.5,y:140,width:55,height:205}),i.exports.createElement("rect",{x:257.5,y:140,width:55,height:205}))),kt=e=>i.exports.createElement("svg",u({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 485 485",style:{enableBackground:"new 0 0 485 485"},xmlSpace:"preserve",width:"1em",height:"1em"},e),i.exports.createElement("g",null,i.exports.createElement("path",{d:"M413.974,71.026C368.171,25.225,307.274,0,242.5,0S116.829,25.225,71.026,71.026C25.225,116.829,0,177.726,0,242.5 s25.225,125.671,71.026,171.474C116.829,459.775,177.726,485,242.5,485s125.671-25.225,171.474-71.026 C459.775,368.171,485,307.274,485,242.5S459.775,116.829,413.974,71.026z M242.5,455C125.327,455,30,359.673,30,242.5 S125.327,30,242.5,30S455,125.327,455,242.5S359.673,455,242.5,455z"}),i.exports.createElement("polygon",{points:"181.062,336.575 343.938,242.5 181.062,148.425  "}))),q=e=>i.exports.createElement("svg",u({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 224.175 224.175",style:{enableBackground:"new 0 0 224.175 224.175"},xmlSpace:"preserve",width:"1em",height:"1em"},e),i.exports.createElement("g",null,i.exports.createElement("path",{d:"M185.513,0L185.513,0c-7.4,0-13.7,6.3-13.7,14.2v71.9L46.213,2.2c-2.1-1-4.7-2.1-7.9-2.1c-7.4,0-13.7,6.3-13.7,14.2V210 c0,11,12.6,17.8,21.5,11.5l125.6-83.4V210c-0.5,18.9,28.4,18.9,27.8,0V14.3C200.213,6.3,193.413,0,185.513,0z M52.513,183.7V39.9 l108.2,71.9L52.513,183.7z"}))),{prevTrack:ht,nextTrack:_t,toggleAudio:vt,isPlayingVar:gt}=w,yt=({})=>{const{data:e}=M(V),t=e==null?void 0:e.getAllTracks,a=k(gt);return s(W,{children:[n("button",{className:p(m.button,m.toggleButton),onClick:()=>vt(),children:a?n(pt,{className:m.toggleIcon}):n(kt,{className:m.toggleIcon})}),s("div",{className:m.rewindControls,children:[n("button",{className:m.button,onClick:()=>ht(t),children:n(q,{className:p(m.arrowIcon,m.inverse)})}),n("button",{className:m.button,onClick:()=>_t(t),children:n(q,{className:m.arrowIcon})})]})]})},ft="_box_1x3q1_1",xt="_title_1x3q1_19";var z={box:ft,title:xt};const{volumeVar:ee,audio:O}=w,bt=e=>{const t=+e.target.value/100;ee(t)},wt=({})=>{const e=k(ee),t=Math.round(e*100);return i.exports.useEffect(()=>{O.volume=e},[]),i.exports.useEffect(()=>{O.volume=e},[e]),s("div",{className:z.box,children:[s("p",{className:z.title,children:["Volume: ",t,"%"]}),n("input",{type:"range",value:t,onChange:a=>bt(a)})]})},Nt="_box_xiql4_1",Tt="_icon_xiql4_23";var X={box:Nt,icon:Tt};const Vt=e=>i.exports.createElement("svg",u({width:"1em",height:"1em",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},e),i.exports.createElement("path",{d:"M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"})),St=a=>{var r=a,{className:e}=r,t=v(r,["className"]);return n("div",x(u({className:p(X.box,e)},t),{children:n(Vt,{className:X.icon})}))},G=e=>e<10?`0${e}`:`${e}`,K=e=>{const t=Math.floor(e/60),a=Math.floor(e%60);return`${G(t)}:${G(a)}`},Ct="_info_px7rt_1",$t="_box_px7rt_9",Et="_title_px7rt_23";var b={info:Ct,box:$t,title:Et};const{currentTimeVar:Q,canChangeTimeVar:It,audio:Mt,durationVar:At,currentTrackVar:Bt}=w,Pt=(e,t)=>Math.round(e*100/t)?Math.round(e*100/t):0,Lt=({})=>{const e=k(It),t=k(At),a=k(Bt),r=l=>{if(e){const c=+l.target.value*t/100;Q(c),Mt.currentTime=c}},o=k(Q);return s("div",{className:b.info,children:[s("div",{className:b.box,children:[n("h2",{className:b.title,children:a==null?void 0:a.title}),n("p",{children:K(t)})]}),s("div",{className:b.box,children:[n("h3",{className:b.title,children:a==null?void 0:a.author}),n("p",{children:K(o)})]}),n("input",{type:"range",disabled:!e,onChange:r,value:Pt(o,t)})]})},Ft=200,{audio:_,durationVar:Dt,currentTrackVar:jt,currentTimeVar:Rt,canChangeTimeVar:H,nextTrack:Ut,toggleAudio:J}=w,qt=({})=>{const e=k(jt),{data:t}=M(V),a=t==null?void 0:t.getAllTracks,r=o=>{if(!!_.src)switch(o.code){case"Space":o.preventDefault(),J();break}};return i.exports.useEffect(()=>(window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)),[]),i.exports.useEffect(()=>{e&&(_.src=e.src,_.ontimeupdate=()=>Rt(_.currentTime),_.onloadeddata=()=>{setTimeout(()=>{H(!0)},Ft),Dt(_.duration)},_.onended=()=>{H(!1),Ut(a)},J())},[e]),e?s("div",{className:U.player,children:[n(yt,{}),n(St,{className:U.musicImage}),n(Lt,{}),n(wt,{})]}):null},zt=()=>s("div",{className:"container",children:[n(qt,{}),n("main",{children:n(ot,{})})]}),Ot="https://eyes-closed-server.herokuapp.com/graphql",Xt=de({uri:Ot}),Gt=new ue,Kt=new me({link:Xt,cache:Gt});pe.render(n(ke.StrictMode,{children:n(he,{client:Kt,children:n(zt,{})})}),document.getElementById("root"));
