<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = $_POST["Nombre_y_Apellido"];
  $email = $_POST["E-mail"];
  $telefono = $_POST["Teléfono"];
  $mensaje = $_POST["Mensaje"];
  
  $destinatario = "joa_carre21@hotmail.com";
  $asunto = "Nuevo mensaje jovenaccion.com";
  $cuerpo = "Nombre y Apellido: " . $nombre . "\n"
          . "E-mail: " . $email . "\n"
          . "Teléfono: " . $telefono . "\n"
          . "Mensaje: " . $mensaje;

  // Enviar el correo
  $resultado = mail($destinatario, $asunto, $cuerpo);

  if ($resultado) {
    echo "Gracias por completar el formulario. Nos pondremos en contacto contigo pronto.";
  } else {
    echo "Hubo un error al enviar el formulario. Por favor, intenta nuevamente.";
  }
}
?>