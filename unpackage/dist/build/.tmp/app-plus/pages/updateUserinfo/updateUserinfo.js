(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/updateUserinfo/updateUserinfo"],{"0ef5":function(e,t,n){"use strict";var s=n("664b"),a=n.n(s);a.a},"664b":function(e,t,n){},"94ca":function(e,t,n){"use strict";n.r(t);var s=n("d0a8"),a=n("bec1");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("0ef5");var i=n("2877"),r=Object(i["a"])(a["default"],s["a"],s["b"],!1,null,null,null);t["default"]=r.exports},b5dd:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n("3648"),a=function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"edfe"))},o=function(){return n.e("components/neil-modal/neil-modal").then(n.bind(null,"56a0"))},i=function(){return n.e("components/uni-icon/uni-icon").then(n.bind(null,"9fc1"))},r={components:{wPicker:a,neilModal:o,uniIcon:i},data:function(){return{userInfo:{},show:!1,userImage:"",array:["男","女"],arrays:["吃饭","睡觉","打豆豆"],index:"",indexs:0,date:"",userName:"",sex:"",interest:"",address:""}},onShow:function(){"en-US"==e.getStorageSync("langType")?e.setNavigationBarTitle({title:"Revision of personal data"}):e.setNavigationBarTitle({title:"修改个人资料"})},onLoad:function(){this.getUserInfo()},onNavigationBarButtonTap:function(t){this.userImage&&this.userName&&this.sex&&this.date&&this.interest&&this.address?this.ajax({url:"user/update_info",data:{photo:this.userImage,name:this.userName,sex:this.sex,birthday:new Date(this.date).getTime()/1e3,interest:this.interest,address:this.address},success:function(t){"success"===t.data.body?e.showToast({title:"个人信息修改成功",icon:"none"}):e.showToast({title:t.data.msg,icon:"none"})}}):e.showToast({title:"请填写必填选项!",icon:"none"})},methods:{getUserInfo:function(){var t=this;this.ajax({url:1==e.getStorageSync("type")?"user/info":"teacherclass/info",success:function(n){if("success"===n.data.body){switch(t.userInfo=n.data.data,t.index=t.userInfo.sex,t.userInfo.sex){case"2":t.index=1;break;default:t.index=0}t.indexs=t.userInfo.interest||0,t.userName=t.userInfo.name,t.userImage=t.userInfo.photo||t.userInfo.j_photo,t.date=(0,s.getDate)(1e3*t.userInfo.birthday),t.address=t.userInfo.address}else e.showToast({title:n.data.msg})}})},toggleTabDate:function(){this.$refs.pickerDate.show()},onConfirmDate:function(e){this.date="".concat(e[0],"-").concat(e[1],"-").concat(e[2])},toggleTabAdress:function(){this.$refs.pickerAdress.show()},onConfirmAdress:function(e){this.address="".concat(e[0],"-").concat(e[1],"-").concat(e[2])},bindPickerChangeSex:function(e){this.index=e.target.value,e.target.value=this.sex=2},bindPickerChangeInterest:function(e){this.indexs=e.target.value,this.interest=this.indexs},updateUserImage:function(){var t=this;e.chooseImage({count:1,success:function(n){e.uploadFile({url:s.ApiUrl+"index/photo_add",filePath:n.tempFilePaths[0],name:"file",header:{role:"student",Authorization:e.getStorageSync("token")},success:function(e){var n=JSON.parse(e.data);"success"===n.data&&(t.userImage=n.body.photo)}})}})}}};t.default=r}).call(this,n("6e42")["default"])},bec1:function(e,t,n){"use strict";n.r(t);var s=n("b5dd"),a=n.n(s);for(var o in s)"default"!==o&&function(e){n.d(t,e,function(){return s[e]})}(o);t["default"]=a.a},d0a8:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.show=!1},e.e1=function(t){e.show=!0})},a=[];n.d(t,"a",function(){return s}),n.d(t,"b",function(){return a})}},[["ad78","common/runtime","common/vendor"]]]);