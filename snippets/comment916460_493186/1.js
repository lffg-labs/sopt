const fs = require('fs');
const file = __dirname + '/teste.json';

// Primeiro, ler o arquivo para obter os dados originais:
const data = fs.readFileSync(file, 'utf8');

// Faz o parse:
const json = JSON.parse(data?.trim() || '{}');

// Modifica as informações. Pode fazer basicamente qualquer coisa aqui:
Object.assign(json, {
  nome: 'Smartphone',
  preco: 1749.99,
  desconto: 0.15
});

// Agora, ao invés de fazer um append no arquivo, simplesmente modifica o arquivo:
fs.writeFileSync(file, JSON.stringify(json, null, 2));

// Note que eu utilizei os métodos síncronos do módulo fs, mas é melhor utilizar os assíncronos a depender da situação.
