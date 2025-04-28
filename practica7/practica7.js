const productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Silla Gamer", precio: 450 },
    { nombre: "Audífonos", precio: 80 },
    { nombre: "Webcam", precio: 60 },
    { nombre: "USB 128GB", precio: 30 },
    { nombre: "Impresora", precio: 200 },
    { nombre: "Tablet", precio: 500 }
];

// 1️⃣ Recorrer y mostrar productos (forEach)#
// 📢 Recorre el array de productos y muestra en la consola el nombre y el precio de cada uno.

productos.forEach((element) => console.log(element));

// 2️⃣ Crear un array de nombres de productos y verificar disponibilidad (map + includes)#
// ✅ Parte 1: Usa map para generar un array productosDisponibles que contenga solo los nombres de los productos a partir del array productos.
// 🔎 Parte 2: Luego, verifica si un producto buscado está disponible utilizando includes.


let productosDisponibles = productos.map((x) => x.nombre)
console.log(productosDisponibles)
console.log(productosDisponibles.includes("Teclado"))

// Aplicar un descuento a los productos (map)#
// 💰 Crea un nuevo array con los productos, aplicando un 10% de descuento a los precios.

let productosConDescuento = productos.map(x => {
    return {
        nombre: x.nombre,
        precio: x.precio * 0.9 // Aplica un 10% de descuento
    };
});
console.log(productosConDescuento);


// 4️⃣ Filtrar productos por precio (filter)#
// 🎯 Crea un array con los productos cuyo precio sea menor a $100.

let menosDe100 = productos.filter(x => x.precio < 100)
console.log(menosDe100)

// 5️⃣ Obtener los primeros productos (slice)#
// 📋 Muestra los primeros 2 productos de la lista.

let dosPrimeros = productos.slice(0, 2)
console.log(dosPrimeros)

// 6️⃣ Ordenar productos por precio (sort)#
// 📌 Instrucción: Investiga cómo funciona el método sort en JavaScript y úsalo para ordenar los productos de menor a mayor precio.

let ordenados = productos.sort((a, b) => a.precio - b.precio)
console.log(ordenados);

// 7️⃣ Invertir el orden de los productos (reverse)#
// 🔄 Instrucción: Investiga cómo funciona el método reverse en JavaScript y utilízalo para mostrar los productos en orden inverso.

const productos2 = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Silla Gamer", precio: 450 },
    { nombre: "Audífonos", precio: 80 },
    { nombre: "Webcam", precio: 60 },
    { nombre: "USB 128GB", precio: 30 },
    { nombre: "Impresora", precio: 200 },
    { nombre: "Tablet", precio: 500 }
];
productos2.reverse();
console.log(productos2);

