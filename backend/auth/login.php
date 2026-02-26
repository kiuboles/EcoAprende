<?php
session_start();
require_once "../config/database.php";


    $username = $_POST["username"];
    $password = $_POST["password"];

    $stmt = $conn->prepare("SELECT * FROM Usuario WHERE username = ?");
    $stmt->execute([$username]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if ($user && $password === $user["contrasenia"]) {

        $_SESSION["id_usuario"] = $user["id_usuario"];
        $_SESSION["nombre"] = $user["nombre"];
        $_SESSION["username"] = $user["username"];
        $_SESSION["id_grupo"] = $user["id_grupo"];
        $_SESSION["img"] = $user["img"];

        header("Location: ../../");
        exit;
    } else {

        header("Location: ../../?error=1");
        exit;
    }
?>
