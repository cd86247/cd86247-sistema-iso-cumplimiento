document.getElementById("formularioCumplimiento").addEventListener("submit", function(e) {
  e.preventDefault();

  const data = new FormData(this);
  const payload = {};

  for (let [key, value] of data.entries()) {
    payload[key] = value;
  }

  fetch('https://script.google.com/macros/s/AKfycbyLONxhQpl-YxMqrXliGVvFPdmy9PsJBN6bmDKxXgdbMVKqZSy1v9bQ4r8qICh-Wku52g/exec', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  .then(response => response.json())
  .then(data => {
    alert("✅ Evaluación enviada. Resultado: " + JSON.stringify(data));
  })
  .catch(error => {
    console.error('Error:', error);
    alert("❌ Error al enviar evaluación.");
  });
});
