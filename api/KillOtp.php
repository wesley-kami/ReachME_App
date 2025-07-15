<?php 
     require './allowedOrigin.php';

     session_start();

     unset( $_SESSION['otp'] );

     return json_encode(['success' => true ]);

?>