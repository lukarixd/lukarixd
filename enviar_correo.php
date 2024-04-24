<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $correo_destino = "macayzamora1234@gmail.com";
    $asunto = "Tres cosas malas";
    
    $mensaje = "Las tres cosas malas que escribiste son:\n";
    $mensaje .= "1. " . $_POST["badThing1"] . "\n";
    $mensaje .= "2. " . $_POST["badThing2"] . "\n";
    $mensaje .= "3. " . $_POST["badThing3"];
    
    $cabeceras = "From: webmaster@example.com";
    
    // Enviar el correo electrónico
    mail($correo_destino, $asunto, $mensaje, $cabeceras);
    
    // Redireccionar de vuelta a la página anterior
    header("Location: {$_SERVER['HTTP_REFERER']}?enviado=true");
    exit();
}
?>
