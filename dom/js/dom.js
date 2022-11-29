//DOM document

//tener acceso a los elementos ==> nodos
//Moldearlos: modificacion agregar otros elementos, cambiar su contenido, estilos, etc
//1) llamar al nodo del HTML -> metodos

let tituloPrincipal =document.getElementsByTagName("h1"); // me trae un arreglo.
let textos = document.getElementsByTagName("p");
console.log(textos)

let boton = document.getElementById("boton");

//id ==> via id devuelve solo el html
console.log(boton);

//retorna todo el elemento completo, necesario para su modificacion
console.dir(boton);

//class
//              [item1,item2,item3,item4....]
let tarjetas = document.getElementsByClassName("container"); //array
console.log(tarjetas);
// si quiero traer solo el primero :
// let tarjetas = document.getElementsByClassName("container")[1];
// puedo usar bucles para modificar por ejemplo todo el array ==> por ende a todas mis tarjetas



// forma mas nueva y facil de recordar:
//querySelector ==> selector
let tituloPrincipal2 = document.querySelector("h1");
let contenedores = document.querySelector(".container"); // ojo que querySelector devuelve solamente el primer elemento que encuentre
// si quiero traer todos ! QuerySelectorAll
let textos2 = document.querySelectorAll("p");

//si yo quiero traer una clase en particular ==> 

// agregando estilos a una clase:
let tarjetitas = document.querySelector(".tarjetita");
//para agregar add
tarjetitas.classList.add("verdoso");
//para remover remove
tarjetitas.classList.remove("verdoso");
// desaparece un elemento ==> creo una funcion

function desaparecer(elemento){
    elemento.style.display ="none";
}

let titulo = document.getElementById("titulazo");
titulo.style.color = "red";
titulo.style.backgroundColor="black";
titulo.style.textAlign="center";
titulo.style.fontSize= "3rem";