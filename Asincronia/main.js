


//CALLBACKS

// function pedirHelado(tipoHelado, callback) {
//     let numerodeCaracteres = tipoHelado.length;
//     console.log(numerodeCaracteres);
//     callback();
// }

// function helado() {
//     console.log("Esta sabroso");
// }

// pedirHelado("Helado de chocolate", helado)

// let nombres = ["kevin", "juan", "pedro"]

// let item = (nombre) => {
//     console.log(nombre);
// };

// nombres.forEach(item);

// console.log("sacamos los fideos de la bolsa");
// setTimeout(() => {
//     console.log("el agua esta lista");
// }, 15000);
// console.log("preparar la mesa");
// console.log("lavando los platos");

// console.log("Llevar a las niñas al colegio");
// setTimeout(() => {
//     console.log("Las niñas ya salieron, ir a recogerlas al colegio")
// }, 15000);
// setTimeout(() => {
//     console.log("Tomar clase de programación")
// }, 3000);
// setTimeout(() => {
//     console.log("Tomar clase de inglés")
// }, 6000);
// setTimeout(() => {
//     console.log("Preparar el desayuno")
// }, 9000);
// setTimeout(() => {
//     console.log("El desayuno esta listo, a comer")
// }, 10000);

// function despertar(callback) {
//     console.log("Despertando...");
//     setTimeout(() => {
//       console.log("Me desperté");
//       callback();
//     }, 2000);
//   }
//   function desayunar(callback) {
//     console.log("Preparando desayuno...");
//     setTimeout(() => {
//       console.log("Desayuné");
//       callback();
//     }, 2500);
//   }
//   function irAlColegio() {
//     console.log("Caminando al colegio...");
//     setTimeout(() => {
//       console.log("Llegué al colegio");
//     }, 2000);
//   }
//   // Llamada en orden
//   despertar(() => {
//     desayunar(() => {
//       irAlColegio();
//     });
//   });

// setTimeout(() => {
//     let estudiantes = [
//         {
//             nombre: "kevin",
//             edad: 28,
//         },
//     ]
// }, 1);

// let supernombre = estudiantes[0].nombre;
// console.log(supernombre);

// let traerDatos = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve([
//             {
//                 nombre: "kevin",
//                 edad: 28,
//             },
//             {
//                 nombre: "juan",
//                 edad: 23,
//             },
//             {
//                 nombre: "pedro",
//                 edad: 25,
//             },
//         ]);
//     }, 5000); //5 seg de retraso
// });

// traerDatos.then((item) => {
//     console.log("Datos recibidos");
//     console.log(item);
//     let objetos = item;
//     objetos.forEach((element) => {
//         console.log(element.nombre);
//     });
// })

// function laPromesa() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let peliculasLlegaron = true
//             if (peliculasLlegaron) {
//                 resolve([
//                     { nombre: "terminator", año: 2019 },
//                     { nombre: "rocky", año: 2019 },
//                     { nombre: "shrek", año: 2019 },
//                     { nombre: "mi pobre angelito", año: 2019 },
//                 ]);
//             } else {
//                 reject("Las pelis no llegaron")
//             }
//         }, 3000)
//     })
// }

// laPromesa().then((item) => {
//     item.forEach((element) => {
//         console.log(element);
//     });
// })
//     .catch((error) => {
//         console.log(error);
//     })

// function Pizzas() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let lasPizzasLlegaron = true
//             if (lasPizzasLlegaron) {
//                 resolve([
//                     { nombre: "Peperoni", tamaño: "grande" },
//                     { nombre: "Hawaiana", tamaño: "grande" },
//                     { nombre: "Italiana", tamaño: "mediana" },
//                     { nombre: "Mexicana", tamaño: "mediana" },

//                 ]);
//             } else {
//                 reject("Las pizzas no llegaron")
//             }
//         }, 3000)
//     })
// }

// Pizzas().then((item) => {
//     console.log("Las pizzas si llegaron y son de: ")
//     item.forEach((element) => {

//         console.log(element);
//     });
// })
//     .catch((error) => {
//         console.log(error);
//     })

// let superpromesa = new Promise((resolve, reject) => {
//     let ellaTeespero = true
//     if (ellaTeespero) {
//         resolve("ella si te espero hermanito");
//     } else {
//         reject("ella no te espero bro");
//     }
// });

// superpromesa.then((mensaje) => {
//     console.log(mensaje);
// }).catch((error) => {
//     console.log(error);
// })


// function obtenerUsuarios() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const exito = false;
//             if (exito) {
//                 resolve([
//                     { nombre: "Juan", edad: 25 },
//                     { nombre: "María", edad: 30 },
//                     { nombre: "Pedro", edad: 17 },
//                 ]);
//             } else {
//                 reject("No se pudieron obtener los usuarios");
//             }
//         }, 1500);
//     });
// }
//muestren solo los nombres de las personas mayores a 18 años

