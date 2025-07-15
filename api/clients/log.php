<?php 

    // ini_set('display_errors', 1);
    // ini_set('display_startup_errors', 1);
    // error_reporting(E_ALL);

    require '../allowedOrigin.php';
    require '../class/users.php';
     session_start();

    if( $_SESSION['token_csrf'] === $_POST['csrf']){

        $user = new User();
        
        if($user->canLog($_POST['email'],$_POST['password'])){
            $user = new User() ;
            $user =$user->getMail($_POST['email']);
            $_SESSION['user']['id'] = $user['id'];
            echo json_encode(['success' => true]); 
        }else{
            echo json_encode(['success'=> false]);
        }
    
    }else{
        echo json_encode(['success'=> false]);
    }


?>