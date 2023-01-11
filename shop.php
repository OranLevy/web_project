<?php
require_once('includes/init.php');
global $database;
if($database->get_connection()){
    echo "<script>console.log('Connection OK');</script>";
}else{
    die('Connection failed');
}
$products = Product::fetch_products();
$response = Array();
foreach ($products as $prod){
//    var_dump($prod);
    $response[] = array('id' => $prod->id, 'name' => $prod->name, 'price' => $prod->price, 'description' => $prod->description, 'image' => $prod->image);
}
$response = json_encode($response);
print_r($response);
