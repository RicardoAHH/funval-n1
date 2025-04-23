alert("Hola bienvenido(a) \n este programa calcula las áreas de algunas figuras geométricas.")
while (true) {
    tipo = parseInt(prompt("Indica la figura geométrica de la que deseas calcular el área: \n1 cuadrado\n2 rectangulo\n3 triangulo\n4 círculo\n5 salir"))
    if (tipo === 1) {
        lado = parseFloat(prompt("Vamos a calcular el área de un cuadrado, porfavor indica la longitud del lado: "))
        if (lado < 0) {
            alert("No existen las areas de lados negativos porfavor ingresa un numero positivo: ")
        } else if (lado >= 0) {
            area = lado ** 2
            alert("El área del cuadrado de lado " + lado + " es igual a " + area)
            break;
        } else {
            alert("Datos incorrectos, intenta de nuevo")
        }
    } else if (tipo === 2) {
        base = parseFloat(prompt("Vamos a calcular el area de un rectangulo, indica la longitud de la base: "))
        altura = parseFloat(prompt("Ahora indica la longitud de la altura: "))
        if (base < 0 || altura < 0) {
            alert("No existen las areas de lados negativos porfavor ingresa un numero positivo: ")
        } else if (base >= 0 && altura >= 0) {
            area = base * altura
            alert("El area del rectangulo de base " + base + " y de altura " + altura + " es igual a " + area)
            break;
        } else {
            alert("Datos incorrectos, intenta de nuevo")
        }
    } else if (tipo === 3) {
        base = parseFloat(prompt("Vamos a calcular el area de un triangulo, indica la longitud de la base: "))
        altura = parseFloat(prompt("Ahora indica la longitud de la altura: "))
        if (base < 0 || altura < 0) {
            alert("No existen las areas de lados negativos porfavor ingresa un numero positivo: ")
        } else if (base >= 0 && altura >= 0) {
            area = (base * altura) / 2
            alert("El area del triangulo de base " + base + " y de altura " + altura + " es igual a " + area)
            break;
        } else {
            alert("Datos incorrectos, intenta de nuevo")
        }
    } else if (tipo === 4) {
        radio = parseFloat(prompt("Vamos a calcular el area de un circulo, indica la longitud del radio: "))
        if (radio < 0) {
            alert("No existen areas de radios negativos porfavor ingresa un numero positivo: ")
        } else if (radio >= 0) {
            area = 3.14 * (radio ** 2)
            alert("El area del circulo de radio " + radio + " es igual a " + area)
            break;
        } else {
            alert("Datos incorrectos, intenta de nuevo")
        }
    } else if (tipo === 5) {
        break;
    } else {
        alert("Por favor ingresa un numero válido del 1 al 4")
    }
}