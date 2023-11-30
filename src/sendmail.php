<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('en', 'phpmailer/language/');
	$mail->IsHTML(true);

	//От кого письмо
	$mail->setFrom('o.paslavskyi@globahub.ch', 'Globahub solutions website');
	//Кому отправить
	$mail->addAddress('o.paslavskyi@globahub.ch');
	//Тема письма
	$mail->Subject = 'Globahub solutions website';


	//Тело письма
	$body = '<h1>The user filled out the form!</h1>';
	
  if(trim(!empty($_POST['first-name']))){
    $body.='<p><strong>First name:</strong> '.$_POST['first-name'].'</p>';
  }
  if(trim(!empty($_POST['last-name']))){
    $body.='<p><strong>Last name:</strong> '.$_POST['last-name'].'</p>';
  }
	if(trim(!empty($_POST['email']))){
		$body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
	}
	if(trim(!empty($_POST['company']))){
		$body.='<p><strong>Company:</strong> '.$_POST['company'].'</p>';
	}
	if(trim(!empty($_POST['area-of-responsibility']))){
		$body.='<p><strong>Area of responsibility:</strong> '.$_POST['area-of-responsibility'].'</p>';
	}
  if(trim(!empty($_POST['phone-number']))){
		$body.='<p><strong>Phone number:</strong> '.$_POST['phone-number'].'</p>';
	}
	if(trim(!empty($_POST['message']))){
		$body.='<p><strong>Message:</strong> '.$_POST['message'].'</p>';
	}

	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		$message = 'Error';
	} else {
		$message = 'Data sent!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>