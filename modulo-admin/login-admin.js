/* ===== CREAR ADMIN SI NO EXISTE ===== */
if(!localStorage.getItem("admin")){
    const admin = {
        usuario: "admin",
        password: "1234"
    };
    localStorage.setItem("admin", JSON.stringify(admin));
}

/* ===== LOGIN ===== */
function login(){
    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    const adminGuardado = JSON.parse(localStorage.getItem("admin"));

    if(usuario === adminGuardado.usuario && password === adminGuardado.password){
        
        localStorage.setItem("sesionAdmin", "activa");
        window.location.href = "controladorAdmin.html";

    } else {
        document.getElementById("mensaje").innerText = "Usuario o contraseña incorrectos";
    }
}