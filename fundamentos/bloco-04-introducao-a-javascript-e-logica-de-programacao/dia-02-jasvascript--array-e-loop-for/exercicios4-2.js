let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//exercicio 1.
/* 
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
} */

//exercicio 2.
let resulado=0;
for (let index = 0; index < numbers.length; index += 1) {
    resulado+=numbers[index]
}

console.log(resulado);