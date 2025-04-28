const automovil = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2022,
    color: "Blanco",
    motor: {
        tipo: "Gasolina",
        cilindros: 4,
        capacidad: "2.0L",
        turbo: false
    },
    dimensiones: {
        largo: "4.63m",
        ancho: "1.78m",
        alto: "1.45m"
    },
    propietario: {
        nombre: "Carlos Martínez",
        licencia: {
            numero: "ABC123456",
            vencimiento: "2027-05-15",
            tipo: "A"
        }
    },
    caracteristicas: ["Aire acondicionado", "Cámara de reversa", "Bluetooth", "Control de crucero"],
    encender: function () {
        console.log("El automóvil está encendido.");
    },
    apagar: function () {
        console.log("El automóvil está apagado.");
    }
};

// Puedes probarlo:
// automovil.encender();
// console.log(automovil.motor.tipo);
// console.log(automovil.propietario.nombre);

let marca = document.querySelector("#tabla")
marca.innerHTML = "marca"
console.log(marca)




