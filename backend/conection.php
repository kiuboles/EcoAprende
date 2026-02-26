<?php

$servidor = "127.0.0.1";
$usuario = "root";
$password = "root";
$base_datos = "sistema_reciclaje";

// Crear la conexión
$conexion = mysqli_connect($servidor, $usuario, $password, $base_datos);

// Verificar la conexión
if (!$conexion) {
    die("Conexión fallida: " . mysqli_connect_error());
}
echo "Conexión exitosa";

// Cerrar conexión al terminar
mysqli_close($conexion);
?>