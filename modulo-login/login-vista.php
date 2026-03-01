<!DOCTYPE html>
<style>
    #form-login {
        background-color: var(--secondary);
        padding: 3vw;
        border-radius: 1vw;
    }

    #btnscs {
        background-color: var(--text-tertiary);
        color: var(--text-light);
    }
</style>

<h1>Inicia sesión</h1>
<br><br>
<form method="POST" action="backend/auth/login.php" id="form-login">

    <div class="mb-3">
        <label class="form-label"><h2>Usuario</h2></label>
        <input type="text" name="username" class="form-control" required>
    </div>

    <div class="mb-3">
        <label class="form-label"><h2>Contraseña</h2></label>
        <input type="password" name="password" class="form-control" required>
    </div>

    <div class="d-grid">
        <button type="submit" class="btn" id="btnscs">
            Entrar
        </button>
    </div>

</form>

</html>