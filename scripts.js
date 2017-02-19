function alarmClock(){
	var date = new Date();
	console.log(date);
	console.log(date.getHours());
	var clock = document.getElementById('clock');
	clock.innerHTML = date.getHours()+ ":" + date.getMinutes() + ":" + date.getSeconds();
}
window.onload = alarmClock;

