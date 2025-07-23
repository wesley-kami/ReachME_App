<?php 

    require '../allowedOrigin.php';
    require '../class/bio.php';

    session_start();

    if($_SERVER['REQUEST_METHOD'] === 'POST'){

        if( isset($_POST['hobby']) && isset($_POST['bio']) && isset($_POST['occupation']) ){

            $bio = new Profile() ;
            $bio->update($_SESSION['user']['id'],$_POST['hobby'],$_POST['bio']);

            print_r(json_encode(['success' => true]));

        }else{
            print_r(json_encode(['success' => false]));
        }

    }else{
        print_r(json_encode(['success' => false]));
    }

?>