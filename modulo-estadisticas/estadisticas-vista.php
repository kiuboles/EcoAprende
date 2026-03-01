<?php
session_start();

if (!isset($_SESSION["id_usuario"])) {
    header("Location: ../../modulo-login/login-vista.php");
    exit;
}
?>
<!DOCTYPE html>

<section class="stats-section">

    <div class="titulo-con-icono">
        <img src="modulo-estadisticas/img/logo.png" class="icono-titulo">
    </div>

    <div class="stats-cards">

        <div class="card">
            <div class="plastico">
                <img src="modulo-estadisticas/img/plastico.png" class="icono">
                <span class="kg">0</span>
            </div>
        </div>

        <div class="card">
            <div class="papel">
                <img src="modulo-estadisticas/img/papel.png" class="icono">
                <span class="kg">0</span>
            </div>
        </div>

        <div class="card">
            <div class="vidrio">
                <img src="modulo-estadisticas/img/vidrio.png" class="icono">
                <span class="kg">0</span>
            </div>
        </div>

        <div class="card">
            <div class="metal">
                <img src="modulo-estadisticas/img/metal.png" class="icono">
                <span class="kg">0</span>
            </div>
        </div>

</div>

</section>