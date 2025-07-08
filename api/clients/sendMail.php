<?php 

    require '../allowedOrigin.php';
    session_start();
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use Dotenv\Dotenv;
    require '../vendor/autoload.php';
        
        strlen($_POST['day']) === 1 ? $birth_day = '0'.$_POST['day'] : $birth_day = $_POST['day']  ;
        strlen($_POST['month']) === 1 ? $birth_month = '0'.$_POST['month'] : $birth_month = $_POST['month']  ;
        strlen($_POST['year']) === 1 ? $birth_year = '0'.$_POST['year'] : $birth_year = $_POST['year']  ;
        $birthDate = $birth_year.'-'.$birth_month.'-'.$birth_day;

        $_SESSION['firstname']=$_POST['firstname'];
        $_SESSION['lastname']=$_POST['lastname'];
        $_SESSION['email']=$_POST['email'];
        $_SESSION['password']=$_POST['password'];
        $_SESSION['gender']=$_POST['choice'];
        $_SESSION['birthDate']=$birthDate;

    if($_SESSION['token_csrf'] === $_POST['csrf']){   
        
        function generateOTP($length = 6) {
        $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        $otp = '';
        for ($i = 0; $i < $length; $i++) {
            $otp .= $chars[random_int(0, strlen($chars) - 1)];  
        }
        return $otp;
        }

        $_SESSION['otp'] = generateOTP() ;
        $otp = $_SESSION['otp'] ; 

        $dotenv = Dotenv::createImmutable(__DIR__);
        $dotenv->load();

        $mailer = new PHPMailer(true);
        $mailer->isSMTP();
        // $mailer->SMTPDebug = SMTP::DEBUG_SERVER;
        $mailer->Host = $_ENV['SMTP_HOST'];
        $mailer->Port = $_ENV['SMTP_PORT'];
        $mailer->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mailer->SMTPAuth = true;
        $mailer->Username = $_ENV['SMTP_USER'];
        $mailer->Password = $_ENV['SMTP_PASS'];

        $mailer->setFrom($_ENV['SMTP_USER'],'Team REACHME');
        $mailer->addReplyTo($_ENV['SMTP_USER'],);
        $mailer->addAddress($_POST['email'],'Recipient');
        $mailer->Subject = 'Registration step'; 
        $mailer->isHTML(true);
        $mailer->Body = "<div style='max-width:600px;margin:0 auto;background-color:#1e1b4b;color:#fff;padding:2rem;border-radius:12px;font-family:sans-serif;margin:30px auto;'>
            <h1 style='color:#c084fc;text-align:center'>REACHME</h1>
            <p style='font-size:1.1rem;text-align:center'>Bonjour 👋,</p>
            <p style='text-align:center'>Voici votre code de vérification :</p>
            <div style='background-color:#2e1065;padding:1rem;text-align:center;border-radius:8px;margin:1.5rem 0;'>
                <span style='font-size:2rem;letter-spacing:6px;color:#facc15;font-weight:bold;'>$otp</span>
            </div>
            <p style='font-size:0.95rem;text-align:center;color:#d1d5db;'>Ce code est valide pendant 10 minutes.</p>
            <hr style='border:none;border-top:1px solid #4b5563;margin:2rem 0;'>
            <p style='font-size:0.85rem;text-align:center;color:#9ca3af;'>
                Si vous n'avez pas demandé ce code, ignorez simplement ce message.<br>
                Merci d'utiliser <strong>ReachME</strong> ✨
            </p>
            </div>";
        $mailer->AltBody = 'REACHME registration step';
        if(!$mailer->send()){
            echo json_encode(['success'=>false]);
        }else{
            echo json_encode(['success'=>true]);
        }
        // echo json_encode(['success' =>true]);
        // echo(json_encode(['success'=>$_SESSION]));
    }

?>