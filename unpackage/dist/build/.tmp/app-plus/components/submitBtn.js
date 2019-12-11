(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/submitBtn"],{"2d52":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{body:""}},props:{friend_id:String},methods:{submit:function(n){var e=this;this.body?this.ajax({url:"friend/message",data:{friend_id:n,body:this.body},success:function(n){"success"===n.data.body?(t.showToast({title:"评论成功",icon:"none"}),e.body="",e.$emit("refreshFriend")):t.showToast({title:n.data.msg,icon:"none"})}}):t.showToast({title:"内容不得为空",icon:"none"})}}};n.default=e}).call(this,e("6e42")["default"])},"31a0":function(t,n,e){},3246:function(t,n,e){"use strict";e.r(n);var o=e("4e6c"),a=e("a6e6");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("902d");var u=e("2877"),s=Object(u["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=s.exports},"4e6c":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return a})},"902d":function(t,n,e){"use strict";var o=e("31a0"),a=e.n(o);a.a},a6e6:function(t,n,e){"use strict";e.r(n);var o=e("2d52"),a=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/submitBtn-create-component',
    {
        'components/submitBtn-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("3246"))
        })
    },
    [['components/submitBtn-create-component']]
]);                
