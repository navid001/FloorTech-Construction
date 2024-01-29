<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Replace with your real receiving email address
    $receiving_email_address = 'navidalvi.001@gmail.com';

    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Sanitize input
    $name = filter_var($name, FILTER_SANITIZE_STRING);
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    $subject = filter_var($subject, FILTER_SANITIZE_STRING);
    $message = filter_var($message, FILTER_SANITIZE_STRING);

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo 'Invalid email address';
        exit;
    }

    // Compose email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Subject: $subject\n\n";
    $email_message .= "Message:\n$message";

    // Set additional headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Attempt to send email
    if (mail($receiving_email_address, $subject, $email_message, $headers)) {
        echo 'Message sent successfully';
    } else {
        echo 'Failed to send message';
    }
} else {
    echo 'Invalid request';
}
?>
