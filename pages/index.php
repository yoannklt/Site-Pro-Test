<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/styles.css">
    <link rel="icon" type="image/png" href="../img/logo.png">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <title>The Sense</title>
</head>
<body>
    <?php require_once "../cfg/config.php"?>
    <?php require_once "../components/navbar.php"?>
    <?php if(isset($_SESSION['user'])){
        echo $_SESSION['user']['first_name'];
    } else {
        echo "Bonjour, veuillez vous connecter pour réserver une session";
    }?>

    <?php if(isset($_SESSION['user'])){?> 
        <div class="container">
            <?php require_once "../components/logout.php"?>
        </div> 
    <?php }else{?>
         <div class="container test-inscription NEPASENLEVER">
            <?php require_once "../components/signup.php"?>
        </div>
        <div class="container test-connexion NEPASENLEVER">
            <?php require_once "../components/signin.php"?>
        </div>
    <?php }?>

    <div class="discover">
        <a class="hover" href="#whatisthat"><img src="../img/DECOUVRIR.png" alt=""></a>
    </div>

    <div id="whatisthat">
        <h2>Qu'est ce que</h2>
        <img src="../img/SENSE.png" alt="">
        <h2>?</h2>
        <p>Préparez-vous pour une expérience unique qui vous emmenera dans un autre univers. Vivez vos émotions comme vous ne l'avez jamais fait auparavant. Avec THE SENSE explorez d'autres dimensions et vivez l'impossible en intérragissant avec un environnement dynamique et virtuel. Ce n'est pas une expérience en réalité virtuelle que vous vivez, c'est la réalité.</p>
        <a href="../about.php">Découvrez The Sense</a>
    </div>
    
    








    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>   
</body>
</html>