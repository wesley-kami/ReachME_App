<?php 
    require '../allowedOrigin.php';
    require '../class/users.php';

    session_start();

    if(!isset($_SESSION['user']['id'])){
        print_r(json_encode(['success' => false]));
    }

    if(isset($_SESSION['user']['id'])){
        $user = new User();
        $user=$user::find($_SESSION['user']['id']);

        print_r(json_encode(['success' => true, 'data' => $user ]));    
    }
    
?>