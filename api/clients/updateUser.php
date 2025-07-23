<?php 

    require '../allowedOrigin.php';
    require '../class/users.php';

    session_start();

    if($_SERVER['REQUEST_METHOD'] === 'POST'){

        if( $_POST['firstname'] || $_POST['lastname'] || $_POST['gender'] || $_POST['birthDate']){
            
            if($_POST['firstname'] === ''){
                $_POST['firstname'] = null ;
            }

            if($_POST['firstname'] === ''){
                $_POST['firstname'] = null ;
            }

            if($_POST['gender'] === ''){
                $_POST['gender'] = null ;
            }

            if($_POST['birthDate'] === ''){
                $_POST['birthDate'] = null ;
            }

            $user = new User();

            $user->updateInfo($_POST['firstname'], $_POST['lastname'], $_POST['gender'], $_POST['birthDate'], $_SESSION['user']['id']);

            print_r(json_encode(['success' => true]));

        }
        else{

            print_r(json_encode(['success' => false ]));
            
        }

    }

?>