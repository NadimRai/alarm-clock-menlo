function alarmClock(){
	var date = new Date();
	console.log(date);
	console.log(date.getHours());
	var clock = document.getElementById('clock');
	clock.innerHTML = clockFormat(date.getHours())+ ":" + clockFormat(date.getMinutes()) + ":" + clockFormat(date.getSeconds());
}

function clockFormat(val){
	if(val<10) val = "0"+val;
		
		return val;
	
}
window.onload = alarmClock;

