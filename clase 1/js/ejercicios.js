// ejercicio 1)

// const nombre = String(window.prompt("ingrese su nombre:"));
// const apellido = String(window.prompt("ingrese su apellido:"));
// const edad = String(window.prompt("ingrese su edad:"));
// console.log(`Se llama: ${nombre}- Se apellida: ${apellido} y tiene ${edad} años`);

// ejercicio 2)

// const nombre = String(window.prompt("Ingrese usuario"));
// const pass = String(window.prompt("Ingrese contraseña"));
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
// const pesos = Number(window.prompt("Ingrese un monto en pesos"));
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

// const num = Number(window.prompt("Ingrese un numero"));
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

// const n1 = Number(window.prompt("Ingrese un primer numero"));
// const n2 = Number(window.prompt("Ingrese un segundo numero"));
// const n3 = Number(window.prompt("Ingrese un tercer numero"));
// const n4 = Number(window.prompt("Ingrese un cuarto numero"));
// const n5 = Number(window.prompt("Ingrese un quinto numero"));

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

// const usuario  = String(window.prompt("Ingrese usuario"));
// const password = String(window.prompt("Ingrese password"));

// validar(usuario,password);

// function validar(usuario,password){
//     if(usuario==user && password == pass){
//         const rol = String(window.prompt("Ingrese rol, Administrador o Cliente"));
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