<?php
  header('Access-Control-Allow-Origin: *');
  header('Content-type: application/json');

  $dsn = 'mysql:host=localhost;dbname=northwind';
  $username = 'root';
  $password = '';
  $db = new PDO($dsn, $username, $password);

  $query = "SELECT * FROM `orders`
    LEFT JOIN `customers` ON orders.CustomerID = customers.CustomerID
    LEFT JOIN `employees` ON orders.EmployeeID = employees.EmployeeID";
  
  $stmt = $db->prepare($query);
  $stmt->execute();

  while ($row = $stmt->fetch()) {
    $orders[] = array(
      'OrderID' => $row['OrderID'], 
      'CustomerID' => $row['CustomerID'], 
      'Customer' => $row['CompanyName'], 
      'EmployeeID' => $row['EmployeeID'], 
      'Employee' => $row['FirstName'] . " " . $row["LastName"], 
      'OrderDate' => $row['OrderDate'],
      'RequiredDate' => $row['RequiredDate'],
      'ShippedDate' => $row['ShippedDate'],
      'Freight' => $row['Freight']
    );
  }
  echo json_encode(utf8ize($orders));

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