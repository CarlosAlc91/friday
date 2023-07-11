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

/* FUNCIONES QUE DEVUELVEN OTRAS FUNCIONES COMO SALIDA */
function saludando2() {
  return function () {
    console.log('Im the best');
  }
}


/* forma 1 */
/* saludando2()() */

/* forma2 */
const resultado2 = saludando2()
resultado2()


/* scope */
/* local scope */


/* global scope */
var variableVar = 1
let variableLet = 5

{
  /* global scope, var siempre son variables globales */
  var variableVar = 2
  /* block scope, solamente son visibles en ese bloque */
  let variableLet = 3

  console.log(variableVar);
  console.log(variableLet);
}

console.log(variableVar)
console.log(variableLet)

function foo() {
  /* local scope */
  var variableVar = 1000
  console.log (variableVar)
}

/* closure 
suelen ser preguntados
funcion que retorna otra funcion y aparte la variable externa en donde fue creada
*/

/* abmito lexico 
es como se le indica a js donde declaramos nuestras variables
*/

//ambito global
function crearContador () {
  //orden superior
    let contador = 0
  //la variable externa funciona mas que una local
  return function () {
    
    return contador++
  }
}

const contador = crearContador()

console.log (contador())
console.log (contador())
console.log (contador())
console.log (contador())
console.log (contador())
console.log (contador())
console.log (contador())
console.log (contador())



//sistema de crud
//factory functions
//create, read, update, delete oop
//cuando se trabaja con oop no user arrowd funcionts

function makeCrud () {
  //private variable
  let users = []
  
  //metodos privados
  return {
    read(cb) {
      cb(users)
    },
    create(user) {
      users.push(user)
    }
  }
}

const crudGen28 = makeCrud()

//asi accedemos a una variable privada
crudGen28.read((users) => {
  console.log(users);
})

crudGen28.create({
  name: 'carlos',
  age: 31
})

crudGen28.read((users) => {
  console.log(users);
})

/* REST parameter */
/* encapsula los mete en un cajita */
/* a, b, c estan dentro de una cajita */

function numbers(a, b, c, ...rest) {
 
  console.log(a);
  console.log(b);
  console.log(c);
 
  console.log(rest)
}

numbers(1, 2, 3, 4, 5, 6, 7, 8, 9)

/* spread operator */
/* es como si tuvieramos una cajita y los sacaramos */
const numss = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function funSpread(a,b,c,d,e,f,g) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(e);
  console.log(f);
}

funSpread(...numss)
/* para max y min solo aceopata secuencia de numeros */
/* por eso usamos el spread operator */
console.log(Math.max(... numss));
console.log(Math.min(...numss))


/* hacer una copia */
const colores = ['rojo', 'axul', 'verde']
/* const copy = colores.splice('')
console.log(copy) */


const copy2 = [...colores]
copy2.push('moradp','ginda','purpra')
console.log(copy2)


/* fuciones recursivas */
/* SE LLAMAN A ELLAS MISMAS */
/* pueden generaar un blucle infinito */

//1. pensamiento iterativo

const letras = ['a', 'b', 'c', 'd']

for (let i = 0; i < letras.length; i++) {
  console.log(letras[i]);
}

//2. pensamiento recursivo

function recorrerLetras () {
  
}

console.log(recorrerLetras(letras));