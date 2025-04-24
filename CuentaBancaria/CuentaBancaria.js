saldo = 25000
retiroAcumulado = 0
alert("Hola bienvenido(a) al cajero")
function depositar() {
    while (true) {
        deposito = parseFloat(prompt("Ingrese la cantidad que desea depositar: "))
        if (deposito > 0) {
            saldo = saldo + deposito
            alert("Deposito exitoso, su nuevo saldo es " + saldo)
            break;
        } else {
            alert("Datos incorrectos, porque favor ingrese un numero válido")
        }
    }
}

function retirar() {
    while (true) {
        retiro = parseFloat(prompt("Ingrese la cantidad que desea retirar: \nEl limite diario de retiro es de 35000 en cajero"))
        if (retiroAcumulado < 35000) {
            if (retiro > saldo) {
                alert("Saldo insuficiente, no es posible retirar mas que el saldo actual")
            } else if (retiro <= saldo && retiro >= 0 && retiro <= 35000) {
                saldo = saldo - retiro
                retiroAcumulado = retiroAcumulado + retiro
                alert("Retiro exitoso, su nuevo saldo es " + saldo)
                break;
            } else {
                alert("Datos incorrectos, porque favor ingrese un numero válido")
            }
        } else {
            alert("Ha superado la cantidad a retirar por día")
            break;
        }

    }
}

while (true) {
    let oper = prompt(`Indica la operación que desea realizar:
    1 - Consultar su saldo
    2 - Ingresar un depósito
    3 - Retirar efectivo
    4 - Salir`)

    if (oper === "1") {
        alert("Tu saldo actual es: " + saldo)
    } else if (oper === "2") {
        depositar()
    } else if (oper === "3") {
        retirar()
    } else if (oper === "4") {
        break;
    } else {
        alert("Datos incorrectos")
    }

    re = prompt("¿Desea realizar otra operacion?\n1 - SI\n2 - NO")
    if (re === "1") {
    } else if (re === "2") {
        alert("Gracias, vuelva pronto")
        break;
    } else {
        alert("Datos incorrectos, intente de nuevo")
    }
}


