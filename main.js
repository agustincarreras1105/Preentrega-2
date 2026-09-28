//preentrega - 1
//declarando variables, junto con ingreso de informacion y que el ingreso de info se guarde en las variables.
let nombre = prompt("¿Cual es tu nombre?");
let edad = Number(prompt("¿Cual es tu edad?"));
let pais = prompt("¿De que pais sos?");


/*console para mostrar que lo que se ingreso se guardo bien y 
no tenga que verse directamente con el usuario*/

console.log(nombre);
console.log(edad);
console.log(pais);

/*definicion de la variable con operacion aritmetica, 
y muestra en consola del resultado con una concatenacion de txt.*/

let edadfutura = edad+4
console.log("El usuario en 2030 tendrá: " + edadfutura + " años.")

/*alert para mostrar en pantalla una concatenacion de txt y variables number
y ademas jugar con la info que ingreso el usuario.*/

alert("Entonces te llamas " + nombre + ", tenes " + edad + ", y sos orgullosamente de " + pais + ".");
