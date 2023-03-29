/**5 - 🚀 Utilize if/else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo.
 * Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido,
 * você deve retornar uma mensagem de erro.
 */

let angleA = 60;
let angleB = 60;
let angleC = 60;

if (angleA + angleB + angleC === 180) {
  console.log(true);
} else {
  console.log('Angles do not form a triangle');
}
