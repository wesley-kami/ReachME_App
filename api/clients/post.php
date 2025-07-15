<?php 

use GrahamCampbell\ResultType\Error;
    ini_set('display_errors', 1);           // Show errors in the browser
    ini_set('display_startup_errors', 1);   // Show startup errors
    error_reporting(E_ALL);                 // Report all types of errors


    require '../allowedOrigin.php';
    require '../class/posts.php';

        if($_SERVER['REQUEST_METHOD']=== 'POST'){
            if(Post::create($_SESSION['user']['id'],$_POST['content'],$_FILES['image'])){
                print_r(json_encode(['success' => true]));
            }else{
                print_r(json_encode(['success' => false]));
            };
            // if($_FILES['image']['error'] === UPLOAD_ERR_OK ){
            //     print_r(json_encode(["success"=>true]));
            // }
        };

?>