<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

if (isset($_POST['name'])) {
  if (!empty($_POST['name'])){
  $name = strip_tags($_POST['name']);
  $name = urlencode($name);
  $nameFieldset = "Имя: ";
  $nameFieldset = urlencode($nameFieldset);
  } 
} else {
  $name = '';
  $nameFieldset = '';
}
  
if (isset($_POST['phone'])) {
  if (!empty($_POST['phone'])){
  $phone = strip_tags($_POST['phone']);
  $phone = urlencode($phone);
  $phoneFieldset = "Телефон: ";
  $phoneFieldset = urlencode($phoneFieldset);
  } 
} else {
  $phone = '';
  $phoneFieldset = '';
}

if (isset($_POST['message'])) {
  if (!empty($_POST['message'])){
  $message = strip_tags($_POST['message']);
  $message = urlencode($message);
  $messageFieldset = "Сообщение: ";
  $messageFieldset = urlencode($messageFieldset);
  }
} else {
  $message = '';
  $messageFieldset = '';
}

$txt = '';
$messageFieldset = "Сообщение: ";
$token = "1320509063:AAEbaP5lavnYscvkBMDkGDCSJTBOjRtwZbw";
$chat_id = "-449128489";
$arr = array(
  $nameFieldset => $name,
  $phoneFieldset => $phone,
  $messageFieldset => $message,
);
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$request = "https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}";


$sendToTelegram = fopen($request,"r");
if ($sendToTelegram) {
  echo '<p class="success">Спасибо за отправку вашего сообщения!</p>';
    return true;
} else {
  echo '<p class="fail"><b>Ошибка. Сообщение не отправлено!</b></p>';
}
} else {
header ("Location: /");
}
 
?>
