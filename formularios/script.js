let inputNombre = document.querySelector("#nombre");

const mostrarInput = (event) => {
    event.preventDefault(); // Evita que se envie la informacion y nos permite a nosotros desdeel front poder tomarla. Sin necesidad de recurrer al Backend.
    let formulario = document.forms[0]
    console.dir(inputNombre.value);

    formulario.reset();
    alert("Hola!!" + formulario.elements[0].value);
};

// let pepe = document.forms

const mostrarInfoForm = () =>{
    let formulario = document.forms[0].elements;
    console.dir(formulario[0].value);
};