"use strict";(self.webpackChunkreact_webpack=self.webpackChunkreact_webpack||[]).push([[68],{99068:function(e,t,s){s.r(t),s.d(t,{default:function(){return h}});var a=s(67294),c=s(86706),n=s(89250),r=s(45418),l=s(43153),i=s(62325),o={root:"CnfF7PVN1IsP6GiFNhk4",header:"XKIGYR3aQrisw3A18Alw",body:"tBOzcjGPmQRtf2pmJXP2",button:"TUrtmjO7ybhFjvK8_55T",cancel:"JNjZkbrZqnQFS8ICkltQ"},d=s(85893);const h=()=>{const{auth:e}=(0,c.useSelector)(l.Hz),[t]=r.KD.useCreatePlayerMutation(),[s,h]=a.useState(""),u=(0,n.s0)();return(0,d.jsxs)("div",{className:o.root,children:[(0,d.jsx)("div",{className:o.header,children:"Введите название Города"}),(0,d.jsxs)("div",{className:o.body,children:[(0,d.jsx)(i.YF,{minLength:3,autofocus:!0,value:s,onChange:e=>h(String(e))}),(0,d.jsxs)("div",{className:o.button,children:[s.length>2&&s.length<20?(0,d.jsx)(i.K1,{width:150,bgColor:"info",onClick:()=>(async()=>{try{await t({nameSity:s,userId:e._id}).unwrap().then((()=>{u("/game")}))}catch(e){console.error("rejected",e)}})(),children:"START"}):(0,d.jsx)(i.K1,{width:150,bgColor:"black",children:"START"}),(0,d.jsx)("div",{className:o.cancel,children:(0,d.jsx)(i.K1,{width:150,bgColor:"red",onClick:()=>{u("/")},children:"CANCEL"})})]})]}),(0,d.jsx)("div",{className:o.footer})]})}}}]);