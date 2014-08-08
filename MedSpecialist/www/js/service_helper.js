function ServiceHelper() {
	
this.httpRequest = function (request_url, type, data, dataType, succesCallBack, errorCallBack, bool) {
    	var ajaxSettings = {
    			cache: false,
    			url: request_url,
    			type: type,
    			success: function (response) {
                    console.log("resp: " + request_url);
                    succesCallBack(response);
                },  
                headers: {
                    //contentType: "text/json",
                    Accept: "text/json"
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log("error: " + request_url);
                	switch (jqXHR.status) {
	                case 403 : 
	                	if(request_url.indexOf('login') == -1) {
                    		 //sessionExpire();
                    	 }
	                	 else {
	                		 errorCallBack(jqXHR, textStatus, errorThrown);
	                	 }
	                	 break;
	                default:
	                	errorCallBack(jqXHR, textStatus, errorThrown);
	                }
                },
                async:bool,
                statusCode : { 
        			200 : function(jqXHR, textStatus, errorThrown) { 
        					console.log("200 : ok");
        					
        			},
        			201: function(jqXHR, textStatus, errorThrown) {
        					console.log("201 : ok");
        					
                     },
                    302: function(jqXHR, textStatus, errorThrown) {
    						console.log("302 : session expire");
                    },
                    303: function(jqXHR, textStatus, errorThrown) { 
						console.log("303 : status code");
						
                    }, 
	                400: function (jqXHR, textStatus, errorThrown) { 
	                     	console.log("400 : status code");
	                     	
	                 },
	                401: function (jqXHR, textStatus, errorThrown) {
	                 		console.log("401 : Invalid username or password");	                 		
	                 		
	                 },
	                403: function (jqXHR, textStatus, errorThrown) {
	                    	 console.log("403 : Too many request.");	 
	                 },
	                415: function (jqXHR, textStatus, errorThrown) {
	                		console.log("415 : unsupported format.");
	                		
	                 },
                     421: function (jqXHR, textStatus, errorThrown) {
                          console.log("421 : sub users are not supported.");
                     },
	                500: function (jqXHR, textStatus, errorThrown) {
	                    	console.log("500 : status code");
	                    	
	                 }
        			
                 } 
    	};
    	 
    	if(data != null) {
    		ajaxSettings["data"] = data;
    	}
    	
    	if(type == JSON_CONSTANTS.POST && (request_url.indexOf('login') == -1) ) {
    		ajaxSettings["dataType"] = dataType;
    		//ajaxSettings["contentType"] = JSON_CONSTANTS.CONTENT_TYPE;
		} 
    	else if(type == JSON_CONSTANTS.PUT) {
			ajaxSettings["contentType"] = JSON_CONSTANTS.CONTENT_TYPE;
			ajaxSettings["headers"] = {
					"DEVICETYPE":"MOBILE",
					"X-Requested-With":"XMLHttpRequest",
			        Accept : JSON_CONSTANTS.ACCEPT
        	}
		}
    	else if(type == JSON_CONSTANTS.DELETE ) {
			ajaxSettings["headers"] = { 
					"DEVICETYPE":"MOBILE",
					"X-Requested-With":"XMLHttpRequest",
					Accept : JSON_CONSTANTS.ACCEPT
			}
		}
    	$.ajax(ajaxSettings);

    }
	
	this.registerDoctor = function(type, data, successCallBack, failedCallBack) {
	    var url = APP_CONSTANTS.BASE_URL + APP_CONSTANTS.REGISTER;
		this.httpRequest(url, type, data, null, successCallBack, failedCallBack, true);	    
	}
}
