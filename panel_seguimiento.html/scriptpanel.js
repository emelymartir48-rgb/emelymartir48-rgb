const formulario = document.getElementById("formularioTareas");
const listaTareas = document.getElementById("listaTareas");
const mensaje = document.getElementById("mensaje");
const contador = document.getElementById("contador");
const botonLimpiar = document.getElementById("limpiar");

let totalTareas = 0;

// EVENTO DEL FORMULARIO
formulario.addEventListener("submit", function(e){

    e.preventDefault();

    // CAPTURAR DATOS
    let tarea = document.getElementById("tarea").value;
    let responsable = document.getElementById("responsable").value;
    let prioridad = document.getElementById("prioridad").value;
    let estado = document.getElementById("estado").value;
    let fecha = document.getElementById("fecha").value;

    // VALIDACIÓN
    if(
        tarea === "" ||
        responsable === "" ||
        prioridad === "" ||
        estado === "" ||
        fecha === ""
    ){
        mensaje.textContent = "Por favor complete todos los campos";
        mensaje.style.color = "red";
        return;
    }

    // CREAR FILA
    let fila = document.createElement("tr");

    // COLOR SEGÚN PRIORIDAD
    if(prioridad === "Alta"){
        fila.style.backgroundColor = "#ffb3b3";
    }
    else if(prioridad === "Media"){
        fila.style.backgroundColor = "#fff0b3";
    }
    else{
        fila.style.backgroundColor = "#b3ffcc";
    }

    // AGREGAR DATOS A LA TABLA
    fila.innerHTML = `
        <td>${tarea}</td>
        <td>${responsable}</td>
        <td>${prioridad}</td>
        <td>${estado}</td>
        <td>${fecha}</td>
    `;

    // MOSTRAR EN TABLA
    listaTareas.appendChild(fila);

    // MENSAJE
    mensaje.textContent = "Tarea agregada correctamente";
    mensaje.style.color = "green";

    // CONTADOR
    totalTareas++;
    contador.textContent = totalTareas;

    // LIMPIAR FORMULARIO
    formulario.reset();

});

// BOTÓN LIMPIAR TABLA
botonLimpiar.addEventListener("click", function(){

    listaTareas.innerHTML = "";

    totalTareas = 0;
    contador.textContent = totalTareas;

    mensaje.textContent = "Tabla limpiada correctamente";
    mensaje.style.color = "blue";

});