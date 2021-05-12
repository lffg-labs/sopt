let optionSelected = 'foo';

fetch('http://localhost:8080/test.php', {
  method: 'POST',
  body: new URLSearchParams({
    id_plano: optionSelected
  })
});

// Responde corretamente.
