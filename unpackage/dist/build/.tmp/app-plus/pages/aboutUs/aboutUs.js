(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/aboutUs/aboutUs"],{"5deb":function(t,n,e){"use strict";e.r(n);var o=e("b5dd"),a=e("6544");for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);e("ffcb");var c=e("2877"),i=Object(c["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=i.exports},"636c":function(t,n,e){"use strict";(function(t){e("c992"),e("921b");o(e("66fd"));var n=o(e("5deb"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},6544:function(t,n,e){"use strict";e.r(n);var o=e("6dad"),a=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);n["default"]=a.a},"6dad":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(){return e.e("components/noContent").then(e.bind(null,"abc1"))},a={data:function(){return{aboutContent:"",photo:""}},components:{noContent:o},onLoad:function(){this.getAboutContent()},onShow:function(){"en-US"==t.getStorageSync("langType")?t.setNavigationBarTitle({title:"about us"}):t.setNavigationBarTitle({title:"关于我们"})},methods:{getAboutContent:function(){var t=this;this.ajax({url:"index/about_us",success:function(n){t.aboutContent=n.data.data.body,t.photo=n.data.data.photo}})}}};n.default=a}).call(this,e("6e42")["default"])},b5dd:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return a})},fcc1:function(t,n,e){},ffcb:function(t,n,e){"use strict";var o=e("fcc1"),a=e.n(o);a.a}},[["636c","common/runtime","common/vendor"]]]);