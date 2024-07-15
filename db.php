<?php

$servername = "localhost";
$username = "cianriordan";
$password = "kiG2hJ9OvkqAtLC";
$dbname = "cianriordan_pf";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

?>