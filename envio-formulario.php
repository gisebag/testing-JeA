<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = $_POST["Nombre_y_Apellido"];
  $email = $_POST["E-mail"];
  $telefono = $_POST["Teléfono"];
  $mensaje = $_POST["Mensaje"];
  
  $destinatario = "hola@jovenaccion.com";
  $asunto = "Nuevo mensaje jovenaccion.com";
  $cuerpo = "<html>
                <head>
                  <title>Nuevo mensaje jovenaccion.com</title>
                  <style>
                    body {
                      font-family: Arial, sans-serif;
                      color: #000;
                    }
                    h1 {
                      color: #02503E;
                      font-size: 24px;
                      font-weight: bold;
                    }
                    p {
                      margin-bottom: 10px;
                      font-size: 20px;
                    }
                    }
                  </style>
                </head>
                <body>
                  <h1>Información de contacto</h1>
                  <p><strong>Nombre y Apellido:</strong> $nombre</p>
                  <p><strong>E-mail:</strong> $email</p>
                  <p><strong>Teléfono:</strong> $telefono</p>
                  <p><strong>Mensaje:</strong></br>$mensaje</p>
                </body>
              </html>";

  // Cabeceras adicionales
  $headers = "From: Web JeA <u528719221@srv990.main-hosting.eu>" . "\r\n";
  $headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";

  // Enviar el correo
  $resultado = mail($destinatario, $asunto, $cuerpo, $headers);

  if ($resultado) {
    echo '<div style="background-color: #02503E; color: #000; padding: 10px; text-align: center; height: 100%; margin: 0px;">
    <p style="color: #FFF; font-size: 36px;></p>
    <p style="color: #FFF; font-size: 36px;>Gracias por completar el formulario.<br/>Nos pondremos en contacto contigo pronto.<br/><br/>Redirigiendo en 5 segundos...</p>
    </div>';
    header("refresh:5;url=https://jovenaccion.com/Contacto/contacto.html");
    exit();
  } else {
    echo '<div style="background-color: #02503E; color: #000; padding: 10px; text-align: center; height: 100%; margin: 0px;">
    <p style="color: #FFF; font-size: 36px;></p>
    <p style="color: #FFF; font-size: 36px;>Hubo un error al enviar el formulario.<br/>Por favor, intenta nuevamente.<br/><br/>Redirigiendo en 5 segundos...</p>
    </div>';
    header("refresh:5;url=https://jovenaccion.com/Contacto/contacto.html");
    exit();
  }
}
?>