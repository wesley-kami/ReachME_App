<?php 
    require '../class/database.php';
    require '../class/Utilitaires.php';

    class Post extends Database{
        use Utilitaires ;
        private $log;
        private $db;
        private $content;
        private $image;
        private $id;

        public function __construct(){
            $this->log = new Database();
            $this->db = $this->log->getconnection() ;
        }

        public static function isFileValide($file){
            $validExt =['jpeg','jpg','png'];
            if($file['error'] === UPLOAD_ERR_OK){
                if(in_array(pathinfo($file['name'],PATHINFO_EXTENSION), $validExt)){
                    return true ;
                }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    }
        public static function create($user_id,$content,$image){
            if(isset($content) || $image['error'] === UPLOAD_ERR_OK){

                if(isset($content)){
                    if (trim($content) === '') $content = null ;
                }

                if($image['error'] === UPLOAD_ERR_OK ){
                    if(Post::isFileValide($image)){
                        $dir = '/uploads/posts/'.uniqid('user_',true).".".pathinfo($image['name'],PATHINFO_EXTENSION) ;
                        if(move_uploaded_file($image['tmp_name'], "../../frontend/assets/images".$dir)){
                            $db = new Database();
                            $conn = $db->getconnection();
                            $sql = 'INSERT INTO posts(user_id, content, image) VALUES(:id , :content, :image)';
                            $req = $conn->prepare($sql);
                            $req->execute(['id'=>$user_id,'content'=>$content,'image'=>$dir]);
                            return true;
                        }else{
                            return false;
                        }
                    }else{
                        return false;
                    }
                }else{
                        $db = new Database();
                        $conn = $db->getconnection();
                        $sql = 'INSERT INTO posts(user_id, content, image) VALUES(:id , :content, :image)';
                        $req = $conn->prepare($sql);
                        $req->execute(['id'=>$user_id,'content'=>$content,'image'=> null]);
                        return true;
                }

            }else{
                return false;
            }
        }

        public static function destroy(){

        }

        public static function all(){
            $db= new Database();
            $log = $db->getconnection();
            $sql = " SELECT first_name,last_name,content,user_id,image,posts.created_at FROM posts,users WHERE users.id = posts.user_id ORDER BY created_at DESC ";
            $req=$log->prepare($sql);
            $req->execute();
            return $req->fetchAll();
        }

        public static function delete(){
            
        }
    }

    
?>