// 1. Utilizando las herramientas del DOM indicar por consola el numero de enlaces (<a>) que se
// encuentran en la pagina html.

let anclas = document.querySelectorAll("a");

console.log(`El numero de elementos <a> es: ${anclas.length}`);

// 2. Crear una etiqueta <img> y agregarla después del <h1>. La etiqueta tiene que tener el atributo "src”
// y tener vinculada una imagen.Tener en cuenta que todo esto se debe hacer utilizando las herramientas aprendidas del DOM

let contImagen = document.querySelector(".contenedor");

contImagen.innerHTML = `
    <img class="img_tarjeta" src="https://images.hola.com/imagenes/mascotas/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?tx=w_744" />;
`

// 3. Utilizando las herramientas del DOM agregar dentro del texto del <p> un salto de linea antes de la
// ultima oración.

let parrafin = document.querySelector("p");

parrafin.innerHTML = `
EL DOM(Document Objet Model, o en español  Modelo de Objetos de Documentos) es una interfaz entre JavaScript y HTML o XML(otro metalenguaje que no abordaremos en este curso). Nos permite acceder a sus partes y propiedades e ir interactuando con ellas.<br> Tenemos que tener en cuenta que cuando hablamos de propiedades de las partes el HTML estamos hablando de su CSS por lo que el DOM nos va a permitir modificiar el CSS tambien, por medio de HTML
`
// 4. Utilizando las herramientas del DOM hacer que el menú inicial cambie su estilo para que se vea de
// esta forma:

let navbar = document.querySelector("ul");
let listas = document.querySelectorAll("li");

navbar.classList.add("menu");
for (let elemento of listas) {
    elemento.style.listStyle = "none";
    elemento.style.backgroundColor = "white";
    elemento.style.borderRadius = "200px";
}

// 5. Utilizando el DOM cambiar el contenido del <h1> a "Introducción del DOM”

let titulo = document.querySelector("h1");

titulo.textContent = "Introducción del DOM";
// let titulo2 = document.getElementsByTagName("h1")[0];
// console.log(titulo2)

// 6. Integrando varios conceptos
// Dado el siguiente array mostrar, utilizando bucles ,en forma de lista en el Navegador los ítems del
// array; debajo del titulo "Algunos Metodos"
let metodos = ["createElement()", "appendChild()", "insertBefore()", "removeChild()", "replaceChild()",
    "removeAttribute()", "classList.add()", "classList.remove()", "classList.toggle()"]

//getElementsByClassName ==> retorna una lista:
let contenedor_6 = document.getElementsByClassName("ejercicio_6")[0]
let lista = document.querySelector(".lista_6")

contenedor_6.innerHTML = `
    <h2> Algunos Metodos </h2>
`
contenedor_6.appendChild(lista);

for (let elemento of metodos) {
    let item_lista = document.createElement("li");
    item_lista.textContent = elemento;
    lista.appendChild(item_lista); 
}
