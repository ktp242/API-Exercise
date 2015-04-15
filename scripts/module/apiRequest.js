function GetWeatherApi(url){
	this.url = url;
};

GetWeatherApi.prototype.getHumidity = function(callBack) {
	var weatherRqst = new XMLHttpRequest();
	weatherRqst.open('GET', this.url);
	weatherRqst.onload = callBack;
  weatherRqst.send();
};