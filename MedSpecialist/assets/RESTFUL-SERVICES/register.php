<?php

	class RegisterClass{
		
		function RegisterDoctor()
		{
             header('Access-Control-Allow-Origin: *');
			 header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
			 include 'headers/connect_to_mysql.php';
			 include 'headers/status_code.php';
			 
			 $name = $_POST['name'];
			 $inputSpeciality = $_POST['inputSpeciality'];
			 $inputLicense = $_POST['inputLicense'];
			 $inputLocation = $_POST['inputLocation'];
			 $inputInsurance = $_POST['inputInsurance'];
			 $inputPInsurance = $_POST['inputPInsurance'];
			 $inputBio = $_POST['inputBio'];
			 $inputEmail = $_POST['inputEmail'];
			 $inputPhone = $_POST['inputPhone'];
			 $inputUser = $_POST['inputUser'];
			 $inputPassword = $_POST['inputPassword'];
			 
			 
			 
			$query = "INSERT INTO users(name,speciality,licenseNumber,location,insurance,pInsurance,pic,bio,email,phoneNumber,username,password)VALUES('$name','$inputSpeciality','$inputLicense','$inputLocation','$inputInsurance','$inputPInsurance','pic','$inputBio','$inputEmail','$inputPhone','zohairhemani534522','35252')";
			$result = $con->query($query);
			
			if($result)
			{
				echo sendResponse('200',"OK");
			}
			else
			{
				echo sendResponse('200',"NOTOK");
			}
		}
			 
	}
			 
	$register = new RegisterClass;
	$registerDoc = $register->RegisterDoctor();	
			
	
	
?>