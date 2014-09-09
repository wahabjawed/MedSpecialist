// JavaScript Document

                  
 function LoadProfileDoctor(ID){
	 alert(ID);
	 $("#propagedoc").attr('src', "profile.html?ID="+ID);
      $.mobile.changePage($("#profileDoc"),"slide");
	 }				  
				                
 function logOut(){
                                    
    								var postData =localStorage.getItem("user");
	
	
							$.ajax({
								   
								   url : "http://fajjemobile.info/MedSpecialist/logout.php",
								   type: "GET",
								   async: true,
								   data: {user:postData},
								   success:function(response){
	                                localStorage.setItem("login", "");
                                    localStorage.setItem("user", "");
                                    $.mobile.changePage($("#login"));
								   },
								   error: function (request, status, error) {
								   alert("Couldn't connect to the internet");
								   }
								   
								   
								   
								   });
	
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
		   
		   var lists = list[i].split("#");
		   
		   var online="arrow-l";
		   
		   if(lists[2]==1){
			 online="arrow-r";  
			}
		   
		   $("#nameList").append($('<li/>', { 'data-icon':''+online   //here appending `<li>`
								   
	   }).append($('<a/>', {    //here appending `<a>` into `<li>`
				   'onclick':'LoadProfileDoctor('+lists[1]+')',
				   'rel':'external',
				   'data-transition':'pop',
				   'text': lists[0]
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
//alert(response);
var response=response.split(",");

if(response[0]!="No"){
localStorage.setItem("login", "Yes");
localStorage.setItem("user", response[1]);
$("#propage").attr('src', "profile.html?ID="+response[1]);
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