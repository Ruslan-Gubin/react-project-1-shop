"use strict";(self.webpackChunkreact_webpack=self.webpackChunkreact_webpack||[]).push([[753],{6753:function(e,t,s){s.r(t),s.d(t,{default:function(){return l}});var a=s(7294),r=s(9250),u=s(4801),i=s(9151),n=s(6752),o=s(6706),c=s(5893);const d=()=>{const{id:e}=(0,r.UO)(),{auth:t}=(0,o.useSelector)(i.Hz),s=e||t._id,{data:d,isLoading:l}=u.iJ.useGetUserSinglPageQuery(t._id,{pollingInterval:1e4}),{data:g,isLoading:h}=u.iJ.useGetUserSinglPageQuery(s,{pollingInterval:1e4}),v=(0,o.useSelector)(i.do),f={...v,auth:e||t._id},{data:p=[],isLoading:P,isError:L}=u.Fv.useGetUserPostQuery(f),{data:k,isLoading:A}=u.Fv.useGetUserPostLengthQuery(f),{data:b=[],isLoading:y}=u.Fv.useGetPostsQuery({searchPost:v.search}),G=(0,o.useDispatch)();return a.useEffect((()=>{!l&&d?(G(i.vA.getAutchRequestFriends(d)),G(i.vA.getAutchOnline())):G(i.vA.getAutchOfline())}),[d]),(0,c.jsx)("div",{children:!h&&!A&&k&&!L&&!P&&g&&!y&&b&&(0,c.jsx)(n.V8,{globalSearchPosts:b,totalLength:k,userId:s,userTarger:g,userPosts:p})})},l=a.memo(d)}}]);