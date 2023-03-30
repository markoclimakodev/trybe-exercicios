let megaSenaGuessNumbers = [12, 23, 32, 44, 52, 57];

let firstNumber = Math.ceil(Math.random() * 60);
let secondNumber = Math.ceil(Math.random() * 60);
let thirdNumber = Math.ceil(Math.random() * 60);
let fourthNumber = Math.ceil(Math.random() * 60);
let fifthNumber = Math.ceil(Math.random() * 60);
let sixthNumber = Math.ceil(Math.random() * 60);

let drawnNumbers = [
  fifthNumber,
  secondNumber,
  thirdNumber,
  fifthNumber,
  fifthNumber,
  sixthNumber,
];
let correctDrawnNumbers= 0;

for (let index = 0; index < megaSenaGuessNumbers.length; index += 1) {
  for (
    let indexGuess = 0;
    indexGuess < megaSenaGuessNumbers.length;
    indexGuess += 1
  ) {
    if (drawnNumbers[index] === megaSenaGuessNumbers[indexGuess]) {
      correctDrawnNumbers += 1;
    }
  }
}

console.log(`Os númeors sorteados foram: ${drawnNumbers}`);
console.log(`Os númeors de palpite foram: ${megaSenaGuessNumbers}`);
console.log(correctDrawnNumbers);
