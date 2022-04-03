var de=Object.defineProperty,ue=Object.defineProperties;var me=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var S=(t,e,a)=>e in t?de(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,u=(t,e)=>{for(var a in e||(e={}))P.call(e,a)&&S(t,a,e[a]);if(w)for(var a of w(e))D.call(e,a)&&S(t,a,e[a]);return t},g=(t,e)=>ue(t,me(e));var h=(t,e)=>{var a={};for(var r in t)P.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&w)for(var r of w(t))e.indexOf(r)<0&&D.call(t,r)&&(a[r]=t[r]);return a};var c=(t,e,a)=>(S(t,typeof e!="symbol"?e+"":e,a),a);import{j as M,c as m,m as _,u as k,r as l,a as pe,f as he,b as ke,d as A,e as ge,I as _e,A as ve,R as ye,g as fe,h as xe}from"./vendor.cb6a562b.js";const we=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function a(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=a(o);fetch(o.href,i)}};we();const be="_playlist_192kl_1",Ne="_title_192kl_23",Te="_head_192kl_33",Ve="_search_192kl_45";var b={playlist:be,title:Ne,head:Te,search:Ve};const Ce="_title_xynlk_1";var Se={title:Ce};const n=M.exports.jsx,d=M.exports.jsxs,ne=M.exports.Fragment,$e=a=>{var r=a,{className:t}=r,e=h(r,["className"]);return n("div",g(u({className:t},e),{children:n("p",{className:Se.title,children:"Connection Error"})}))},Ee="_block_cfywl_1",Ie="_center_cfywl_9";var F={block:Ee,center:Ie};const R=o=>{var i=o,{children:t,className:e,childsCenter:a}=i,r=h(i,["children","className","childsCenter"]);return n("div",g(u({className:m(F.block,e,{[F.center]:a})},r),{children:t}))},Me="_loading_clven_1",Ae="_load_clven_1";var Le={loading:Me,load:Ae};const re=({className:t})=>n("div",{className:m(Le.loading,t)}),Be="_tracksBlock_diz2w_1";var Pe={tracksBlock:Be};const De="_track_1o3je_1",Fe="_info_1o3je_35",Re="_text_1o3je_49",ze="_active_1o3je_69",Ue="_trackBox_1o3je_83";var v={track:De,info:Fe,text:Re,active:ze,trackBox:Ue};const je=({title:t,active:e,subtitle:a,onClick:r})=>d("button",{onClick:()=>r(),className:m(v.track,{[v.active]:e}),children:[n("div",{className:v.trackBox}),d("div",{className:v.info,children:[n("p",{className:v.text,children:t}),n("p",{className:v.text,children:a})]})]});class Oe{constructor(){c(this,"DISABLE_TIME",500);c(this,"DEFAULT_VOLUME",.2);c(this,"prevTimerId",null);c(this,"audio",new Audio);c(this,"currentTrackVar",_(null));c(this,"isPlayingVar",_(!1));c(this,"canChangeTimeVar",_(!1));c(this,"volumeVar",_(this.DEFAULT_VOLUME));c(this,"currentTimeVar",_(0));c(this,"durationVar",_(0));c(this,"switchTrack",(e,a)=>{const r=this.currentTrackVar();if(!e||!r)return;const o=e.length-1,i=e.findIndex(s=>s.id===r.id);switch(a){case"NEXT":i===o?this.currentTrackVar(e[0]):this.currentTrackVar(e[i+1]);break;case"PREV":i===0?this.currentTrackVar(e[o]):this.currentTrackVar(e[i-1]);break}});c(this,"changeCurrentTime",e=>{if(!this.canChangeTimeVar()||!this.currentTrackVar())return;let a=e;e<0&&(a=0),e>this.audio.duration&&(a=this.audio.duration),this.currentTimeVar(a),this.audio.currentTime=a});c(this,"changeVolume",e=>{if(!this.currentTrackVar())return;let a=e;e<0&&(a=0),e>1&&(a=1),this.volumeVar(a),this.audio.volume=a});c(this,"changePlaying",e=>{!this.currentTrackVar()||(e?this.audio.play():this.audio.pause())});c(this,"toggleAudio",()=>this.changePlaying(!this.isPlayingVar()));c(this,"prevTrack",e=>this.switchTrack(e,"PREV"));c(this,"nextTrack",e=>this.switchTrack(e,"NEXT"));c(this,"initializeAudio",(e,a)=>{this.audio.src=e,this.audio.ontimeupdate=()=>this.currentTimeVar(this.audio.currentTime),this.audio.onloadeddata=()=>{this.audio.play(),this.prevTimerId&&clearTimeout(this.prevTimerId),this.prevTimerId=setTimeout(()=>{this.canChangeTimeVar(!0)},this.DISABLE_TIME)},this.audio.onloadedmetadata=()=>{this.durationVar(this.audio.duration)},this.audio.onended=()=>{this.canChangeTimeVar(!1),this.nextTrack(a)},this.audio.onplay=()=>this.isPlayingVar(!0),this.audio.onpause=()=>this.isPlayingVar(!1),this.audio.volume=this.volumeVar()})}}const y=new Oe,Ke=({data:t})=>{const{currentTrackVar:e}=y,a=k(e),r=o=>()=>e(o);return n("ul",{className:Pe.tracksBlock,children:t.map(o=>n("li",{children:n(je,{active:o.id===(a==null?void 0:a.id),onClick:r(o),title:o.title,subtitle:o.author})},o.id))})},qe={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"addTrack"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"title"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"author"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"file"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Upload"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"addTrack"},arguments:[{kind:"Argument",name:{kind:"Name",value:"title"},value:{kind:"Variable",name:{kind:"Name",value:"title"}}},{kind:"Argument",name:{kind:"Name",value:"author"},value:{kind:"Variable",name:{kind:"Name",value:"author"}}},{kind:"Argument",name:{kind:"Name",value:"file"},value:{kind:"Variable",name:{kind:"Name",value:"file"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"src"}},{kind:"Field",name:{kind:"Name",value:"author"}},{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"id"}}]}}]}}]},V={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetAllTracks"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"getAllTracks"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"author"}},{kind:"Field",name:{kind:"Name",value:"src"}}]}}]}}]},Xe="_button_92gt9_1";var Ge={button:Xe};const oe=r=>{var o=r,{children:t,className:e}=o,a=h(o,["children","className"]);return n("button",g(u({className:m(Ge.button,e)},a),{children:t}))},Qe="__lock_1up8e_1",He="_modal_1up8e_9",Ye="_overlay_1up8e_41";var N={_lock:Qe,modal:He,overlay:Ye};const z=document.getElementById("modal"),Je=({className:t,children:e,open:a,onClose:r})=>{const o=i=>{(i.key==="Esc"||i.key==="Escape")&&r()};return l.exports.useEffect(()=>{document.body.classList.add(N._lock)},[]),l.exports.useEffect(()=>{if(document.body.classList.toggle(N._lock),a)return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[a]),!a||!z?n(ne,{}):pe.exports.createPortal(n(he,{children:n("div",{onClick:()=>r(),className:N.overlay,children:n("div",{onClick:i=>i.stopPropagation(),role:"dialog",className:m(N.modal,t),children:e})})}),z)},We="_form_1nwa0_1",Ze="_btn_1nwa0_13",et="_fileInput_1nwa0_29";var $={form:We,btn:Ze,fileInput:et};const tt="_input_uv6sf_1";var at={input:tt};const U=i=>{var s=i,{inputState:t,setInputState:e,labelText:a,className:r}=s,o=h(s,["inputState","setInputState","labelText","className"]);return d("label",{children:[n("h3",{children:a}),n("input",u({required:!0,className:m(at.input,r),value:t,onChange:p=>e(p.target.value),type:"text"},o))]})},nt="_block_r92fe_1",rt="_title_r92fe_17";var j={block:nt,title:rt};const ot=({title:t="Uploading track. Please wait.",className:e})=>d("div",{className:m(j.block,e),children:[n("p",{className:j.title,children:t}),n(re,{})]}),it="_label_1io4c_1",lt="_input_1io4c_63";var O={label:it,input:lt};const st=o=>{var i=o,{text:t,className:e,style:a}=i,r=h(i,["text","className","style"]);return d("label",{className:m(e,O.label),style:a,children:[t,n("input",u({className:O.input,type:"file",accept:"audio/*"},r))]})},ct=({onSubmit:t})=>{var L;const[e,a]=l.exports.useState(null),[r,o]=l.exports.useState(""),[i,s]=l.exports.useState(""),[p,{loading:le}]=ke(qe),se=C=>{var B;const f=(B=C.target.files)==null?void 0:B[0];f&&f.type.includes("audio/")?a(f):alert("Select audio/mpeg file")},ce=async C=>{C.preventDefault();try{await p({variables:{title:r,author:i,file:e},refetchQueries:[{query:V}]}),t(),s(""),o("")}catch(f){a(null),alert("An error occurred while uploading the file to the server"),console.log("Upload failed: ",f)}};return le?n(ot,{}):d("form",{className:$.form,action:"",onSubmit:ce,children:[n("h1",{children:"Upload audio file"}),n(U,{inputState:i,setInputState:s,labelText:"Author"}),n(U,{inputState:r,setInputState:o,labelText:"Title"}),n(st,{text:(L=e==null?void 0:e.name)!=null?L:"Chose Audio File",className:$.fileInput,required:!0,onChange:se}),n(oe,{className:$.btn,type:"submit",children:"Upload"})]})},dt="_uploadModal_16r2l_1";var ut={uploadModal:dt};const mt=({isOpen:t,onClose:e})=>n(Je,{className:ut.uploadModal,open:t,onClose:e,children:n(ct,{onSubmit:e})}),pt=({})=>{const[t,e]=l.exports.useState(!1);return d(ne,{children:[n(oe,{onClick:()=>e(!0),children:"Add new track"}),n(mt,{isOpen:t,onClose:()=>e(!1)})]})},ht="_wrapper_1w3ed_1",kt="_icon_1w3ed_29",gt="_input_1w3ed_39";var E={wrapper:ht,icon:kt,input:gt};const _t=t=>l.exports.createElement("svg",u({fill:"currentColor",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 501.984 501.984",style:{enableBackground:"new 0 0 501.984 501.984"},xmlSpace:"preserve",width:"1em",height:"1em"},t),l.exports.createElement("g",null,l.exports.createElement("path",{d:"M491.796,438.532L344.031,290.768c-12.194-12.195-15.791-30.451-9.163-46.511c9.052-21.934,13.449-45.194,13.069-69.134 c-0.732-46.107-19.126-89.197-51.792-121.332C263.483,21.662,220.097,3.967,173.979,3.967 c-45.889,0-89.187,17.709-121.919,49.864C19.372,85.944,0.895,128.836,0.032,174.605c-0.886,46.929,16.841,91.34,49.913,125.052 c33.054,33.692,77.085,52.255,123.983,52.269c0.017,0,0.034,0,0.052,0c26.246,0,51.474-5.702,74.983-16.949 c16.476-7.882,36.098-4.62,48.832,8.114l144.722,144.72c6.581,6.581,15.332,10.206,24.639,10.206 c9.306,0,18.057-3.625,24.64-10.207C505.381,474.224,505.381,452.118,491.796,438.532z M477.654,473.668 c-2.805,2.804-6.533,4.348-10.498,4.348c-3.965,0-7.693-1.544-10.497-4.348l-144.721-144.72 c-11.937-11.936-27.961-18.224-44.258-18.224c-9.261,0-18.611,2.032-27.348,6.211c-20.795,9.948-43.116,14.991-66.352,14.991 c-0.015,0-0.033,0-0.047,0c-41.486-0.012-80.449-16.446-109.712-46.275C34.94,255.803,19.244,216.5,20.027,174.982 C21.598,91.712,90.66,23.967,173.979,23.967c84.983,0,152.611,66.535,153.96,151.473c0.336,21.2-3.552,41.786-11.56,61.187 c-9.72,23.554-4.418,50.356,13.509,68.283l147.765,147.763C483.441,458.462,483.441,467.88,477.654,473.668z"}),l.exports.createElement("path",{d:"M173.98,54.652c-67.985,0-123.295,55.31-123.295,123.295s55.31,123.295,123.295,123.295s123.295-55.31,123.295-123.295 S241.965,54.652,173.98,54.652z M173.98,281.242c-56.957,0-103.295-46.338-103.295-103.295 c0-56.957,46.338-103.295,103.295-103.295s103.295,46.338,103.295,103.295S230.937,281.242,173.98,281.242z"}),l.exports.createElement("path",{d:"M207.418,91.691c-10.661-4.135-21.911-6.232-33.438-6.232c-50.998,0-92.487,41.489-92.487,92.487 c0,16.034,4.17,31.835,12.06,45.695c1.844,3.239,5.222,5.055,8.7,5.055c1.676,0,3.376-0.423,4.939-1.312 c4.799-2.732,6.475-8.838,3.743-13.638c-6.176-10.85-9.441-23.229-9.441-35.8c0-39.969,32.518-72.487,72.487-72.487 c9.043,0,17.859,1.642,26.204,4.879c5.15,1.996,10.942-0.559,12.94-5.707C215.122,99.482,212.567,93.689,207.418,91.691z"}),l.exports.createElement("path",{d:"M237.497,110.721c-4.013-3.794-10.342-3.615-14.136,0.399c-3.793,4.013-3.615,10.343,0.399,14.136 c5.491,5.19,10.119,11.167,13.755,17.765c1.823,3.306,5.241,5.175,8.767,5.175c1.631,0,3.287-0.401,4.818-1.243 c4.836-2.666,6.597-8.748,3.931-13.585C250.395,124.955,244.496,117.335,237.497,110.721z"}))),vt=({className:t,value:e,onChange:a})=>d("label",{className:m(E.wrapper,t),children:[n("input",{value:e,onChange:a,placeholder:"Search...",id:"",type:"search",className:m(E.input)}),n(_t,{className:E.icon})]}),K=(t,e)=>t.toLowerCase().includes(e.toLowerCase()),yt=({})=>{const{data:t,loading:e,error:a}=A(V),r=t==null?void 0:t.getAllTracks,[o,i]=l.exports.useState(""),s=l.exports.useMemo(()=>r==null?void 0:r.filter(p=>K(p.title,o)||K(p.author,o)),[o]);return a?n(R,{children:n($e,{})}):e||!r?n(R,{childsCenter:!0,children:n(re,{})}):d("div",{className:b.playlist,children:[d("div",{className:b.head,children:[n("h1",{className:b.title,children:`Playlist: ${r.length}`}),n(pt,{})]}),n(vt,{className:b.search,value:o,onChange:p=>i(p.target.value)}),n(Ke,{data:s!=null?s:r})]})},ft="_player_xabei_1",xt="_musicImage_xabei_67";var q={player:ft,musicImage:xt};const wt="_controls_4wmoi_1",bt="_arrow_4wmoi_27",Nt="_inverse_4wmoi_35";var T={controls:wt,arrow:bt,inverse:Nt};const X=t=>l.exports.createElement("svg",u({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 224.175 224.175",style:{enableBackground:"new 0 0 224.175 224.175"},xmlSpace:"preserve",width:"1em",height:"1em"},t),l.exports.createElement("g",null,l.exports.createElement("path",{d:"M185.513,0L185.513,0c-7.4,0-13.7,6.3-13.7,14.2v71.9L46.213,2.2c-2.1-1-4.7-2.1-7.9-2.1c-7.4,0-13.7,6.3-13.7,14.2V210 c0,11,12.6,17.8,21.5,11.5l125.6-83.4V210c-0.5,18.9,28.4,18.9,27.8,0V14.3C200.213,6.3,193.413,0,185.513,0z M52.513,183.7V39.9 l108.2,71.9L52.513,183.7z"}))),Tt="_button_4yb26_1",Vt="_icon_4yb26_29";var G={button:Tt,icon:Vt};const I=r=>{var o=r,{SvgIcon:t,className:e}=o,a=h(o,["SvgIcon","className"]);return n("button",g(u({className:m(G.button,e)},a),{children:n(t,{className:G.icon})}))},{prevTrack:Ct,nextTrack:St}=y,$t=({})=>{const{data:t}=A(V),e=t==null?void 0:t.getAllTracks;return d("div",{className:T.controls,children:[n(I,{"aria-label":"previous audio",SvgIcon:X,className:m(T.arrow,T.inverse),onClick:()=>Ct(e)}),n(I,{"aria-label":"next audio",SvgIcon:X,className:T.arrow,onClick:()=>St(e)})]})},Et="_slider_l3fz7_1";var It={slider:Et};const ie=a=>{var r=a,{className:t}=r,e=h(r,["className"]);return n("input",u({className:m(It.slider,t),type:"range"},e))},Mt="_box_1o90y_1",At="_title_1o90y_19";var Q={box:Mt,title:At};const{volumeVar:Lt,changeVolume:Bt}=y,Pt=t=>{Bt(+t.target.value/100)},Dt=({})=>{const t=k(Lt),e=Math.round(t*100);return d("div",{className:Q.box,children:[d("p",{className:Q.title,children:["Volume: ",e,"%"]}),n(ie,{"aria-label":"audio volume",value:e,onChange:Pt})]})},Ft="_box_1i7xp_1",Rt="_icon_1i7xp_25";var H={box:Ft,icon:Rt};const zt=t=>l.exports.createElement("svg",u({width:"1em",height:"1em",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},t),l.exports.createElement("path",{d:"M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"})),Ut=a=>{var r=a,{className:t}=r,e=h(r,["className"]);return n("div",g(u({className:m(H.box,t)},e),{children:n(zt,{className:H.icon})}))},Y=t=>t<10?`0${t}`:`${t}`,J=t=>{const e=Math.floor(t/60),a=Math.floor(t%60);return`${Y(e)}:${Y(a)}`},jt="_info_c7g4y_1",Ot="_box_c7g4y_11",Kt="_title_c7g4y_25";var x={info:jt,box:Ot,title:Kt};const{currentTimeVar:qt,canChangeTimeVar:Xt,durationVar:Gt,currentTrackVar:Qt,changeCurrentTime:Ht}=y,Yt=(t,e)=>{const a=Math.round(t*100/e);return isNaN(a)?0:a},Jt=({})=>{const t=k(Xt),e=k(Gt),a=k(Qt),r=k(qt),o=i=>{const s=+i.target.value*e/100;Ht(s)};return d("div",{className:x.info,children:[d("div",{className:x.box,children:[n("h2",{className:x.title,children:a==null?void 0:a.title}),n("p",{children:J(e)})]}),d("div",{className:x.box,children:[n("h3",{className:x.title,children:a==null?void 0:a.author}),n("p",{children:J(r)})]}),n(ie,{"aria-label":"audio current time",disabled:!t,onChange:o,value:Yt(r,e)})]})},Wt="_toggle_h3jnm_1";var Zt={toggle:Wt};const ea=t=>l.exports.createElement("svg",u({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 485 485",style:{enableBackground:"new 0 0 485 485"},xmlSpace:"preserve",width:"1em",height:"1em"},t),l.exports.createElement("g",null,l.exports.createElement("path",{d:"M413.974,71.026C368.171,25.225,307.274,0,242.5,0S116.829,25.225,71.026,71.026C25.225,116.829,0,177.726,0,242.5 s25.225,125.671,71.026,171.474C116.829,459.775,177.726,485,242.5,485s125.671-25.225,171.474-71.026 C459.775,368.171,485,307.274,485,242.5S459.775,116.829,413.974,71.026z M242.5,455C125.327,455,30,359.673,30,242.5 S125.327,30,242.5,30S455,125.327,455,242.5S359.673,455,242.5,455z"}),l.exports.createElement("rect",{x:172.5,y:140,width:55,height:205}),l.exports.createElement("rect",{x:257.5,y:140,width:55,height:205}))),ta=t=>l.exports.createElement("svg",u({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 485 485",style:{enableBackground:"new 0 0 485 485"},xmlSpace:"preserve",width:"1em",height:"1em"},t),l.exports.createElement("g",null,l.exports.createElement("path",{d:"M413.974,71.026C368.171,25.225,307.274,0,242.5,0S116.829,25.225,71.026,71.026C25.225,116.829,0,177.726,0,242.5 s25.225,125.671,71.026,171.474C116.829,459.775,177.726,485,242.5,485s125.671-25.225,171.474-71.026 C459.775,368.171,485,307.274,485,242.5S459.775,116.829,413.974,71.026z M242.5,455C125.327,455,30,359.673,30,242.5 S125.327,30,242.5,30S455,125.327,455,242.5S359.673,455,242.5,455z"}),l.exports.createElement("polygon",{points:"181.062,336.575 343.938,242.5 181.062,148.425  "}))),{toggleAudio:aa,isPlayingVar:na}=y,ra=({})=>{const t=k(na),e=a=>a?ea:ta;return n(I,{"aria-label":"toggle audio playing",className:Zt.toggle,onClick:()=>aa(),SvgIcon:e(t)})},{currentTrackVar:W,toggleAudio:oa,initializeAudio:ia,changeCurrentTime:Z,changeVolume:ee,currentTimeVar:te,volumeVar:ae}=y,la=({})=>{const t=k(W),e=l.exports.useRef(null),{data:a}=A(V),r=a==null?void 0:a.getAllTracks,o=i=>{const s=i.target;if(!!W()&&!i.ctrlKey&&!i.metaKey&&!i.altKey&&s.tagName==="BODY"||s===e.current)switch(i.code){case"Space":i.preventDefault(),oa();break;case"ArrowRight":i.preventDefault(),Z(te()+5);break;case"ArrowLeft":i.preventDefault(),Z(te()-5);break;case"ArrowUp":i.preventDefault(),ee(ae()+.05);break;case"ArrowDown":i.preventDefault(),ee(ae()-.05);break}};return l.exports.useEffect(()=>{t&&ia(t.src,r)},[t]),l.exports.useEffect(()=>(window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)),[]),t?d("div",{"aria-label":"audio player",tabIndex:0,className:q.player,ref:e,children:[n(ra,{}),n($t,{}),n(Ut,{className:q.musicImage}),n(Jt,{}),n(Dt,{})]}):null},sa=()=>d("div",{className:"container",children:[n(la,{}),n("main",{children:n(yt,{})})]}),ca="https://eyes-closed-server.herokuapp.com/graphql",da=ge({uri:ca}),ua=new _e,ma=new ve({link:da,cache:ua});ye.render(n(fe.StrictMode,{children:n(xe,{client:ma,children:n(sa,{})})}),document.getElementById("root"));