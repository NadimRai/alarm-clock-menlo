function alarmClock(){
	var clock = createClock('clock');
	var clock2 = createClock('clock2')
}

function clockFormat(val){
	if(val<10) val = "0"+val;	
		return val;	
}

function createClock(id){
	var c = new Object();
	c.updateClock =  function(){
		var date = new Date();
		var clock = document.getElementById(id);
		clock.innerHTML = clockFormat(date.getHours())+ ":" + clockFormat(date.getMinutes()) + ":" + clockFormat(date.getSeconds());
	};

	setInterval(c.updateClock,1000);	
	c.updateClock();
	return c;
}


window.onload = alarmClock;

