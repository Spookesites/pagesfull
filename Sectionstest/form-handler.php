<?php
if(isset($_POST['submit'])){
    $to = "sanjosecontactame@gmail.com";
    $from = $_POST['email'];
    $subject = "Contact Form Submission";
    $message = $_POST['message'];
    $headers = "From: $from";

    mail($to, $subject, $message, $headers);
    echo "Thank you for your message!";
}
?>
