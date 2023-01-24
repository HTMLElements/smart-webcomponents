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
$query = "SELECT EmployeeId, FirstName, Title, HireDate FROM Employees LIMIT 100 OFFSET 0";
$sqlCount = "SELECT COUNT(EmployeeId) as length from Employees";

$result = $mysqli->prepare($query);
$result->bind_param('ii');
$result->execute();
/* bind result variables */
$result->bind_result($EmployeeId, $FirstName, $Title, $HireDate);
/* fetch values */
while ($result->fetch()) {
	$data[] = array(
		'EmployeeId' => $EmployeeId,
		'FirstName' => $FirstName,
		'Title' => $Title,
		'HireDate' => $HireDate
	);
	}

// $serverData = $data;
$serverData = json_encode($data);

echo json_encode($serverData);

/* close statement */
$result->close();
/* close connection */
$mysqli->close();
?>