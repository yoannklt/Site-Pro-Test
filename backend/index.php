<?php 
    $pdo = new PDO("mysql:host=localhost;dbname=sitepro;cherset=utf8","root","root");
    $stmt = $pdo->prepare("SELECT * FROM users");
    $stmt->execute();
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    $utilisateurs = json_encode($users);
?>
<!DOCTYPE = html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="composant_react">
        <?php $utilisateurs; ?>
    </div>
    <script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>
    <script src="users.js"></script>
</body>
</html>