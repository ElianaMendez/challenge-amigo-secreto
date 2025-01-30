// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {

    if(amigos !== ""){
        //obtengo el dato ingresado en el input
        let amigo = document.getElementById('amigo').value;
    
        //mostrar lista de amigos
        document.getElementById('listaAmigos').textContent = amigo; 
        limpiarCaja();
    } else {
        alert('Por favor inserte un nombre');
    }
   
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}
 

