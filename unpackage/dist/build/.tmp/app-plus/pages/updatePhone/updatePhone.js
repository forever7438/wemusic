(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/updatePhone/updatePhone"],{"2b96":function(e,t,n){"use strict";var a=n("5d2d"),u=n.n(a);u.a},"539d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{code:"",new_email:"",reg:new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$")}}};t.default=a},"57c6":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"change_phone"},[n("ul",[n("li",[n("span",[e._v("手机号")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.new_email,expression:"new_email"}],attrs:{type:"text",placeholder:"请输入手机号",eventid:"454ccef7-0"},domProps:{value:e.new_email},on:{input:function(t){t.target.composing||(e.new_email=t.target.value)}}})]),n("li",[n("span",[e._v("验证码")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],attrs:{type:"number",placeholder:"请输入验证码",eventid:"454ccef7-1"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}}),n("span",{staticClass:"btn_code"},[e._v("获取验证码")])])],1),n("s",[e._v("绑定手机号后，您可以使用手机号或邮箱登录")]),n("span",{staticClass:"btn",attrs:{eventid:"454ccef7-2"},on:{click:e.update_email}},[e._v("确  定")])],1)},u=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return u})},"5d2d":function(e,t,n){},"703d":function(e,t,n){"use strict";n.r(t);var a=n("539d"),u=n.n(a);for(var c in a)"default"!==c&&function(e){n.d(t,e,function(){return a[e]})}(c);t["default"]=u.a},"8ae7":function(e,t,n){"use strict";n("58cd");var a=c(n("b0ce")),u=c(n("9ce7"));function c(e){return e&&e.__esModule?e:{default:e}}Page((0,a.default)(u.default))},"9ce7":function(e,t,n){"use strict";n.r(t);var a=n("57c6"),u=n("703d");for(var c in u)"default"!==c&&function(e){n.d(t,e,function(){return u[e]})}(c);n("2b96");var o=n("2877"),r=Object(o["a"])(u["default"],a["a"],a["b"],!1,null,null,null);t["default"]=r.exports}},[["8ae7","common/runtime","common/vendor"]]]);