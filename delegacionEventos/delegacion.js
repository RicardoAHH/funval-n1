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


let numeros = [[4, 6, 7], [3, 2], [3, 4, 6, 2]]

numeros.forEach((item) => {
    console.log(item)
    item.forEach((x) => {
        console.log(x);
    });
});