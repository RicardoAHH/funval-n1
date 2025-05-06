
pantalla = document.querySelector("#pantalla")
console.log(pantalla)
botonUno = document.querySelector("#boton1")
botonDos = document.querySelector("#boton2")
botonTres = document.querySelector("#boton3")
botonCuatro = document.querySelector("#boton4")
botonCinco = document.querySelector("#boton5")
botonSeis = document.querySelector("#boton6")
botonSiete = document.querySelector("#boton7")
botonOcho = document.querySelector("#boton8")
botonNueve = document.querySelector("#boton9")
botonCero = document.querySelector("#boton0")
botonCE = document.querySelector("#botonCE")
botonX = document.querySelector("#botonX")
botonDiv = document.querySelector("#botonDiv")
botonPunto = document.querySelector("#botonPunto")
botonRes = document.querySelector("#botonMin")
botonSum = document.querySelector("#botonMas")
botonIgual = document.querySelector("#botonIgual")



botonUno.addEventListener("click", function boton1() {
    pantalla.innerHTML += "1"
})
botonDos.addEventListener("click", function boton2() {
    pantalla.innerHTML += "2"
})
botonTres.addEventListener("click", function boton3() {
    pantalla.innerHTML += "3"
})
botonCuatro.addEventListener("click", function boton4() {
    pantalla.innerHTML += "4"
})
botonCinco.addEventListener("click", function boton5() {
    pantalla.innerHTML += "5"
})
botonSeis.addEventListener("click", function boton6() {
    pantalla.innerHTML += "6"
})
botonSiete.addEventListener("click", function boton7() {
    pantalla.innerHTML += "7"
})
botonOcho.addEventListener("click", function boton8() {
    pantalla.innerHTML += "8"
})
botonNueve.addEventListener("click", function boton9() {
    pantalla.innerHTML += "9"
})
botonCero.addEventListener("click", function boton0() {
    pantalla.innerHTML += "0"
})
botonAC.addEventListener("click", function botonAC() {
    pantalla.innerHTML = ""
})
botonPunto.addEventListener("click", function botonPunto() {
    pantalla.innerHTML += "."
})
botonDiv.addEventListener("click", function botonDiv() {
    pantalla.innerHTML += "/"
})
botonMin.addEventListener("click", function botonMin() {
    pantalla.innerHTML += "-"
})
botonX.addEventListener("click", function botonX() {
    pantalla.innerHTML += "*"
})
botonMas.addEventListener("click", function botonMas() {
    pantalla.innerHTML += "+"
})
botonIgual.addEventListener("click", function botonIgual() {
    let operacion = pantalla.textContent
    const resultado = Function(`"use strict"; return (${operacion})`)();
    pantalla.innerHTML = `${resultado}`

})

