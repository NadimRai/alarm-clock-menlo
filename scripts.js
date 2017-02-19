function alarmClock(){
	setInterval(clockUpdate,1000);	
}

function clockFormat(val){
	if(val<10) val = "0"+val;	
		return val;	
}

function clockUpdate(){
	var date = new Date();
	var clock = document.getElementById('clock');
	clock.innerHTML = clockFormat(date.getHours())+ ":" + clockFormat(date.getMinutes()) + ":" + clockFormat(date.getSeconds());
}

window.onload = alarmClock;

