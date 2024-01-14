<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    $to = "your-email@example.com";

    $subject = "New Contact Form Submission from $name";

    $headers = "From: $email";

    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Message:\n$message";

    mail($to, $subject, $email_content, $headers);

    header("Location: thank-you.html");
    exit;
}
?>
