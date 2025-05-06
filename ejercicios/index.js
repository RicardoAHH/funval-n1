// let n = 10;
// let par = 2;
// let cadena = "";
// for (let i = 0; i < n; i++) {
//     console.log(par);
//     par += 2;
// };

// los n terminos de la serie de los numeros primos 

// console.log(1 % 1)

// let numero = 2;

// let n = 100
// let j = 2;
// for (let j = 0; j < 4; numero++) {
//     let esPrimo = true;
//     for (let i = 2; i < numero; i++) {
//         if (numero % i === 0) {
//             esPrimo = false
//             break;
//         }

//     }
//     if (esPrimo) {
//         console.log(numero);
//         j++;
//     }
// }

/// generar la serie de  fibonacci 0,1,1,2,3,5,8

// num1 = 0;
// num2 = 1;
// num3 = 0;

// console.log(num1, num2, num3, num4)


// for (let i = 0; i < 100; i++) {
//     suma = num1 + num2 
//     num2 = num1 
//     num3 = num2
// }

// let n = 5;
// let a = 0;
// let b = 1;
// let c = 0;

// for (let i = 1; i <= 7; i++) {
//     if (i === 1) {
//         console.log(a);
//     } else {
//         if (i === 2) {
//             console.log(b);
//         }
//         else {
//             c = a + b;
//             a = b;
//             b = c;
//             console.log(c);
//         }
//     }
// }

// let estudiantes = [
//     {
//         nombre: "Cristian",
//         lenguajes: ["HTML", "CSS", "JS"],
//     },
//     {
//         nombre: "Milton",
//         lenguajes: ["HTML", "CSS", "JS", "python", "JAVA", "C++"],
//     },
//     {
//         nombre: "Ana",
//         lenguajes: ["C#", "JAVA", "PYTHON"],
//     },
// ];

// console.log(estudiantes[1].nombre)
// console.log(estudiantes[1].lenguajes)

// estudiantes.forEach(element => {
//     console.log(element.nombre + " conoce los lenguajes de: " + element.lenguajes)
// });

// let profesores = [
//     {
//         nombre: "kevin",
//         estudiantes: ["Gino", "ana", "cristian", "ricardo"],
//     },
//     {
//         nombre: "Diego",
//         estudiantes: ["milton", "kevin", "elias", "Luis"],
//     },
//     {
//         nombre: "Jorge",
//         estudiantes: ["tomas", "pedro"],
//     },
// ];


///programa que puede saber que profesor es el asignado a cada estudiante x


// let nombre = prompt("Escribe el nombre del estudiante: ")

// if (profesores[0].estudiantes.includes(nombre)) {
//     return console.log("El profesor asignado es" + profesores[0].nombre)
// }

// function profesor(est) {
//     for (let profesor of profesores) {
//         if (profesor.estudiantes.includes(est)) {
//             return profesor.nombre;
//         }
//     }
// }

// console.log(profesor("ricardo"));

/// map transforma todo

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let pares = numeros.map((numero) => {
//     if (numero % 2 === 0) {
//         return numero
//     }
// })

// console.log(pares)

/// filter hace lo de map pero filtra por condicion 

// let superpares = numeros.filter((numero) => { return numero % 2 === 0; })
// console.log(superpares)

///reduce un solo valor 

// let total = numeros.reduce((contador, numero) => contador + numero, 0);
// console.log(total);

// let resultado = numeros.find((numero) => numero > 5);
// console.log(resultado);



/* Obtener un array con solo los nombres 
filtrar a los mayores de edad 
encontrar a la primera persona mayor de 25 
calcular la edad total de todos*/

// const personas = [
//     { nombre: "Ana", edad: 20 },
//     { nombre: "Luis", edad: 25 },
//     { nombre: "Carlos", edad: 17 },
//     { nombre: "Marta", edad: 30 }
// ];

// let solonombres = personas.map((persona) => {
//     return persona.nombre
// })
// console.log(solonombres);

// let mayoresedad = personas.filter((persona) => persona.edad >= 18)
// console.log(mayoresedad);

// let mayor25 = personas.find((persona) => persona.edad > 25)
// console.log(mayor25)

// let edadtotal = personas.reduce((contador, persona) => contador + persona.edad, 0);
// console.log(edadtotal);

// localStorage.setItem("notas", "33")
// localStorage.clear()
// console.log(localStorage.getItem("nombre"))

// let persona = {
//     nombre: "kevin",
// };
// //agregar valores a localstorage 1 parametrso 1o key 20 valor 
// localStorage.setItem("persona", JSON.stringify(persona))
// //traer el valor asociado a la llave que se pasa con parametro 
// let obj = JSON.parse(localStorage.getItem("persona"));
// console.log(obj)

// //localStorage.removeItem() para borrar un item 

import { hola, saludo } from "./funciones.js";
console.log(hola(": Ricardo"));

console.log(saludo(": Ricardo"));