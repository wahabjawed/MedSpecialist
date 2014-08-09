<?php

	class Login{
		
		function LoginUser()
		{
             header('Access-Control-Allow-Origin: *');
			 header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
			 include 'headers/connect_to_mysql.php';
			 include 'headers/status_code.php';
			 
			 $email = $_POST['email'];
			 $password = $_POST['password'];
			 
			$query = "SELECT * from users WHERE email like  '$email' AND password like '$password'";
			$result = $con->query($query);
			$count = $result->num_rows;
			if($count==1){
				sendResponse('200','{"success":"Login Successfully"}');
			}
			else
			{
				sendResponse('200','{"error":"Wrong Credentials"}');
			}
		}
			 
	}
			 
	$login = new Login;
	$loginUser = $login->LoginUser();	
			
	
	
?>