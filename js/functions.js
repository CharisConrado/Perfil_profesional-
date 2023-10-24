// ####### TIPO DE VARIABLES 
// const para constantes
const pi = 3.1416;
const pul = 2.54;
// var para variables globales
var cant_days = 10;
var name      = "Charis Conrado";
//let para variables de bloque o locales
let count = 5 ;
let i     = 0;

//######### FORMAS DE IMPRESION O SALIDA EN PANTALLA
// alert
// alert(name);
// console
console.log(cant_days);
console.log("10");
// body - pantalla
document.write(name)
document.getElementById("text_one").innerHTML = "<h1>Charis Conrado</h1>"
document.getElementById("text_two").innerText = "<h1>Charis Conrado</h1>"
//librerias
Swal.fire({
    icon: 'succes',
    title: 'Charis  Conrado',
    text: 'Estudiante de la ufpso',
    footer: name,
    showConfirmButton: false,
    timer: 2000

  })

  