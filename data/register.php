<?php
	
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');		

include 'headers/connect_database.php';      
		
		
		 $name = $_POST['inputName'];
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
			 
		
		
					$query ="INSERT INTO users(name,speciality,licenseNumber,location,insurance,pInsurance,pic,bio,email,phoneNumber,username,password)VALUES('$name','$inputSpeciality','$inputLicense','$inputLocation','$inputInsurance','$inputPInsurance','pic','$inputBio','$inputEmail','$inputPhone','$inputUser','$inputPassword')";
			$result = mysqli_query($con,$query)
			or die ("Couldn’t execute query.");
		
			
			
			$data="Yes";
			
						
			echo "$data";
?>