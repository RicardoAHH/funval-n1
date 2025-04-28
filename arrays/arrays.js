// let nombre = "Harold";
// let edad = 26;
// let frutas = ["fresa", "mango", "platano"];


// //arrays
// console.log(frutas);
// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);
// console.log(frutas[3]);
// frutas.push("Kiwi")
// console.log(frutas);
// console.log(frutas[3]);
// frutas.pop();
// console.log(frutas);
// console.log(frutas[3]);

// // objetos 
// let persona = {
//     nombre: "Diego",
//     edad: 27,
//     apellido: "Huarsaya",
//     gustos: ["Rock", "Comida", {
//         futbol: "soccer",
//         futbol2: "rapido",
//         futbol3: "siete",
//     },]
// }

// console.log(persona.edad);
// console.log(persona.nombre, persona.apellido);
// console.log(persona);

// persona.ciudad = "Arequipa"
// console.log(persona);

// console.log(persona.gustos[2].futbol2)

let personas = ["kevin", "Elias", "juan", "pedro", "diego"];

//metodos básicos

// console.log(personas);
// personas.push("alexis");
// personas.unshift("cristian", "ana");

// //metodos de eliminacion por elimina el ultimo

// console.log(personas);
// let ultimo = personas.pop(4);
// console.log(personas);
// console.log(ultimo);

// // eliminar al primero

// personas.shift();

// //metodos importantes 

// let cantidad = personas.length;
// // console.log(cantidad);

// let elemento = personas[2]
// console.log(elemento);

// for (let i = 0; i < cantidad; i++) {
//     console.log(personas[i]);
// }

// let notas = [100, 70, 40, 80];

// let resultado = 0;
// let cantidadExamenes = notas.length;
// for (let i = 0; i < notas.length; i++) {
//     resultado = resultado + notas[i];
// }

// console.log(resultado / cantidadExamenes);

// let numeros = [1, 2, 3, 4, 5];

// for (let i = 0; i < numeros.length; i++) {
//     numeros[i] = numeros[i] * 2
// }

// console.log(numeros)

// let supernumeros = [1, 2, 3, 4]
// let res = 1
// for (let i = 0; i < supernumeros.length; i++) {

//     for (let j = 1; j <= supernumeros[i]; j++) {
//         res = res * j
//     }


//     supernumeros[i] = res;
//     res = 1;
// }

// console.log(supernumeros)

// function factorial(numero) {
//     for (let i = 1; i <= numero; i++) {

//         res = res * i
//     }
//     return res
// }

// console.log(factorial(2));
// console.log(supernumeros)
// console.log(factorial(supernumeros[1]))

let matriz = [
    [1, 2, 3],
    [3, 4, 3],
    [2, 4, 5],
];

// let numero = matriz[1][1];
// console.log(numero)

// for (let index = 0; index < matriz.length; index++) {
//     for (let j = 0; j < matriz[index].length; j++) {
//         console.log(matriz[index][j]);
//     }

// }

//suma individual
console.log(matriz[0][0] + matriz[1][1] + matriz[2][2]);
//suma con un for
let resultado = 0
for (let index = 0; index < matriz.length; index++) {
    resultado = resultado + matriz[index][index]
}
console.log(resultado)

// for (let index = 0; index < matriz.length; index++) {
//     let resultado = 0
//     resultado = resultado + matriz[index][index]
//     console.log(resultado)
// }

// let numeros = [2, 4, 6, 8, 10]
// let nuevoArray = numeros.map(numeros => numeros * 3);

// console.log(nuevoArray)

// function mitad(numero) {
//     mitad = numero / 2
//     console.log(mitad)
// }

// let numeros = [2, 4, 8, 10]
// let nuevoArray = numeros.map(mitad(numeros));

// console.log(nuevoArray)


// let nuevoArray = numeros.map(function (x) {
//     return x / 2;
// })
// console.log(nuevoArray);

// let nuevoArray = numeros.filter((x) => x < 9)
// console.log(nuevoArray)
// let numeros = [3, 11, 15, 4, 2, 17, 8, 10, 22, 7];

// let nuevoArray = numeros.filter((x) => x % 2 === 0)
// console.log(nuevoArray);


// let numeros = [3, 11, 15, 4, 2, 17, 8, 10, 22, 7];

// let nuevonumero = numeros.find((cristian) => cristian > 5);
// console.log(nuevonumero);

// let colores = ["rojo", "verde", "azul", "amarillo"]
// let nuevoColor = colores.find((x) => colores.length < 4);
// console.log(nuevoColor);
// console.log(colores)
// let colores = ["rojo", "verde", "azul", "amarillo"]
// let ordenado = colores.sort((a, b) => (b, a))
// console.log(ordenado)

// let numeros = [3, 11, 15, 4, 2, 17, 8, 10, 22, 7];
// console.log(numeros);
// numeros.sort((a, b) => b - a)
// console.log(numeros)

// let valor = numeros.includes(11);
// console.log(valor);

// Llave:valor
let notaAp = 51
let nombreEstudiante

let estudiantes = [{
    nombre: "Elias",
    Edad: 18,
    nacionalidad: "Paraguay",
    notas: [50, 40, 30, 100],
}, {
    nombre: "Cristian",
    Edad: 20,
    nacionalidad: "Bolivia",
    notas: [60, 90, 80, 90],
}, {
    nombre: "Gino",
    Edad: 18,
    nacionalidad: "Chile",
    notas: [30, 20, 10, 10],
}, {
    nombre: "Luis",
    Edad: 18,
    nacionalidad: "Peru",
    notas: [50, 40, 30, 100],
}
]
console.log(estudiantes[1].notas.length)

for (let index = 0; index < estudiantes.length; index++) {
    nombreEstudiante = estudiantes[index].nombre;
    let suma = 0
    for (let j = 0; j < estudiantes[index].notas.length; j++) {
        suma = suma + estudiantes[index].notas[j];
    }
    if ((suma / estudiantes[index].notas.length) > 51) {
        console.log(nombreEstudiante, suma / estudiantes[index].notas.length);

    }

}

// objeto.Edad = 19;

// console.log(objeto);

// objeto.estadoCivil = "soltero";

// console.log(objeto);

// delete objeto.nacionalidad;

// console.log(objeto);

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];

// }

// let manzana = {
//     peso: 10,
//     precio: 20,
// };

// for (let key in manzana) {
//     console.log(manzana[key])
// }

// let palabras = ["hola", "mundo"]

// mayusculas = palabras.map((x) => x.toUpperCase())
// console.log(mayusculas)

// let objetos = [{
//     nombre: "Daniel",
//     edad: 24,
// }, {
//     nombre: "Miguel",
//     edad: 22,
// }, {
//     nombre: "Gustavo",
//     edad: 23,
// }, {
//     nombre: "Domingo",
//     edad: 20,
// }]

// console.log(objetos[0].edad)

// let edades = objetos.map((x) => "edad: " + x.edad)
// console.log(edades);

let obj2 = [{
    nombre: "Daniel",
    puntos: 74,
}, {
    nombre: "Miguel",
    puntos: 22,
}, {
    nombre: "Gustavo",
    puntos: 23,
}, {
    nombre: "Domingo",
    puntos: 80,
}]

console.log(obj2[0].puntos)

let aumento = obj2.map((x) => {
    let pts = x.puntos;
    if (x.puntos >= 50) { x.puntos = x.puntos + 10 }

    return {
        nombre: x.nombre,
        puntos: pts,
    };
}
);
console.log(aumento)
console.log(obj2);