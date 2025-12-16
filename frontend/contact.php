<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"));

if (!$data->name || !$data->email || !$data->message) {
    echo json_encode([
        "status" => "error",
        "message" => "Required fields missing"
    ]);
    exit;
}

$name = htmlspecialchars($data->name);
$email = filter_var($data->email, FILTER_SANITIZE_EMAIL);
$phone = isset($data->phone) ? htmlspecialchars($data->phone) : "Not Provided";
$message = htmlspecialchars($data->message);

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        "status" => "error",
        "message" => "Invalid email format"
    ]);
    exit;
}

$to = "assist@humancarefoundationtrust.org";
// $to = "manager.dm@humancareworldwide.com";
$subject = "New Contact Form Message";
$body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage:\n$message";

$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($to, $subject, $body, $headers)) {
    echo json_encode([
        "status" => "success",
        "message" => "Message sent successfully"
    ]);
} else {
    echo json_encode([
        "status" => "error",
        "message" => "Failed to send message"
    ]);
}
?>
