(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/circleFriends/circleFriends"],{"23ea":function(i,n,e){"use strict";e.r(n);var t=e("f2f9"),s=e.n(t);for(var r in t)"default"!==r&&function(i){e.d(n,i,function(){return t[i]})}(r);n["default"]=s.a},3021:function(i,n,e){},"36aa":function(i,n,e){"use strict";e.r(n);var t=e("e380"),s=e("23ea");for(var r in s)"default"!==r&&function(i){e.d(n,i,function(){return s[i]})}(r);e("e64a");var a=e("2877"),o=Object(a["a"])(s["default"],t["a"],t["b"],!1,null,null,null);n["default"]=o.exports},e380:function(i,n,e){"use strict";var t=function(){var i=this,n=i.$createElement,e=(i._self._c,i.$t("index"));i.$mp.data=Object.assign({},{$root:{m0:e}})},s=[];e.d(n,"a",function(){return t}),e.d(n,"b",function(){return s})},e64a:function(i,n,e){"use strict";var t=e("3021"),s=e.n(t);s.a},f2f9:function(i,n,e){"use strict";(function(i){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=function(){return e.e("components/item/friendsList").then(e.bind(null,"7ee6"))},s=function(){return e.e("components/uni-icon/uni-icon").then(e.bind(null,"9fc1"))},r={components:{friendsList:t,uniIcon:s},data:function(){return{friendsList:[],isEnd:!1,index:0}},onShow:function(){"en-US"==i.getStorageSync("langType")?i.setNavigationBarTitle({title:"circleFriends"}):i.setNavigationBarTitle({title:"朋友圈"})},onLoad:function(){this.getFriendList(this.index)},onNavigationBarButtonTap:function(n){i.navigateTo({url:"/pages/releaseFriends/releaseFriends"})},onReachBottom:function(){var i=this;this.isEnd||(console.log("okokok"," at pages\\circleFriends\\circleFriends.vue:54"),this.index++,setTimeout(function(){i.getFriendList(i.index)},300))},onPullDownRefresh:function(){this.index=0,this.getFriendList(this.index)},methods:{forward_praise:function(i){console.log(this.friendsList[i.index]," at pages\\circleFriends\\circleFriends.vue:66"),"is_forward"==i.key?1==this.friendsList[i.index].is_forward?(this.friendsList[i.index].is_forward=0,this.friendsList[i.index].forward_num--):(this.friendsList[i.index].is_forward=1,this.friendsList[i.index].forward_num++):1==this.friendsList[i.index].is_praise?(this.friendsList[i.index].is_forward=0,this.friendsList[i.index].praise_num--):(this.friendsList[i.index].is_praise=1,this.friendsList[i.index].praise_num++)},getFriendList:function(n){var e=this;this.ajax({url:"friend/list",data:{val:5,list:n},success:function(n){if(i.stopPullDownRefresh(),"success"===n.data.body){if(0===n.data.data.length)return e.isEnd=!0,void i.showToast({title:e.$t("index").No_more_data,icon:"none"});0!==e.index?e.friendsList=e.friendsList.concat(n.data.data):e.friendsList=n.data.data}}})}}};n.default=r}).call(this,e("6e42")["default"])}},[["698e","common/runtime","common/vendor"]]]);