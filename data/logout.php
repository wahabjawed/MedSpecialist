<?php
	
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');		

include 'headers/connect_database.php';      
		
		
		$user = $_GET['user'];

		
			
			$query = "update users set online = 0 where username = '$user'";
			$result = mysqli_query($con,$query);
			
			echo "$data";
?>