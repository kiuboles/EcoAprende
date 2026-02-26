<?php
require_once "../config/database.php";
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

$nombre = $data["nombre_grupo"];
$codigo = $data["codigo_grupo"];
$id_profesor = $data["id_profesor"];

$stmt = $conn->prepare("INSERT INTO Grupo (nombre_grupo, codigo_grupo, id_profesor) VALUES (?, ?, ?)");

try {
    $stmt->execute([$nombre, $codigo, $id_profesor]);
    echo json_encode(["status" => "success"]);
} catch (PDOException $e) {
    echo json_encode(["status" => "error", "message" => "Código ya existe"]);
}
?>