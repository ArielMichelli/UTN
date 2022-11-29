// datos numericos
1.29;
12;
// cadenas / string
// ("juan");
// "el pepe"
// ` 
// hola vo so loco vite
// apskfapksf
// `;
// datos booleanos
true;
false;

// dato indefinido => undefined
// NaN => dato no numerico que ironicamente es numerico.

// CLASE 2 ================================================

let nombre = "Julia";
let pepino = 222;

const numero = 312;
let esAdmin = true;
function sumar (num1,num2){
    let total;
    let pepino = 222; // variable local ==> de alcance solo dentro de la funcion
    total = num1 + num2;
    console.log(nombre);
    return total;
}
sumar()
console.log(pepino);

function name(params) {
}
let numero1 = 70;
let pepe = "pepe"
// Or o logico (||)
// AND y logico (&&)
console.log(numero1 > 50 && numero1 *5 >10);
console.log("pepe" === pepe || numero1<50);

//Operador ternario
//Condicion ? lo que se hace si cumple : lo que hace si no se cumple
// es tarde? me levanto : sigo durmiendo:

numero1 > 50 ? console.log("numero mayor a 50 !! wii!") : console.log("Numero menor a 50 :( ");

numero1 >50 && numero1 === 75? sumar(numero1) : console.log("Numero menor a 50 :( ");