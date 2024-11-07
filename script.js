let currentInstrument = 1;

function goToStep2() {
    const construct = document.getElementById('constructInput').value.trim();
    const constructError = document.getElementById('constructError');

    if (!construct) {
        constructError.style.display = 'block';
        return;
    }
    constructError.style.display = 'none';
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
}

function addInstrument() {
    const instrumentSection = document.getElementById('instrumentSection');
    const div = document.createElement('div');
    div.className = 'instrument instrument-info mb-6';
    div.innerHTML = `
        <h3 class="text-xl font-bold mb-4">Instrumento ${currentInstrument}</h3>
        <input type="text" placeholder="Nombre del instrumento" id="name${currentInstrument}" class="input-field" required><br>
        <label class="block font-medium mb-2"><strong>Pertinencia Temática (20%) (1-5):</strong></label>
        <input type="number" id="pertinencia${currentInstrument}" class="input-field" min="1" max="5" required oninput="validateInput(this)"><br>
        <label class="block font-medium mb-2"><strong>Indicadores Psicométricos (20%) (1-5):</strong></label>
        <input type="number" id="psicometrico${currentInstrument}" class="input-field" min="1" max="5" required oninput="validateInput(this)"><br>
        <label class="block font-medium mb-2"><strong>Proximidad Poblacional - País (15%) (1-5):</strong></label>
        <input type="number" id="pais${currentInstrument}" class="input-field" min="1" max="5" required oninput="validateInput(this)"><br>
        <label class="block font-medium mb-2"><strong>Proximidad Poblacional - Grupo de Edad (10%) (1-5):</strong></label>
        <input type="number" id="edad${currentInstrument}" class="input-field" min="1" max="5" required oninput="validateInput(this)"><br>
        <label class="block font-medium mb-2"><strong>Idioma (15%) (1-5):</strong></label>
        <input type="number" id="idioma${currentInstrument}" class="input-field" min="1" max="5" required oninput="validateInput(this)"><br>
        <label class="block font-medium mb-2"><strong>Longitud del Instrumento (10%) (1-5):</strong></label>
        <input type="number" id="longitud${currentInstrument}" class="input-field" min="1" max="5" required oninput="validateInput(this)"><br>
        <label class="block font-medium mb-2"><strong>Fecha de Creación y Validación (10%) (1-5):</strong></label>
        <input type="number" id="fecha${currentInstrument}" class="input-field" min="1" max="5" required oninput="validateInput(this)"><br>
        <div id="error-message-${currentInstrument}" class="error-message">Solo puede introducir valores entre 1 y 5.</div>
    `;
    instrumentSection.appendChild(div);
    currentInstrument++;
}

function validateInput(input) {
    const value = parseInt(input.value);
    if (value < 1 || value > 5) {
        input.value = "";
        const errorMessage = document.getElementById(`error-message-${input.id.match(/\d+/)[0]}`);
        errorMessage.style.display = 'block';
    } else {
        const errorMessage = document.getElementById(`error-message-${input.id.match(/\d+/)[0]}`);
        errorMessage.style.display = 'none';
    }
}

function finalizeEvaluation() {
    const tbody = document.getElementById('resultTable').getElementsByTagName('tbody')[0];
    tbody.innerHTML = "";

    for (let i = 1; i < currentInstrument; i++) {
        const name = document.getElementById(`name${i}`).value.trim();
        if (!name) continue;

        const pertinencia = parseInt(document.getElementById(`pertinencia${i}`).value);
        const psicometrico = parseInt(document.getElementById(`psicometrico${i}`).value);
        const pais = parseInt(document.getElementById(`pais${i}`).value);
        const edad = parseInt(document.getElementById(`edad${i}`).value);
        const idioma = parseInt(document.getElementById(`idioma${i}`).value);
        const longitud = parseInt(document.getElementById(`longitud${i}`).value);
        const fecha = parseInt(document.getElementById(`fecha${i}`).value);

        const total = (pertinencia * 0.20) + (psicometrico * 0.20) + (pais * 0.15) + (edad * 0.10) + (idioma * 0.15) + (longitud * 0.10) + (fecha * 0.10);

        const row = tbody.insertRow();
        row.insertCell(0).textContent = name;
        row.insertCell(1).textContent = pertinencia;
        row.insertCell(2).textContent = psicometrico;
        row.insertCell(3).textContent = pais;
        row.insertCell(4).textContent = edad;
        row.insertCell(5).textContent = idioma;
        row.insertCell(6).textContent = longitud;
        row.insertCell(7).textContent = fecha;
        row.insertCell(8).textContent = (total * 20).toFixed(2) + " %";
    }

    document.getElementById('resultTable').style.display = 'block';
}
