(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/friendsDetail/friendsDetail"],{"34e3":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){return Promise.all([e.e("common/vendor"),e.e("components/friendsAssembly/friendHead")]).then(e.bind(null,"4917"))},r=function(){return e.e("components/friendsAssembly/friendContent").then(e.bind(null,"b06c"))},o=function(){return e.e("components/friendsAssembly/friendOperation").then(e.bind(null,"9482"))},a=function(){return Promise.all([e.e("common/vendor"),e.e("components/comment/comment")]).then(e.bind(null,"e0c9"))},s=function(){return e.e("components/submitBtn").then(e.bind(null,"5306"))},d={components:{friendHead:i,friendContent:r,friendOperation:o,comment:a,submitBtn:s},data:function(){return{friendDetail:{},commentList:[],listId:"",index:0,isEnd:!1}},onLoad:function(n){t.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:"#ffffff"}),this.listId=n.listId,this.getFriendDetail(this.listId,this.index)},onReachBottom:function(){var t=this;this.isEnd||(this.index++,setTimeout(function(){t.getFriendDetail(t.listId,t.index)},300))},methods:{forward_praise:function(t){"is_forward"==t.key?this.friendDetail.is_forward?(this.friendDetail.is_forward=0,this.friendDetail.forward--):(this.friendDetail.is_forward=1,this.friendDetail.forward++):this.friendDetail.is_praise?(this.friendDetail.is_praise=0,this.friendDetail.praise--):(this.friendDetail.is_praise=1,this.friendDetail.praise++)},getFriendDetail:function(n,e){var i=this;this.ajax({url:"friend/info",data:{friend_id:n,list:e,val:5},success:function(n){if("success"===n.data.body){if(n.data.data.video=n.data.data.video.split(","),i.friendDetail=n.data.data,0===n.data.data.list.length)return i.isEnd=!0,void t.showToast({title:"没有更多数据了",icon:"none"});i.commentList=i.commentList.concat(i.friendDetail.list)}}})},snedComment:function(){this.commentList=[],this.getFriendDetail(this.listId,0)}}};n.default=d}).call(this,e("6e42")["default"])},"4e68":function(t,n,e){"use strict";e.r(n);var i=e("34e3"),r=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=r.a},"596c":function(t,n,e){},"8c92":function(t,n,e){"use strict";e.r(n);var i=e("bb0a"),r=e("4e68");for(var o in r)"default"!==o&&function(t){e.d(n,t,function(){return r[t]})}(o);e("eceb");var a=e("2877"),s=Object(a["a"])(r["default"],i["a"],i["b"],!1,null,null,null);n["default"]=s.exports},bb0a:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return r})},eceb:function(t,n,e){"use strict";var i=e("596c"),r=e.n(i);r.a}},[["81ee","common/runtime","common/vendor"]]]);