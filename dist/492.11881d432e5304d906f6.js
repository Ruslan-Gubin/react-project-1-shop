"use strict";(self.webpackChunkreact_webpack=self.webpackChunkreact_webpack||[]).push([[492],{92492:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var s=a(67294),n=a(86706),c=a(45418),r=a(1869),i=a(47586),l=a(43153),u=a(3830),o=a(85893);const d=()=>{const{auth:e}=(0,n.useSelector)(l.Hz),{nextLevelMinesUpdate:t,resourceBar:a}=(0,n.useSelector)(l.gr),{data:d,isLoading:p}=c.KD.useGetPlayerQuery({id:e._id}),[f,{}]=c.KD.useUpdateLevelMineMutation(),h=(0,n.useDispatch)(),k=s.useCallback((e=>{if(e){const t=e.resorse,a=e.level;h(l.xH.setLastMinesInfo(e));const s=(0,u.cQ)(i.SX,t,a+1);h(l.xH.setNextLevelMineUpdate(s))}}),[]);return(0,o.jsx)("div",{className:"jS3F_JpOfQHXts28CcgJ",children:d&&(0,o.jsx)(r.Rf,{playerData:d,handlerClickCircle:async e=>{const s=t.time;if(!p&&d){const{mineUpdatedOptions:n,resourceBarCount:c}=(0,i.Z4)(e,d,a,t);h(l.xH.setResourceBarAll(c)),h(l.xH.setMineUpdateActive({mineId:e._id,timeUpdateValue:s})),await f(n).unwrap().then((async()=>{})).catch((e=>console.log(e)))}},handlerIronValue:k})})}}}]);