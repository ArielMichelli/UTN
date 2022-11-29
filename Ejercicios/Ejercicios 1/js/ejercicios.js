// ejercicio 1)

// const nombre = String( prompt("ingrese su nombre:"));
// const apellido = String( prompt("ingrese su apellido:"));
// const edad = String( prompt("ingrese su edad:"));
// console.log(`Se llama: ${nombre}- Se apellida: ${apellido} y tiene ${edad} años`);

// ejercicio 2)

// const nombre = String( prompt("Ingrese usuario"));
// const pass = String( prompt("Ingrese contraseña"));
// function validar(){
//     if(nombre == "Marta" && pass == "1234"){
//         alert("Puede ingresar al sitio")
//     }
//     else{
//         alert("Los datos ingresados son incorrectos")
//     }
// }
// validar();

// ejercicio 3)

// const dolar = 170;
// const pesos = Number(prompt("Ingrese un monto en pesos"));
// function convertir_a_dolar(pesos){
//     if(pesos > 0){
//         return pesos / dolar;
//     }
//     else{
//         alert("Ingrese un monto superior a 0 $")
//     }
// }
// console.log(convertir_a_dolar(pesos));

// ejercicio 4)

// const num = Number(prompt("Ingrese un numero"));
// function par_o_impar(num){
//     if(esPar(num)){
//         alert(`El numero ${num} es PAR`)
//     }
//     else{
//         alert(`El numero ${num} es IMPAR`)
//     }
// }
// function esPar(num){
//     return (num % 2) == 0
// }
// console.log(par_o_impar(num));

// 5. Armar una funcion que tome cinco números ingresados por medio de un prompt y
//    devuelva el promedio de dichos números.

// const n1 = Number(prompt("Ingrese un primer numero"));
// const n2 = Number(prompt("Ingrese un segundo numero"));
// const n3 = Number(prompt("Ingrese un tercer numero"));
// const n4 = Number(prompt("Ingrese un cuarto numero"));
// const n5 = Number(prompt("Ingrese un quinto numero"));

// function promedio_de_5_numeros(n1,n2,n3,n4,n5){
//     return (n1+n2+n3+n4+n5) / 5 ;
// }

// console.log(promedio_de_5_numeros(n1,n2,n3,n4,n5));

// 6. Dado un usuario y contraseña verificar si son correctos a los registrados(los
//    registrados son los que ustedes inventen en estos casos), en caso que sean correctos
//    consultarte si es administrador o cliente, en caso que sea administrador devolver por
//    consola “tiene acceso a todos campos” si es cliente devolver por consola “tiene acceso
//    limitado”.

// var user = "pepe";
// var pass = "123"

// const usuario  = String(prompt("Ingrese usuario"));
// const password = String(prompt("Ingrese password"));

// validar(usuario,password);

// function validar(usuario,password){
//     if(usuario==user && password == pass){
//         const rol = String(prompt("Ingrese rol, Administrador o Cliente"));
//         switch(rol){
//             case "Administrador":
//                 console.log("Tiene acceso a todos los campos");
//                 break;
//             case "Cliente":
//                 console.log("Tiene acceso limitado.");
//                 break;
//         }
//     }else{
//         alert("Usuario y/o Contraseña incorrectos");
//     }
// }

// ============================ SEGUNDA UNIDAD(Listas y bucles)======================//

// Ejercicios Optativos JavaScript 2

// 1. Marcelo esta armando la lista para el super. Crear un bucle para que Marcelo pueda ingresar
// los productos que necesite y muestre por consola la lista completa.

// var lista_compra = []

// function feliz() {

//     let producto
//     // let producto = prompt("Ingrese producto, para terminar con la lista ingrese fin");
//     // lista_compra.push(producto);
//     // console.log(producto);
//     // console.log(lista_compra);
//     if (producto !== "fin") {
//         while (producto !== "fin") {
//             producto = prompt("Ingrese producto, para terminar con la lista ingrese fin");
//             lista_compra.push(producto);
//         }
//     }
//     console.log(lista_compra);

// }

// feliz()

// 2. Crear un array de colores( que en tenga entre otros colores el color “azul”), y por medio de un
// bucle hacer que saque el color azul.Mostrar el resultado del array en consola.

// var colores = ["amarillo","verdoso","cochino","azul","verde","magenta","aqua","negro"];

// console.log(colores);

// const lista_sin_azul = colores.filter(color => color !=="azul")
// console.log(lista_sin_azul);

// //con bucle:

// function sacar_azul(list){
//     let lista_sin_color_azul = [];
//     for(color of list){
//         if(color !== "azul"){
//             lista_sin_color_azul.push(color);
//         }
//     }
//     console.log(lista_sin_color_azul)
// }
// sacar_azul(colores);

// 3. Dada la siguiente lista:
// a. Agregar a “canario” al final de la lista .
// b. Mostrar por consola el primer valor de la lista .
// c. Mostrar por consola el largo de la lista actual.
// d. Contestar la pregunta: ¿Qué indice tiene el ultimo valor de la lista ?

// var mascotas = ["perro","gato","peces"];

// 4. Armar una lista de 5 nombres e imprimirlo por consola uno por uno usando un bucle.

// var nombres = ["Damian","Ariel","Pepe","Romina","Lara","Coco"];

// function muestra_nombres(list){
//     for(nombre of list){
//         console.log(`Esta persona se llama: ${nombre}`)
//     }
// }
// muestra_nombres(nombres);

// 5. Dada la siguiente lista, hacer con un bucle que recorra todos los valores y devuelva la suma total

var numeros = [2, 3, 45, 100, 50];
var numeros2 = [22, 23, 345, 4100, 550, 200, 10, 24, 22, 2500, 4003, 9999];

