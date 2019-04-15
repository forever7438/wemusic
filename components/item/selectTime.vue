<template>
	<ul class="time_list">
		<li v-for="(item,index) in 3" @click="flag && selctitem(index)" 
			:class="{'active':item.active}" :key="index">
			<p>
				<span class="date">2019年11月11日</span>
				<span class="price">
					<span>$</span>11.00
				</span>
			</p>
			<p class="time">9:00 - 10:00</p>
			<p class="duration">时长1小时</p>
		</li>
		<li v-if="!flag" class="add_time">
			<ruiDatePicker
				fields="minute"
				start="1970-00-00 00:00"
				end="2030-12-30 00:00"
				style="width: 100%;border: none;"
				:value="time"
				v-show="false"
			></ruiDatePicker>
			<img src="/static/img/tianjiashichang@2x.png" />
		</li>
	</ul>
</template>

<script>
	import ruiDatePicker from '../rattenking-dtpicker/rattenking-dtpicker.vue';
	export default{
		components:{
			ruiDatePicker
		},
		data(){
			return {
				time:'2019-08-08 00:00',
				//默认时长
				data_init:[{
					value: "60",
					text: "60 min"
				}, {
					value: "90",
					text: "90 min"
				}, {
					value: "120",
					text: "120 min"
				}],
			}
		},
		props:{
			timeChecked:Number,	//时间数组
			flag : Boolean,		//事件开关
			select:Array
		},
		methods:{
			/**选择时间*/
			selctitem(index){
				let flag = true;
				let item = this.time_list[index]
				if(item.active == undefined){
					Vue.set(item, 'active', true)
				}else{
					item.active = flag = !item.active
				}
				if(flag){
					this.select.push(item)
				}else{
					this.select.pop(item)
				}
				this.$emit('update:select', this.select)
			},
			/**添加时间*/
			selectTime(){
					let _this = this
					let dtPicker = new mui.DtPicker({
						beginDate: new Date()
					}); 
					dtPicker.show(function (selectItems) { 
						_this.selectDuration(selectItems)
					})
			},
			/**选择时长*/
			selectDuration(time){
				let _this = this
				let time_str  = time.h.value+':'+time.i.value
				time = time.value;
				console.log(time)
				let item = {'price':'120.00'}
				let duration
				let picker = new mui.PopPicker(); 
				/**将选择时间转换为时间戳*/
				time =  new Date(time).getTime()
				/**加入选择时间*/
				item.date = this.dateTimeFormatter(time);
				picker.setData(this.data_init)
				picker.show(function (selectItems) { 
					/**选择时长*/
					duration = selectItems[0].value
					/**加入选择时长*/
					item.duration = duration/60;
					duration = duration * 60000;
					time += duration
					time = new Date(time)
					time = time.toLocaleDateString().replace(/\//g, "-") + " " + time.toTimeString().substr(0, 8); 
					time = new Date(time)
					time_str += ' - '+time.getHours()+':'+time.getMinutes()
					item.time = time_str
					_this.time_list.push(item)
				})
			},
			dateTimeFormatter (t) {
				  let checkAddZone = this.checkAddZone;
				  t = new Date(t)
				  let year = t.getFullYear()
				  let month = (t.getMonth() + 1)
				  month = checkAddZone(month)
				  let date = t.getDate()
				  date = checkAddZone(date)
// 				  let hour = t.getHours()
// 				  hour = checkAddZone(hour)
// 				  let min = t.getMinutes()
// 				  min = checkAddZone(min)
// 				  let se = t.getSeconds()
// 				  se = checkAddZone(se)
				  return year + '年' + month + '月' + date + '日'
			},
			checkAddZone (num) {
			  return num<10 ? '0' + num.toString() : num
			}
		}
		
	}
</script>

<style lang="less" scoped>
	ul{
		li.active{
			border: 2upx solid #FAD42A;
		}
		li.add_time{
			text-align: center;
			padding: 80upx 0;
			img{
				width: 72upx;
				height: 72upx;
			}
		}
		li{
			text-align: left;
			display: block;
			height:232upx;
			background:rgba(255,255,255,1);
			box-shadow:0 8upx 20upx 4upx rgba(179,188,198,0.2);
			border-radius:16upx;
			margin: 30upx;
			padding: 30upx;
			.date{
				font-size:40upx;
				font-weight:500;
				color:rgba(51,51,51,1);
			}
			.price{
				float: right;
				color: #FAD42A;
				font-size: 60upx;
				span{
					font-size: 30upx;
				}
			}
			.time{
				font-size:32upx;
				font-weight:500;
				color:rgba(51,51,51,1);
				margin:12upx 0 30upx 0;
			}
			.d{
				font-size: 28upx;
			}
			.duration{
				font-size:28upx;
				font-family:PingFangSC-Regular;
				font-weight:400;
				color:rgba(153,153,153,1);
				line-height:40upx;
			}
		}
		
	}
</style>
