(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/releaseFriends/releaseFriends"],{"13e4":function(e,t,o){},"197d":function(e,t,o){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o("5c73"),a=function(){return o.e("components/progress").then(o.bind(null,"8c50"))},s="",c={components:{progressBar:a},data:function(){return{video:"",videos:[],file:"",files:"",body:"",show:!1,progress:0,isVideo:!1}},onShow:function(){"en-US"==e.getStorageSync("langType")?e.setNavigationBarTitle({title:"Circle Friends"}):e.setNavigationBarTitle({title:"发布朋友圈"})},onLoad:function(){s=this},methods:{chooseImage:function(t){s.isVideo=!1,s.videos=[],s.files="",e.chooseImage({count:9,success:function(e){s.videos=e.tempFilePaths,e.tempFilePaths.map(function(e,t){s.uploadFile(e,t)})},fail:function(e){console.log(n("chooseImage fail",e," at pages\\releaseFriends\\releaseFriends.vue:59"))}})},chooseVideo:function(t){s.isVideo=!0,s.videos=[],s.files="",e.chooseVideo({count:1,success:function(e){s.files=e.tempFilePath,s.uploadFile(e.tempFilePath)},fail:function(e){console.log(n("chooseImage fail",e," at pages\\releaseFriends\\releaseFriends.vue:74"))}})},uploadFile:function(t){var o=this;s.video=[],e.uploadFile({url:i.ApiUrl+"index/photo_add",filePath:t,name:"file",header:{role:"student",Authorization:e.getStorageSync("token")},success:function(e){var t=JSON.parse(e.data);"success"===t.data&&(o.isVideo?o.file=t.body.photo:s.video.push(t.body.photo))}})}},onNavigationBarButtonTap:function(t){this.video?this.body?this.ajax({url:"friend/add_friend",data:{body:this.body,video:this.video.toString()||this.file},success:function(t){"success"===t.data.body?(e.showToast({title:"发布成功",icon:"none"}),e.navigateBack({delta:1})):e.showToast({title:t.data.msg,icon:"none"})}}):e.showToast({title:"请填写内容",icon:"none"}):e.showToast({title:"请选择图片",icon:"none"})}};t.default=c}).call(this,o("6e42")["default"],o("0de9")["default"])},"260c":function(e,t,o){"use strict";var n=o("13e4"),i=o.n(n);i.a},"5f6b":function(e,t,o){"use strict";o.r(t);var n=o("197d"),i=o.n(n);for(var a in n)"default"!==a&&function(e){o.d(t,e,function(){return n[e]})}(a);t["default"]=i.a},ad70:function(e,t,o){"use strict";o.r(t);var n=o("c7ea"),i=o("5f6b");for(var a in i)"default"!==a&&function(e){o.d(t,e,function(){return i[e]})}(a);o("260c");var s=o("2877"),c=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,null,null);t["default"]=c.exports},c7ea:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},i=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return i})},ce74:function(e,t,o){"use strict";(function(e){o("c992"),o("921b");n(o("66fd"));var t=n(o("ad70"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("6e42")["createPage"])}},[["ce74","common/runtime","common/vendor"]]]);