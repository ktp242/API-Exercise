define(["module/apiRequest"], function(apiRequest){
    
    var HumidityViewModel = function(){
			var apiKey = "e2953b1a8ad488991b9c73d603ba4f68";
			var url = "http://api.openweathermap.org/data/2.5/weather?q=London,uk1&APPID="+apiKey;
			   
	    var self = this;

			var getWeatherApi = new GetWeatherApi(url);
	 
			var callBack = function(){
        console.log(this);
				self.results = this.responseText;
				self.resultStatus = this.status;
				self.testOutput();
			};

			getWeatherApi.getHumidity(callBack);
			
			this.testOutput = function(){
				if (!this.results){
					console.log('something is wrong');
				} else {
					console.log(this.results);
		    }
		    console.log(this.resultStatus);
			};
		};

		var humidityViewModel = new HumidityViewModel();
});