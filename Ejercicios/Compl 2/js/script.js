// =============================================================================== //
// 1. Dado la siguiente lista de personas hacer una funcion que muestre por consola el nombre de las personas Argentinas que tienen edad para votar junto con el mensaje "puede votar". Ejemplo en consola "Juanita puede votar"

let personas = [
    {
        nombre: "Juan",
        apellido: "Perez",
        nacionalidad: "Argentina",
        edad: 30
    },
    {
        nombre: "Matias",
        apellido: "Rodriguez",
        nacionalidad: "Argentina",
        edad: 15
    },
    {
        nombre: "Laura",
        apellido: "Allende",
        nacionalidad: "Chilena",
        edad: 20
    },
    {
        nombre: "Ana",
        apellido: "Gomez",
        nacionalidad: "Argentina",
        edad: 16
    },
    {
        nombre: "Carmela",
        apellido: "Riocco",
        nacionalidad: "Italiana",
        edad: 14
    },
    {
        nombre: "Pedro",
        apellido: "Paredes",
        nacionalidad: "Argentina",
        edad: 60
    }
];

function argentinas(lista) {
    let listaArgenta = [];
    for (persona of lista) {
        if (persona.nacionalidad == "Argentina") {
            listaArgenta.push(persona);
        }
    }
    return listaArgenta;
}

function argentoYMayor(lista) {
    let listaArgenta = [];
    listaArgenta = lista.filter(persona => persona.nacionalidad == "Argentina" && persona.edad > 18);
    for (let pers of listaArgenta) {
        console.log(`${pers.nombre} puede votar...`);
    }
}

// =============================================================================== //
// 2. Hacer una funcion donde cada vez que se haga click en el boton "comprar" cambie el valor del circulo rojo del changuito en una unidad y que muestre por consola el total a pagar. Es decir que si hacemos 3 veces click nos devuelva que debe pagar $3000
// let contador = 0;
// let valor = parseInt(document.getElementById("valor").textContent);
// let circulo = document.getElementById("circulo").textContent;
let contador = 0;
let total = 0;

function comprar() {
    let valor = parseInt(document.getElementById("valor").textContent);
    contador ++;
    total = contador * valor;
    document.getElementById("unidades").textContent =  contador;
    document.getElementById("circulo").textContent = total;
}