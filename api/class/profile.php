<?php 
    require 'database.php';
    
    class Profile extends Database{

        private $db;
        private $log;
        private $hobby;
        private $bio;
        private $user;

        public function __construct(){
            $this->db = new Database();
            $this->log = $this->db->getconnection();
        }

        public static function create($bio,$hobby,$user){
            $db = new Database();
            $conn = $db->getconnection();
            $sql = "INSERT INTO profiles VALUES(NULL, :hobby, :bio, :user)";
            $req =$conn->prepare($sql);
            $req->execute([
                "hobby" => $hobby,
                "bio" => $bio,
                "user" => $user
            ]);
        }

        public static function find($user){
            $db = new Database();
            $conn = $db->getconnection();
            $sql = "SELECT * FROM profiles WHERE user_id = :user";
            $req =$conn->prepare($sql);
            $req->execute(['user' => $user]);
            if($req->rowCount() === 0){
                return 0;
            }else{
                return $req->fetch(PDO::FETCH_ASSOC);
            } 
        }

        public static function all(){
            $db = new Database();
            $conn = $db->getconnection();
            $sql = "SELECT * FROM profiles ";
            $req =$conn->prepare($sql);
            $req->execute();
            return $req->fetchAll(PDO::FETCH_ASSOC);
        }

        public static function destroy($user){
            $db = new Database();
            $conn = $db->getconnection();
            $sql = "DELETE FROM profiles WHERE :id";
            $req =$conn->prepare($sql);
            $req->execute(["id" => $user]);
        }

        public static function delete(){
            $db = new Database();
            $conn = $db->getconnection();
            $sql = "DELETE FROM profiles ";
            $req =$conn->prepare($sql);
            $req->execute();
        }

        public function update($user,$hobby,$bio){
            $conn = $this->log;
            $sql = "UPDATE profiles set hobby = :hobby , bio =:bio WHERE user_id = :user";
            $req = $conn->prepare($sql);
            $req->execute([
                "hobby" => $hobby,
                "bio" => $bio,
                "user" => $user
            ]);        
        }

    }

?>