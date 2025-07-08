<?php 

    require '../allowedOrigin.php'; 
    require '../class/users.php';
    session_start();
    // var_dump($_SESSION);
    // echo '<br>'.$csrf_token = $_POST['csrf'] ;



    // // if( $_POST['csrf'] === $_SESSION['token_csrf']){
        $firstname = $_POST['firstname'] ;
        $lastname = $_POST['lastname'] ;
        $email = $_POST['email'] ;
        $password = $_POST['password'] ;
        $conf_pass = $_POST['conf_pass'] ;
        $gender = $_POST['choice'] ;
        $birth_day = $_POST['day'] ;
        $birth_month = $_POST['month'] ;
        $birth_year = $_POST['year'] ;
        $csrf_token = $_POST['csrf'] ;
        $birthDate = $birth_year.'-'.$birth_month.'-'.$birth_day;
    //     User::create($firstname,$lastname,$email,$password,$gender,$birthDate,'User');
    //     echo 'user created sucessfully!';
    // }else{
    //     echo 'Dôhi';
    // }

    if( $_POST['csrf'] === $_SESSION['token_csrf']){
        echo true;
    }
    else{
        echo false;
    }

?>