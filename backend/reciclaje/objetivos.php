<?php
session_start();
require_once "../config/database.php";
header("Content-Type: application/json");

$id_usuario = $_SESSION["id_usuario"];

// Sumar reciclaje del usuario
$stmt = $conn->prepare("
    SELECT 
        IFNULL(SUM(latas),0) as latas,
        IFNULL(SUM(carton),0) as carton,
        IFNULL(SUM(botellas),0) as botellas,
        IFNULL(SUM(vidrio),0) as vidrio
    FROM reciclaje
    WHERE id_usuario = ?
");

$stmt->execute([$id_usuario]);
$datos = $stmt->fetch(PDO::FETCH_ASSOC);

// 🔥 mínimos requeridos (puedes cambiarlos)
$minimos = [
    "latas" => 10,
    "carton" => 10,
    "botellas" => 10,
    "vidrio" => 10
];

echo json_encode([
    "insignia" => "tortuga",
    "categorias" => $datos,
    "minimos" => $minimos
]);