function sumatoria(list) {
    let contador = 0;
    for (elemento of list) {
        contador += elemento
    }
    // return contador;
    console.log(`La sumatoria total es: ${contador}`)
}
function sumatoria2(list) {
    let contador = 0;
    for (let i = 0; list.length > i; i++) {
        if (i + 1 == list.length ) {
            break;

        } else {
            contador += list[i];
            console.log(`El contador acumulo: ${contador }`);

        }
    }
    // return contador;
    console.log(`La sumatoria total es: ${contador}`)
}
sumatoria(numeros);
sumatoria(numeros2);

// 6. Dada la siguiente lista:
// a. Contestar la pregunta: ¿Cuál es el indice donde esta Wally?
// b. Crear una funcion que recorra la lista y muestre por consola el indice de cada nombre.
// c. Crear una segunda funcion que recorra la lista y que me muestre por consola solamente el indice donde se encuentra ubicado Wally.
// var nombres = ["Juan","Pedro","Ana","Maria","Wally","Sofia"];

// function feliz(list){
//     for(let i; list.length >= i; i++){
//         console.log(`Se llama: ${list[i]}`);
//     }
// }
// function feliz2(list){
//     for(i of list){
//         console.log(`Se llama: ${list[i]}`);
//     }
// }
// feliz2(nombres);
// console.log(nombres);

// let centro = { nombre: "feo", tamaño: "chico", poblado: "demasiado" };

// function arreglar(ciudad) {
//     ciudad.nombre = "hermosa"
//     ciudad.tamaño = "grandioza"
//     ciudad.poblado = "fueron asesinados"
//     return "Ciudad Arreglada....";
// }

// let flanCasero = { ingredientes: ["huevos", "leche", "azúcar", "vainilla"], tiempoDeCoccion: 50 }

// let cheesecake = { ingredientes: ["frambuesas", "queso crema"], tiempoDeCoccion: 80 }

// let lemonPie = { ingredientes: ["jugo de limón", "almidón de maíz", "leche", "huevos"], tiempoDeCoccion: 65 }

// function masDificilDeCocinar(postre1, postre2) {
//     if (postre1.ingredientes.length > postre2.ingredientes.length) {
//         return postre1;
//     } else {
//         return postre2;
//     }
// }
// let postres = [flanCasero, cheesecake, lemonPie]

// function agregarAPostresRapidos(lista, postre) {
//     if (postre.tiempoDeCoccion < 60) {
//         postres.push(postre);
//     } else {
//         return "El tiempo de coccion es demasiado largo man"
//     }
// }

// function gananciaTotal(balancesDeUnPeriodo) {
//     let sumatoria = 0;
//     for (let balance of balancesDeUnPeriodo) {
//         sumatoria += balance.ganancia;
//     }
//     return sumatoria;
// }
// function cantidadDeBalancesPositivos(balances) {
//     let cantidad = 0
//     for (let balance of balances) {
//         if (balance.ganancia > 0) {
//             cantidad += 1;
//         }
//     }
//     return cantidad;
// }

// function ganancias(lista) {
//     let ganancia = [];
//     for (let balance of lista) {
//         ganancia.push(balance.ganancia)
//     }
//     return ganancia;
// }
// function balancesPositivos(lista) {
//     let ganancia = [];
//     for (let balance of lista) {
//         if (balance.ganancia > 0) {
//             ganancia.push(balance.ganancia)
//         }
//     }
//     return ganancia;
// }
// function minimaGananciaPositiva(balances){
//     return Math.min.apply(Math,balancesPositivos(balances));
// }

// function meses(lista){
//     let mes = []
//     for(let cosa of lista){
//         mes.push(cosa.mes);
//     }
//     return mes;
// }
// function afortunados(lista){
//     let buenasGanacias = []
//     for(let cosa of lista){
//         if(cosa.ganancia > 1000){
//             buenasGanacias.push(cosa)
//         }
//     }
//     return buenasGanacias;
// }
// function mesesAfortunados(lista){
//     let mesesFelices = []
//     for(let cosa of lista){
//         if(cosa.ganancia > 1000){
//             mesesFelices.push(cosa.mes)
//         }
//     }
//     return mesesFelices;
// }

// var nombres = ["Wally", "Juan", "Pedro", "Ana", "Maria", "Wally", "Sofia", "Agustin", "Coco", "Amanda", "Wally", "Damian", "Juancho"];

// function muestra_nombres(lista) {
//     for (let persona of lista) {
//         let i = 0;
//         console.log(`La persona se llama: ${persona} y su inicial es: ${persona[i]}`);

//     }
// }
// function muestra_nombres2(lista) {
//     for (let i = 0; lista.length > i; i++) {
//         console.log(`${lista[i]}[${i}]`);
//     }
// }
// function indice_de(persona) {
//     return nombres.indexOf(persona);
// }
// function contador_apariciones(persona, lista) {
//     let cantidad = []
//     for (let i = 0; lista.length > i; i++) {
//         if (lista[i] === persona) {
//             cantidad.push(i);
//         }
//     }
//     return cantidad;
// }
// function donde_esta_wally(nombre, lista) {
//     return contador_apariciones(nombre, lista);
// }
// function cabeza(lista) {
//     return lista[0];
// }
// function cola(lista) {
//     return lista[lista.length - 1];
// }

// EJERCICIO 5 guia 1
let i = 0;
var numeros = [];
while(i<5){
    let num = Number(prompt("Ingrese un numero entero: "));
    numeros.push(num);
    i+=1;
}
function sumador(lista){
    let suma = 0;
    for(item of lista){
        suma += item;
    }
    return suma;
}

function promedio(lista){
    return (sumador(lista))/(lista.length);
}

