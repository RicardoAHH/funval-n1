// let nombres = ["kevin", "pedro", "juan", "cristian"];

// let listado = document.querySelector("#lista");

// listado.innerHTML = "";

// nombres.forEach((item) => {
//     listado.innerHTML += `<li>
//         ${item}
//         <button class="aprobado">X</button>
//     </li>`;
// });

// listado.addEventListener("click", function (hola) {
//     // console.log(evento.target) saber donde hace click 
//     console.log(hola.target);
//     if (hola.target.classList.contains("aprobado")) {
//         let itemListado = hola.target.closest("li");
//         console.log(itemListado);
//         // itemListado.classList = "";  asi se agregan clases 
//         itemListado.innerHTML = "ESTUDIANTE APROBADO";
//     }
// })


// let estudiantes = [
//     {
//         name: "Cristian",
//         cel: 77207634,
//         pais: "Bolivia",
//     },
//     {
//         name: "Tomas",
//         cel: 271236323,
//         pais: "Argentina",
//     },
//     {
//         name: "Gino",
//         cel: 3220762,
//         pais: "Chile",
//     },
//     {
//         name: "Ana",
//         cel: 98762235,
//         pais: "Argentina",
//     },
//     {
//         name: "Kevin",
//         cel: 86243207634,
//         pais: "Mexico",
//     },
//     {
//         name: "Milton",
//         cel: 89712350,
//         pais: "Uruguay",
//     },
//     {
//         name: "Ricardo",
//         cel: 123987523,
//         pais: "Mexico",
//     },
//     {
//         name: "Rodrigo",
//         cel: 77207634,
//         pais: "Narnia",
//     },
// ];

// let tabla = document.querySelector("#table");
// console.log(table)

// tabla.innerHTML = "";

// for (let i = 0; i < estudiantes.length; i++) {
//     tabla.innerHTML += `
//     <tr>
//     <td>${estudiantes[i].name}</td>
//     <td>${estudiantes[i].cel}</td>
//     <td>${estudiantes[i].pais}</td>
//     <td><button class="Eliminar">Eliminar</button></td>
// </tr>`
// };

// tabla.addEventListener("click", function (evento) {
//     console.log(evento.target);
//     if (evento.target.classList.contains("Eliminar")) {
//         let Eliminacion = evento.target.closest("tr");
//         console.log(Eliminacion)
//         Eliminacion.innerHTML = "";
//     }
// });

// arrai = [2, 3, 4, 5, 6]
// arrai.shift()
// arrai.shift()
// arrai.shift()
// arrai.shift()
// arrai.shift()
// arrai.unshift(7, 8, 9, 10, 11)
// console.log(arrai)

// forEach 

// let edades = [12, 34, 24, 64, 24, 2, 54]

// ///forEach

// let hola = edades.forEach((item) => {
//     console.log(item * 2)
// })
// console.log(edades)
// console.log(hola)
// ///map
// let nuevo = edades.map((item) => {
//     return item * 2;
// });
// console.log(nuevo)


// let numeros = [[4, 6, 7], [3, 2], [3, 4, 6, 2]]

// numeros.forEach((item) => {
//     console.log(item)
//     item.forEach((x) => {
//         console.log(x);
//     });
// });

//desestructuracion de array

// const edades = [12, 34, 24, 64, 24, 2, 54,]

// let [primero, segundo, tercero, cuarto, quinto, sexto, septimo, octavo = 0, noveno = 0] = edades;

// console.log(edades);
// console.log(primero);
// console.log(segundo);
// console.log(noveno);

// //desestructuracion de objetos 

// let persona = {
//     nombre: "Tomas",
//     edad: 20,
//     pais: "Argentina",
// };

// let { nombre: name, edad, pais, llave = "valor" } = persona; //caminar el nombre nombre:name   asiganr una llave y valor que aun no esta 

// console.log(name);
// console.log(edad);
// console.log(pais);
// console.log(llave);


// //propagacion de arrays

// let numeros = [1, 2, 3, 4, 5, 6, 7];
// let numeritos = [11, 22, 33, 44, 55, 66, 77];
// let resultado = [...numeros, 322, 77, ...numeritos]
// console.log(resultado)


// //propagacion de objetos 

// let estudiante = {
//     nombre: "kevin",
//     edad: 22,
// }

// let superestudiante = {
//     nombre: "ricardo",
//     pais: "mexico",
// };

// let fusion = { ...estudiante, ...superestudiante, llave: [2, 3, 4] };
// // si la llave es reptida se toma la llave del ultimo objeto 
// console.log(fusion)


/// No alterar el array principal
/// No usar ciclo for SI foreach map filter
/// No modificar los objetos del array usuarios 
/// todo debe star dentro una una funcion que reciba el array usuarios

/*Filtrar a los usuarios tipo admin 
a cada objeto agregarle una llave llamada correo nombre@gmail.com
mostrar del primer elmento las llaves correo y nombre usando desestructuracion de arrays y objetos
*/

const usuarios = [
    { id: 1, nombre: "Ana", roles: ["admin"] },
    { id: 2, nombre: "Gino", roles: ["user"] },
    { id: 3, nombre: "Cristian", roles: ["admin", "user"] },
];
console.log(usuarios)

let nuevoarray = usuarios.filter(usuarios => usuarios.roles.includes("admin"));
// let nuevoarray = usuarios.map((x) => {

//     if (x.roles.includes("admin")) {
//         return x 
//     }

// });

console.log(nuevoarray)

let [primero, segundo] = nuevoarray

console.log(primero)

// let filtrado = usuarios.roles.filter((x) => x === "admin")



// function filterItems(arr, query) {
//     return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
// }

// console.log(filterItems(usuarios.roles, "ad"));