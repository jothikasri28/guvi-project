<?php
include 'db.php';

$email = $_POST['email'];

$stmt = $conn->prepare("SELECT * FROM users WHERE email=?");
$stmt->bind_param("s", $email);
$stmt->execute();

$result = $stmt->get_result();

echo json_encode($result->fetch_assoc());
?>