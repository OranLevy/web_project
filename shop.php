<?php
require_once('includes/init.php');
global $database;
//if($database->get_connection()){
//    echo "<script>console.log('Connection OK');</script>";
//}else{
//    die('Connection failed');
//}
$products = Product::fetch_products();
$response = Array();
foreach ($products as $prod){
    $response[] = array('id' => utf8_encode($prod->id), 'name' => utf8_encode($prod->name), 'price' => utf8_encode($prod->price), 'description' => utf8_encode($prod->description), 'image' => utf8_encode($prod->image));
}
$response = json_encode($response);
print_r($response);
