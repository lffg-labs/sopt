function printUsage() {
  // requires node.js to access `process.memoryUsage`:
  const used = process.memoryUsage();
  for (const key in used) {
    console.log(
      `${key} ${Math.round((used[key] / 1024 / 1024) * 100) / 100} MB`
    );
  }
}

function delay(time = 1e3) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

async function clock() {
  await delay(1);

  console.log(new Date().toLocaleTimeString());
  console.log(printUsage());
  console.log('-----');

  // inicia a recursão
  return clock();
}

clock();
