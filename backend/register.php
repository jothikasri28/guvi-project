<?php
include 'db.php';

// get data
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];

// hash password
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// prepare query
$stmt = $conn->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");

// check error
if (!$stmt) {
    die("Prepare failed: " . $conn->error);
}

// bind
$stmt->bind_param("sss", $name, $email, $hashedPassword);

// execute
if ($stmt->execute()) {
    echo "Registered Successfully";
} else {
    echo "Error: " . $stmt->error;
}
?>