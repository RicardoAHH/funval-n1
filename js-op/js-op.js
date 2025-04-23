//el programa pedirá al usuario la medida del lado de un cuadrado y devolverá el resultado por una alerta

// let lado = parseFloat(prompt("Indica el valor de un lado de un cuadrado:"))
//parsefloat o parseint
//lado = parseFloat(lado)
// area = lado + 2
// if (lado < 0) {
//     alert("no se puede negativos")
// } else {
//     alert("El area es " + area)
// }

// saldo = 45500
// alert("Hola buen día bienvenido")
// let op = prompt("Digite la operacion que desea realizar: \n1- saldo  \n2- depositar  \n3- retirar  \n4- pagar servicios")
// if (op === "1") {
//     alert("Su saldo actual es de: " + saldo)
// } else if (op === "2") {
//     let deposito = parseInt(prompt("Escriba la cantidad que desea depositar: "))
//     saldo = saldo + deposito
//     alert("Su saldo actual es de: " + saldo)
// } else if (op === "3") {
//     let retiro = parseInt(prompt("Escriba la cantidad que desea retirar: "))
//     saldo = saldo - retiro
//     alert("Su saldo actual es de: " + saldo)
// } else if (op === "4") {
//     const tipo = prompt("Escriba el numero de cuenta de servicio que desea pagar: ")
//     let pago = parseInt(prompt("Escriba la cantidad que desea pagar: "))
//     saldo = saldo - pago
//     alert("Usted ha pagado " + pago + " a la cuenta " + tipo + " y su nuevo saldo es: " + saldo)
// }

//bucles for while let cuantos bucles hara desde 0, array.length es el fin index++ que va aumentar en cada vuelta
// index +=10 index = index + 10

// alert("Bienvenido(a)")
// let cont = true;
// while (cont) {
//     let años = parseInt(prompt("Indique por favor su edad con número entero de años (sin indicar meses): "))
//     if (años > 17) {
//         console.log("Usted puede votar")
//         cont = false;
//     } else if (años < 18) {
//         console.log("Usted no tiene edad para votar")
//         cont = false;
//     } else {
//         console.log("informacion incorrecta")
//     }
// }


// alert("Hola bienvenido (a)")
// let contador = 0
// while (true) {
//     let num = parseFloat(prompt("Indica un numero entero: "))
//     if (num == 0) {
//         alert("El numero que escribiste es cero")
//         break;
//     } else if (num < 0) {
//         alert("El numero que escribiste es negativo")
//         break;
//     } else if (num > 0) {
//         alert("El número que escribiste es positivo")
//         break;
//     } else {
//         alert("Info incorrecta le quedan " + (2 - contador) + " intentos")
//         contador++
//         if (contador >= 3) {
//             alert("intentos superados, pruebe mas tarde");
//             break;
//         }
//     }
// }


// alert("Hola")
// dia = parseInt(prompt("Indica el dia de la semana que es del 1 al 7: "))
// if (dia == 1) {
//     alert("Hoy es lunes")
// } else if (dia === 2) {
//     alert("hoy es martes")
// } else if (dia === 3) {
//     alert("hoy es miercoles")
// } else if (dia === 4) {
//     alert("hoy es jueves")
// } else if (dia === 5) {
//     alert("hoy es viernes")
// } else if (dia === 6) {
//     alert("hoy es sabado")
// } else if (dia === 7) {
//     alert("hoy es domingo")
// } else {
//     alert("No ingresaste un numero del 1 al 7")
// }



// let day = parseInt(prompt("Selecciona un dia del 1 al 7: "))
// switch (day) {
//     case 1:
//         alert("Escogiste dia lunes")

//         break;
//     case 2:
//         alert("Escogiste dia martes")

//         break;
//     case 3:
//         alert("Escogiste dia miercoles")

//         break;
//     case 4:
//         alert("Escogiste dia jueves")

//         break;
//     case 5:
//         alert("Escogiste dia viernes")

//         break;
//     case 6:
//         alert("Escogiste dia sabado")

//         break;
//     case 7:
//         alert("Escogiste dia domingo")

//         break;

//     default:
//         alert("Info incorrecta")
//         break;
// }

//numero % 2 ===1 || numero%2===-1

// alert("Hola")
// num = parseFloat(prompt("Indica un numero entero: "))
// if (num === 0) {
//     alert("Cero no es par ni impar")
// } else if (num % 2 === 0) {
//     alert("El número es par")
// } else if ((num * 2) % 2 === 0) {
//     alert("El mumero es impar")
// } else {
//     alert("No escrbiste un número entero")
// }



// let intentos = 0;
// alert("Hola")
// while (true) {
//     nota = parseFloat(prompt("Escribe la nota que obtuviste: "))
//     if (0 <= nota && nota < 10.5) {
//         alert("No aprobó")
//         break;
//     } else if (10.5 <= nota && nota < 13.5) {
//         alert("Regular")
//         break;
//     } else if (13.5 <= nota && nota < 17.5) {
//         alert("Bueno")
//         break;
//     } else if (17.5 <= nota && nota <= 20) {
//         alert("Excelente")
//         break;
//     } else {
//         alert("Datos incorrectos le quedan " + (2 - intentos) + " intentos")
//         intentos++
//         if (intentos >= 3) {
//             alert("Intentos superados, pruebe más tarde")
//             break;
//         }

//     }
// }



// alert("Tablas de multiplicar")
// let num = parseInt(prompt("Escribe un numero: "));
// console.log("La tabla del " + num + " es:")
// for (let index = 1; index < 13; index++) {
//     console.log(num + "x" + index + "=" + (num * index))
// }


// alert("La suma de los numeros")
// let suma = 0;
// let num = parseInt(prompt("Ingrese hasta que numero:"))
// for (let index = 0; index <= num; index++) {
//     suma = suma + index
// }
// console.log(suma)



// function sumarDosNumeros(num1, num2) {
//     return num1 + num2;
// }

// console.log(sumarDosNumeros(34, 27));
// console.log(sumarDosNumeros("a", "b"));

function tablaDeMultiplicar(num1, num2) {
    for (let index = 1; index <= num2; index++) {
        console.log(num1 + "x" + num2 + "=" + (num1 * index))
    }
}