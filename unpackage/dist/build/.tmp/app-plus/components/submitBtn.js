(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/submitBtn"],{"1ec1":function(t,n,e){},4956:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{body:""}},props:{friend_id:String},methods:{submit:function(n){var e=this;this.body?this.ajax({url:"friend/message",data:{friend_id:n,body:this.body},success:function(n){"success"===n.data.body?(t.showToast({title:"评论成功",icon:"none"}),e.body="",e.$emit("refreshFriend")):t.showToast({title:n.data.msg,icon:"none"})}}):t.showToast({title:"内容不得为空",icon:"none"})}}};n.default=e}).call(this,e("6e42")["default"])},5306:function(t,n,e){"use strict";e.r(n);var o=e("adfc"),i=e("7c14");for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);e("951b");var u=e("2877"),c=Object(u["a"])(i["default"],o["a"],o["b"],!1,null,null,null);n["default"]=c.exports},"7c14":function(t,n,e){"use strict";e.r(n);var o=e("4956"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);n["default"]=i.a},"951b":function(t,n,e){"use strict";var o=e("1ec1"),i=e.n(o);i.a},adfc:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return i})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/submitBtn-create-component',
    {
        'components/submitBtn-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("5306"))
        })
    },
    [['components/submitBtn-create-component']]
]);                
