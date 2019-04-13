<template>
  <ul class="mui-table-view">
    <!--全部课程-模板区@start------>
    <li class="mui-table-view-cell mui-media text_l" v-for="(item,index) in list">
      <a href="javascript:;" @click="link_detail()">
        <img class="mui-media-object mui-pull-left" src="../../../static/img/img_course/head_.jpg">
        <div class="mui-media-body">
          <h5>Laura Johnson</h5>
          <p>
            <span class="mui-icon iconfont icon-star FAD42A"></span>
            <span class="mui-icon iconfont icon-star FAD42A"></span>
            <span class="mui-icon iconfont icon-star FAD42A"></span>
            <span class="mui-icon iconfont icon-star FAD42A"></span>
            <span class="mui-icon iconfont icon-star FAD42A"></span>
            <span class="score">{{item.score}}</span>
          </p>
        </div>
        <p class="introduce">从事10年钢琴教学，拥有丰富教学经验，技艺精湛，曾多次获得演奏大奖。</p>
      </a>
      <button type="button" v-if="item.is_select" class="select">已选择</button>
      <button type="button" v-else @click="select()">选择</button>
    </li>
    <!------全部课程-模板区@end-->
  </ul>
</template>

<script>
/**课程列表组件**/
export default {
  name: "teacher",
  props: {
    list: Array
  },
  methods: {
    /**路由至详情页*/
    link_detail() {
      this.$router.push({ name: "teachDetail", params: { userId: 123 } });
    },
		/**选择*/
		select(){
			 this.$router.push({ name: "confirm_teacher", params: { userId: 123 } });
		}
  }
};
</script>

<style scoped>
.select {
  background: rgba(229, 229, 229, 1) !important;
  color: rgba(153, 153, 153, 1);
}
h5 {
  margin-top: 0 !important;
}
.introduce {
  width: 480upx;
  height: 68upx;
  text-align: left;
  margin-left: 210upx;
  font-size: 24upx;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  white-space: normal;
  text-overflow: ellipsis;
  line-height: 34upx;
}
.mui-table-view {
  margin-top: 30upx;
}
.mui-table-view-cell {
  height: 240upx;
  display: flex;
  padding: 30upx;
}
.mui-table-view-cell a {
  height: 180upx;
  margin: 0;
  padding: 0;
}
.mui-table-view-cell img {
  width: 180upx;
  height: 100%;
  border-radius: 6upx;
  margin-right: 30upx !important;
}
.mui-table-view-cell button {
  position: absolute;
  top: 30upx;
  right: 30upx;
  float: right;
  width: 128upx;
  height: 44upx;
  background: rgba(250, 212, 42, 1);
  border-radius: 3px;
  line-height: 20upx;
	padding:0;
}

.mui-media-body {
  max-width: 240upx;
  height: inherit;
  display: inline-block;
  height: 100upx;
}
.mui-media-body h5 {
  font-size: 32upx;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  color: rgba(26, 26, 26, 1);
  line-height: 44upx;
}
</style>
