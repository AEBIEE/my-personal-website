<?php
if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];
    
    
    $mailTo = "info@abdallah-mohamed.com"; 
    // we use the Email. cuz Gmail bloks it.
    $headers = "From: ".mailFrom; 
    // shows the Email of the person who sent the Email

    $txt = "You have received an e-mail from ".$name.".\n\n".$message;
    // shows the name of the person who sent the Email

    mail($mailTo, $subject, $txt, $headers);

    header("Location: /resources/thankyou.html?mailsend");
    // this function will confirm that the Email has been sent 
}