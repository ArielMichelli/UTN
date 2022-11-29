let origen = 10, destino = 80, salto = 30, acumulador = 0;
// let y = 80
// let d = 30;

// function saltitos(origen,destino,salto){
//     return parseInt(destino / (salto + origen ));
// }

function saltoDeRana1() {
    acumulador = origen;
    let contador = 0;
    while (destino > acumulador) {
        acumulador += salto;
        contador++;
    }
    return contador;
}
const saltoDeRana2 = (origen, destino, distanciaSalto) => {
    return parseInt((destino - origen) / distanciaSalto + 1)
}


function norma(parametro) {

}
const flecha = (parametros) => {

}
// ejemplo de funcion flecha:
const sumar = (num1, num2) => {
    let total;
    total = num1 + num2;
    console.log(total);
    return (total);
}

/* ============= EJERCICIO 2 =============*/
let productosElegidos = [];

const sumarProductos = (producto) =>{
    productosElegidos.push(producto);
}

productosElegidos.push(productos.filter(prod => prod.nombre == producto));