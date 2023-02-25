// Lenguajes de programacion:

// Tipos:
// Compilados - Necesitas que todos sus archivos esten fusionados en uno solo 
// para su funcionamiento correcto

// Interpretados
// Requieren de un interprete, para poder entender los escrito y poder ejecutar su contenido

// En el caso de JS (Lenguaje de programacion interpretado) requiere del navegador como interprete o de NODE.JS


// Palabras reservadas o claves son "comandos" dentro del lenguaje


// Tipos de datos
// number: 1, 12, 1.223425, 1000000, -1, 0 // Numeros

// string: "Tomas", 'Mi nombre es Tomas', "a", "aasdfasdfasdf" // Cadena de letras o palabras

// booolean: true, false // Verdadero o falso

// undefined: indefinido

// null: nulo



// Declarar una variable
// 1- var - No utilizar porq es de entorno global o se lo podia editar de forma global

// 2- let - Solo se pueden modificar dentro de su propio entorno 
// 3- const - Son variables ineditables

var nombre = "Tomas"
var indefinido // undefined
var nulo = null

let nombre2 = "Charlie"
// Instruccion 1
// Variable a, variable b

// Instruccion 2
// Variable c, variable d

const nombre3 = "Kari"

// Operaciones

//Sumar, restar, multiplicar, dividir, porcentajes
const numero1 = 40
const numero2 = 14

let suma = 2+2

let resultado = numero1 - numero2
console.log(resultado)

let resultado2 = numero1 > numero2
console.log(resultado2)

let resultado3 = numero1 >= 40
console.log(resultado3)

// Funciones: Son las instrucciones de forma ordenada de una secuencia de pasos

// Esto no devuelve nada porq no contiene la palabra clave return
// Que indica que debe retornar un valor
function sumar() {
  2 + 2
} 
// Esta si contiene la palabra clave return
function sumar() {
  return 2 + 2
}

// Declaracion de FUNCIONES
function sumaEstatica() {
  return 2 + 2
}
// Forma de llamar a la funcion o instruccion
sumaEstatica()

function sumar(numero1, numero2) {
  return numero1 + numero2
}

function multiplicar(numero1, numero2) {
  return numero1 * numero2
}

sumar(200,135)

multiplicar(3,10)

let resultadoDeLaSuma = sumar(50, 25)
console.log(resultadoDeLaSuma)
