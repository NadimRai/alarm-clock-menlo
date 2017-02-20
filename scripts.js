function alarmClock(){
	var clock = new Clock('clock');
	var clock2 = new Clock('clock2', -4800, "ETC")
	var clock2 = new Clock('clock3', -3000, "NY")

	
	
}


function Clock(id, offset,label){
	offset = offset || 0;
	label = label || '';
	var d = new Date();
	this.offset = (offset+d.getTimezoneOffset())*60*1000;
	this.updateClock =  function(){
		var date = new Date();
			date = new Date(this.offset + date.getTime());
		var clock = document.getElementById(id);
		clock.innerHTML = this.clockFormat(date.getHours())+ ":" + 
						  this.clockFormat(date.getMinutes()) + ":" + 
						  this.clockFormat(date.getSeconds())+" "+ label;
	};

	this.clockFormat = function(val){
	if(val<10) val = "0"+val;	
		return val;	
	};
	var that = this;
	setInterval(function(){that.updateClock();},1000);	
	this.updateClock();
}


window.onload = alarmClock;

