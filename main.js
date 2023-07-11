/* funciones de promera clase */
/* las funciones del lenguaje se tratan como si fuera un */

function fn() {
  console.log('Im the best')
}

const x = fn

x()
fn()

/* funcion interna o parametro */
/* duncion superior */

function foo(cb) {
  const text = 'Im the best'
  cb(text)
}

/* funcion callback (funcion que se pasa como parametro) */
function bar(msj) {
  console.log(msj)
}

foo(bar)

/* arrow function */
/* la invocacion puede ser colocada antes de la funcion */
/* js tiene un mecanismo llamado hoisting: mecanismo utilizado para las  varaiables utilizadas con var y pra las funciones declarads */
/* hoisting = elevacin, eleva nuestras funciones */
/* el hoisting no funciona con las funciones expresadas */

saludar()
function saludar() {
  console.log('Im the best')
}


/* funciones expresadas */
/* se crea una constante y despues una funcion */
/* no pueden ser llamdas antes de crealas */
/* siempre se llaman abajo de la funcion */

const saludo = function () {
  console.log('im the best')
}

saludo()

/* var tiene hoisting */
/* por endem el valor asignado es undefined por que es el valor agregado por defecto */
console.log(a)
var a

/* let y const no tiene hoisting */
/* dead zone temporal */
/* console.log(b)
let b

console.log(m)
const mom */

/* arrow functions */
/* funcion expresada pero se le agrega una forma mas corta y limpia */

const sumar = function (a, b) {
  return a + b
}

console.log(sumar(1, 2))

const sum = (a, b) => { return a + b }
console.log(sum(2, 2))

/* 
* 1. Si solo tenemkos un argumento, se pueden omitir parentesis alrededor de los parametros, lo que hace aun msd corto
*/

const baz = str => { console.log(str) }
baz('Im the best')

/* 
* si no hay parametros, los parentesis estaran vacios; pero deben estar presentes
*/

const biz = () => { console.log('Im the best') }
biz()

/* 
* 2. si la funcion solo tien una expresion, podemos omitir las llaves y la declaracion de retorno
*/

const sums = (a, b) => a + b //se tiene un return implicito
console.log(sums(1, 2))


const sums2 = (a, b) => {
  const resultado = a + b
  return resultado
}

const saludando = str => ({ nobre: str })
console.log(saludando('carlos'))

/* 
* FUNCIONES DE ORDEN SUPERIOR
*filter, map, reduce, forEach, find (funciones que se pasan como argumetnos de entrada a otras funciones)
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const nombres = ['caarlod', 'karen', 'gene']
/* const usuarios =  */

/* forEach */
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i])

}

for (let i = 0; i < nombres.length; i++) {
  console.log(nombres)

}

/* funcion de orden superior */
function recorrer(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    cb(arr[i])
  }
}

// function callback(element) {
//   console.log(element)
// }

recorrer(numeros, (element, index) => {
  console.log(element)
  console.log(index)
})

/* forEach es solo opara recorrer un array */
/* tambien pasa los indices */
nombres.forEach((element, index) => {
  console.log(element)
  console.log(index)
})