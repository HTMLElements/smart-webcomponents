<?php
  header('Access-Control-Allow-Origin: *');
  header('Content-type: application/json');

  $dsn = 'mysql:host=localhost;dbname=northwind';
  $username = 'root';
  $password = '';
  $db = new PDO($dsn, $username, $password);

  $query = "SELECT * FROM `products` 
    LEFT JOIN `suppliers` ON products.SupplierID = suppliers.SupplierID 
    LEFT JOIN `categories` ON products.CategoryID = categories.CategoryID";
  
  $stmt = $db->prepare($query);
  $stmt->execute();
  while ($row = $stmt->fetch()) {
    $products[] = array(
      'ProductID' => $row['ProductID'], 
      'ProductName' => $row['ProductName'], 
      'SupplierID' => $row['SupplierID'],
      'Supplier' => $row['CompanyName'],
      'CategoryID' => $row['CategoryID'],
      'Category' => $row['CategoryName'],
      'UnitPrice' => $row['UnitPrice'],
      'UnitsInStock' => $row['UnitsInStock'],
      'UnitsOnOrder' => $row['UnitsOnOrder'],
      'Discontinued' => $row['Discontinued']
    );
  }
  echo json_encode(utf8ize($products));

  function utf8ize($d) {
      if (is_array($d)) {
          foreach ($d as $k => $v) {
              $d[$k] = utf8ize($v);
          }
      } else if (is_string ($d)) {
          return utf8_encode($d);
      }
      return $d;
  }
?>