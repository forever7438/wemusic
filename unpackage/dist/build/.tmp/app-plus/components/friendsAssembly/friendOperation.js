(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/friendsAssembly/friendOperation"],{1591:function(t,n,e){"use strict";e.r(n);var a=e("8f09"),s=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);n["default"]=s.a},"1c17":function(t,n,e){"use strict";e.r(n);var a=e("666a"),s=e("1591");for(var i in s)"default"!==i&&function(t){e.d(n,t,function(){return s[t]})}(i);e("2969");var o=e("2877"),r=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,null,null);n["default"]=r.exports},"24be":function(t,n,e){},2969:function(t,n,e){"use strict";var a=e("24be"),s=e.n(a);s.a},"666a":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},s=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return s})},"8f09":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={props:{message:Number,praise:Number,forward:Number,listId:String},methods:{liked:function(){this.ajax({url:"friend/praise",data:{friend_id:this.listId},success:function(n){"success"===n.data.body?t.showToast({title:"点赞成功",icon:"none"}):t.showToast({title:n.data.msg,icon:"none"})}})},share:function(){this.ajax({url:"friend/forward",data:{friend_id:this.listId},success:function(n){"success"===n.data.body?t.showToast({title:"转发成功",icon:"none"}):t.showToast({title:n.data.msg,icon:"none"})}})}}};n.default=e}).call(this,e("6e42")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/friendsAssembly/friendOperation-create-component',
    {
        'components/friendsAssembly/friendOperation-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("1c17"))
        })
    },
    [['components/friendsAssembly/friendOperation-create-component']]
]);                
