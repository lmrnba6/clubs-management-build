"use strict";(self.webpackChunkClubs_Management=self.webpackChunkClubs_Management||[]).push([[1213],{27477:function(e,n,t){var a=t(42982),s=t(4942),i=t(45987),r=t(70885),o=t(67294),l=t(39249),c=t(61896),d=t(55654),u=t(64811),p=t(61643),f=t(31109),m=t(70616),x=t(97975),g=t(82669),j=t(67954),h=t(85677),Z=t(32701),b=t(10684),y=t(17834),v=t(97985),C=(t(22299),t(86896)),O=t(44012),N=t(48159),k=t(16550),S=t(88295),E=t(6756),T=t(16714),P=t(56176),_=t(14322),A=t(93630),M=t(49817),w=t(16724),D=t(47201),I=t(85893),R=["data"];function z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function U(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?z(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.refresh,t=e.dispatch,s=e.cat,z=e.onChange,W=e.requireStar,q=e.invalid,L=e.invalidText,B=e.edit,J=e.add,G=e.label,F=e.disabled,Q=(0,o.useState)(!1),V=(0,r.Z)(Q,2),X=V[0],H=V[1],Y=(0,o.useState)(null),$=(0,r.Z)(Y,2),K=$[0],ee=$[1],ne=(0,o.useState)(!1),te=(0,r.Z)(ne,2),ae=te[0],se=te[1],ie=(0,o.useState)([]),re=(0,r.Z)(ie,2),oe=re[0],le=re[1],ce=(0,o.useState)([]),de=(0,r.Z)(ce,2),ue=de[0],pe=de[1],fe=(0,o.useContext)(E.v),me=(0,o.useState)(null),xe=(0,r.Z)(me,2),ge=xe[0],je=xe[1],he=(0,o.useState)({}),Ze=(0,r.Z)(he,2),be=Ze[0],ye=Ze[1],ve=(0,D.Q)(),Ce=(0,r.Z)(ve,1)[0],Oe=(0,C.Z)();function Ne(e){pe(e);var n=e.map((function(e){return{value:e.id,label:e.name,description:e.description,amount:e.amount}}));B&&ge&&fe.can(P.a.EDIT_ACTION,_.k.ATHLETE_CATEGORY_SUBJECT)&&(n=[{value:"edit-athleteCategory",label:Oe.formatMessage({id:"editAthleteCategory"}),type:"edit-athleteCategory",color:"flat-warning"}].concat((0,a.Z)(n))),J&&fe.can(P.a.WRITE_ACTION,_.k.ATHLETE_CATEGORY_SUBJECT)&&(n=[{value:"add-athleteCategory",label:Oe.formatMessage({id:"addCategory"}),type:"add-athleteCategory",color:"flat-success"}].concat((0,a.Z)(n))),le(n)}var ke=function(){(0,k.k_)(k.go,[S.ii],!0,l.Am,t,"","somethingWrong",Ne,null)},Se=function(){se(!1),je(null),z(null),ke()};(0,o.useEffect)((function(){je(s)}),[s]),(0,o.useEffect)((function(){n&&ke()}),[n]);var Ee=function(e){414===e.code?ee("nameExist"):ee("somethingWrong")};return(0,I.jsxs)("div",{children:[(0,I.jsxs)(g.Z,{children:[!1!==G&&(0,I.jsxs)(j.Z,{for:"category",children:[(0,I.jsx)(O.Z,{id:"category"})," ",W?(0,I.jsx)("span",{className:"text-danger h6",children:"*"}):""]}),(0,I.jsxs)("div",{style:{border:"".concat(q?"#dc3545":"dark"===Ce?"#404656":"#d8d6de"," solid 1px"),borderRadius:"5px",display:"flex",alignItems:"center"},children:[(0,I.jsx)(u.Z,{className:"mx-1",size:14}),(0,I.jsx)("div",{style:{flexGrow:1,borderLeft:"".concat(q?"#dc3545":"dark"===Ce?"#404656":"#d8d6de"," solid ").concat("ar"===Oe.locale?"0px":"1px"),borderRight:"".concat(q?"#dc3545":"dark"===Ce?"#404656":"#d8d6de"," solid ").concat("ar"===Oe.locale?"1px":"0px")},children:(0,I.jsx)(M.ZP,{isDisabled:F,styles:{control:function(e){return U(U({},e),{},{border:"none"})}},onMenuOpen:function(){return Ne(ue)},id:"athleteCategory",placeholder:Oe.formatMessage({id:"selectCategory"}),value:ge,components:{Option:function(e){var n=e.data,a=(0,i.Z)(e,R);return"add-athleteCategory"===n.type?(0,I.jsxs)(x.Z,{className:"text-left rounded-0",color:n.color,block:!0,onClick:function(){return se(!0)},children:[(0,I.jsx)(c.Z,{size:14})," ",(0,I.jsx)("span",{className:"align-middle ml-50",children:n.label})]}):"edit-athleteCategory"===n.type?(0,I.jsxs)(x.Z,{className:"text-left rounded-0",color:n.color,block:!0,onClick:function(){var e;(e=oe.find((function(e){return e.value===Number(ge.value)})))&&(0,k.k_)(k.U2,[S.nX,e.value],!0,l.Am,t,"","somethingWrong",(function(e){ye(e),se(!0)}),null)},children:[(0,I.jsx)(d.Z,{size:14})," ",(0,I.jsx)("span",{className:"align-middle ml-50",children:n.label})]}):(0,I.jsxs)(A.c.Option,U(U({},a),{},{children:[" ",n.label," "]}))}},noOptionsMessage:function(){return(0,I.jsx)(O.Z,{id:"noRecords"})},onChange:function(e){return function(e){je(e),z(e)}(e)},isClearable:!0,theme:w.ss,options:oe,classNamePrefix:"select"})})]}),q&&(0,I.jsx)("div",{className:"customSelectError",children:L})]}),(0,I.jsxs)(h.Z,{isOpen:ae,toggle:function(){return se(!ae)},onClosed:function(){H(!1),se(!1),ye({}),ee("")},className:"modal-dialog-centered",children:[(0,I.jsx)(Z.Z,{toggle:function(){return se(!ae)},children:(0,I.jsx)(O.Z,{id:be.id?"editCategory":"addCategory"})}),(0,I.jsxs)(b.Z,{children:[K&&(0,I.jsxs)(y.Z,{color:"danger",className:"d-flex align-items-center",children:[(0,I.jsx)("div",{className:"alert-body font-small-2 flex-grow-1",children:(0,I.jsx)("p",{children:(0,I.jsx)("small",{className:"mr-50",children:(0,I.jsx)(O.Z,{id:K})})})}),(0,I.jsx)(p.Z,{id:"login-tip",className:"mx-50",size:18,style:{top:"10px",right:"10px"}})]}),(0,I.jsx)(N.Z,{label:(0,I.jsx)(O.Z,{id:"name"}),value:be.name,id:"name",name:"name",placeholder:"",requireStar:!0,onChange:function(e){return ye(U(U({},be),{},{name:e.target.value}))},invalid:X&&!be.name,invalidtext:(0,I.jsx)(O.Z,{id:"required"}),prepend:{icon:(0,I.jsx)(f.Z,{size:14})}}),(0,I.jsx)(N.Z,{label:(0,I.jsx)(O.Z,{id:"description"}),value:be.description,id:"description",type:"textarea",name:"description",placeholder:"",onChange:function(e){return ye(U(U({},be),{},{description:e.target.value}))},prepend:{icon:(0,I.jsx)(m.Z,{size:14})}})]}),(0,I.jsxs)(v.Z,{children:[(0,I.jsx)(x.Z.Ripple,{onClick:function(e){e.preventDefault(),ee(!1),H(!0),be.name&&(be.id?(0,k.k_)(k.Vx,[S.nX,be.id,be],!0,l.Am,t,"athleteCategoryUpdatedSuccessfully","",Se,Ee):(0,k.k_)(k.$T,[S.nX,be],!0,l.Am,t,"athleteCategoryCreatedSuccessfully","",Se,Ee))},color:"primary",children:(0,I.jsx)(O.Z,{id:"save"})}),be.id&&fe.can(P.a.DELETE_ACTION,_.k.ATHLETE_CATEGORY_SUBJECT)&&(0,I.jsx)(x.Z.Ripple,{color:"danger",type:"button",onClick:function(){(0,T.o)(Oe.formatMessage({id:"delete"}),Oe.formatMessage({id:"deleteCategoryQuestion"}),"warning",!0,Oe.formatMessage({id:"yes"}),Oe.formatMessage({id:"no"})).then((function(e){e.value&&(0,k.k_)(k.Vx,[S.nX,be.id,{deleted:!0}],!0,l.Am,t,"categoryDeletedSuccessfully","somethingWrong",Se,null)}))},children:(0,I.jsx)(O.Z,{id:"delete"})})]})]})]})}},12430:function(e,n,t){var a=t(42982),s=t(4942),i=t(45987),r=t(70885),o=t(67294),l=t(39249),c=t(61896),d=t(55654),u=t(55484),p=t(61643),f=t(31109),m=t(70616),x=t(97975),g=t(82669),j=t(67954),h=t(85677),Z=t(32701),b=t(10684),y=t(17834),v=t(97985),C=(t(22299),t(86896)),O=t(44012),N=t(48159),k=t(16550),S=t(88295),E=t(6756),T=t(16714),P=t(56176),_=t(14322),A=t(93630),M=t(49817),w=t(16724),D=t(47201),I=t(85893),R=["data"];function z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function U(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?z(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.refresh,t=e.dispatch,s=e.pos,z=e.onChange,W=e.requireStar,q=e.invalid,L=e.invalidText,B=e.edit,J=e.add,G=e.label,F=e.disabled,Q=(0,o.useState)(!1),V=(0,r.Z)(Q,2),X=V[0],H=V[1],Y=(0,o.useState)(null),$=(0,r.Z)(Y,2),K=$[0],ee=$[1],ne=(0,o.useState)(!1),te=(0,r.Z)(ne,2),ae=te[0],se=te[1],ie=(0,o.useState)([]),re=(0,r.Z)(ie,2),oe=re[0],le=re[1],ce=(0,o.useState)([]),de=(0,r.Z)(ce,2),ue=de[0],pe=de[1],fe=(0,o.useContext)(E.v),me=(0,o.useState)(null),xe=(0,r.Z)(me,2),ge=xe[0],je=xe[1],he=(0,o.useState)({}),Ze=(0,r.Z)(he,2),be=Ze[0],ye=Ze[1],ve=(0,D.Q)(),Ce=(0,r.Z)(ve,1)[0],Oe=(0,C.Z)();function Ne(e){pe(e);var n=e.map((function(e){return{value:e.id,label:e.name,description:e.description,amount:e.amount}}));B&&ge&&fe.can(P.a.EDIT_ACTION,_.k.POSITION_SUBJECT)&&(n=[{value:"edit-position",label:Oe.formatMessage({id:"editPosition"}),type:"edit-position",color:"flat-warning"}].concat((0,a.Z)(n))),J&&fe.can(P.a.WRITE_ACTION,_.k.POSITION_SUBJECT)&&(n=[{value:"add-position",label:Oe.formatMessage({id:"addPosition"}),type:"add-position",color:"flat-success"}].concat((0,a.Z)(n))),le(n)}var ke=function(){(0,k.k_)(k.go,[S.qe],!0,l.Am,t,"","somethingWrong",Ne,null)},Se=function(){se(!1),je(null),z(null),ke()};(0,o.useEffect)((function(){je(s)}),[s]),(0,o.useEffect)((function(){n&&ke()}),[n]);var Ee=function(e){414===e.code?ee("nameExist"):ee("somethingWrong")};return(0,I.jsxs)("div",{children:[(0,I.jsxs)(g.Z,{children:[!1!==G&&(0,I.jsxs)(j.Z,{for:"position",children:[(0,I.jsx)(O.Z,{id:"position"})," ",W?(0,I.jsx)("span",{className:"text-danger h6",children:"*"}):""]}),(0,I.jsxs)("div",{style:{border:"".concat(q?"#dc3545":"dark"===Ce?"#404656":"#d8d6de"," solid 1px"),borderRadius:"5px",display:"flex",alignItems:"center"},children:[(0,I.jsx)(u.Z,{className:"mx-1",size:14}),(0,I.jsx)("div",{style:{flexGrow:1,borderLeft:"".concat(q?"#dc3545":"dark"===Ce?"#404656":"#d8d6de"," solid ").concat("ar"===Oe.locale?"0px":"1px"),borderRight:"".concat(q?"#dc3545":"dark"===Ce?"#404656":"#d8d6de"," solid ").concat("ar"===Oe.locale?"1px":"0px")},children:(0,I.jsx)(M.ZP,{isDisabled:F,styles:{control:function(e){return U(U({},e),{},{border:"none"})}},onMenuOpen:function(){return Ne(ue)},id:"position",placeholder:Oe.formatMessage({id:"selectPosition"}),value:ge,components:{Option:function(e){var n=e.data,a=(0,i.Z)(e,R);return"add-position"===n.type?(0,I.jsxs)(x.Z,{className:"text-left rounded-0",color:n.color,block:!0,onClick:function(){return se(!0)},children:[(0,I.jsx)(c.Z,{size:14})," ",(0,I.jsx)("span",{className:"align-middle ml-50",children:n.label})]}):"edit-position"===n.type?(0,I.jsxs)(x.Z,{className:"text-left rounded-0",color:n.color,block:!0,onClick:function(){var e;(e=oe.find((function(e){return e.value===Number(ge.value)})))&&(0,k.k_)(k.U2,[S.gF,e.value],!0,l.Am,t,"","somethingWrong",(function(e){ye(e),se(!0)}),null)},children:[(0,I.jsx)(d.Z,{size:14})," ",(0,I.jsx)("span",{className:"align-middle ml-50",children:n.label})]}):(0,I.jsxs)(A.c.Option,U(U({},a),{},{children:[" ",n.label," "]}))}},noOptionsMessage:function(){return(0,I.jsx)(O.Z,{id:"noRecords"})},onChange:function(e){return function(e){je(e),z(e)}(e)},isClearable:!0,theme:w.ss,options:oe,classNamePrefix:"select"})})]}),q&&(0,I.jsx)("div",{className:"customSelectError",children:L})]}),(0,I.jsxs)(h.Z,{isOpen:ae,toggle:function(){return se(!ae)},onClosed:function(){H(!1),se(!1),ye({}),ee("")},className:"modal-dialog-centered",children:[(0,I.jsx)(Z.Z,{toggle:function(){return se(!ae)},children:(0,I.jsx)(O.Z,{id:be.id?"editPosition":"addPosition"})}),(0,I.jsxs)(b.Z,{children:[K&&(0,I.jsxs)(y.Z,{color:"danger",className:"d-flex align-items-center",children:[(0,I.jsx)("div",{className:"alert-body font-small-2 flex-grow-1",children:(0,I.jsx)("p",{children:(0,I.jsx)("small",{className:"mr-50",children:(0,I.jsx)(O.Z,{id:K})})})}),(0,I.jsx)(p.Z,{id:"login-tip",className:"mx-50",size:18,style:{top:"10px",right:"10px"}})]}),(0,I.jsx)(N.Z,{label:(0,I.jsx)(O.Z,{id:"name"}),value:be.name,id:"name",name:"name",placeholder:"",requireStar:!0,onChange:function(e){return ye(U(U({},be),{},{name:e.target.value}))},invalid:X&&!be.name,invalidtext:(0,I.jsx)(O.Z,{id:"required"}),prepend:{icon:(0,I.jsx)(f.Z,{size:14})}}),(0,I.jsx)(N.Z,{label:(0,I.jsx)(O.Z,{id:"description"}),value:be.description,id:"description",type:"textarea",name:"description",placeholder:"",onChange:function(e){return ye(U(U({},be),{},{description:e.target.value}))},prepend:{icon:(0,I.jsx)(m.Z,{size:14})}})]}),(0,I.jsxs)(v.Z,{children:[(0,I.jsx)(x.Z.Ripple,{onClick:function(e){e.preventDefault(),ee(!1),H(!0),be.name&&(be.id?(0,k.k_)(k.Vx,[S.gF,be.id,be],!0,l.Am,t,"positionUpdatedSuccessfully","",Se,Ee):(0,k.k_)(k.$T,[S.gF,be],!0,l.Am,t,"positionCreatedSuccessfully","",Se,Ee))},color:"primary",children:(0,I.jsx)(O.Z,{id:"save"})}),be.id&&fe.can(P.a.DELETE_ACTION,_.k.POSITION_SUBJECT)&&(0,I.jsx)(x.Z.Ripple,{color:"danger",type:"button",onClick:function(){(0,T.o)(Oe.formatMessage({id:"delete"}),Oe.formatMessage({id:"deletePositionQuestion"}),"warning",!0,Oe.formatMessage({id:"yes"}),Oe.formatMessage({id:"no"})).then((function(e){e.value&&(0,k.k_)(k.Vx,[S.gF,be.id,{deleted:!0}],!0,l.Am,t,"positionDeletedSuccessfully","somethingWrong",Se,null)}))},children:(0,I.jsx)(O.Z,{id:"delete"})})]})]})]})}},97985:function(e,n,t){var a=t(87462),s=t(63366),i=t(67294),r=t(45697),o=t.n(r),l=t(94184),c=t.n(l),d=t(23663),u={tag:d.iC,className:o().string,cssModule:o().object},p=function(e){var n=e.className,t=e.cssModule,r=e.tag,o=(0,s.Z)(e,["className","cssModule","tag"]),l=(0,d.mx)(c()(n,"modal-footer"),t);return i.createElement(r,(0,a.Z)({},o,{className:l}))};p.propTypes=u,p.defaultProps={tag:"div"},n.Z=p}}]);