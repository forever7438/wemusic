(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/myFriend/myFriend"],{"1bf7":function(t,n,e){"use strict";e.r(n);var i=e("ca54"),a=e("bbe9");for(var s in a)"default"!==s&&function(t){e.d(n,t,function(){return a[t]})}(s);e("9e4f");var o=e("2877"),r=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,null,null);n["default"]=r.exports},"9e4f":function(t,n,e){"use strict";var i=e("a2bf"),a=e.n(i);a.a},a2bf:function(t,n,e){},a5bc:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){return e.e("components/item/friendsList").then(e.bind(null,"7ee6"))},a={components:{friendsList:i},data:function(){return{friendsList:[],isEnd:!1,index:0}},onNavigationBarButtonTap:function(n){t.navigateTo({url:"/pages/releaseFriends/releaseFriends"})},onShow:function(){"en-US"==t.getStorageSync("langType")?t.setNavigationBarTitle({title:"My Friend"}):t.setNavigationBarTitle({title:"我的朋友圈"})},onLoad:function(){this.getFriendList(this.index)},onReachBottom:function(){var t=this;this.isEnd||(this.index++,setTimeout(function(){t.getFriendList(t.index)},300))},onPullDownRefresh:function(){this.index=0,this.getFriendList(this.index)},methods:{getFriendList:function(n){var e=this;this.ajax({url:"friend/list",data:{val:5,list:n},success:function(n){if(t.stopPullDownRefresh(),"success"===n.data.body){if(0===n.data.data.length)return e.isEnd=!0,void t.showToast({title:"没有更多数据了",icon:"none"});0!==e.index?e.friendsList=e.friendsList.concat(n.data.data):e.friendsList=n.data.data}}})}}};n.default=a}).call(this,e("6e42")["default"])},bbe9:function(t,n,e){"use strict";e.r(n);var i=e("a5bc"),a=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);n["default"]=a.a},ca54:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})}},[["c56b","common/runtime","common/vendor"]]]);