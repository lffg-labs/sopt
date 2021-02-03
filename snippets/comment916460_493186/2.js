const { readFile, writeFile } = require('fs').promises;

async function addClient(filename, clientData) {
  // Lê o arquivo e obtem o array atual:
  const data = await readFile(filename, 'utf-8');
  const json = JSON.parse(data || '[]');

  if (!Array.isArray(json)) {
    throw new Error(`Malformed JSON. Expected array, got: ${json}.`);
  }

  // Note que mutamos o JSON diretamente para "adicionar o cliente", uma vez que
  // sobre-escreveremos o arquivo com o novo conteúdo (modificado).
  json.push(clientData);

  // Transformamos o JSON modificado em string para sobre-escrever no arquivo:
  const jsonString = JSON.stringify(json);

  // Modificamos o arquivo:
  await writeFile(filename, jsonString);
}

// Posso chamar quantas vezes for necessário, a estrutura sintática do JSON
// irá se manter válida.
addClient('./data.json', {
  name: 'Bob',
  age: 10
})
  .then(() => console.log('OK.'))
  .catch(console.error);
