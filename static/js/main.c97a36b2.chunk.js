(this["webpackJsonpkeep-notes"]=this["webpackJsonpkeep-notes"]||[]).push([[0],{70:function(e,t,n){},71:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(8),i=n.n(o),s=(n(70),n(52)),r=n(16),l=(n(71),n(72),n(14)),j=n(112),d=n(12),u=n(115),b=n(116),p=n(117),h=n(118),O=n(123),m=n(124),x=n(122),f=n(56),g=n.n(f),v=n(57),k=n.n(v),N=n(50),y=n.n(N),C=n(2),w=Object(j.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(l.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(l.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(d.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(d.a)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(l.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(l.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(l.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})),I=function(){var e=w(),t=a.a.useState(null),n=Object(r.a)(t,2),c=n[0],o=n[1],i=Boolean(c),s=function(e){o(e.currentTarget)},l=function(){o(null)},j="primary-search-account-menu",d=Object(C.jsxs)(x.a,{anchorEl:c,anchorOrigin:{vertical:"top",horizontal:"right"},id:j,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:i,onClose:l,style:{top:"44px"},children:[Object(C.jsx)(m.a,{onClick:l,children:"Profile"}),Object(C.jsx)(m.a,{onClick:l,children:"Log Out"})]});return Object(C.jsxs)("div",{className:e.grow,children:[Object(C.jsx)(u.a,{position:"static",children:Object(C.jsxs)(b.a,{children:[Object(C.jsx)(p.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer",children:Object(C.jsx)(g.a,{})}),Object(C.jsx)(h.a,{className:e.title,variant:"h6",noWrap:!0,children:"Keep-Notes"}),Object(C.jsxs)("div",{className:e.search,children:[Object(C.jsx)("div",{className:e.searchIcon,children:Object(C.jsx)(k.a,{})}),Object(C.jsx)(O.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})]}),Object(C.jsx)("div",{className:e.grow}),Object(C.jsx)("div",{className:e.sectionDesktop,children:Object(C.jsx)(p.a,{edge:"end","aria-label":"account of current user","aria-controls":j,"aria-haspopup":"true",onClick:s,color:"inherit",children:Object(C.jsx)(y.a,{})})}),Object(C.jsx)("div",{className:e.sectionMobile,children:Object(C.jsx)(p.a,{edge:"end","aria-label":"account of current user","aria-controls":j,"aria-haspopup":"true",onClick:s,color:"inherit",children:Object(C.jsx)(y.a,{})})})]})}),d]})},S=n(32),D=n(119),B=function(e){var t=Object(c.useState)(!1),n=Object(r.a)(t,2),a=n[0],o=n[1],i=Object(c.useState)({title:"",content:""}),s=Object(r.a)(i,2),j=s[0],d=s[1],u=function(e){var t=e.target,n=t.name,c=t.value;d((function(e){return Object(S.a)(Object(S.a)({},e),{},Object(l.a)({},n,c))}))};document.querySelector(".create-note-input");return Object(C.jsx)("div",{className:"conatiner-lg d-flex justify-content-center mt-5",children:Object(C.jsxs)("form",{action:"",className:"create-note-input",children:[a?Object(C.jsx)("input",{type:"text",name:"title",value:j.title,onChange:u,placeholder:"Title",autoComplete:"off"}):null,Object(C.jsx)("textarea",{cols:"",rows:"",name:"content",value:j.content,onChange:u,placeholder:"Take a note...",onFocus:function(){o(!0)}}),a?Object(C.jsx)("div",{className:"d-flex justify-content-end",children:Object(C.jsx)(D.a,{onClick:function(){""===j.content&&""===j.title||(e.passNote(j),d({title:"",content:""})),o(!1)},style:{color:"green",margin:"0.3rem 1rem"},color:"primary",children:"Done"})}):null]})})},R=n(51),T=n.n(R),F=n(121),L=n(120),E=n(81),M=function(e){var t=Object(c.useState)({title:e.title,content:e.content}),n=Object(r.a)(t,2),a=n[0],o=n[1],i=function(){e.deleteItem(e.id)},s=Object(c.useState)(!1),j=Object(r.a)(s,2),d=j[0],u=j[1],b=function(){u(!1),""!==a.content||""!==a.title?e.updateData(a,e.id):e.deleteItem(e.id)},h=function(e){var t=e.target,n=t.name,c=t.value;o((function(e){return Object(S.a)(Object(S.a)({},e),{},Object(l.a)({},n,c))}))};return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{className:"note p-3 m-3",children:[Object(C.jsxs)("div",{onClick:function(){u(!0)},children:[Object(C.jsx)("h4",{children:e.title}),Object(C.jsx)("br",{}),Object(C.jsx)("p",{className:"note-paragraph",children:e.content})]}),Object(C.jsx)("div",{className:"delete-container",children:Object(C.jsx)(p.a,{onClick:i,title:"Delete",className:"delete-btn",children:Object(C.jsx)(T.a,{className:"delete-icon"})})})]}),Object(C.jsx)(F.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:"note-modal",open:d,onClose:b,closeAfterTransition:!0,BackdropComponent:L.a,BackdropProps:{timeout:500},children:Object(C.jsx)(E.a,{in:d,children:Object(C.jsx)("div",{className:"note-modal-body",children:Object(C.jsxs)("form",{action:"",className:"note-modal-form h-100",children:[Object(C.jsx)("input",{type:"text",name:"title",value:a.title,onChange:h,placeholder:"Title",autoComplete:"off"}),Object(C.jsx)("hr",{}),Object(C.jsx)("textarea",{cols:"",rows:"",name:"content",value:a.content,onChange:h,placeholder:"Take a note...",className:"h-100"}),Object(C.jsxs)("div",{className:"d-flex justify-content-around mt-auto",children:[Object(C.jsx)(p.a,{onClick:i,title:"Delete",children:Object(C.jsx)(T.a,{className:"delete-icon"})}),Object(C.jsx)(D.a,{onClick:b,style:{color:"green"},children:"Save"})]})]})})})})]})},P=function(e){var t=function(t){e.deleteNote(t)},n=function(t,n){e.makeChanges(t,n)};return Object(C.jsx)("div",{className:"container-fluid mt-5 notes-container",children:e.allNotes.map((function(e,c){return Object(C.jsx)(M,{id:c,title:e.title,content:e.content,deleteItem:t,updateData:n},c)}))})},z=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(I,{}),Object(C.jsx)(B,{passNote:function(e){a((function(t){return[].concat(Object(s.a)(t),[e])}))}}),Object(C.jsx)(P,{allNotes:n,deleteNote:function(e){a((function(t){return t.filter((function(t,n){return n!==e}))}))},makeChanges:function(e,t){console.log(e),n[t]=e,a((function(e){return Object(s.a)(e)}))}})]})};i.a.render(Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(z,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.c97a36b2.chunk.js.map