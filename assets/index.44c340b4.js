var ae=Object.defineProperty,se=Object.defineProperties;var re=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var U=(e,t,o)=>t in e?ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,k=(e,t)=>{for(var o in t||(t={}))O.call(t,o)&&U(e,o,t[o]);if($)for(var o of $(t))R.call(t,o)&&U(e,o,t[o]);return e},N=(e,t)=>se(e,re(t));var y=(e,t)=>{var o={};for(var l in e)O.call(e,l)&&t.indexOf(l)<0&&(o[l]=e[l]);if(e!=null&&$)for(var l of $(e))t.indexOf(l)<0&&R.call(e,l)&&(o[l]=e[l]);return o};import{j as D,c as h,m as S,u as x,r as i,a as ie,f as ce,b as de,d as te,e as ue,I as me,A as pe,R as he,g as ke,h as _e}from"./vendor.e5795c61.js";const ve=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function o(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(a){if(a.ep)return;a.ep=!0;const s=o(a);fetch(a.href,s)}};ve();const ge="_playlist_dy7d3_1",ye="_title_dy7d3_23",fe="_head_dy7d3_33",xe="_btn_dy7d3_45";var V={playlist:ge,title:ye,head:fe,btn:xe};const be="_title_xynlk_1";var Ne={title:be};const n=D.exports.jsx,c=D.exports.jsxs,ne=D.exports.Fragment,we=o=>{var l=o,{className:e}=l,t=y(l,["className"]);return n("div",N(k({className:e},t),{children:n("p",{className:Ne.title,children:"Connection Error"})}))},Se="_block_cfywl_1",Ce="_center_cfywl_9";var q={block:Se,center:Ce};const z=a=>{var s=a,{children:e,className:t,childsCenter:o}=s,l=y(s,["children","className","childsCenter"]);return n("div",N(k({className:h(q.block,t,{[q.center]:o})},l),{children:e}))},Te="_loading_clven_1",$e="_load_clven_1";var Ee={loading:Te,load:$e};const oe=({className:e})=>n("div",{className:h(Ee.loading,e)}),Me="_tracksBlock_diz2w_1";var Ie={tracksBlock:Me};const Be="_track_i18so_1",Ve="_info_i18so_39",Ae="_text_i18so_53",Fe="_active_i18so_71",Le="_trackBox_i18so_85";var f={track:Be,info:Ve,text:Ae,active:Fe,trackBox:Le};const De=({title:e,active:t,subtitle:o,onClick:l})=>c("button",{onClick:()=>l(),className:h(f.track,{[f.active]:t}),children:[n("div",{className:f.trackBox}),c("div",{className:f.info,children:[n("h2",{className:f.text,children:e}),n("h3",{className:f.text,children:o})]})]}),g=S(null),A=S(!1),X=S(.5),F=S(0),G=S(0),Pe=({data:e})=>{const t=x(g),o=l=>()=>g(l);return n("ul",{className:Ie.tracksBlock,children:e.map(l=>n("li",{children:n(De,{active:l.id===(t==null?void 0:t.id),onClick:o(l),title:l.title,subtitle:l.author})},l.id))})},je="_button_ptj0d_1";var Ue={button:je};const le=l=>{var a=l,{children:e,className:t}=a,o=y(a,["children","className"]);return n("button",N(k({className:h(Ue.button,t)},o),{children:e}))},Oe={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"addTrack"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"title"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"author"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"file"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Upload"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"addTrack"},arguments:[{kind:"Argument",name:{kind:"Name",value:"title"},value:{kind:"Variable",name:{kind:"Name",value:"title"}}},{kind:"Argument",name:{kind:"Name",value:"author"},value:{kind:"Variable",name:{kind:"Name",value:"author"}}},{kind:"Argument",name:{kind:"Name",value:"file"},value:{kind:"Variable",name:{kind:"Name",value:"file"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"src"}},{kind:"Field",name:{kind:"Name",value:"author"}},{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"id"}}]}}]}}]},P={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetAllTracks"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"getAllTracks"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"author"}},{kind:"Field",name:{kind:"Name",value:"src"}}]}}]}}]},Re="__lock_1up8e_1",qe="_modal_1up8e_9",ze="_overlay_1up8e_41";var E={_lock:Re,modal:qe,overlay:ze};const K=document.getElementById("modal"),Xe=({className:e,children:t,open:o,onClose:l})=>{const a=s=>{(s.key==="Esc"||s.key==="Escape")&&l()};return i.exports.useEffect(()=>{document.body.classList.add(E._lock)},[]),i.exports.useEffect(()=>{if(document.body.classList.toggle(E._lock),o)return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[o]),!o||!K?n(ne,{}):ie.exports.createPortal(n(ce,{children:n("div",{onClick:()=>l(),className:E.overlay,children:n("div",{onClick:s=>s.stopPropagation(),role:"dialog",className:h(E.modal,e),children:t})})}),K)},Ge="_form_1mtor_1",Ke="_btn_1mtor_15",Qe="_uploadTitle_1mtor_27";var L={form:Ge,btn:Ke,uploadTitle:Qe};const He="_input_uv6sf_1";var Je={input:He};const Q=s=>{var r=s,{inputState:e,setInputState:t,labelText:o,className:l}=r,a=y(r,["inputState","setInputState","labelText","className"]);return c("label",{children:[n("h3",{children:o}),n("input",k({required:!0,className:h(Je.input,l),value:e,onChange:m=>t(m.target.value),type:"text"},a))]})},We="_block_r92fe_1",Ye="_title_r92fe_17";var H={block:We,title:Ye};const Ze=({title:e="Uploading track. Please wait.",className:t})=>c("div",{className:h(H.block,t),children:[n("p",{className:H.title,children:e}),n(oe,{})]}),et=({onSubmit:e})=>{const[t,o]=i.exports.useState(null),[l,a]=i.exports.useState(""),[s,r]=i.exports.useState(""),[m,{loading:I}]=de(Oe),C=_=>{var T;const v=(T=_.target.files)==null?void 0:T[0];v&&v.type.includes("audio/")?o(v):alert("Select audio/mpeg file")},B=async _=>{_.preventDefault();try{await m({variables:{title:l,author:s,file:t},refetchQueries:[{query:P}]}),e(),r(""),a("")}catch(v){alert("An error occurred while uploading the track to the server"),console.log("Upload failed: ",v)}};return I?n(Ze,{}):c("form",{className:L.form,action:"",onSubmit:B,children:[n("h1",{children:"Upload Track"}),n(Q,{inputState:s,setInputState:r,labelText:"Author"}),n(Q,{inputState:l,setInputState:a,labelText:"Title"}),c("label",{children:[n("h1",{className:L.uploadTitle,children:"Upload audio File"}),n("input",{required:!0,type:"file",accept:"audio/*",onChange:C})]}),n(le,{className:L.btn,type:"submit",children:"Upload Track"})]})},tt="_uploadModal_16r2l_1";var nt={uploadModal:tt};const ot=({isOpen:e,onClose:t})=>n(Xe,{className:nt.uploadModal,open:e,onClose:t,children:n(et,{onSubmit:t})}),lt=({})=>{const{data:e,loading:t,error:o}=te(P),[l,a]=i.exports.useState(!1),s=()=>a(!1),r=()=>a(!0),m=e==null?void 0:e.getAllTracks;return o?n(z,{children:n(we,{})}):t||!m?n(z,{childsCenter:!0,children:n(oe,{})}):c("div",{className:V.playlist,children:[c("div",{className:V.head,children:[n("h1",{className:V.title,children:`Playlist: ${m.length}`}),n(le,{onClick:r,children:"Add new track"})]}),n(Pe,{data:m}),n(ot,{isOpen:l,onClose:s})]})},at="_player_129rz_1";var st={player:at};const rt="_rewindControls_16ji3_1",it="_button_16ji3_13",ct="_toggleButton_16ji3_41",dt="_toggleIcon_16ji3_59",ut="_arrowIcon_16ji3_67",mt="_inverse_16ji3_75";var p={rewindControls:rt,button:it,toggleButton:ct,toggleIcon:dt,arrowIcon:ut,inverse:mt};const pt=e=>i.exports.createElement("svg",k({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 485 485",style:{enableBackground:"new 0 0 485 485"},xmlSpace:"preserve",width:"1em",height:"1em"},e),i.exports.createElement("g",null,i.exports.createElement("path",{d:"M413.974,71.026C368.171,25.225,307.274,0,242.5,0S116.829,25.225,71.026,71.026C25.225,116.829,0,177.726,0,242.5 s25.225,125.671,71.026,171.474C116.829,459.775,177.726,485,242.5,485s125.671-25.225,171.474-71.026 C459.775,368.171,485,307.274,485,242.5S459.775,116.829,413.974,71.026z M242.5,455C125.327,455,30,359.673,30,242.5 S125.327,30,242.5,30S455,125.327,455,242.5S359.673,455,242.5,455z"}),i.exports.createElement("rect",{x:172.5,y:140,width:55,height:205}),i.exports.createElement("rect",{x:257.5,y:140,width:55,height:205}))),ht=e=>i.exports.createElement("svg",k({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 485 485",style:{enableBackground:"new 0 0 485 485"},xmlSpace:"preserve",width:"1em",height:"1em"},e),i.exports.createElement("g",null,i.exports.createElement("path",{d:"M413.974,71.026C368.171,25.225,307.274,0,242.5,0S116.829,25.225,71.026,71.026C25.225,116.829,0,177.726,0,242.5 s25.225,125.671,71.026,171.474C116.829,459.775,177.726,485,242.5,485s125.671-25.225,171.474-71.026 C459.775,368.171,485,307.274,485,242.5S459.775,116.829,413.974,71.026z M242.5,455C125.327,455,30,359.673,30,242.5 S125.327,30,242.5,30S455,125.327,455,242.5S359.673,455,242.5,455z"}),i.exports.createElement("polygon",{points:"181.062,336.575 343.938,242.5 181.062,148.425  "}))),J=e=>i.exports.createElement("svg",k({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 224.175 224.175",style:{enableBackground:"new 0 0 224.175 224.175"},xmlSpace:"preserve",width:"1em",height:"1em"},e),i.exports.createElement("g",null,i.exports.createElement("path",{d:"M185.513,0L185.513,0c-7.4,0-13.7,6.3-13.7,14.2v71.9L46.213,2.2c-2.1-1-4.7-2.1-7.9-2.1c-7.4,0-13.7,6.3-13.7,14.2V210 c0,11,12.6,17.8,21.5,11.5l125.6-83.4V210c-0.5,18.9,28.4,18.9,27.8,0V14.3C200.213,6.3,193.413,0,185.513,0z M52.513,183.7V39.9 l108.2,71.9L52.513,183.7z"}))),kt=({toggleAudio:e,nextTrack:t,prevTrack:o,playing:l})=>c(ne,{children:[n("button",{className:h(p.button,p.toggleButton),onClick:()=>e(),children:l?n(pt,{className:p.toggleIcon}):n(ht,{className:p.toggleIcon})}),c("div",{className:p.rewindControls,children:[n("button",{className:p.button,onClick:()=>o(),children:n(J,{className:h(p.arrowIcon,p.inverse)})}),n("button",{className:p.button,onClick:()=>t(),children:n(J,{className:p.arrowIcon})})]})]}),_t="_box_1x3q1_1",vt="_title_1x3q1_19";var W={box:_t,title:vt};const gt=({volumeState:e,handleVolume:t})=>{const o=Math.round(e*100);return c("div",{className:W.box,children:[c("p",{className:W.title,children:["Volume: ",o,"%"]}),n("input",{type:"range",value:o,onChange:l=>t(l)})]})},yt="_box_r74l1_1",ft="_image_r74l1_21";var Y={box:yt,image:ft},xt="/music-playlist-fullstack/assets/music-icon.4498a0e2.svg";const bt=o=>{var l=o,{className:e}=l,t=y(l,["className"]);return n("div",N(k({className:h(Y.box,e)},t),{children:n("img",{className:Y.image,src:xt,alt:"music"})}))},Z=e=>e<10?`0${e}`:`${e}`,ee=e=>{const t=Math.floor(e/60),o=Math.floor(e%60);return`${Z(t)}:${Z(o)}`},Nt="_info_px7rt_1",wt="_box_px7rt_9",St="_title_px7rt_23";var w={info:Nt,box:wt,title:St};const Ct=(e,t)=>Math.round(e*100/t)?Math.round(e*100/t):0,Tt=({track:e,duration:t,currentTime:o,handleProgress:l,canChangeTime:a})=>c("div",{className:w.info,children:[c("div",{className:w.box,children:[n("h2",{className:w.title,children:e==null?void 0:e.title}),n("p",{children:ee(t)})]}),c("div",{className:w.box,children:[n("h3",{className:w.title,children:e==null?void 0:e.author}),n("p",{children:ee(o)})]}),n("input",{type:"range",disabled:!a,onChange:l,value:Ct(o,t)})]});let u=new Audio,M=!0;const $t=200,Et=({})=>{const e=x(G),t=x(g),o=x(F),l=x(A),a=x(X),{data:s}=te(P),r=s==null?void 0:s.getAllTracks,m=d=>{if(!!u.src)switch(d.code){case"Space":d.preventDefault(),_();break}};i.exports.useEffect(()=>(u.volume=a,window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)),[]);const I=()=>{if(!r||!t)return;const d=r.indexOf(t);g(d===0?r[r.length-1]:r[d-1])},C=()=>{if(!r||!t)return;const d=r.indexOf(t);d===r.length-1?g(r[0]):g(r[d+1])},B=()=>C();i.exports.useEffect(()=>{t&&(u.src=t.src,u.ontimeupdate=()=>F(u.currentTime),u.onloadeddata=()=>{setTimeout(()=>{M=!0},$t),G(u.duration)},u.onended=()=>{M=!1,B()},_())},[t]);const _=async()=>{if(u.paused){A(!0);try{await u.play()}catch(d){console.log(d)}}else A(!1),u.pause()},v=d=>{const j=+d.target.value;if(M){const b=j*e/100;u.currentTime=b,F(b)}},T=d=>{const b=+d.target.value/100;X(b),u.volume=b};return t?c("div",{className:st.player,children:[n(kt,{toggleAudio:_,nextTrack:C,prevTrack:I,playing:l}),n(bt,{}),n(Tt,{track:t,duration:e,currentTime:o,handleProgress:v,canChangeTime:M}),n(gt,{volumeState:a,handleVolume:T})]}):null},Mt=()=>c("div",{className:"container",children:[n("header",{children:n(Et,{})}),n("main",{children:n(lt,{})})]}),It="https://eyes-closed-server.herokuapp.com/graphql",Bt=ue({uri:It}),Vt=new me,At=new pe({link:Bt,cache:Vt});he.render(n(ke.StrictMode,{children:n(_e,{client:At,children:n(Mt,{})})}),document.getElementById("root"));
