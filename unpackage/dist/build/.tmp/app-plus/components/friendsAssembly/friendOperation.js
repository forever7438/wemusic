(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/friendsAssembly/friendOperation"],{"1aba":function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},s=[];a.d(n,"a",function(){return e}),a.d(n,"b",function(){return s})},"41d3":function(t,n,a){"use strict";a.r(n);var e=a("fa2a"),s=a.n(e);for(var i in e)"default"!==i&&function(t){a.d(n,t,function(){return e[t]})}(i);n["default"]=s.a},6478:function(t,n,a){},"8fa9":function(t,n,a){"use strict";var e=a("6478"),s=a.n(e);s.a},a93e:function(t,n,a){"use strict";a.r(n);var e=a("1aba"),s=a("41d3");for(var i in s)"default"!==i&&function(t){a.d(n,t,function(){return s[t]})}(i);a("8fa9");var o=a("2877"),r=Object(o["a"])(s["default"],e["a"],e["b"],!1,null,null,null);n["default"]=r.exports},fa2a:function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={props:{message:Number,praise:Number,forward:Number,listId:String},methods:{liked:function(){this.ajax({url:"friend/praise",data:{friend_id:this.listId},success:function(n){"success"===n.data.body?t.showToast({title:"点赞成功",icon:"none"}):t.showToast({title:n.data.msg,icon:"none"})}})},share:function(){this.ajax({url:"friend/forward",data:{friend_id:this.listId},success:function(n){"success"===n.data.body?t.showToast({title:"转发成功",icon:"none"}):t.showToast({title:n.data.msg,icon:"none"})}})}}};n.default=a}).call(this,a("6e42")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/friendsAssembly/friendOperation-create-component',
    {
        'components/friendsAssembly/friendOperation-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("a93e"))
        })
    },
    [['components/friendsAssembly/friendOperation-create-component']]
]);                
