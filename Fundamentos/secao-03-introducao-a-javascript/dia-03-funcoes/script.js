let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// escreva aqui sua função

function adicionarClientesAlista(nomeCliente) {
  if (typeof nomeCliente !== 'string') {
    console.log('Erro,dado não pode ser adicionado');
  } else {
    clientesTrybeBank.push(nomeCliente);
  }
}

adicionarClientesAlista('Marko');

console.log(clientesTrybeBank);

function removerClienteSeJaExistir(clienteName) {
  if (typeof nomeCliente !== 'string') {
    console.log('Erro,dado não pode ser processado');
  }
  for (let index = 0; index < clientesTrybeBank.length; index += 1) {
    if(clientesTrybeBank[index] === clienteName) {
      clientesTrybeBank.splice(index,1)
    }
  }
}

removerClienteSeJaExistir('John');
console.log(clientesTrybeBank);
