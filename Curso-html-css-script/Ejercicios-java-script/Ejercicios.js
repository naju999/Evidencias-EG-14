//1. Mostrar un mensaje en consola
javascript
CopiarEditar
console.log("¡Hola, mundo!");

//2. Pedir el nombre y saludar
javascript
CopiarEditar
let nombre = prompt("¿Cuál es tu nombre?");
alert("Hola, " + nombre + "!");

//3. Verificar si un número es par o impar
javascript
CopiarEditar
let numero = prompt("Ingresa un número:");
if (numero % 2 === 0) {
 alert("Es par");
} else {
 alert("Es impar");
}

//4. Multiplicar dos números ingresados por el usuario
javascript
CopiarEditar
let n1 = parseFloat(prompt("Número 1:"));
let n2 = parseFloat(prompt("Número 2:"));
let resultado = n1 * n2;
alert("El resultado es: " + resultado);

//5. Determinar si una persona es mayor de edad
javascript
CopiarEditar
let edad = prompt("¿Qué edad tienes?");
if (edad >= 18) {
 alert("Eres mayor de edad");
} else {
 alert("Eres menor de edad");
}

//6. Calcular el área de un triángulo
javascript
CopiarEditar
let base = parseFloat(prompt("Base del triángulo:"));
let altura = parseFloat(prompt("Altura del triángulo:"));
let area = (base * altura) / 2;
alert("Área del triángulo: " + area);

//7. Convertir grados Celsius a Fahrenheit
javascript
CopiarEditar
let celsius = parseFloat(prompt("Grados Celsius:"));
let fahrenheit = (celsius * 9/5) + 32;
alert("Fahrenheit: " + fahrenheit);

//8. Contador regresivo (bucle for)
javascript
CopiarEditar
for (let i = 5; i >= 1; i--) {
 console.log(i);
}
console.log("¡Despegue!");
