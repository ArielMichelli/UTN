// =============================================================================== //
// Ejercicios Optativos JavaScript 6
// 1. Agregar una restricción en el campo “Nombre” y “Apellido” para que sea
// obligatorio completarlos.

//agregado campos required

// 2. Agregar una restricción en el campo “Comentario” para que no permita escribir
// más de 50 caracteres.

//agregado maxlength = "50"

// 3. Deshabilitar los campos del turno

// Agregado campo disabled

// 4. Hacer un evento, que al hacer click en el checkbox de JQuery se agregue la clase
// “fondo” en el label de JQuery.
function agregarFondo() {
    let label = document.getElementById("JQuery");
    let check = document.getElementById("check")
    if (check.checked == true) {
        label.classList.add('fondo')
    }else{
        label.classList.remove('fondo')
    }
}

// 5. Hacer otro evento, en donde al pasar el mouse por el campo de email, nos
// muestre por consola el email que coloco el usuario.
function informar(){
    let valor = document.getElementById("email").value;
    if(valor !== ""){
        console.log(valor);
        alert(`El mail ingresado es: ${valor}`);
    }
    
}