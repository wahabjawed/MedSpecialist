<?php
	
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');		

include 'headers/connect_database.php';      
		
		
		$user = $_GET['user'];
		$pass = $_GET['password'];
		
		
					$query = "select * from users WHERE username = '$user' and password = '$pass'";
			$result = mysqli_query($con,$query)
			or die ("Couldn’t execute query.");
		
			if(mysqli_num_rows($result)>0){
			$row=mysqli_fetch_array($result);
			$data="Yes,".$row['user_id'];
			
			$query = "update users set online = 1 where username = '$user'";
			$result = mysqli_query($con,$query);
			
			}else{
			
			$data="No";	
				
			}
			
			echo "$data";
?>