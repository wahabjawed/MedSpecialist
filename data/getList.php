<?php
	
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');		
		include 'headers/connect_database.php';      // Connection to Mysql Database.
		//require_once('PHP/recaptchalib.php');   // Captcha Library.
		
		$inputSearch = $_GET['inputSearch'];
		$inputSpeciality = $_GET['inputSpeciality'];
		$inputLicense = $_GET['inputLicense'];
		$inputLocation = $_GET['inputLocation'];
		$inputInsurance = $_GET['inputInsurance'];
		$inputPInsurance = $_GET['inputPInsurance'];
		
					$query = "select * from users  where 1=1";
					if($inputSearch!="" || $inputSearch != NULL){
					$query= $query." and name like '%{$inputSearch}%'";
					}
					if($inputSpeciality != 0){
					$query= $query." and speciality = {$inputSpeciality} ";
					}
					if($inputLicense!="" || $inputLicense != NULL){
					$query= $query." and licenseNumber = {$inputLicense}";
					}
					if($inputLocation != 0){
					$query= $query." and location like {$inputLocation}";
					}
					if($inputInsurance != 0){
					$query= $query." and insurance = {$inputInsurance}";
					}
					if($inputPInsurance != 0){
					$query= $query." and pInsurance =  {$inputPInsurance}";
					}
				
			$result = mysqli_query($con,$query)
			or die ("Couldn’t execute query.");

			
					$data="";
			while($row=mysqli_fetch_array($result))
			{
			$data = $data.",".$row['name']."#".$row['user_id']."#".$row['online'];
			}
			
			echo "$data";
?>