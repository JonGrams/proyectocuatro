let nombre = prompt("Ingrese el nombre: ")

function promedio(nota1, nota2, nota3) {

nota1 = parseInt(prompt("Ingrese la nota Número UNO: "))
nota2 = parseInt(prompt("Ingrese la nota Número DOS: "))
nota3 = parseInt(prompt("Ingrese la nota Número TRES: "))
let promedio = (nota1+nota2+nota3) / 3;

if (promedio >=6) {
    alert("Felicitaciones "+nombre+" tu nota es "+promedio+" y está dentro de los aprobados!")
}

else {
    alert("Malas noticias "+nombre+" tu nota es "+promedio+" y no es suficiente para estar dentro de los aprobados!")
}
}

promedio();