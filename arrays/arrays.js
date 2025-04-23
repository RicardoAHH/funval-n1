let nombre = "Harold";
let edad = 26;
let frutas = ["fresa", "mango", "platano"];


//arrays
console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
frutas.push("Kiwi")
console.log(frutas);
console.log(frutas[3]);
frutas.pop();
console.log(frutas);
console.log(frutas[3]);

// objetos 
let persona = {
    nombre: "Diego",
    edad: 27,
    apellido: "Huarsaya",
    gustos: ["Rock", "Comida", {
        futbol: "soccer",
        futbol2: "rapido",
        futbol3: "siete",
    },]
}

console.log(persona.edad);
console.log(persona.nombre, persona.apellido);
console.log(persona);

persona.ciudad = "Arequipa"
console.log(persona);

console.log(persona.gustos[2].futbol2)

