<?php 
    trait Utilitaires{
        public function isFileValide($file){
            $validExt =['jpeg','jpg','png','mp3','webm','avi'];
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
}
?>