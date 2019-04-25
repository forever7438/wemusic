(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/submitBtn"],{"507f":function(t,n,e){"use strict";e.r(n);var a=e("a53a"),o=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);n["default"]=o.a},"528a":function(t,n,e){},"5bf7":function(t,n,e){"use strict";var a=e("528a"),o=e.n(a);o.a},6286:function(t,n,e){"use strict";e.r(n);var a=e("ca3e"),o=e("507f");for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);e("5bf7");var u=e("2877"),s=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,null,null);n["default"]=s.exports},a53a:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{body:""}},props:{friend_id:String},methods:{submit:function(n){var e=this;this.body?this.ajax({url:"friend/message",data:{friend_id:n,body:this.body},success:function(n){"success"===n.data.body?(t.showToast({title:"评论成功",icon:"none"}),e.body="",e.$emit("refreshFriend")):t.showToast({title:n.data.msg,icon:"none"})}}):t.showToast({title:"内容不得为空",icon:"none"})}}};n.default=e}).call(this,e("6e42")["default"])},ca3e:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return o})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/submitBtn-create-component',
    {
        'components/submitBtn-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("6286"))
        })
    },
    [['components/submitBtn-create-component']]
]);                
