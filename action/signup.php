<?php 

require_once "../cfg/config.php"; 

$sql = "INSERT INTO user(first_name,last_name,mail,password) VALUES(:first_name,:last_name,:email,:password)";

$pre = $pdo->prepare($sql);

$pre->bindParam("first_name", $_POST['first_name']);
$pre->bindParam("last_name", $_POST['last_name']);
$pre->bindParam("email", $_POST['email']);
$pre->bindParam("password", $_POST['password']);

$pre->execute();

header('Location:../pages/index.php');