let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//exercicio 1.
/* 
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
} */

//exercicio 2.
/* let resultado=0;
for (let index = 0; index < numbers.length; index += 1) {
    resultado+=numbers[index];
}
console.log(resultado); 
*/

//exercicio 3.

let resultado = 0;

for (let index = 0; index < numbers.length; index += 1){
    resultado += numbers[index];
}
let resultadoMedia=resultado/numbers.length;

console.log(resultadoMedia)