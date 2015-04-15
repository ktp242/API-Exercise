define(["module/apiRequest"], function(apiRequest){
    
    var HumidityViewModel = function(){
		var url = "api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID="+apiKey;
		var apiKey = "e2953b1a8ad488991b9c73d603ba4f68";
        
        var self = this;

		var getWeatherApi = new GetWeatherApi(url);
 
		var callBack = function(){
	        self.results;
			var data = this.responseText;
			self.results = data;
		};

		getWeatherApi.getHumidity(callBack);
		
		this.testOutput = function(){
			if (this.results == ""){
				console.log('something wrong');
			} else {
				console.log(this.results);
		    }
		};
	};

	// HumidityViewModel.prototype.testOutput = function(){
	// 	console.log(this.result);
	// };

	var humidityViewModel = new HumidityViewModel();
    humidityViewModel.testOutput();
});