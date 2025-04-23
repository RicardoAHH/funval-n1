// function raizCuarta(numero) {
//     let resultado = numero ** 4;
//     return "el resultado es " + resultado;
// }

// console.log(raizCuarta(2));
// console.log(raizCuarta(3));
// console.log(raizCuarta(4));

// function raizCuarta(numero) {
//     let resultado = numero ** 4;
//     console.log("el resultado es " + resultado);
// }
// raizCuarta(5);

// let edad = 10;
// function aumentarCincoAños() {
//     edad = edad + 5
// }
// aumentarCincoAños();
// console.log(edad);
// aumentarCincoAños();
// console.log(edad);
// aumentarCincoAños();
// console.log(edad);

// function aumentarNAños(n) {
//     edad = edad + n
// }
// aumentarNAños(5);
// console.log(edad);
// aumentarNAños(15);
// console.log(edad);
// aumentarNAños(25);
// console.log(edad);

// function addition(num1, num2) {
//     return num1 + num2;
// }

// addition(3, 2);
// console.log(addition(3, 2));

// function convert(minutes) {
//     return minutes * 60
// }

// convert(3);
// console.log(convert(3));

// function triArea(base, height) {
//     return (base * height) / 2
// }

// console.log(triArea(4, 5));

// function lessThan100(num1, num2) {
//     if (num1 + num2 < 100) {
//         return true
//     } else {
//         return false
//     }
// }


// console.log(lessThan100(22, 15));
// console.log(lessThan100(83, 34));
// console.log(lessThan100(3, 77));

// function saludar(nombre, rango) {
//     function saludarJefe() {
//         console.log("Espero que me de un aumento");
//     }
//     console.log("Saludos " + nombre);
//     if (rango === "jefe") {
//         saludarJefe()
//     }
// }

// saludar("Daniel", "empleado");
// saludar("Daniel", "jefe");

// function calculadora() {
//     let op = prompt("Bienvenido a la calculadora que operacion deseas realizar \n1-sumar\n2-restar\n3-multiplicar\n4-dividir");
//     if (op === "1") {
//         num1 = parseFloat(prompt("Indica el primer número que vas a sumar: "));
//         num2 = parseFloat(prompt("Indica el segundo número que vas a sumar: "));
//         let again = prompt("El resultado es " + sumar(num1, num2) + " deseas realizar otra operacion?:\n 1 - SI\n 2 - NO ");
//         if (again === "1") {
//             calculadora();
//         } else {
//             alert("Gracias!")
//         }
//     } else if (op === "2") {
//         num1 = parseFloat(prompt("Indica el primer número que vas a restar: "));
//         num2 = parseFloat(prompt("Indica el segundo número que vas a restar: "));
//         let again = prompt("El resultado es " + restar(num1, num2) + " deseas realizar otra operacion?:\n 1 - SI\n 2 - NO ");
//         if (again === "1") {
//             calculadora();
//         } else {
//             alert("Gracias!")
//         }
//     } else if (op === "3") {
//         num1 = parseFloat(prompt("Indica el primer número que vas a multiplicar: "));
//         num2 = parseFloat(prompt("Indica el segundo número que vas a multiplicar: "));
//         let again = prompt("El resultado es " + multiplicar(num1, num2) + " deseas realizar otra operacion?:\n 1 - SI\n 2 - NO ");
//         if (again === "1") {
//             calculadora();
//         } else {
//             alert("Gracias!")
//         }
//     } else if (op === "4") {
//         num1 = parseFloat(prompt("Indica el primer número que vas a dividir: "));
//         num2 = parseFloat(prompt("Indica el segundo número que vas a dividir: "));
//         let again = prompt("El resultado es " + dividir(num1, num2) + " deseas realizar otra operacion?:\n 1 - SI\n 2 - NO ");
//         if (again === "1") {
//             calculadora();
//         } else {
//             alert("Gracias!")
//         }
//     } else {
//         alert("Datos incorrectos")
//     }

// }

// function sumar(num1, num2) {
//     return num1 + num2;
// }

// function restar(num1, num2) {
//     return num1 - num2;
// }

// function multiplicar(num1, num2) {
//     return num1 * num2;
// }

// function dividir(num1, num2) {
//     return num1 / num2;
// }

// const saludo2 = function (nombre) {
//     alert("hola " + nombre);
// }
// saludo2("Diego");

// const saludo3 = (nombre) => alert(nombre);
// saludo3("Diego");

// function points(doble, triple) {
//     return 2 * doble + 3 * triple
// }

// doble = parseInt(prompt("Cuantos tiros de 2 puntos se hcieron?: "));
// triple = parseInt(prompt("Cuantos tiros de 3 puntos se hcieron?: "));
// console.log("El resultado es: " + points(doble, triple))

// const points = function (dosPts, tresPts) {
//     return dosPts * 2 + tresPts * 3;
// }

// console.log(points(1, 1));
// console.log(points(7, 5));
// console.log(38, 8);

// const animals = function (chikens, cows, pigs) {
//     return (chikens * 2) + (cows * 4) + (pigs * 4)
// }

// console.log(animals(2, 3, 5))
// console.log(animals(1, 2, 3))
// console.log(animals(5, 2, 8))

// const cuadrado = function (lado) {
//     return lado * lado
// }
// const circulo = function (radio) {
//     return 3.14 * (radio ** 2)
// }
// const rectangulo = function (base, altura) {
//     return base * altura
// }
// const triangulo = function (base, altura) {
//     return (base * altura) / 2
// }

// function areas() {
//     alert("Bienvenido a la calculadora de areas")
//     tipo = prompt("Porfavor indique la figura que desea calcular su area \n1 - cuadrado\n2 - circulo\n3 - rectangulo\n4 - triangulo\n5 - salir")
//     if (tipo === "1") {
//         let lado = parseFloat(prompt("Indique el valor del lado:"))
//         alert("El area es " + cuadrado(lado))
//     } else if (tipo === "2") {
//         let radio = parseFloat(prompt("Indique el valor del radio:"))
//         alert("El area es " + circulo(radio))
//     } else if (tipo === "3") {
//         let base = parseFloat(prompt("Indique el valor de la base:"))
//         let altura = parseFloat(prompt("Indique el valor de la altura:"))
//         alert("El area es " + rectangulo(base, altura))
//     } else if (tipo === "4") {
//         let base = parseFloat(prompt("Indique el valor de la base:"))
//         let altura = parseFloat(prompt("Indique el valor de la altura:"))
//         alert("El area es " + triangulo(base, altura))
//     } else if (tipo === 5) {
//         alert("Gracias")
//     } else {
//         alert("Datos incorrectos")
//     }
// }



// alert("Bienvenido a la calculadora de areas")
// tipo = prompt("Porfavor indique la figura que desea calcular su area \n1 - cuadrado\n2 - circulo\n3 - rectangulo\n4 - triangulo\n5 - salir")
// switch (tipo) {
//     case "1":
//         cuadrado()
//         break;

//     default:
//         break;
// }

// function cuadrado() {
//     let lado = parseFloat(prompt("Indique el valor del lado:"))
//     alert("El area del cuadrado es " + (lado * lado));

// }