<?php
// Include the connect.php file
include ('../../../common/connect.php');

// Connect to the database
// connection String
$mysqli = new mysqli($hostname, $username, $password, $database);
/* check connection */
if (mysqli_connect_errno())
	{
	printf("Connect failed: %s\n", mysqli_connect_error());
	exit();
	}
// get data and store in a json array
$query = "SELECT * FROM Employees WHERE 1";
$result = $mysqli->prepare($query);
$result->execute();
/* bind result variables */

/* fetch values */


while ($row = $result->fetch())
	{
	$data[] = array(
	  'EmployeeID' => $row['EmployeeID'], 
      'FirstName' => $row['FirstName'], 
      'LastName' => $row['LastName'],
      'Title' => $row['Title'],
      'TitleOfCourtesy' => $row['TitleOfCourtesy'],
      'BirthDate' => $row['BirthDate'],
      'HireDate' => $row['HireDate'],
      'City' => $row['City'],
      'Country' => $row['Country'],
      'HomePhone' => $row['HomePhone']
	);
	}
echo json_encode($data);
/* close statement */
$result->close();
/* close connection */
$mysqli->close();
?>