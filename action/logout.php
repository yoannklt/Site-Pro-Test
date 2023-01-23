<?php 
require_once "../cfg/config.php"; 

$sql = "SELECT * FROM user WHERE mail='".$_POST['email']."' AND password='".$_POST['password']."'"; 
$pre = $pdo->prepare($sql); 
$pre->execute();
$user = $pre->fetch(PDO::FETCH_ASSOC);

session_destroy();

header('Location:../pages/index.php');//on le redirige sur la page d'accueil du site !
?>