<?php

if(isset($_POST['fname']) && isset($_POST['lname']) && isset($_POST['age']) && isset($_POST['tel']) && isset($_POST['city'])){
    $msg = "FIRST NAME: ".htmlspecialchars($_POST['fname'])." \n";
    $msg .= "LAST NAME: ".htmlspecialchars($_POST['lname'])." \n";
    $msg .= "AGE: ".htmlspecialchars($_POST['age'])." \n";
    $msg .= "TEL: ".htmlspecialchars($_POST['tel'])." \n";
    $msg .= "CITY: ".htmlspecialchars($_POST['city']);
    $headers = 'From: ELOC <support@test.com>' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    $content = "\n=============================\nDATE: ".date("Y-m-d H:i:s")."\n".$msg."\n=============================";
    $fp = fopen($_SERVER['DOCUMENT_ROOT'] . "/subscriptions.txt","a+");
    fwrite($fp,$content);
    fclose($fp);

    if(@mail("elocbackground@gmail.com", "New subscription", $msg, $headers)){
        echo "success";
    }else{
        echo "تعذر إرسـال المعلومـات .. المرجوا التواصل معنا مباشرة على: 0604007232";
    }
}else{
    echo "المرجـوا تعبـئة جميع الخـانات.";
}