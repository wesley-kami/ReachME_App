<?php 
    require './allowedOrigin.php';

    session_start();
    // var_dump($_SESSION);
    
    session_destroy();
    session_unset();
    echo json_encode(['success' => true, 'session' => $_SESSION['user']['id']]);
?>