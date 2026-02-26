<?php
session_start();
require_once "../config/database.php";
header("Content-Type: application/json");

$id_usuario = $_SESSION["id_usuario"];

$stmt = $conn->prepare("
    SELECT 
        IFNULL(SUM(botellas),0) as plastico,
        IFNULL(SUM(carton),0) as papel,
        IFNULL(SUM(vidrio),0) as vidrio,
        IFNULL(SUM(latas),0) as metal
    FROM Reciclaje
    WHERE id_usuario = ?
");

$stmt->execute([$id_usuario]);
$datos = $stmt->fetch(PDO::FETCH_ASSOC);

echo json_encode($datos);