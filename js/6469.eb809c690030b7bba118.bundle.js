"use strict";(self.webpackChunkClubs_Management=self.webpackChunkClubs_Management||[]).push([[6469],{86469:function(e,n,s){s.r(n),s.d(n,{default:function(){return de}});var a=s(4942),t=s(15861),r=s(70885),i=s(87757),l=s.n(i),c=s(67294),o=s(78133),d=s(15538),u=s(17834),m=s(97975),p=s(39704),g=s(39249),x=s(86896),f=s(44012),h=s(61643),j=s(73752),Z=s(60329),v=s(19589),b=s(44309),N=s(12590),w=s(48159),y=s(16550),S=s(88295),C=s(85893),k=function(e){var n=e.setOpen,s=e.open,a=e.toggleSidebar,t=e.refresh,i=(0,c.useState)(""),l=(0,r.Z)(i,2),k=l[0],M=l[1],O=(0,c.useState)(""),T=(0,r.Z)(O,2),E=T[0],P=T[1],z=(0,c.useState)(""),I=(0,r.Z)(z,2),R=I[0],_=I[1],A=(0,c.useState)(""),D=(0,r.Z)(A,2),q=D[0],F=D[1],U=(0,c.useState)(null),W=(0,r.Z)(U,2),B=W[0],L=W[1],V=(0,c.useState)(!1),H=(0,r.Z)(V,2),J=H[0],K=H[1],Q=(0,c.useState)(!1),Y=(0,r.Z)(Q,2),$=Y[0],G=Y[1],X=(0,p.I0)(),ee=!k||!E||R&&10!==R.length||!q,ne=function(e){n(!1),G(!1),L(!1),K(!1),P(""),M(""),_(""),e&&t()},se=function(){ne(!0)},ae=function(e){418===e.code?L("usernameExist"):414===e.code?L("nameExist"):422===e.code?L("passwordLengthError"):423===e.code?L("passwordsMatchError"):424===e.code?L("passwordResetLinkExpired"):L("somethingWrong")};return(0,C.jsx)(o.Z,{size:"lg",open:s,onClosed:ne,title:(0,x.Z)().formatMessage({id:"newTrainer"}),headerClassName:"mb-1",contentClassName:"pt-0",toggleSidebar:a,children:(0,C.jsx)(c.Fragment,{children:(0,C.jsxs)(d.Z,{className:"mt-2",onSubmit:function(e){e.preventDefault(),G(!0),L(!1),ee||(0,y.k_)(y.$T,[S.FO,{username:k.trim(),name:E,phone:R,password:q}],!0,g.Am,X,"trainerCreatedSuccessfully","",se,ae)},children:[B&&(0,C.jsxs)(u.Z,{color:"danger",className:"d-flex align-items-center",children:[(0,C.jsx)("div",{className:"alert-body font-small-2 flex-grow-1",children:(0,C.jsx)("p",{children:(0,C.jsx)("small",{className:"mr-50",children:(0,C.jsx)(f.Z,{id:B})})})}),(0,C.jsx)(h.Z,{id:"login-tip",className:"mx-50",size:18,style:{top:"10px",right:"10px"}})]}),(0,C.jsx)(w.Z,{label:(0,C.jsx)(f.Z,{id:"username"}),value:k,id:"username",name:"username",placeholder:"",onChange:function(e){return M(e.target.value)},invalid:$&&!k,requireStar:!0,prepend:{icon:(0,C.jsx)(j.Z,{size:14})},invalidtext:(0,C.jsx)(f.Z,{id:"required"})}),(0,C.jsx)(w.Z,{label:(0,C.jsx)(f.Z,{id:"name"}),value:E,id:"name",name:"name",placeholder:"",onChange:function(e){return P(e.target.value)},invalid:$&&!E,requireStar:!0,invalidtext:(0,C.jsx)(f.Z,{id:"required"}),prepend:{icon:(0,C.jsx)(j.Z,{size:14})}}),(0,C.jsx)(w.Z,{label:(0,C.jsx)(f.Z,{id:"phone"}),value:R,id:"phone",name:"phone",placeholder:"",invalid:$&&R&&10!==R.length,invalidtext:(0,C.jsx)(f.Z,{id:"phoneLengthError"}),onChange:function(e){return _(e.target.value.replace(/ /g,""))},prepend:{icon:(0,C.jsx)(Z.Z,{size:14})},mask:{blocks:[4,2,2,2],numericOnly:!0}}),(0,C.jsx)(w.Z,{label:(0,C.jsx)(f.Z,{id:"password"}),type:J?"text":"password",value:q,id:"login-password",placeholder:"",name:"login-password",className:"input-group-merge",onChange:function(e){return F(e.target.value)},invalid:$&&(!q||q.length<8),requireStar:!0,prepend:{icon:(0,C.jsx)(v.Z,{size:14})},append:{icon:J?(0,C.jsx)(b.Z,{size:14}):(0,C.jsx)(N.Z,{size:14}),onClick:function(){return K(!J)}},invalidtext:(0,C.jsx)(f.Z,{id:q?q.length<8?"passwordLengthError":"":"required"})}),(0,C.jsx)(m.Z.Ripple,{type:"submit",className:"mr-1",color:"primary",children:(0,C.jsx)(f.Z,{id:"save"})})]})})})},M=s(5513),O=s(68138),T=s(17354),E=s(83823),P=s(65497),z=s(42365),I=s(98227),R=s(79366),_=s(34073),A=s(55654),D=s(30833),q=s(16724),F=s(56176),U=s(14322),W=function(e,n,s){return[{name:n.formatMessage({id:"name"}),minWidth:"297px",selector:"name",sortable:!0,cell:function(e){return(0,C.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[e.avatar?(0,C.jsx)(O.Z,{img:e.avatar,className:"mr-1"}):(0,C.jsx)(O.Z,{color:"light-danger",className:"mr-1",content:e.name,initials:!0}),(0,C.jsxs)("div",{className:"d-flex flex-column",children:[(0,C.jsx)(M.rU,{to:"/apps/trainers/view/".concat(e.id),className:"user-name text-truncate mb-0",children:(0,C.jsx)("span",{className:"font-weight-bold text-capitalize",children:e.name})}),(0,C.jsx)("small",{className:"text-truncate text-muted mb-0",children:e.username})]})]})}},{name:n.formatMessage({id:"phone"}),selector:"phone",sortable:!0,cell:function(e){return(0,q.CN)(e.phone)}},{name:n.formatMessage({id:"status"}),selector:"status",sortable:!1,cell:function(e){return(0,C.jsx)(T.Z,{pill:!0,color:e.blocked?"light-danger":e.accountVerified?"light-success":"light-warning",className:"mr-1",children:e.blocked?n.formatMessage({id:"blocked"}):e.accountVerified?n.formatMessage({id:"active"}):n.formatMessage({id:"unverified"})})}},{name:n.formatMessage({id:"actions"}),minWidth:"100px",cell:function(a){return(0,C.jsxs)(E.Z,{children:[(0,C.jsx)(P.Z,{tag:"div",className:"btn btn-sm",children:(0,C.jsx)(R.Z,{size:14,className:"cursor-pointer"})}),(0,C.jsxs)(z.Z,{right:!0,children:[(0,C.jsxs)(I.Z,{tag:M.rU,to:"/apps/trainers/view/".concat(a.id),className:"w-100",children:[(0,C.jsx)(_.Z,{size:14,className:"mr-50"}),(0,C.jsx)("span",{className:"align-middle",children:n.formatMessage({id:"details"})})]}),s.can(F.a.EDIT_ACTION,U.k.TRAINER_SUBJECT)&&(0,C.jsxs)(I.Z,{tag:M.rU,to:"/apps/trainers/edit/".concat(a.id),className:"w-100",children:[(0,C.jsx)(A.Z,{size:14,className:"mr-50"}),(0,C.jsx)("span",{className:"align-middle",children:n.formatMessage({id:"edit"})})]}),s.can(F.a.DELETE_ACTION,U.k.TRAINER_SUBJECT)&&(0,C.jsxs)(I.Z,{className:"w-100",onClick:function(){return e(a.id)},children:[(0,C.jsx)(D.Z,{size:14,className:"mr-50"}),(0,C.jsx)("span",{className:"align-middle",children:n.formatMessage({id:"delete"})})]})]})]})}}]},B=s(61896),L=s(46445),V=s(27434),H=s(90044),J=s(10267),K=s(51252),Q=s(67954),Y=s(68959),$=s(56941),G=s(38089),X=s(75351),ee=s(91121),ne=(s(22299),s(73732),s(16714)),se=s(4248),ae=s(82433),te=s(6756),re=s(82475);function ie(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,a)}return s}function le(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?ie(Object(s),!0).forEach((function(n){(0,a.Z)(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):ie(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}var ce=function(e){var n=e.toggleSidebar,s=e.handlePerPage,a=e.rowsPerPage,t=e.pageIndex,r=e.data,i=e.intl,l=e.ability;return(0,C.jsx)("div",{className:"list-table-header w-100 mr-1 ml-50 mt-2 mb-75",children:(0,C.jsxs)(J.Z,{children:[(0,C.jsx)(K.Z,{xl:"6",className:"d-flex align-items-center p-0",children:(0,C.jsxs)("div",{className:"d-flex align-items-center w-100",children:[(0,C.jsx)(Q.Z,{for:"rows-per-page",children:(0,C.jsx)(f.Z,{id:"rowsPerPage"})}),(0,C.jsx)(Y.Z,{className:"form-control mx-50",type:"select",value:a,onChange:s,style:{width:"4rem",padding:"0 0.8rem",backgroundPosition:"calc(100% - 3px) 7px, calc(100% - 20px) 13px, 100% 0"},bsSize:"sm",children:ae.m.map((function(e,n){return(0,C.jsx)("option",{value:e,children:e},n)}))}),(0,C.jsx)(Q.Z,{for:"rows-per-page",children:r.count?(0,C.jsxs)(C.Fragment,{children:[(t-1)*a+1,"-",t*a>r.count?r.count:t*a," ",i.formatMessage({id:"of"})," ",r.count]}):null})]})}),(0,C.jsxs)(K.Z,{xl:"6",className:"d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1",children:[(0,C.jsx)("div",{className:"mr-1",children:(0,C.jsx)(re._,{data:r.rows,title:"trainers",keys:["name","phone"],displays:[null,function(e){return(0,q.CN)(e.phone)}]})}),l.can(F.a.WRITE_ACTION,U.k.TRAINER_SUBJECT)&&(0,C.jsxs)(m.Z.Ripple,{color:"primary",onClick:n,children:[(0,C.jsx)(B.Z,{size:15}),(0,C.jsx)("span",{className:"align-middle ml-25",children:(0,C.jsx)(f.Z,{id:"addTrainer"})})]})]})]})})},oe=function(){var e=(0,c.useState)(ae.m[0]),n=(0,r.Z)(e,2),s=n[0],a=n[1],i=(0,c.useState)(1),o=(0,r.Z)(i,2),d=o[0],u=o[1],m=(0,c.useState)([["createdAt","DESC"]]),h=(0,r.Z)(m,2),Z=h[0],v=h[1],b=(0,c.useState)({count:0,rows:[]}),N=(0,r.Z)(b,2),M=N[0],O=N[1],T=(0,c.useState)({}),E=(0,r.Z)(T,2),P=E[0],z=E[1],I=(0,p.I0)(),R=(0,c.useState)(""),_=(0,r.Z)(R,2),A=_[0],D=_[1],F=(0,c.useState)(!1),U=(0,r.Z)(F,2),B=U[0],Q=U[1],Y=(0,c.useState)(""),re=(0,r.Z)(Y,2),ie=re[0],oe=(re[1],(0,c.useState)("")),de=(0,r.Z)(oe,2),ue=de[0],me=(de[1],(0,c.useState)("")),pe=(0,r.Z)(me,2),ge=pe[0],xe=pe[1],fe=(0,c.useState)(0),he=(0,r.Z)(fe,2),je=he[0],Ze=he[1],ve=(0,x.Z)(),be=(0,c.useContext)(te.v),Ne=function(e,n,s,a){(0,y.k_)(y.Ki,[S.YB,e,n,s,a],!0,g.Am,I,null,"somethingWrong",(function(e){return O({rows:e||[],count:(e||[]).length?e[0].count:0})}),null)};(0,c.useEffect)((0,t.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Ne(d,s,Z,P);case 1:case"end":return e.stop()}}),e)}))),[]);var we,ye,Se,Ce,ke,Me=function(){return Q(!B)},Oe=function(e){u(e.selected+1),Ne(e.selected+1,s,Z,P)},Te=function(e){u(1),D(e),z(le(le({},P),{},{name:e})),clearTimeout(je),Ze(setTimeout((function(){return Ne(1,s,Z,le(le({},P),{},{name:e}))}),700))};return(0,C.jsx)("div",{className:"app-user-list",children:(0,C.jsxs)(c.Fragment,{children:[(0,C.jsxs)($.Z,{children:[(0,C.jsx)(G.Z,{children:(0,C.jsx)(X.Z,{tag:"h4",children:(0,C.jsx)(f.Z,{id:"searchFilter"})})}),(0,C.jsx)(ee.Z,{children:(0,C.jsxs)(J.Z,{children:[(0,C.jsx)(K.Z,{md:"4",children:(0,C.jsx)(w.Z,{prepend:{icon:(0,C.jsx)(j.Z,{size:14})},placeholder:ve.formatMessage({id:"searchByName"}),id:"search",type:"text",value:A,onChange:function(e){return Te(e.target.value)}})}),(0,C.jsx)(K.Z,{md:"4",children:(0,C.jsxs)(w.Z,{prepend:{icon:(0,C.jsx)(L.Z,{size:14})},type:"select",isClearable:!1,theme:q.ss,value:ge,onChange:function(e){return function(e){u(1),xe(e);var n={};"blocked"===e?n={blocked:!0}:"unverified"===e?n={accountVerified:!1}:"active"===e&&(n={blocked:!1,accountVerified:!0}),z(le(le({},n),n)),Ne(1,s,Z,le(le({},n),n))}(e.target.value)},children:[(0,C.jsx)("option",{value:"",children:ve.formatMessage({id:"selectStatus"})}),(0,C.jsx)("option",{value:"active",children:ve.formatMessage({id:"active"})}),(0,C.jsx)("option",{value:"blocked",children:ve.formatMessage({id:"blocked"})})]})})]})})]}),(0,C.jsx)($.Z,{children:(0,C.jsx)(H.ZP,{noHeader:!0,pagination:!0,subHeader:!0,responsive:!0,paginationServer:!0,columns:W((function(e){(0,ne.o)(ve.formatMessage({id:"delete"}),ve.formatMessage({id:"deleteTrainerQuestion"}),"warning",!0,ve.formatMessage({id:"yes"}),ve.formatMessage({id:"no"})).then((function(n){n.value&&(0,y.k_)(y.Vx,[S.uh,e,{deleted:!0}],!0,g.Am,I,"trainerDeletedSuccessfully","somethingWrong",(function(){return Ne(d,s,Z,P)}),null)}))}),ve,be),sortIcon:(0,C.jsx)(V.Z,{}),className:"react-dataTable",paginationComponent:function(){return(0,C.jsx)(se.t,{pageIndex:d,pageSize:s,total:M.count,handlePagination:Oe})},data:(Ce={name:A,age:ie,position:ie,category:ue},ke=Object.keys(Ce).some((function(e){return Ce[e]&&Ce[e].length>0})),(null===(we=M.rows)||void 0===we?void 0:we.length)>0?M.rows:0===(null===(ye=M.rows)||void 0===ye?void 0:ye.length)&&ke?[]:null===(Se=M.rows)||void 0===Se?void 0:Se.slice(0,s)),onSort:function(e,n){var a=[[e.selector,n]];v(a),Ne(d,s,a,P)},noDataComponent:(0,C.jsx)("span",{className:"my-3",children:(0,C.jsx)(f.Z,{id:"noRecords"})}),subHeaderComponent:(0,C.jsx)(ce,{ability:be,pageIndex:d,toggleSidebar:Me,handlePerPage:function(e){u(1),a(parseInt(e.currentTarget.value)),Ne(1,parseInt(e.currentTarget.value),Z,P)},rowsPerPage:s,searchTerm:A,handleFilter:Te,data:M,intl:ve})})}),(0,C.jsx)(k,{open:B,setOpen:Q,toggleSidebar:Me,refresh:function(){return Ne(d,s,Z,P)}})]})})},de=(s(61360),function(){return(0,C.jsx)("div",{className:"app-user-list",children:(0,C.jsx)(oe,{})})})},91121:function(e,n,s){var a=s(87462),t=s(63366),r=s(67294),i=s(45697),l=s.n(i),c=s(94184),o=s.n(c),d=s(23663),u={tag:d.iC,className:l().string,cssModule:l().object,innerRef:l().oneOfType([l().object,l().string,l().func])},m=function(e){var n=e.className,s=e.cssModule,i=e.innerRef,l=e.tag,c=(0,t.Z)(e,["className","cssModule","innerRef","tag"]),u=(0,d.mx)(o()(n,"card-body"),s);return r.createElement(l,(0,a.Z)({},c,{className:u,ref:i}))};m.propTypes=u,m.defaultProps={tag:"div"},n.Z=m},38089:function(e,n,s){var a=s(87462),t=s(63366),r=s(67294),i=s(45697),l=s.n(i),c=s(94184),o=s.n(c),d=s(23663),u={tag:d.iC,className:l().string,cssModule:l().object},m=function(e){var n=e.className,s=e.cssModule,i=e.tag,l=(0,t.Z)(e,["className","cssModule","tag"]),c=(0,d.mx)(o()(n,"card-header"),s);return r.createElement(i,(0,a.Z)({},l,{className:c}))};m.propTypes=u,m.defaultProps={tag:"div"},n.Z=m}}]);