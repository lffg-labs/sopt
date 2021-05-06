function printUsage() {
  const used = process.memoryUsage();
  for (const key in used) {
    console.log(
      `${key} ${Math.round((used[key] / 1024 / 1024) * 100) / 100} MB`
    );
  }
}

// padrão de 1 segundo
function delay(time = 1e3) {
  return new Promise((resolve) => {
    setTimeout(resolve, time); // resolve depois de X segundos
  });
}

async function clock() {
  await delay(1);

  // exibe a hora
  console.log(new Date().toLocaleTimeString());
  console.log(printUsage());

  // inicia a recursão
  return clock();
}

// bootstrap
clock();
