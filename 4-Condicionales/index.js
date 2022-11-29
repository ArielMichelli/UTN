// let edadUsers = 16;

// let edadUsuario = document.querySelector(".edad");
// console.log(edadUsuario)

// edadUsuario >= 18 ? console.log("Puede comrpar entrada") : console.log("Requiere de la supervision de un mayor de edad");

// function comprarEntrada() {
//     console.log("Puede comprar entrada");
//acciones para comprar la entrada
// }

//Estructura condicional if/else

// if (edadUsers >= 18) {
//     comprarEntrada();
// } else {
//     console.log("Requiere de la supervision de un adulto");
// }

// let edad = Number(prompt("ingrese su edad:"));

// let usuarioRegistrado = "pepe";
// let passRegistrada = "123";
// //1) ver si esta registrada la persona:
// //2) ver si administrador para darle acceso total
// let usuario = prompt("Ingerse un usuario:");
// let pass = prompt("Ingrese su contraseña");

// if (usuario === usuarioRegistrado && pass === passRegistrada) {
//     let isAdmin = prompt("Indique si es administrador: si o no");
//     if (isAdmin === "si") {
//         // let parrafo = document.createElement('p');
//         // let texto = document.createTextNode("Tiene muchos accesos por boton");
//         // parrafo.appendChild(texto)
//         // document.querySelector(".contenedor").appendChild(texto);
//         alert("Tiene acceso a muchas cosas por ser admin");

//     } else {
//         alert("Su acceso es limitado por pichon");
//     }
// } else {
//     alert("Usuario o contraseña incorrectas... media pila");
// }
/// SWITCH ==> evaluador de multiples condiciones:

// let estacion = prompt("Ingrese una estacion mother fk")
let estacion = "verano"
switch (estacion) {
    case "verano":
        document.querySelector("body").style.backgroundColor = "yellow";
        break;
    case "invierno":
        document.querySelector("body").style.backgroundColor = "blue";
        break;
    case "otoño":
        document.querySelector("body").style.backgroundColor = "chocolate";
        break;
    case "primavera":
        document.querySelector("body").style.backgroundColor = "pink";
        break;
    default:
        alert("Rata ingresa una estacion valida")
        break;
}

// OBJETOS ==> para mejorar el mal uso de listas..


// el precio es una propiedad del objeto ropa ==> por ende no tiene sentido utilizar una lista
// objeto remera1:
let remera = {
    tipoRopa: "remera",
    talles: ["s", "m", "l", "xx", "xxl"],
    stock: 20,
    precio: 1000,
    descuento: true
}
let pantalon = {
    tipoRopa: "pantalon",
    talles: ["s", "m", "l", "xx", "xxl"],
    stock: 20,
    precio: 3000,
    descuento: true
}
let buzo = {
    tipoRopa: "buzo",
    talles: ["s", "m", "l", "xx", "xxl"],
    stock: 20,
    precio: 5000,
    descuento: stock > 5 ? true : false
}
// let listaProductos2 = [remera, "remera", 1000, "pantalon", 2000, "buzo", 4000];
let listaProductos = [remera, buzo, pantalon];
console.log(remera)
console.log(listaProductos)

function totalAPagar(lista) {
    let total = 0
    for (let item of lista) {
        total += item.precio;
    }
    return total;
}
function cambiarPrecios(precio, lista) {
    for (let item of lista) {
        item.precio = precio;
    }
    return lista;
}
console.log(totalAPagar(listaProductos));
console.log(cambiarPrecios(5000, listaProductos));

// Eliminar propiedad del objeto:
delete(pantalon.marca);