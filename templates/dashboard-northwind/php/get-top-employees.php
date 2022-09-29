<?php
  header('Access-Control-Allow-Origin: *');
  header('Content-type: application/json');

  $dsn = 'mysql:host=localhost;dbname=northwind';
  $username = 'root';
  $password = '';
  $db = new PDO($dsn, $username, $password);

  $query = "SELECT * FROM `employees` LIMIT 5";
  
  $stmt = $db->prepare($query);
  $stmt->execute();
  while ($row = $stmt->fetch()) {
    $employees[] = array(
      'EmployeeID' => $row['EmployeeID'], 
      'FirstName' => $row['FirstName'], 
      'LastName' => $row['LastName'],
      'City' => $row['City'],
      'Country' => $row['Country'],
      'HomePhone' => $row['HomePhone']
    );
  }
  echo json_encode(utf8ize($employees));

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