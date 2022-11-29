// =============================================================================== //
// Ejercicios Optativos JavaScript 5
// 1. Dado el siguiente objeto , usando los conceptos vistos sobre objetos, agregar las propiedades “precio” y “stock” con algunos valores

let remera = {
    categoria: "indumentaria",
    color: "rojo"
}
function agregandoPrecioYStock(prenda) {
    prenda.precio = 300;
    prenda.stock = 10;
    return prenda;
}

// =============================================================================== //
// 2. Modificar con los conceptos aprendidos la cantidad de stock a 4.
function modificarStockACuatro(prenda) {
    prenda.stock = 4
    return prenda;
}

// =============================================================================== //
// 3. Crear un evento en JavaScript que tome un titulo y que cuando se le pase con el mouse por encima , el titulo cambie el tamaño de fuente y su color.

let titulo = document.getElementById("titulo")
function modificarTitulo() {
    titulo.style.color = "red";
    titulo.style.fontSize = "2.5rem";
}
function restablecerTitulo() {
    titulo.style.color = "black";
    titulo.style.fontSize = "2rem";
}

// =============================================================================== //
// 4. Crear un HTML que tenga 3 etiquetas <button> que digan “Hacer Click!”.
// a. Desde JavaScript programar que cuando se haga click en cada boton devuelva por
// consola “Hiciste click”
function clickeame() {
    console.log("Hiciste click atrevido");
    // boton.style.backgroundColor ="red";
}

// b. Ahora hacer que al hacer click en el boton cambie el color de fondo.(Cuidado!! Solamente el boton que estoy clickeando , no todos los botones).

let botones = document.querySelectorAll(".boton");

function clickFeliz() {
    console.log("Hiciste click en el:  ", this.innerText);
    this.style.backgroundColor = "blue";
}
botones.forEach(boton => {
    boton.addEventListener("click", clickFeliz);
    boton.addEventListener("click", funcionFeliz);
});

// c. Hacer un contador en JavaScript que cuente las veces que se clickea cada boton.
let contador1 = 0;
let contador2 = 0;
let contador3 = 0;
function funcionFeliz() {
    if (this.innerText == "Boton 1") {
        contador1++;
    } else if (this.innerText == "Boton 2") {
        contador2++;
    } else if (this.innerText == "Boton 3") {
        contador3++;
    }
    document.getElementById("cont1").innerText = contador1;
    document.getElementById("cont2").innerText = contador2;
    document.getElementById("cont3").innerText = contador3;

    console.log(contador1, contador2, contador3);
}

