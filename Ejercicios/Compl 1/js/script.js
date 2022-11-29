// 1. Dado el siguiente array de paises, crear en el html un input con un boton que pida al usuario
// que ingrese nombre de países.
// Luego, en un archivo JavaScript, armar una funcion que se fije si el país ingresado se encuentra
// en la lista y en caso que se encuentre, devolver un alert que diga “Pais ya registrado, se elimina
// del registro” y sacarlo de la lista; caso contrario devolver un alert que indique “Pais registrado” y
// agregar dicho país a la lista.


let paises = ["Argentina", "ARABIA-LPQTP", "Peru", "Bolivia", "Italia", "Australia"]

// console.log(paises);

// let paisIngresado = document.getElementById("pais_ingresado");
// console.log(paisIngresado);

// let boton = document.getElementById("enviar");
// boton.addEventListener("click", () => {
//     let input = document.getElementById("pais_ingresado");
//     let valor = input.value;
//     console.log(`El pais ingresado es: ${valor}`);
// })

let paisIngresado;

const valor_ingresado = () => {
    paisIngresado = document.getElementById("pais").value;
    document.getElementById("valueInput").innerHTML = paisIngresado;
    feliz(paisIngresado);
}

// let paisNuevo = prompt("Ingrese un pais:");

function feliz(pais) {
    if (paises.includes(pais)) {
        alert(`El pais: ${pais} ya se encuentra registrado en nuestra BD y lo vamos a eliminar`);
        paises = paises.filter((item) => item !== pais);
        console.log(paises);
    }
    else {
        alert(`El pais: ${pais} fue agregado con exito a la BD`)
        paises.push(pais);
        console.log(paises);
    }
}

//=====================================================================================/
// 2. Dado el siguiente objeto pantalones, crear una funcion que indique cada vez que un boton en
// el HTML se clickee, saque 1 unidad del stock del objeto .
let pantalones = {
    categoria: "indumentaria",
    color: "azul",
    material: "jean",
    precio: 5000,
    stock: 40
}
let monto_total_en_pantalones = 0;

function comprar_pantalon() {
    if (pantalones.stock > 0) {
        pantalones.stock -= 1;
        monto_total_en_pantalones += pantalones.precio;
        document.getElementById("stock_pantalones").innerHTML = pantalones.stock;
        document.getElementById("monto_en_pantalones").innerHTML = monto_total_en_pantalones;
        console.log(pantalones, monto_total_en_pantalones)
    } else {
        alert("No queda stock disponible en los Pantalones")
    }
}

//=====================================================================================/
// 3. Crear en un HTML un titulo con una clase(el nombre de la clase, el que quieran) y dos
// párrafos( dónde solo uno tenga un id de nombre a elección).
// a. Desde JavaScript llamar al titulo por su clase y cambiar el color de tipografía
// b. Desde JavaScript llamar a todos los párrafos y cambiarle el tamaño de fuente.
// c. Desde JavaScript llamar al párrafo del id y cambiar la el peso de la fuente (ejemplo de regular a bold).

function cambiarColor(a) {
    a.style.color = "red";
}

let parrafos = document.querySelectorAll("p")
let parrafoPesado = document.querySelector("#parrafo1");

parrafoPesado.style.fontWeight = "bold";

parrafos.forEach(item => {
    item.style.fontSize = "1.4rem";
    item.style.color = "orange";
})

console.log(parrafos)

//=====================================================================================/
// 4. Dado los siguientes objetos:
// a. Armar un array que contenga todos estos objetos
// b. Crear un boton en HTML por cada producto
// c. Programar una funcion donde al hacer click en cualquier producto reduzca en 1 unidad el stock de dicho producto y lo sume a una lista de compra la cual muestre en el navegador.
// d. Agregar a dicha funcion que si el stock de alguno de los productos es 0 ( es decir stock=0) salte una alerta que indique “Nos quedamos sin stock de este producto”

let pantalon = {
    categoria: "indumentaria",
    color: "azul",
    stock: 15
}
let campera = {
    categoria: "indumentaria",
    color: "verde",
    stock: 5
}
let zapatilla = {
    categoria: "indumentaria",
    color: "negro",
    stock: 20
}
let ropa = [pantalon, campera, zapatilla];
let lista_compras = [];

function comprarRopa(ropa) {
    switch (true) {
        case ropa.value == "pantalon":
            if(pantalon.stock > 0){
            pantalon.stock -= 1;
            console.log(pantalon.stock);
            lista_compras.push(ropa.value);
        } else{ alert(`No tengo mas stock de: ${ropa.value}`)};
            break;

        case ropa.value == "campera":
            if(campera.stock > 0){
            campera.stock -= 1;
            console.log(campera.stock)
            lista_compras.push(ropa.value);
            }else{ alert(`No tengo mas stock de: ${ropa.value}`)};
            break;

        case ropa.value == "zapatilla":
            if(zapatilla.stock > 0){
            zapatilla.stock -= 1;
            console.log(zapatilla.stock)
            lista_compras.push(ropa.value);
            } else{ alert(`No tengo mas stock de: ${ropa.value}`)};
            break;

        default:
            break;
    }

}

function mostrarCarrito(){
    document.querySelector(".lista_compras").innerHTML = "[" + lista_compras + "]";
    console.log(lista_compras);
}