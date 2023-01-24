<?php
   $sql = "SELECT * FROM user"; 
   $pre = $pdo->prepare($sql); 
   $pre->execute();
   $data = $pre->fetchAll(PDO::FETCH_ASSOC);

   $users= json_encode($data);
?>