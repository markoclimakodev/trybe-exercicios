let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//ex 01
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

//ex 02

let sum = 0;
for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}
console.log(sum);

//ex 03

let average = 0;

for (let index = 0; index < numbers.length; index += 1) {
  average += numbers[index];
}
average = average / numbers.length;

console.log(average);

//ex 04

if (average > 20) {
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor ou igual a 20');
}

//ex 05

let higherNumber = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (higherNumber < numbers[index]) {
    higherNumber = numbers[index];
  }
}

console.log(higherNumber);

//ex 06
let oddNumbers = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    oddNumbers += 1;
  }
}
if (oddNumbers === 0) {
  console.log('Nenhum valor ímpar encontrado');
}
console.log(oddNumbers);

//ex 07

let smallerNumber = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (smallerNumber === 0) {
    smallerNumber = numbers[0];
  }
  if (numbers[index] < smallerNumber) {
    smallerNumber = numbers[index];
  }
}

console.log(smallerNumber);

//ex 08

let arrayOfNumbers = [];
for (let index = 1; index <= 25; index += 1) {
  arrayOfNumbers.push(index);
}
console.log(arrayOfNumbers);

for(let index = 0; index < arrayOfNumbers.length; index += 1) {
  console.log(arrayOfNumbers[index] / 2)
}