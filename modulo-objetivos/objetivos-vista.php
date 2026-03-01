<?php
session_start();

if (!isset($_SESSION["id_usuario"])) {
    header("Location: ../../modulo-login/login-vista.php");
    exit;
}
?>
<!DOCTYPE html>
<h1>Objetivo del mes:</h1>
<h2>Insignia de <span id="nombreInsignia"></span></h2>
<div id="barraInsignia">
    <div class="progress" id="progress-container">
        <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
            id="progress-bar"></div>
    </div>
    <p id="porcentajeProgreso"></p>
</div>
<h2>Realiza:</h2>
<div id="objetivosList">
    <!-- Aquí se mostrarán los objetivos pendientes -->
</div>

<h2>Registrar Reciclaje</h2>

<form action="../backend/reciclaje/registrar_reciclaje.php" method="POST">

    <div id="campos">
        <div class="mb-3">
            <label class="form-label">Latas</label>
            <input type="number" name="latas" step="1" value="0"
                class="form-control form-control-lg" min="0">
        </div>

        <div class="mb-3">
            <label class="form-label">Cartón</label>
            <input type="number" name="carton" step="1" value="0"
                class="form-control form-control-lg" min="0">
        </div>

        <div class="mb-3">
            <label class="form-label">Botellas</label>
            <input type="number" name="botellas" step="1" value="0"
                class="form-control form-control-lg" min="0">
        </div>

        <div class="mb-4">
            <label class="form-label">Vidrio</label>
            <input type="number" name="vidrio" step="1" value="0"
                class="form-control form-control-lg" min="0">
        </div>
    </div>

    <div class="d-grid">
        <button type="submit" class="btn btn-success btn-lg rounded-3">
            Guardar Registro
        </button>
    </div>

</form>