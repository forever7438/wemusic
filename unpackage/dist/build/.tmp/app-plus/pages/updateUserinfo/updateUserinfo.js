(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/updateUserinfo/updateUserinfo"],{"0ef5":function(e,t,n){"use strict";var a=n("664b"),s=n.n(a);s.a},"2c94":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"update_userinfo"},[n("neil-modal",{attrs:{show:e.show,title:"请输入用户名",eventid:"07f5926b-1",mpcomid:"07f5926b-0"},on:{close:function(t){e.show=!1}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],staticClass:"new_name",attrs:{type:"text",placeholder:"请输入用户名",eventid:"07f5926b-0"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}})]),n("ul",[n("li",[n("span",[e._v("头像")]),n("view",{attrs:{eventid:"07f5926b-2"},on:{click:e.updateUserImage}},[n("image",{attrs:{src:e.userImage}}),n("s",[e._v(">")])],1)]),n("li",[n("span",[e._v("姓名")]),n("view",{attrs:{eventid:"07f5926b-3"},on:{click:function(t){e.show=!0}}},[n("text",[e._v(e._s(e.userName))]),n("s",[e._v(">")])],1)]),n("li",[n("span",[e._v("性别")]),n("view",[n("picker",{attrs:{value:e.index,range:e.array,eventid:"07f5926b-4"},on:{change:e.bindPickerChangeSex}},[n("text",[e._v(e._s(e.array[e.index]))])]),n("s",[e._v(">")])],1)]),n("li",[n("span",[e._v("生日")]),n("view",[n("text",{attrs:{eventid:"07f5926b-5"},on:{tap:e.toggleTabDate}},[e._v(e._s(e.date))]),n("w-picker",{ref:"pickerDate",attrs:{mode:"date",defaultVal:[0,1,0],eventid:"07f5926b-6",mpcomid:"07f5926b-1"},on:{confirm:e.onConfirmDate}}),n("s",[e._v(">")])],1)]),n("li",[n("span",[e._v("兴趣")]),n("view",[n("picker",{attrs:{value:e.indexs,range:e.arrays,eventid:"07f5926b-7"},on:{change:e.bindPickerChangeInterest}},[n("text",[e._v(e._s(e.arrays[e.indexs]))])]),n("s",[e._v(">")])],1)]),n("li",[n("span",[e._v("住址")]),n("view",[n("text",{attrs:{eventid:"07f5926b-8"},on:{click:e.toggleTabAdress}},[e._v(e._s(e.address))]),n("s",[e._v(">")]),n("w-picker",{ref:"pickerAdress",attrs:{mode:"region",eventid:"07f5926b-9",mpcomid:"07f5926b-2"},on:{confirm:e.onConfirmAdress}})],1)])],1)],1)},s=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s})},"56a0":function(e,t,n){"use strict";n.r(t);var a=n("e6f9"),s=n("eb01");for(var i in s)"default"!==i&&function(e){n.d(t,e,function(){return s[e]})}(i);n("9697");var o=n("2877"),r=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,null,null);t["default"]=r.exports},"664b":function(e,t,n){},"8f5e":function(e,t,n){},"94ca":function(e,t,n){"use strict";n.r(t);var a=n("2c94"),s=n("bec1");for(var i in s)"default"!==i&&function(e){n.d(t,e,function(){return s[e]})}(i);n("0ef5");var o=n("2877"),r=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,null,null);t["default"]=r.exports},9697:function(e,t,n){"use strict";var a=n("8f5e"),s=n.n(a);s.a},ad78:function(e,t,n){"use strict";n("58cd");var a=i(n("b0ce")),s=i(n("94ca"));function i(e){return e&&e.__esModule?e:{default:e}}Page((0,a.default)(s.default))},bec1:function(e,t,n){"use strict";n.r(t);var a=n("e03e"),s=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);t["default"]=s.a},dead:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"neil-modal",props:{title:{type:String,default:""},content:String,align:{type:String,default:"left"},cancelText:{type:String,default:"取消"},cancelColor:{type:String,default:"#333333"},confirmText:{type:String,default:"确定"},confirmColor:{type:String,default:"#007aff"},showCancel:{type:[Boolean,String],default:!0},show:{type:[Boolean,String],default:!1},autoClose:{type:[Boolean,String],default:!0}},data:function(){return{isOpen:!1}},watch:{show:function(e){this.isOpen=e}},created:function(){this.isOpen=this.show},methods:{bindTouchmove:function(){},clickLeft:function(){var e=this;setTimeout(function(){e.$emit("cancel")},200),this.closeModal()},clickRight:function(){var e=this;setTimeout(function(){e.$emit("confirm")},200),this.closeModal()},clickMask:function(){this.autoClose&&this.closeModal()},closeModal:function(){this.showAnimation=!1,this.isOpen=!1,this.$emit("close")}}};t.default=a},e03e:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("3648"),s=o(n("edfe")),i=o(n("56a0"));function o(e){return e&&e.__esModule?e:{default:e}}var r={components:{wPicker:s.default,neilModal:i.default},data:function(){return{userInfo:{},show:!1,userImage:"",array:["男","女"],arrays:["吃饭","睡觉","打豆豆"],index:"",indexs:0,date:"",userName:"",sex:"",interest:"",address:""}},onLoad:function(){this.getUserInfo()},onNavigationBarButtonTap:function(t){this.userImage&&this.userName&&this.sex&&this.birthday&&this.interest&&this.address?this.ajax({url:"user/update_info",data:{photo:this.userImage,name:this.userName,sex:this.sex,birthday:new Date(this.date).getTime()/1e3,interest:this.interest,address:this.address},success:function(t){"success"===t.data.body?e.showToast({title:"个人信息修改成功",icon:"none"}):e.showToast({title:t.data.msg,icon:"none"})}}):e.showToast({title:"请填写必填选项!",icon:"none"})},methods:{getUserInfo:function(){var t=this;this.ajax({url:"user/info",success:function(n){if("success"===n.data.body){switch(t.userInfo=n.data.data,t.index=t.userInfo.sex,t.userInfo.sex){case"2":t.index=1;break;default:t.index=0}t.indexs=t.userInfo.interest||0,t.userName=t.userInfo.name,t.userImage=t.userInfo.photo,t.date=(0,a.getDate)(1e3*t.userInfo.birthday),t.address=t.userInfo.address}else e.showToast({title:n.data.msg})}})},toggleTabDate:function(){this.$refs.pickerDate.show()},onConfirmDate:function(e){this.date="".concat(e[0],"-").concat(e[1],"-").concat(e[2])},toggleTabAdress:function(){this.$refs.pickerAdress.show()},onConfirmAdress:function(e){this.address="".concat(e[0],"-").concat(e[1],"-").concat(e[2])},bindPickerChangeSex:function(e){this.index=e.target.value,e.target.value=this.sex=2},bindPickerChangeInterest:function(e){this.indexs=e.target.value,this.interest=this.indexs},updateUserImage:function(){var t=this;e.chooseImage({count:1,success:function(n){e.uploadFile({url:a.ApiUrl+"index/photo_add",filePath:n.tempFilePaths[0],name:"file",header:{role:"student",Authorization:e.getStorageSync("token")},success:function(e){var n=JSON.parse(e.data);"success"===n.data&&(t.userImage=n.body.photo)}})}})}}};t.default=r}).call(this,n("649d")["default"])},e6f9:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"neil-modal",class:{"neil-modal--show":e.isOpen},attrs:{eventid:"68e33a8f-3"},on:{touchmove:function(t){t.stopPropagation(),t.preventDefault(),e.bindTouchmove(t)}}},[n("view",{staticClass:"neil-modal__mask",attrs:{eventid:"68e33a8f-0"},on:{click:e.clickMask}}),n("view",{staticClass:"neil-modal__container"},[e.title.length>0?n("view",{staticClass:"neil-modal__header"},[e._v(e._s(e.title))]):e._e(),n("view",{staticClass:"neil-modal__content",class:e.content?"neil-modal--padding":"",style:{textAlign:e.align}},[e.content?[n("text",{staticClass:"modal-content"},[e._v(e._s(e.content))])]:[e._t("default",null,{mpcomid:"68e33a8f-0"})]],2),n("view",{staticClass:"neil-modal__footer"},[e.showCancel?n("view",{staticClass:"neil-modal__footer-left",style:{color:e.cancelColor},attrs:{"hover-class":"neil-modal__footer-hover","hover-start-time":20,"hover-stay-time":70,eventid:"68e33a8f-1"},on:{click:e.clickLeft}},[e._v(e._s(e.cancelText))]):e._e(),n("view",{staticClass:"neil-modal__footer-right",style:{color:e.confirmColor},attrs:{"hover-class":"neil-modal__footer-hover","hover-start-time":20,"hover-stay-time":70,eventid:"68e33a8f-2"},on:{click:e.clickRight}},[e._v(e._s(e.confirmText))])])])])},s=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s})},eb01:function(e,t,n){"use strict";n.r(t);var a=n("dead"),s=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);t["default"]=s.a}},[["ad78","common/runtime","common/vendor"]]]);