<?php

require_once('database.php');

class Product
{
    private $id;
    private $name;
    private $price;
    private $description;
    private $image;


    //  General Getter method
    public function __get($property)
    {
        if (property_exists($this, $property)) {
            return $this->$property;
        }
    }

    private function has_attribute($attribute)
    {
        $object_properties = get_object_vars($this);
        return array_key_exists($attribute, $object_properties);
    }

    private function instantation($array)
    {
        foreach ($array as $attribute => $value) {
            if ($result = $this->has_attribute($attribute)) {
                $this->$attribute = $value;
            }
        }
    }

    public function find_product_by_id($id)
    {
        global $database;
        $error = null;
        $result = $database->query("SELECT * FROM products WHERE id = '" . $id . "'");
        if (!$result) {
            $error = 'Cannot find answer for this product. Error is:' . $database->get_connection()->error;
        } elseif ($result->num_rows > 0) {
            $found_answer = $result->fetch_assoc();
            $this->instantation($found_answer);
        } else {
            $error = "Cannot find product for this id";
        }
        return $error;
    }

    public static function fetch_products()
    {
        global $database;
        $result = $database->query("SELECT * FROM products");
        $products = null;
        if ($result) {
            $i = 0;
            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    $product = new Product();
                    $product->instantation($row);
                    $products[$i] = $product;
                    $i += 1;
                }
            }
        }
        return $products;
    }
}

