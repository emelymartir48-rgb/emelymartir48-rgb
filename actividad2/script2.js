function guardar() {

const usuario = document.getElementById("usuario").value.trim();
const correo = document.getElementById("correo").value.trim();
const asunto = document.getElementById("asunto").value.trim();
const mensaje = document.getElementById("mensaje").value.trim();

// Limpiar mensajes anteriores
document.getElementById("errorUsuario").textContent = "";
document.getElementById("errorCorreo").textContent = "";
document.getElementById("errorAsunto").textContent = "";
document.getElementById("errorMensaje").textContent = "";

const valido = true;

// Validaciones
if (usuario === "") {
    document.getElementById("errorUsuario").textContent =
    "Ingrese su nombre.";
    valido = false;
}

if (correo === "") {
    document.getElementById("errorCorreo").textContent =
    "Ingrese su correo.";
    valido = false;
}
else if (!correo.includes("@")) {
    document.getElementById("errorCorreo").textContent =
    "Correo inválido.";
    valido = false;
}

if (asunto === "") {
    document.getElementById("errorAsunto").textContent =
    "Ingrese un asunto.";
    valido = false;
}

if (mensaje === "") {
    document.getElementById("errorMensaje").textContent =
    "Ingrese un mensaje.";
    valido = false;
}

// Si todo está correcto
if (valido) {

    document.getElementById("resultado").innerHTML = `
        <h3>✅ Registro exitoso</h3>
        <p><strong>Usuario:</strong> ${usuario}</p>
        <p><strong>Correo:</strong> ${correo}</p>
        <p><strong>Asunto:</strong> ${asunto}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
    `;

    alert("Registro realizado correctamente.");

    // Limpiar formulario
    document.getElementById("formlogin").reset();
}

}