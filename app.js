var amigos = [];
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    limpiarCaja();

    if (amigo == "")
    {
        alert('Por favor inserte un nombre');
        return;
    } else {
      amigos.push(amigo);
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(amigo));
      listaAmigos.appendChild(li);
    }
    
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}
 
        //Agregar nuevo amigo a la lista
        //let nuevoAmigo = document.createElement("li");
        //nuevoAmigo.textContent = amigoIngresado;
        //listaAmigos.appendChild(nuevoAmigo);
