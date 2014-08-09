// JavaScript Document

$(document).ready()
{
	
	$(document).on('click','#SignUp',signupButton);
	$(document).on('click','#signin',loginButton);
	
}

function signupButton(){
	var name = $('#inputName').val();
	var inputSpeciality = $('#inputSpeciality').val();
	var inputLicense = $('#inputLicense').val();
	var inputLocation = $('#inputLocation').val();
	var inputInsurance = $('#inputInsurance').val();
	var inputPInsurance = $('#inputPInsurance').val();
	var inputBio = $('#inputBio').val();
	var inputEmail = $('#inputEmail').val();
	var inputPhone = $('#inputPhone').val();
	var inputUser = $('#inputUser').val();
	var inputPassword = $('#inputPassword').val();
	var picture = "pic.png";
	
	
	var requestData = {"name": name, "inputSpeciality": inputSpeciality, "inputLicense": inputLicense, 
						"inputLocation": inputLocation, "inputInsurance": inputInsurance, "inputPInsurance": inputPInsurance, "pic":picture,"inputBio":inputBio,"inputEmail":inputEmail,"inputPhone":inputPhone, "inputUser":"ammar","inputPassword":"torpedo1"} 
	
	signupRequest(requestData);
	
}

function signupRequest(requestData)
{
	var registerFailed = function (response) {
		alert('failed response: ' + JSON.stringify(response));
		failedResponse(response, APP_CONSTANTS.MSG_ACTION_FAILED);
    }
	
	var registerSuccess = function(response) {
		response = JSON.stringify(response);
		console.log('response: ' + response);
		
	}
	console.log('JSON.stringify(requestData): '+ JSON.stringify(requestData));
	var jsonHelper = new ServiceHelper();
	jsonHelper.registerDoctor(JSON_CONSTANTS.POST, requestData, registerSuccess, registerFailed);
}

function failedResponse(response, failedMsg) {
	//alert('failed');
	/*if(response != "" && response.responseText != "") {
		var result = eval('(' + response.responseText + ')')
		alert(result.error[0]);
	} else {
		alert(failedMsg);
	}*/
}

function loginButton()
{
	var email = $('#loginEmail').val();
	var password = $('#loginPass').val();
	
	var requestData = { "email": email, "password": password }
	
	loginUser(requestData);
}

function loginUser(requestData)
{
	
	var registerFailed = function (response) {
		alert('failed response: ' + JSON.stringify(response));
		failedResponse(response, APP_CONSTANTS.MSG_ACTION_FAILED);
    }
	
	var registerSuccess = function(response) {
		response = JSON.parse(response);
		
		if(response.success!=null){
			alert(response.success);
		}
		
	}
	
	var jsonHelper = new ServiceHelper();
	jsonHelper.loginUser(JSON_CONSTANTS.POST, requestData, registerSuccess, registerFailed);	
	
}