// obtenerUsuarios().then((item) => {
//     let mayores = item.filter((mayor) => mayor.edad >= 18);
//     mayores.forEach(element => {
//         console.log(element.nombre);
//     });
// })
//     .catch((error) => {
//         console.log(error);
//     })

// function obtenerProductos() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const exito = true;
//             if (exito) {
//                 resolve([
//                     { nombre: "Laptop", precio: 1200, stock: 5 },
//                     { nombre: "Celular", precio: 800, stock: 0 },
//                     { nombre: "Monitor", precio: 300, stock: 3 },
//                     { nombre: "Teclado", precio: 50, stock: 10 },
//                 ]);
//             } else {
//                 reject("Error al obtener los productos del servidor.");
//             }
//         }, 2000);
//     });
// }

//Filtrar los productos que tienen stock mayor que 0.
//Mostrar el nombre y el precio de esos productos.

// obtenerProductos().then((producto) => {
//     let enInventario = producto.filter((existencia) => existencia.stock > 0)
//     enInventario.forEach(element => {
//         console.log(`${element.nombre} tiene un precio de ${element.precio}`)
//     });
// })

//ASYNC
// async function hola() {
//     return "hola amigos";
// }

// hola().then((mensaje) => {
//     console.log(mensaje);
// })


//AWAIT fetchData es para poder usar await dentro de una async 

// async function fetchData() {
//     try {
//         let information = await obtenerProductos()
//         console.log(information)

//     } catch (error) {
//         console.log(error)
//     }

// }

// fetchData();

/*get mostra datos o leer
post recopilar datos e informacion y agregarla a la base de datos
put actualizar datos e informacion y agrgarla a la base de datos
delete eliminar datos de la base de datos 
CRUD
cretate
Read
Update
Delete
*/

// let libros = [
//     {
//         titulo: "harry potter",
//         año: 2002,
//         autor: "JK ROWLING",
//     },
//     {
//         titulo: "jesus el cristo",
//         año: 1987,
//         autor: "Talmage James",
//     },
//     {
//         titulo: "la arrogancia fatal",
//         año: 1988,
//         autor: "Federick Haiek",
//     },
// ];
// function fetchLibros() {
//     return new Promise((resolve, reject) => {
//         let cumplio = true;
//         if (cumplio) {
//             setTimeout(() => {
//                 resolve(libros);
//             }, 1000);
//         } else {
//             reject("los libros no pudieron ser extraidos ");
//         }
//     });
// }

// async function fetchData() {
//     try {
//         let libros = await fetchLibros()
//         let recientes = libros.filter((libro) => libro.año > 2000)
//         let autores = recientes.forEach(element => {
//             console.log(element.autor)
//         });
//     } catch (error) {
//         console.log(error)
//     };
// };
// fetchData()

// async function obtenLibro() {
//     try {
//         let libro = await fetchLibros();
//         let autores = libro.filter((item) => item.año > 2000)
//             ;
//         autores.forEach((element) => {
//             console.log(element.autor);
//         })
//     } catch (error) {
//         console.log(error)
//     };
// }

// obtenLibro()

const usuarios = [
    {
        id: 1,
        nombre: "Ana",
        edad: 28,
        librosFavoritos: ["1984", "Cien años de soledad"],
        historialCompras: [
            {
                fecha: "2024-02-12",
                libros: ["1984", "Rebelión en la granja"],
            },
            {
                fecha: "2025-01-01",
                libros: ["Cien años de soledad"],
            },
        ],
    },
    {
        id: 2,
        nombre: "Luis",
        edad: 34,
        librosFavoritos: ["La naranja mecánica"],
        historialCompras: [
            {
                fecha: "2023-12-10",
                libros: ["La naranja mecánica", "El extranjero"],
            },
        ],
    },
    {
        id: 3,
        nombre: "Carla",
        edad: 21,
        librosFavoritos: [],
        historialCompras: [],
    },
];
function fetchUsuarios() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(usuarios);
        }, 1000);
    });
}
let suma = 0
async function clienteFrecuente() {
    try {
        let clientes = await fetchUsuarios()
        //filtrar usuarios que tengan historial de compras 
        let frecuentes = clientes.filter((usuario) => usuario.historialCompras.length >= 1)

        //filtrar a los que llevan mas de un libro 
        let superfrecuentes = frecuentes.filter((cliente) => cliente.historialCompras[0].libros.length > 1 || cliente.historialCompras.length > 1)
        console.log(superfrecuentes)

        superfrecuentes.forEach((element) => {
            element.historialCompras.forEach((item) => {
                suma += item.libros.length
            });

            console.log(`el usuario de nombre ${element.nombre} a comprado ${suma} cantidad de libros`)
            suma = 0
        })
    } catch (error) {
        console.log(error)
    }
}
clienteFrecuente()
/* Mostrar a los usuarios que tengan mas de una compra y mostrar la cantidad de libros comprados por ese usuario
*/