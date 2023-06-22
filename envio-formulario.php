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
          . "Telefono: " . $telefono . "\n"
          . "Mensaje: " . $mensaje;

  // Enviar el correo
  $resultado = mail($destinatario, $asunto, $cuerpo);

  if ($resultado) {
    echo '<div style="background-color: #02503E; color: #000; padding: 10px; text-align: center;">
    <h4">Gracias por completar el formulario.</h4>
    <p>Nos pondremos en contacto contigo pronto.</p>
    <p>Redirigiendo en 3 segundos...</p>
  </div>';
    header("refresh:3;url=https://jovenaccion.com/Contacto/contacto.html");
    exit();
  } else {
    echo "Hubo un error al enviar el formulario. Por favor, intenta nuevamente. Serás redirigido en 3 segundos...";
    header("refresh:3;url=https://jovenaccion.com/Contacto/contacto.html");
    exit();
  }
}
?>