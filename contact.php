<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = strip_tags($_POST["name"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $phone = strip_tags($_POST["phone"]);
    $subject = strip_tags($_POST["subject"]);
    $message = htmlspecialchars($_POST["message"]);

    // Your personal email address
    $to = "giovani.umana@gmail.com"; // Replace with your actual email address

    // Email subject
    $email_subject = "New Contact Form Submission: $subject";

    // Email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Email body
    $email_body = "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Phone: $phone\n\n";
    $email_body .= "Message:\n$message\n";

    // Send the email
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Your message has been sent successfully!";
    } else {
        echo "Oops! Something went wrong, and we couldn't send your message.";
    }
} else {
    echo "Invalid request.";
}
?>
