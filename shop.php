<?php
require_once('includes/init.php');
global $database;
if($database->get_connection()){
    echo "<script>console.log('Connection OK');</script>";
}else{
    die('Connection failed');
}
$products = Product::fetch_products();
//var_dump($products);
$response = Array();
foreach ($products as $prod){
//    var_dump($prod);
    $response[] = array('id' => utf8_encode($prod->id), 'name' => utf8_encode($prod->name), 'price' => utf8_encode($prod->price), 'description' => utf8_encode($prod->description), 'image' => utf8_encode($prod->image));
}
var_dump($response);
$response = json_encode($response);
var_dump($response);
print_r($response);
