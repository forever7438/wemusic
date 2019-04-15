function forMatNum(num){
	return num<10?'0'+num:num+'';
}

function initDays(year,month){
	let totalDays=new Date(year,month,0).getDate();
	let dates=[];
	for(let d=1;d<=totalDays;d++){
		dates.push(forMatNum(d));
	};
	return dates;
}
function initPicker(start,end,mode="date",step=1) {
	let initstartDate=new Date(start);
	let endDate=new Date(end);
	let startYear=initstartDate.getFullYear();
	let startMonth=initstartDate.getMonth();
	let endYear=endDate.getFullYear();
	let years=[],months=[],days=[],hours=[],minutes=[];
	let totalDays=new Date(startYear,startMonth,0).getDate();
	for(let s=startYear;s<=endYear;s++){
		years.push(s+'');
	};
	for(let m=1;m<=12;m++){
		months.push(forMatNum(m));
	};
	for(let d=1;d<=totalDays;d++){
		days.push(forMatNum(d));
	}
	for(let h=0;h<24;h++){
		hours.push(forMatNum(h));
	}
	for(let m=0;m<60;m+=step){
		minutes.push(forMatNum(m));
	}
	if(mode=="date"){
		return {years,months,days}
	}else if(mode=="dateTime"){
		return {years,months,days,hours,minutes}
	}else if(mode=="time"){
		return {hours,minutes}
	}
}
export{
	initDays,
	initPicker
}