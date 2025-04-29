// // 1. Array de objetos
// const frutas = [
//     { nombre: "Manzana", color: "Rojo", precio: 2 },
//     { nombre: "Banana", color: "Amarillo", precio: 1 },
//     { nombre: "Uva", color: "Morado", precio: 3 },
// ];

// // 2. Imprimir todas las frutas
// console.log("Lista de frutas:");
// frutas.forEach(fruta => {
//     console.log(`${fruta.nombre} - Color: ${fruta.color} - Precio: $${fruta.precio}`);
// });

// // 3. Buscar una fruta por nombre
// const buscarFruta = (nombre) => {
//     return frutas.find(fruta => fruta.nombre === nombre);
// };

// const frutaBuscada = buscarFruta("Banana");
// console.log("\nFruta encontrada:", frutaBuscada);

// // 4. Calcular el precio total de todas las frutas
// const precioTotal = frutas.reduce((total, fruta) => total + fruta.precio, 0);
// console.log("\nPrecio total de todas las frutas: $", precioTotal);

let personas = [{
    nombre: "Lucía",
    edad: 25,
    profesion: "Diseñadora",
    ciudad: "Buenos Aires"
},
{
    nombre: "Andrés",
    edad: 40,
    profesion: "Médico",
    ciudad: "Bogotá"
},

{
    nombre: "Valentina",
    edad: 29,
    profesion: "Programadora",
    ciudad: "Santiago"
},
{
    nombre: "Mateo",
    edad: 35,
    profesion: "Arquitecto",
    ciudad: "Lima"
},
{
    nombre: "Sofía",
    edad: 32,
    profesion: "Periodista",
    ciudad: "Quito"
}];

console.log(personas[3].nombre)

let lista = document.querySelector("#tabla1")

console.log(lista)

lista.innerHTML = `
<tr>
<th>Nombre</th>
<th>Edad</th>
<th>Profesion</th>
<th>Ciudad</th>
</tr>
    <tr><td>${personas[0].nombre}</td>
        <td>${personas[0].edad}</td>
        <td>${personas[0].profesion}</td>
        <td>${personas[0].ciudad}</td>
    </tr>
    `;



//     const contenido = document.getElementById('contenido');

//         personas.forEach(persona => {
//             let personaHTML = '<div>';

//             for (let propiedad in persona) {
//                 personaHTML += `<p><strong>${propiedad}:</strong> ${persona[propiedad]}</p>`;
//             }

//             personaHTML += '</div><hr>';
//             contenido.innerHTML += personaHTML;
//         });
//     </script>

// </body>
// </html>

console.log(5 + "5");
console.log(10 > 5 && 5 > 8);
console.log(10 == "10");