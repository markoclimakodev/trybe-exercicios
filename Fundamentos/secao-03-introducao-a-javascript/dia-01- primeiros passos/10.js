/** Utilize if/else para escrever um código que se inicie com dois valores em 
 duas variáveis diferentes: o custo de um produto e seu valor de venda. 
A partir dos valores, o código deve calcular o lucro (ou seja, o valor de 
  venda menos o custo do produto) da empresa ao vender mil produtos. */

let productCost = 23.5;
let salePrice = 43.5;
let totalProducdSold = 1000;

const options = {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
  maximumFractionDigits: 3,
};

if (totalProducdSold !== 0) {
  let profit = (salePrice - productCost) * totalProducdSold;
  console.log(
    `Lucro no total de: ${new Intl.NumberFormat('pt-BR', options).format(
      profit
    )}`
  );
} else {
  console.log('oi');
}
