<?php

$db_host = "localhost"; 
$db_username = "medspecialist";  
$db_pass = "Hemani786!";  
$db_name = "medspecialist"; 

$con = new mysqli($db_host,$db_username,$db_pass,$db_name);

if(mysqli_connect_errno())
{
	printf('Connection Error %s\n', mysqli_connect_error());
	exit();
}


?>