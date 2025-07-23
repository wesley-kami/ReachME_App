<?php 

    require './database.php';

    class Bio extends Database{

        private $db;
        private $log;
        private $bio;
        private $hobby;
        private $occupation;
        private $user_id;

        public function __construct(){
            
            $this->db = new Database();
            $this-> log = $this->db->getconnection();

        }

        public static function create($hobby, $bio, $user_id){
            $db = new Database() ;
            $conn = $db->getconnection() ;
            $sql = 'INSERT INTO profiles VALUES ( NULL, :hobby, :bio, :id )';
            $req = $conn->prepare($sql);
            $req->execute([
                "hobby" => $hobby,
                "bio" => $bio,
                "id" => $user_id 
            ]);

        }

        public static function find($user_id){
            $db = new Database() ;
            $conn = $db->getconnection() ;
            $sql = 'SELECT * FROM profiles WHERE user_id = :user';
            $req = $conn->prepare($sql);
            $req->execute(['user' => $user_id]);
            return $req->fetch(PDO::FETCH_ASSOC);
        }

        public function update($hobby, $bio, $user_id){
            $conn = $this->log ;
            $sql = "UPDATE profiles SET hobby=:hobby, bio=:bio WHERE user_id = :user_id";
            $req = $conn->prepare($sql);
            $req->execute([
                "hobby" => $hobby,
                "bio" => $bio,
                "user_id" => $user_id
            ]);

        }

        public static function all(){
            $db = new Database() ;
            $conn = $db->getconnection() ;
            $sql = 'SELECT * FROM profiles';
            $req = $conn->prepare($sql);
            $req->execute();
            return $req->fetchAll(PDO::FETCH_ASSOC);
        }

    }
    
?>