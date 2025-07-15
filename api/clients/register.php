<?php 

require '../allowedOrigin.php'; 
require '../class/users.php';
session_start();

header('Content-Type: application/json');

if (isset($_POST['Otp'], $_SESSION['otp'])) {

    if ($_SESSION['otp'] === $_POST['Otp']) {

        if (isset($_SESSION['user']['firstname'])){
            User::create(
                $_SESSION['user']['firstname'],
                $_SESSION['user']['lastname'],
                $_SESSION['user']['email'],
                $_SESSION['user']['password'],
                $_SESSION['user']['gender'],
                $_SESSION['user']['birthDate'],
                "User"
            );

            $user = new User();
            $user = $user->getMail($_SESSION['user']['email']);
            $_SESSION['user']['id'] = $user['id'];

            unset(
                $_SESSION['user']['firstname'],
                $_SESSION['user']['lastname'],
                $_SESSION['user']['email'],
                $_SESSION['user']['password'],
                $_SESSION['user']['gender'],
                $_SESSION['user']['birthDate'],
                $_SESSION['token_csrf'],
                $_SESSION['otp']
            );
        }else{
            $users = new User();
            $user = $users->getMail($_SESSION['user']['email']);
            $_SESSION['user']['id'] = $user['id'];
            unset($_SESSION['user']['email'],$_SESSION['token_csrf'],$_SESSION['otp']);
        }

        echo json_encode(["success" => 1]);

    } else {
        echo json_encode(["success" => 2]); // OTP incorrect
    }

} else {
    echo json_encode(["success" => 0]); // OTP non envoyé ou session expirée
}

?>