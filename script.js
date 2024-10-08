document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtendo os valores dos campos
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const message = document.getElementById('message');

    // Validando se o campo B é maior que o campo A
    if (campoB > campoA) {
        message.textContent = 'Formulário válido! O valor de B é maior que A.';
        message.className = 'message success';
    } else {
        message.textContent = 'Formulário inválido! O valor de B deve ser maior que A.';
        message.className = 'message error';
    }
});
