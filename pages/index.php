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
        <div class="trailer">
            <video width="320" height="240" controls>
                <source src="../video/trailer.mp4" type=video/mp4>
            </video>
        </div>
        <div class="blabla">
            <div class="title">
                <h2>Qu'est ce que&nbsp;&nbsp;</h2>
                <img src="../img/SENSE.png" alt="">
                <h2>&nbsp;&nbsp;?</h2>
            </div>
            <p>Préparez-vous pour une expérience unique qui vous emmenera dans un autre univers. Vivez vos émotions comme vous ne l'avez jamais fait auparavant. Avec THE SENSE explorez d'autres dimensions et vivez l'impossible en intérragissant avec un environnement dynamique et virtuel. Ce n'est pas une expérience en réalité virtuelle que vous vivez, c'est la réalité.</p>
            <a href="../pages/about.php">Découvrez The Sense</a>
        </div>
    </div>

    <div>
        <h1>La réalité à portée de main</h1>
        <p>Vous rêvez de voyager, de frisonner ou tout simplement de vivre une expérience unique ? Explorez nos univers entre amis et famille et franchissez la fronuière de la réalité. Plusieurs dimensions s'offrent à vous, vous donnant accès à de nombreuses expériences.</p>
    </div>

    <div>
        <h2>Nos expériences les plus appréciées</h2>
        <img src="../img/image-45.png" alt="">
    </div>
    
    








    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>   
</body>
</html>