(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/addTeacher/addTeacher"],{"32e2":function(t,e,a){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a("5c73"),o="",s=function(){return Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(a.bind(null,"a604"))},c={components:{wPicker:s},onLoad:function(){o=this},data:function(){return{title:"可工作开始时间",name:"",sex:"0",birthday:"",address:"",phone:"",emial:"",ABN:"",culture:"",card:"",gz_s_time:"",gz_d_time:"",j_photo:"",is_number:"0",class:"1=2"}},onShow:function(){"en-US"==t.getStorageSync("langType")?t.setNavigationBarTitle({title:"add teacher"}):t.setNavigationBarTitle({title:"教师入驻"})},methods:{toggleTabDate:function(){this.$refs.pickerDate.show()},onConfirmDate:function(t){this.birthday="".concat(t[0],"-").concat(t[1],"-").concat(t[2])},toggleTabDates:function(t){switch(t){case"startTime":this.title="开始日期",this.$refs.pickerDates.show();break;default:this.title="结束日期",this.$refs.pickerDates.show()}},onConfirmDates:function(t){switch(this.title){case"开始日期":this.gz_s_time="".concat(t[0],"-").concat(t[1],"-").concat(t[2]);break;default:this.gz_d_time="".concat(t[0],"-").concat(t[1],"-").concat(t[2])}},chooseImage:function(e){t.chooseImage({count:1,success:function(e){o.j_photo=e.tempFilePaths[0],t.uploadFile({url:i.ApiUrl+"index/photo_add",filePath:e.tempFilePaths[0],name:"file",header:{role:"student",Authorization:t.getStorageSync("token")},success:function(t){var e=JSON.parse(t.data);"success"===e.data&&(o.j_photo=e.body.photo)}})},fail:function(t){console.log(n("chooseImage fail",t," at pages\\addTeacher\\addTeacher.vue:177"))}})},addTeacherInfo:function(){this.ajax({url:"index/teacher_registered",header:{role:"teacher"},data:{name:this.name,sex:this.sex,birthday:new Date(this.birthday).getTime()/1e3,address:this.address,phone:this.phone,email:this.email,ABN:this.ABN,culture:this.culture,card:this.card,is_number:this.is_number,gz_s_time:new Date(this.gz_s_time).getTime()/1e3,gz_d_time:new Date(this.gz_d_time).getTime()/1e3,j_photo:this.j_photo,class:this.class},success:function(e){"success"===e.data.data?t.showToast({title:"您已成功入驻,快联系管理员登录吧!",icon:"none"}):t.showToast({title:e.data.msg,icon:"none"})}})}}};e.default=c}).call(this,a("6e42")["default"],a("0de9")["default"])},"3d1c":function(t,e,a){"use strict";var n=a("bf02"),i=a.n(n);i.a},"507a":function(t,e,a){"use strict";a.r(e);var n=a("32e2"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=i.a},"8a9f":function(t,e,a){"use strict";(function(t){a("c992"),a("921b");n(a("66fd"));var e=n(a("a7b1"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},a7b1:function(t,e,a){"use strict";a.r(e);var n=a("b136"),i=a("507a");for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);a("3d1c");var s=a("2877"),c=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"e1f161ac",null);e["default"]=c.exports},b136:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=(t._self._c,t.$t("index")),n=t.$t("index"),i=t.$t("index"),o=t.$t("index"),s=t.$t("index"),c=t.$t("index"),r=t.$t("index"),d=t.$t("index"),u=t.$t("index"),l=t.$t("index"),h=t.$t("index"),f=t.$t("index");t.$mp.data=Object.assign({},{$root:{m0:a,m1:n,m2:i,m3:o,m4:s,m5:c,m6:r,m7:d,m8:u,m9:l,m10:h,m11:f}})},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},bf02:function(t,e,a){}},[["8a9f","common/runtime","common/vendor"]]]);