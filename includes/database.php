<?php
    require_once('config.php');
    class Database{
        private $connection;
        public function __construct(){
            $this->open_db_connection();
        }
        private function open_db_connection(){
            $this->connection = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
            if($this->connection->connect_error){
                $this->connection = null;
            }
        }

        public function get_connection(){
            return $this->connection;
        }

        public function query($sql){
            $result = $this->connection->query($sql);
            // var_dump($result);
            if(!$result){
                return null;
            }
            return $result;
        }

        public function id_exist_answers($id){
            $result = $this->query("SELECT user_id FROM survey_part1 WHERE user_id = '" . $id . "'")->fetch_all();
            if(count($result) > 0){
                return true;
            }else{
                return false;
            }
        }
    } 

    $database = new Database();


