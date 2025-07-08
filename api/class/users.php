<?php 
     require 'database.php';
     require 'Utilitaires.php';
     class User extends Database {
        use Utilitaires;
         private $firstname;
         private $lastname;
         private $email;
         private $password;
         private $profile_image;
         private $role;
         private $birth_date;
         private $gender;
         private $db;
         private $log ;

         public function __construct(){
            $this->log = new Database();
            $this->db = $this->log->getconnection() ;
         }
         public static function create($firstname,$lastname,$email,$password,$gender,$birth_date,$role){
 
             $db = new Database();
             $conn =$db->getconnection();
             $sql = "INSERT INTO users(first_name,last_name,email,birthDate,gender,password_hash,role) VALUES(:firstname,:lastname,:email,:birth,:gender,:password,:role)";
             $req=$conn->prepare($sql);
             $req->execute([
                "firstname"=> $firstname,
                "lastname"=> $lastname,
                "email"=> $email,
                "password"=> password_hash($password,PASSWORD_DEFAULT),
                "gender"=> $gender,
                "birth"=> $birth_date,
                "role"=> $role
            ]);
        }


         public static function all(){
            $db = new Database();
            $conn =$db->getconnection();
            $sql = "SELECT * FROM users";
            $req=$conn->prepare($sql);
            $req->execute();
            return $req->fetchAll(PDO::FETCH_ASSOC);
         }

         public static function find($id){
            $db = new Database();
            $conn =$db->getconnection();
            $sql = "SELECT * FROM users WHERE id=:id";
            $req=$conn->prepare($sql);
            $req->execute(["id" => $id]);
            return $req->fetch(PDO::FETCH_ASSOC);
         }

         public static function destroy($id){
            $db = new Database();
            $conn =$db->getconnection();
            $sql = "DELETE FROM users WHERE id=:id";
            $req=$conn->prepare($sql);
            $req->execute(["id"=> $id]);
         }

         public function getMail($email){
             $sql = "SELECT * FROM users WHERE email=:email";
             $req=$this->db->prepare($sql);
             $req->execute(["email"=> $email]);
             return $req->fetch(PDO::FETCH_ASSOC);
         }
         public function isMailUnique($email){
            return $this->getMail($email) === false; 
         }
         public function canLog($email,$password){
            if(!$this->isMailUnique($email)){
                $user = $this->getMail($email);
                if(password_verify($password,$user['password_hash'])){
                      return 1;
                }
                else{
                    return 0;
                }
            }
            else{
                return 0;
            }
         }

         public function updateInfo($firstname,$lastname,$gender,$birth_date,$id){
            $sql = 'UPDATE users set first_name=:firstname, last_name=:lastname, gender=:gender, birthDate=:birth WHERE id=:id';
            $req=$this->db->prepare($sql);
            $req->execute([
                'firstname'=> $firstname,
                'lastname'=> $lastname,
                'gender'=> $gender,
                'birth'=> $birth_date,
                "id" => $id          
            ]);
         }

         public function updateProfil($id,$profile_image){
            if($this->isFileValide($profile_image)){
                $filedir ='uploads/'.uniqid('user_',true).'.'.pathinfo($profile_image['name'],PATHINFO_EXTENSION);
                if(move_uploaded_file($profile_image['tmp_name'],$filedir)){
                $db = new Database(); 
                $conn =$db->getconnection();
                $sql = 'UPDATE users set profile_image=:profile WHERE id=:id';
                $req = $conn->prepare($sql);
                $req->execute(["profile" => $filedir,"id"=> $id]);
                }
           }
            else{
                return 0;
            }
         
       }
       public function blockUser( $id ){
           $sql = "UPDATE users set status = :status WHERE id=:id";
           $req = $this->db->prepare($sql);
           $req->execute(["status" => "blocked","id" => $id]);
       }

}

?>