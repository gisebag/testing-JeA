<?php

$nombre =  $_POST['name'];
$email =  $_POST['email'];
$colaborar =  $_POST['talk-type'];
$redes =  $_POST['redesSociales'];
$quehaces =  $_POST['queHaces'];
$colaborar =  $_POST['colaborar'];
$otro =  $_POST['otroComentario'];

$mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
$mensaje .= "su correo es " .$email . "\r\n";
$mensaje .= "Asunto " .$colaborar . "\r\n";
$mensaje .= "Redes sociales " .$redes . "\r\n";
$mensaje .= "que haces " .$quehaces . "\r\n";
$mensaje .= "Colaboraciones " .$colaborar . "\r\n";
$mensaje .= "otros " .$otro . "\r\n";
$mensaje .= "Enviado el " .date('d/m/Y',time());

$para = 'gisebag@gmail.com';
$asunto = 'Contacto sitio web';

//funcion mail (obligacion)
mail($para, $asunto, utf8_decode($mensaje), $header);

header('Location:exito.html')

?>