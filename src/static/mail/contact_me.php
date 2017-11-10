<?php
    $name = strip_tags(htmlspecialchars($_POST['name']));
    $email_address = strip_tags(htmlspecialchars($_POST['email']));
    $phone = strip_tags(htmlspecialchars($_POST['phone']));
    $subject = strip_tags(htmlspecialchars($_POST['subject']));
    $message = strip_tags(htmlspecialchars($_POST['message']));

    // Create the email and send the message
    $to = 'info@myocortex.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
    $backup = 'brenton.cozby@gmail.com';
    $email_subject = "Myocortex.com Contact Form:  $subject";
    $email_body = "Subject: $subject\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";
    $headers = "From: contact@myocortex.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
    $headers .= "Reply-To: $email_address";

    if(mail($to,$email_subject,$email_body,$headers)) {
        echo "mail sent successfully to: $to";
    }
    else {
        echo "mailed failed to send to: $to";
    }

    if(mail($backup,$email_subject,$email_body,$headers)) {
        echo "\nmail sent successfully to: $backup";
    }
    else {
        echo "\n\nmailed failed to send to: $backup";
    }

    return true;
?>
