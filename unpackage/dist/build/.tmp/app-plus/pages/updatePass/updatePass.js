(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/updatePass/updatePass"],{"1dcb":function(t,e,s){},"2d0c":function(t,e,s){"use strict";s.r(e);var n=s("3601"),a=s.n(n);for(var o in n)"default"!==o&&function(t){s.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},3601:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{pass:"",new_pass:"",rest_pass:""}},methods:{updatePassword:function(){this.pass?this.new_pass?this.rest_pass==this.new_pass?this.ajax({url:1==t.getStorageSync("type")?"user/update_pass":"teacherclass/update_pass",data:{pass:this.pass,new_pass:this.new_pass},success:function(e){"success"===e.data.body?(t.showToast({title:"修改成功,快使用新密码登录吧",icon:"none"}),setTimeout(function(){t.navigateTo({url:1==t.getStorageSync("type")?"/pages/login/login":"/pages/teacherLogin/teacherLogin"}),t.clearStorage()},1500)):t.showToast({title:e.data.msg,icon:"none"})}}):t.showToast({title:"两次输入的密码不一致",icon:"none"}):t.showToast({title:"请输入新密码",icon:"none"}):t.showToast({title:"请输入原密码",icon:"none"})}}};e.default=s}).call(this,s("6e42")["default"])},"36ee":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},a=[];s.d(e,"a",function(){return n}),s.d(e,"b",function(){return a})},c730:function(t,e,s){"use strict";s.r(e);var n=s("36ee"),a=s("2d0c");for(var o in a)"default"!==o&&function(t){s.d(e,t,function(){return a[t]})}(o);s("e4fd");var c=s("2877"),u=Object(c["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=u.exports},e4fd:function(t,e,s){"use strict";var n=s("1dcb"),a=s.n(n);a.a}},[["70dc","common/runtime","common/vendor"]]]);