<?php
include 'db.php';

$email = $_POST['email'];
$password = $_POST['password'];

$stmt = $conn->prepare("SELECT * FROM users WHERE email=?");
$stmt->bind_param("s", $email);
$stmt->execute();

$result = $stmt->get_result();

if ($row = $result->fetch_assoc()) {

    if (password_verify($password, $row['password'])) {

        echo json_encode([
            "status" => "success",
            "email" => $email
        ]);

    } else {
        echo json_encode(["status" => "fail"]);
    }

} else {
    echo json_encode(["status" => "fail"]);
}
?>