<?php 

    ini_set('display_errors', 1);           // Show errors in the browser
    ini_set('display_startup_errors', 1);   // Show startup errors
    error_reporting(E_ALL);

    require '../allowedOrigin.php';
    require '../class/posts.php';

    session_start();

    $post = Post::all();

    echo json_encode(['success'=>true,"data"=>$post]);

?>