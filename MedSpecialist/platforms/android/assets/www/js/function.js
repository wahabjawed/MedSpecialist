// JavaScript Document

                                
                                function logOut(){
                                    
                                    localStorage.setItem("login", "");
                                    localStorage.setItem("user", "");
                                    $.mobile.changePage($("#login"));
                                    
                                }
                            
                            
                            
function getDoctor(){
	
	
	var postData = $('#searchform').serializeArray();
	
	
	$.ajax({
		   
		   url : "http://fajjemobile.info/MedSpecialist/getList.php",
		   type: "GET",
		   async: true,
		   data: postData,
		   success:function(response){
		   
		   	 //  alert(response);
		   
		   var list=response.split(",");
		   $("#nameList").empty();
		   for(var i =1;i<list.length;i++){
		   
		   
		   
		   $("#nameList").append($('<li/>', {    //here appending `<li>`
								   
	   }).append($('<a/>', {    //here appending `<a>` into `<li>`
				   'href':'#profile',
				   'rel':'external',
				   'data-transition':'pop',
				   'text': list[i]
				   })));
		   
		   }
		   
		   
		  
		   $.mobile.loading( "hide" );
	       $.mobile.changePage($("#doctorList"));	   
		   $('#nameList').listview('refresh');
		   },
		   error: function (request, status, error) {
		   $.mobile.loading( "hide" );
		   alert("Couldn't connect to the internet");
		   }
		   
		   
		   
		   });
		   
}



$(document).ready(function () {
				  
  //	if(localStorage.getItem("login")!="Yes"){
  
  //$.mobile.changePage($("#login"));
  
  //}else{
  //	$.mobile.loading( "show");
  //getSurvey();
				  
								  
//		}
                                              

});
                                              



function loginCheck(){
var userid=$('#username').val();
var pass=$('#password').val();




$.ajax({

url : "http://fajjemobile.info/MedSpecialist/checkLogin.php",
type: "GET",
async: true,
data: {user:userid,password:pass},
success:function(response){



if(response!="No"){
localStorage.setItem("login", "Yes");
//  localStorage.setItem("user", response);
$.mobile.changePage($("#profile"),"slide");
// getSurvey();

}else{
$('#username').val="";
$('#password').val="";
$("#invalidLogin").click();
}


},
error: function (request, status, error)
{

$("#internetConnect").click();

}

});

}
                            
                            

function register(){
	
	
	
	var postData = $('#ajaxform').serializeArray();
	
	
	
	
	$.ajax(
		   {
		   url : "http://fajjemobile.info/MedSpecialist/register.php",
		   type: "POST",
		   async: true,
		   data : postData,
		   success:function(data, textStatus, jqXHR)
		   {
		   //$.mobile.changePage($("#login"),"slide");
		   history.back();
		   },
		   error: function (request, status, error)
		   {
		   $("#internetConnect").click();
		   }
		   });
		   
}