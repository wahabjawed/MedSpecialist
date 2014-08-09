<?php
	header('Access-Control-Allow-Origin: *');
	require('headers/connect_to_mysql.php');
	$question = $_POST['question-text'];
	$optionOne = $_POST['optionOne'];
	$optionTwo = $_POST['optionTwo'];
	$optionThree = $_POST['optionThree'];
	$optionFour = $_POST['optionFour'];
	$optionFive = $_POST['optionFive'];
	$category = $_POST['category'];
	$username = $_GET['username'];
	
	$query = "INSERT INTO questions(question,option1,option2,option3,option4,option5,category,username) 	VALUES('$question','$optionOne','$optionTwo','$optionThree','$optionFour','$optionFive','$category','$username')";
	mysqli_query($con,$query);
	mysql_close($con);
	
	
?>