<?php
require_once "../config/database.php";
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

$nombre = $data["nombre"];
$correo = $data["correo"];
$usuario = $data["usuario"];
$password = password_hash($data["password"], PASSWORD_DEFAULT);

$stmt = $conn->prepare("INSERT INTO Profesor (nombre, correo, usuario, password) VALUES (?, ?, ?, ?)");

try {
    $stmt->execute([$nombre, $correo, $usuario, $password]);
    echo json_encode(["status" => "success"]);
} catch (PDOException $e) {
    echo json_encode(["status" => "error", "message" => "Usuario o correo ya existe"]);
}
?>