<?php
$nameUser =  $_GET["name"];
$phoneNumber = $_GET["phone"];
$address = $_GET["address"];
$emailAddress = $_GET["emailAddress"];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <link rel="icon" href="../img/pizzaDrawn.png">
    <title>Document</title>
</head>
<body  id="styleForm">
    <header class="textCenter">
        <img src="./../img/a4.gif" alt="Logo Pizza" id="imgIconPizza2">
        <h1>THANKS</h1>
    </header>
    <main class="textCenter">
        <h4>we will prepare your order and send it to the following contact information:</h4>
        <ul id="ulFormPhp">
            <li>Name: <?php echo $nameUser?></li>
            <li>Email: <?php echo $emailAddress?></li>
            <li>Phone: <?php echo $phoneNumber?></li>
            <li>Address: <?php echo $address?></li>
        </ul>
    </main>
</body>
</html>

