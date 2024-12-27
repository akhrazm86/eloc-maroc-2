<?php

if(isset($_POST['fname']) && isset($_POST['lname']) && isset($_POST['age']) && isset($_POST['tel']) && isset($_POST['city'])){
    $msg = "FIRST NAME: ".$_POST['fname']." \n";
    $msg .= "LAST NAME: ".$_POST['lname']." \n";
    $msg .= "AGE: ".$_POST['age']." \n";
    $msg .= "TEL: ".$_POST['tel']." \n";
    $msg .= "CITY: ".$_POST['city']." \n";
    $headers = 'From: ELOC <support@test.com>' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    if(mail("backgroundreservatin@gmail.com", "New subscription", $msg, $headers)){
        echo "success";
    }else{
        echo "خطأ غير معروف .. المرجوا التواصل معنا مباشرة على: 0620304050";
    }
}