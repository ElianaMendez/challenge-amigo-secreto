var amigos = [];
const listaAmigos = document.getElementById('listaAmigos');

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value.trim();

    if (amigo === "") {
        alert('Por favor inserte un nombre válido');
        return;
    }
    
    if (amigos.includes(amigo)) {
        alert('Ese amigo ya está en la lista');
        return;
    }

    amigos.push(amigo);
    actualizarLista();  //Actualiza la lista después de agregar a un amigo
    limpiarCaja();
}

function actualizarLista() {
    listaAmigos.innerHTML = "";  // Limpiar la lista antes de actualizar

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}