<?php
  header('Access-Control-Allow-Origin: *');
  header('Content-type: application/json');

  $dsn = 'mysql:host=localhost;dbname=northwind';
  $username = 'root';
  $password = '';
  $db = new PDO($dsn, $username, $password);

  $query = "SELECT * FROM `suppliers` WHERE 1";
  
  $stmt = $db->prepare($query);
  $stmt->execute();
  while ($row = $stmt->fetch()) {
    $suppliers[] = array(
      'SupplierID' => $row['SupplierID'], 
      'CompanyName' => $row['CompanyName'], 
      'ContactName' => $row['ContactName'],
      'ContactTitle' => $row['ContactTitle'],
      'Address' => $row['Address'],
      'Country' => $row['Country'],
      'City' => $row['City'],
      'Region' => $row['Region'],
      'PostalCode' => $row['PostalCode'],
      'Phone' => $row['Phone']
    );
  }
  echo json_encode(utf8ize($suppliers));

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