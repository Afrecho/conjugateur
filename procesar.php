<?php

// **Detalles de Conexión a la Base de Datos **
$servername = "localhost";
$username = "id20925312_factor";
$password = "U*4rL@b9&zP2";
$dbname = "id20925312_forovilla";

// **Establecer Conexión a la Base de Datos**
$conn = new mysqli($servername, $username, $password, $dbname);

// **Comprobar Errores de Conexión**
if ($conn->connect_error) {
 die("Conexión fallida: " . $conn->connect_error);
}

// **Obtener Datos del Formulario (reemplaza con nombres reales)**
$verbo = $_POST['leverbe']; // Coincide con 'leverbe' del formulario
$presente = mysqli_real_escape_string($conn, nl2br($_POST['present'])); // Coincide con 'present' del formulario
$compuesto = mysqli_real_escape_string($conn, nl2br($_POST['passeCompose'])); // Coincide con 'passeCompose' del formulario
$futuro = mysqli_real_escape_string($conn, nl2br($_POST['futur'])); // Coincide con 'futur' del formulario
$imperfecto = mysqli_real_escape_string($conn, nl2br($_POST['imparfaite'])); // Coincide con 'imparfaite' del formulario

// **Preparar Consulta SQL (sin nl2br para 'le_verbe')**
$sql = "INSERT INTO verbes (le_verve, present, passe_compose, futur, imparfaite)
VALUES ('$verbo', '$presente', '$compuesto', '$futuro', '$imperfecto')";

// **Ejecutar Consulta y Manejar Resultado**
if ($conn->query($sql) === TRUE) {
 echo "¡Conjugación guardada exitosamente!";
} else {
 echo "Error al guardar la conjugación: " . $conn->error;
}

// **Cerrar Conexión a la Base de Datos**
$conn->close();

?>
