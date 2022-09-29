<?php
  header('Access-Control-Allow-Origin: *');
  header('Content-type: application/json');

  $dsn = 'mysql:host=localhost;dbname=northwind';
  $username = 'root';
  $password = '';
  $db = new PDO($dsn, $username, $password);

  $query = "SELECT * FROM (`order details` AS Orders)
    LEFT JOIN `products` ON Orders.ProductID = products.ProductID";
  
  $stmt = $db->prepare($query);
  $stmt->execute();
  $i = 0;
  while ($row = $stmt->fetch()) {
    $orderDetails[] = array(
      'id' => $i++,
      'OrderID' => $row['OrderID'], 
      'ProductID' => $row['ProductID'], 
      'ProductName' => $row['ProductName'], 
      'UnitPrice' => $row['UnitPrice'],
      'Quantity' => $row['Quantity'],
      'Discount' => $row['Discount']
    );
  }
  echo json_encode(utf8ize($orderDetails));

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