<?php 
        require './allowedOrigin.php';

        // session_unset();
        // session_destroy();
        if(!isset($_SESSION)){
            session_start();
            $_SESSION["token_csrf"] = bin2hex(openssl_random_pseudo_bytes(16));
            $session = json_encode($_SESSION['token_csrf']);
            print_r($session);
        }

?>