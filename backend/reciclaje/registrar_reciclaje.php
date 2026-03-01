<?php
require_once "../config/database.php";
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $id_usuario = $_SESSION["id_usuario"];
    $latas = $_POST["latas"] ?? 0;
    $carton = $_POST["carton"] ?? 0;
    $botellas = $_POST["botellas"] ?? 0;
    $vidrio = $_POST["vidrio"] ?? 0;

    $stmt = $conn->prepare("
        INSERT INTO Reciclaje (id_usuario, latas, carton, botellas, vidrio)
        VALUES (?, ?, ?, ?, ?)
    ");

    $stmt->execute([$id_usuario, $latas, $carton, $botellas, $vidrio]);

    header("Location: ../../");
    exit;
}
?>