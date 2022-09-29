<?php
  header('Access-Control-Allow-Origin: *');
  header('Content-type: application/json');

  $dsn = 'mysql:host=localhost;dbname=northwind';
  $username = 'root';
  $password = '';
  $db = new PDO($dsn, $username, $password);

  $query = "SELECT ProductName FROM `products` WHERE 1";
  
  $stmt = $db->prepare($query);
  $stmt->execute();
  while ($row = $stmt->fetch()) {
    $products[] = array(
      'ProductName' => $row['ProductName']
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