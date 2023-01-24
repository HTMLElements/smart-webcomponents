<?php
// Include the connect.php file
include ('../../../scripts/connect.php');

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
$query = "SELECT CompanyName, ContactName, ContactTitle, Country, Address, City FROM Customers" . $_GET[ 'where' ] . $_GET[ 'groupBy' ] . $_GET[ 'orderBy' ] . $_GET[ 'limit' ];
$sqlCount = "SELECT COUNT(CustomerID) as length from Customers" . $_GET[ 'where' ];

if (!$_GET[ "groupBy" ]) {
//	$sqlCount = "SELECT COUNT(DISTINCT " .  $_GET[ "groupBy" ] . ") as length from ? " . $_GET[ "where" ];
}

$result = $mysqli->prepare($query);
$result->bind_param('ii');
$result->execute();
/* bind result variables */
$result->bind_result($CompanyName, $ContactName, $ContactTitle, $Country, $Address, $City);
/* fetch values */
while ($result->fetch())
	{
	$data[] = array(
		'CompanyName' => $CompanyName,
		'ContactName' => $ContactName,
		'ContactTitle' => $ContactTitle,
		'Country' => $Country,
		'Address' => $Address,
		'City' => $City
	);
	}

$result = $mysqli->prepare($sqlCount);
$result->bind_param('ii');
$result->execute();
/* bind result variables */
$result->bind_result($length);
/* fetch values */
while ($result->fetch())
	{
		$length[] = array(
			'length' => $length
		);
	}

$serverData["data"] = json_encode($data);
$serverData["length"] = json_encode($length);

echo json_encode($serverData);

/* close statement */
$result->close();
/* close connection */
$mysqli->close();
?>