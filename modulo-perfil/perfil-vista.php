<?php
session_start();

if (!isset($_SESSION["id_usuario"])) {
    header("Location: ../../modulo-login/login-vista.php");
    exit;
}

$img = $_SESSION["img"];
$nombre = $_SESSION["nombre"];
$username = $_SESSION["username"];
?>

<!DOCTYPE html>
<div class="container py-5">
    <div class="row justify-content-center">
        <div class="col-md-6">

            <div class="card shadow-lg border-0 rounded-4 text-center">
                <div class="card-body p-5">

                    <h1 class="mb-4">Perfil de Usuario</h1>

                    <img src="../img/<?= $img ?>" 
                         alt="Perfil" 
                         class="rounded-circle shadow mb-4"
                         style="width:150px; height:150px; object-fit:cover;">

                    <h2 class="fw-bold"><?= htmlspecialchars($nombre) ?></h2>
                    <h3class="fw-bold">@<?= htmlspecialchars($username) ?></h3>

                    <hr class="my-4">

                    <a href="../backend/auth/close_session.php" 
                       class="btn btn-danger btn-lg rounded-3">
                        Cerrar sesión
                    </a>

                </div>
            </div>

        </div>
    </div>
</div>