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
	
	
	var requestData = {"name": name, "inputSpeciality": inputSpeciality, "inputLicense": inputLicense, 
						"inputLocation": inputLocation, "inputInsurance": inputInsurance, "inputPInsurance": inputPInsurance,"inputBio":inputBio,
						"inputEmail":inputEmail,"inputPhone":inputPhone,"inputUser":inputUser,"inputPassword":inputPassword } 
	
	signupRequest(requestData);
	
}

function signupRequest(requestData)
{
	var registerFailed = function (response) {
		failedResponse(response, APP_CONSTANTS.MSG_ACTION_FAILED);
    }
	
	var registerSuccess = function(response) {
		
		//alert(response);
		/*var successMsg;
		if(response.success != null) {
			successMsg = response.success;
			alert(successMsg);
		}
		else {
			//successMsg = response.errors[0].message;
			alert(successMsg);
		}*/
	}
	console.log('JSON.stringify(requestData): '+ JSON.stringify(requestData));
	var jsonHelper = new ServiceHelper();
	jsonHelper.registerDoctor(JSON_CONSTANTS.POST, JSON.stringify(requestData), registerSuccess, registerFailed);
}

function failedResponse(response, failedMsg) {
	alert('failed');
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
}