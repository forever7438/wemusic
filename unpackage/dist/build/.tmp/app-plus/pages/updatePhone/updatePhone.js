(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/updatePhone/updatePhone"],{"1c98":function(e,t,n){"use strict";n.r(t);var o=n("af7e"),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=a.a},4785:function(e,t,n){"use strict";n.r(t);var o=n("964a"),a=n("1c98");for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);n("6717");var s=n("2877"),c=Object(s["a"])(a["default"],o["a"],o["b"],!1,null,null,null);t["default"]=c.exports},5295:function(e,t,n){},6717:function(e,t,n){"use strict";var o=n("5295"),a=n.n(o);a.a},"964a":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a})},af7e:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{code:"",new_email:"",reg:/^[1][3,4,5,7,8][0-9]{9}$/}},methods:{getCode:function(){this.new_email?this.reg.test(this.new_email)?this.ajax({url:"index/email_code",data:{phone:this.new_email},success:function(t){"success"===t.data.body?e.showToast({title:"验证码已发送至您的手机,请注意查收!",icon:"none"}):e.showToast({title:t.data.msg,icon:"none"})}}):e.showToast({title:"手机号格式不正确",icon:"none"}):e.showToast({title:"请输入手机号",icon:"none"})},updatePhone:function(){this.new_email?this.reg.test(this.new_email)?this.code?this.ajax({url:1==e.getStorageSync("type")?"user/set_phone":"teacherclass/set_phone",data:{phone:this.new_email,code:this.code},success:function(t){"success"===t.data.body?(e.showToast({title:"手机号修改成功",icon:"none"}),e.navigateTo({url:1==e.getStorageSync("type")?"/pages/login/login":"/pages/teacherLogin/teacherLogin"}),e.clearStorage()):e.showToast({title:t.data.msg,icon:"none"})}}):e.showToast({title:"请输入验证码",icon:"none"}):e.showToast({title:"手机号格式不正确",icon:"none"}):e.showToast({title:"请输入手机号",icon:"none"})}}};t.default=n}).call(this,n("6e42")["default"])}},[["a8b8","common/runtime","common/vendor"]]]);