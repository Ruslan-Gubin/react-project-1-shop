"use strict";(self.webpackChunkreact_webpack=self.webpackChunkreact_webpack||[]).push([[55],{1055:function(e,t,s){s.r(t),s.d(t,{default:function(){return u}});var a=s(7294),l=s(6706),o=s(9250),n=s(1157),c=s(4801),r=s(4685),i=s(5893);const u=()=>{const{id:e}=(0,o.UO)(),{postUpdate:t}=(0,l.useSelector)(r.do),[s,{}]=c.Fv.useUpdatePostMutation(),[u,{}]=c.Fv.useCreatePostMutation(),[d,h]=a.useState(!1),[g,p]=a.useState(""),[x,f]=a.useState(""),[C,j]=a.useState(""),[v,k]=a.useState(""),{pathname:m}=(0,o.TH)(),S=(0,o.s0)(),b=a.useRef(null),w=(0,l.useDispatch)(),{status:K}=(0,l.useSelector)(r.Hz);a.useEffect((()=>{K||S("/login")}),[K]);return a.useEffect((()=>{if(t&&"/add-post"!==m){const{text:e,title:s,image:a,tags:l}=t;p(e),f(s),j(l.join(",")),k(a.url)}}),[t]),(0,i.jsxs)("div",{className:"uGurd85tKSSerwHdjx4g",children:[(0,i.jsx)("div",{className:"Dd71k7xRBdSzsKMXIYU6",children:v?(0,i.jsx)(n.K1,{onClick:()=>k(""),bgColor:"red",children:"Удалить фото"}):(0,i.jsx)(n.K1,{onClick:()=>{var e;return null===(e=b.current)||void 0===e?void 0:e.click()},children:"Добавить фото"})}),(0,i.jsx)("input",{ref:b,type:"file",onChange:e=>{const t=!!e.target.files&&e.target.files[0];t&&(e=>{try{const t=new FileReader;t.readAsDataURL(e),t.onloadend=()=>{t.result&&k(t.result)}}catch(e){console.log(e,"Ошибка при загрузке файла!")}})(t)},hidden:!0}),v&&(0,i.jsx)("img",{className:"Jmjd5ECUROACJFlyml6W",src:v||"",alt:"uploaded"}),(0,i.jsx)(n.YF,{required:!0,value:x,onChange:e=>f(e),placeholder:"Заголовок..."}),(0,i.jsx)(n.YF,{required:!0,value:C,onChange:e=>j(e),placeholder:"Теги..."}),(0,i.jsx)(n.ML,{value:g,onChange:e=>p(e)}),""!==x&&""!==v&&""!==g&&""!==C?(0,i.jsx)(n.K1,{disabled:d,onClick:t=>(async t=>{h(!0),t.preventDefault();try{e?(await s({text:g,title:x,tags:C,image:v,id:e}).unwrap().catch((e=>console.log(e))),v&&S(`/post/${e}`)):!e&&v&&await u({text:g,title:x,tags:C,image:v}).unwrap().then((e=>{const t=e._id;S(`/post/${t}`)})).catch((e=>console.log(e))),w(r.SI.setUpdatePostRemove())}catch(e){console.log("Ошибка при создании статьи",e)}})(t),children:"Опубликовать"}):(0,i.jsx)(n.K1,{bgColor:"black",children:"Заполните все поля !!!"}),(0,i.jsx)(n.K1,{onClick:()=>(g&&p(""),x&&f(""),C&&j(""),void(v&&k(""))),bgColor:"nobg",children:"Очистить"})]})}}}]);