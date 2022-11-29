// 1. Crear una variable con una nota ( que puede valer del 1 al 10) y por medio de un if/else
// devuelva:
// ”Sobresaliente” si es entre 9 y10,
// “Notable” si es 8
// “Bien” si el valor es 7,
// ”Suficiente” si es 6 ,
// ”Insuficiente” si es entre 1 y 5.

function comoFue(x) {
    if (x >= 9 && x <= 10) { return "Sobresaliente"; }
    else if (x == 8) { return "Notable"; }
    else if (x == 7) { return "Bien"; }
    else if (x == 6) { return "Suficiente"; }
    else if (x <= 5) { return "Insuficiente" }
    else { return "La nota tiene que ser un numero entre el 1 y el 10" };
}

// let nota = prompt("Ingrese una nota del 1 al 10");
// console.log(comoFue(nota));

// =============================================================================== //
// 2. Elige tu aventura!
// • Solicitar por medio de un prompt que elija entre entre dos opciones “1- comenzar” o
// “2- Salir”.
// • Si elige la opción 1 que elija por medio de un prompt entre “1- Abrir la puerta A” o
// “2-Abrir la puerta B”, Sí elige la opción 2 mostrarle con un alert “Adiós!”
// • Si elige la puerta A se va a encontrar con un tigre, por lo que va a tener que elegir
// entre “1-Darle un pedazo de carne” o “2- Cerrar la puerta e irse corriendo”
// • Si elige la opción 1 mostrarle un alert que diga “Felicitaciones!! El león se corre y
// encontramos el tesoro”.Si eligió la opción 2 devolverle un alert de “Adiós!!”
// • Si eligió la puerta B devolverle un alert que diga “OH! Camino sin salida =(“

function aventura() {
    let eleccion1 = parseInt(prompt("¿Realmente quiere comenzar este juego?\n 1- Comenzar\n 2- Salir"));
    if (eleccion1 == 1) {
        console.log("Usted esta comenzando el juego");
        let eleccion2 = prompt("Hay 2 puertas adelante de usted, que hara?\n 1- Abrir la puerta A\n 2- Abrir la puerta B");
        if (eleccion2 == 1) {
            console.log("Usted eligio la puerta A");
            let eleccion3 = prompt("Usted se acaba de encontrar con un leon, que hacemos? \n 1- Darle un pedazo de carne \n 2- Cerrar la puerta e irse corriendo");
            if (eleccion3 == 1) {
                console.log("Usted a ganado el juego!!");
                alert("Felicitaciones!! El leon se corre y encontramos el tesoro");
            } else {
                alert("Adiós!!");
            }
        } else {
            console.log("Usted eligio la puerta B");
            alert("OH! Camino sin salida :(");
        }
    } else {
        alert("Usted decidio abandonar el juego antes de empezar :(")
    }
}

// =============================================================================== //
// 3. Entrada a un bar - sector VIP:
// a. Pedirle la edad al usuario
// b. Si tiene más de 18 años, pedirle la clave
// c. Si la clave es correcta, dejarlo pasar al sector vip
// d. Si la clave es incorrecta no puede pasar al sector vip
// e. Si tiene menos de 18 años no puede pasar.

// let edad = parseInt(prompt("Ingrese su edad buen hombre:"));
// let clave = "123";

function entradaAlBar(edad) {
    if (edad > 18) {
        let claveSolicitada = prompt("Ingrese la clave secreta:");
        if (clave == claveSolicitada) {
            console.log("Puede pasar al sector VIP... esta genial!!!")
        } else {
            console.log("La clave ingresada es incorrecta... no puede pasar al sector VIP, una lastima");
        }
    } else {
        console.log("Es una persona muy joven como para pasar al sector VIP....");
    }
}
// entradaAlBar(edad)

// =============================================================================== //
// 4. Combinando un poco de conceptos
// Mostrar en el navegador (puede ser en <p>) los números del 1 al 100.
// Reemplazar los números múltiples de 2 por la palabra “Harry”
// Reemplazar los números múltiples de 3 por la palabra “Potter
// Si el múltiplo de 2 y de 3 también, reemplazar al numero por “Voldemort”
// Se permite googlear como saber si algo es múltiplo de algo , igualmente en la siguiente unidad abarcaremos algunas cuestiones matemáticas.

function hacedorDeP() {

    let contenedor = document.getElementById("contenedorDeP");
    console.log(contenedor)
    for (let i = 1; i <= 100; i++) {

        let texto = document.createElement("p")
        console.log(texto)

        if ((i % 2 == 0) && (i % 3 == 0)) {
            texto.textContent = "Voldemort"
        } else if (i % 2 == 0) {
            texto.textContent = "Harry"
        } else if (i % 3 == 0) {
            texto.textContent = "Potter"
        } else {
            texto.textContent = i;
        }

        contenedor.appendChild(texto);
    }

}

// =============================================================================== //
// 5. Calculadora de años bisiestos
// Crear un programa que dado un año ingresado por medio de un prompt, nos diga con un
// alert si el año es bisiesto o no.
// Tener en cuenta que para que un año sea bisiesto debe cumplir con las siguientes pautas:
// - Ser divisible por 4
// - No ser divisible por 100 o ser divisible por 400

// let anio = parseInt(prompt("Ingrese un año..."));

function esAnioBisiesto(anio) {
    if ((anio % 4 == 0) && (anio % 100 != 0) || (anio % 400 == 0)) {
        alert(`El anio ingresado: ${anio} es bisiesto`);
    } else {
        alert(`El anio ingresado: ${anio} NO es bisiesto`);
    }
}
// esAnioBisiesto(anio);

// =============================================================================== //
// 6. Hacer un programa que pregunte al usuario(por medio de un prompt) si está o no registrado en el sitio , y el precio total de su compra.Con estos datos el programa debe calcular el precio total a pagar por el usuario teniendo en cuenta las siguientes ofertas:
// Si esta registrado
// - $10 gratis a partir de los $200
// - 10% de descuento a partir de los $400
// - $150 gratis a partir de los $1100
// Si no esta registrado
// - $10 gratis a partir de los $1100

let usuariosRegistrados = ["pepe", "juan", "martin", "gusanito", "meloncha"];

function montoAPagar(usuario, monto) {
    // let usuario = prompt("Ingrese su usuario:")
    // let monto = prompt("Ingrese su monto de compra:")

    if (usuariosRegistrados.includes(usuario)) {
        if (monto > 1100) {
            return (monto - 150);
        } else if (monto > 400) {
            monto = monto * 0.9;
            return (monto);
        } else if (monto > 200) {
            return (monto - 10);
        }
        console.log(`El usuario: ${usuario} esta registrado!`);
    }
    else {
        if (monto > 1100) {
            return (monto - 10)
        }
        console.log(`El usuario: ${usuario} NO se encuentra registrado y el monto a pagar es: ${monto}`);
    }
}