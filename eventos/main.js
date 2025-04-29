// let titulo = document.getElementById("IDtitulo"); //extrae un elemento html que coincida con el iD
// let minititulo = document.getElementsByClassName("miniTitulo"); //estrae todos los elementos html con esa clase

// let supertitulo = document.querySelector("") //extrae el primer elmento que coincida con el titulo


// primer paso es seleccionar el elemento html al que queremos escuchar

// let boton = document.querySelector("#btn");

// let RICH = document.querySelector("#rich");

// RICH.addEventListener("click", function () {
//     RICH.textContent = "Hola mi nombre es TITULO"
// })

// boton.addEventListener("click", function () {
//     console.log("hiciste click");
// });

// contador = 0;
// boton.addEventListener("click", function () {
//     contador++;
//     RICH.textContent = contador;
// });

///la princesa fiona vive en una etiqueta es crerar un boton que pueda alternar entre el dia y la noche


// let Fiona = document.querySelector("#Princess")
// let Tipo = document.querySelector("#Tipo")
// console.log(Tipo)

// let esDIA = true;
// Fiona.addEventListener("click", function () {
//     esDIA = !esDIA
//     if (esDIA == true) {
//         Fiona.textContent = "DIA";
//         Tipo.textContent = "La princesa es humana";
//     } else {
//         Fiona.textContent = "NOCHE";
//         Tipo.textContent = "La princesa es un orco";
//     }

// });


// let parrafo = document.querySelector("#parrafo");

// function funcion(evento, pais) {
//     console.log(evento);
//     console.log(pais)
// }
// parrafo.addEventListener("click", function (evento) {
//     console.log(evento, "chile");
// });

// let formulario = document.querySelector("#form");

// formulario.addEventListener("submit", function (evento) {
//     evento.preventDefault();
//     let formdata1 = new FormData(formulario);
//     console.log(formdata1.get("nombre"));
//     if (formdata1.get("nombre") === "") {
//         alert("Nombre obligatorio");
//     }
//     if (formdata1.get("celular").length !== 8) {
//         alert("el numero de celular es incorrecto")
//     }
// });

///crear un formulario que reciba
// nombre de usuario
// edad validar que sea mayor de 18
//  pais de origen validar que sea chileno

// let formulario2 = document.querySelector("#form2");

// formulario2.addEventListener("submit", function (evento) {
//     evento.preventDefault();
//     let formdata2 = new FormData(formulario2);

//     if (formdata2.get("nombre") === "") {
//         alert("Nombre de usuario obligatorio");
//     }
//     if (formdata2.get("edad") < 18) {
//         alert("Edad insuficiente")
//     }
//     if (formdata2.get("pais") !== "chile") {
//         alert("No aplica a su país")
//     }
//     if (formdata2.get("edad") >= 18 && formdata2.get("pais") == "chile") {
//         console.log(formdata2.get("usuario"));
//         console.log(formdata2.get("edad"));
//         console.log(formdata2.get("pais"));
//         alert("Gracias sus datos han sido recopilados")
//     }

// });

/// verricar teclas con e.key o e.code

// let boton = document.querySelector("#boton2")

// boton.addEventListener("mouseover", function (evento) {
//     boton.style.backgroundColor = "gray";
// });
// boton.addEventListener("mouseout", function (evento) {
//     boton.style.backgroundColor = "";
// });

// let caja = document.querySelector("#caja");
// let coordenadas = document.querySelector("#cord");

// caja.addEventListener("mousemove", function (evento) {
//     console.log(evento);
//     coordenadas.textContent = "coordenadas= " + `${evento.screenX} , ${evento.clientY}`;
// });


///fiona en una etiqueta h2 al presionar el boton dia y noche
///fiona se transforma en ogro y tambien los estilos que la contengan 

let boton = document.querySelector("#Dia")
let fiona = document.querySelector("#Fiona")
let DIA = true;

boton.addEventListener("click", function (evento) {
    DIA = !DIA
    if (DIA == true) {
        boton.textContent = "Noche"
        fiona.textContent = "Fiona es un ogro"
        fiona.style.backgroundColor = "green"
    } else {
        boton.textContent = "Dia"
        fiona.textContent = "Fiona es una princesa"
        fiona.style.backgroundColor = "yellow"
    }
})

let megainput = document.querySelector("#inputCadena");
let cuenta = document.querySelector("#supercontador");

let contador = 0;
megainput.addEventListener("keyup", function (evento) {
    console.log(evento.target.value);
    contador = evento.target.value.length;
    cuenta.textContent = `CONTADOR : ${contador}`;
});

/*crear un input de flitrado 
vamos a tener un listado ul li
al ir metiendo un nombre deben desaparecer del listado las
peliculas que no comiencen con la letra 
keyup en tiempo real y comparar con los nombres 
dysplay none si no esta */


