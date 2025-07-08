<?php 

    class Database{
        public function __construct(){
            $this->con = new PDO("mysql:host=localhost;dbname=ReachMe","root",'',[PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
        }
        public function getconnection(){
            return $this->con;
        }
    }

/*?>*/