<?php
require_once "../config/database.php";
header("Content-Type: application/json");

$stmt = $conn->prepare("
    SELECT 
        u.id_usuario,
        u.nombre,
        IFNULL(SUM(r.latas + r.carton + r.botellas + r.vidrio), 0) AS total_reciclado
    FROM usuario u
    LEFT JOIN Reciclaje r ON u.id_usuario = r.id_usuario
    GROUP BY u.id_usuario, u.nombre
    ORDER BY total_reciclado DESC
");

$stmt->execute();
$ranking = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($ranking);
?>