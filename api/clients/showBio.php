<?php 

    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    require '../allowedOrigin.php';
    require '../class/profile.php';

    session_start();

    $user = Profile::find($_SESSION['user']['id']);

    if($user === 0){
        print_r(json_encode(['success' => false]));
    }
    else{
        print_r(json_encode(['success' => true,'data' => $user]));
    }

    

?>