let amigos = [];

function agregarAmigo() {
    const inputNombre = document.getElementById('amigo');
    const nombre = inputNombre.value.trim();

    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido');
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    inputNombre.value = '';
}

function actualizarLista() {
    const listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = '';

    amigos.forEach(nombre => {
        const li = document.createElement('li');
        li.textContent = nombre;
        listaElement.appendChild(li);
    });
}

function sortearAmigo() {
    
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    const li = document.createElement('li');
    li.textContent = `El amigo sorteado es: ${amigoSorteado}`;
    resultadoElement.appendChild(li);

    amigos = [];
    actualizarLista();
}
