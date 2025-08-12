// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
function agregarAmigo(){
    
    let amigoIngresado = document.getElementById('amigo').value.trim();

    if(!validarAmigoIngresado(amigoIngresado)){
        return;
    }

    if(verificarAmigosLista(amigoIngresado)){
        return;
    }
    listaAmigos.push(amigoIngresado); 
    
    document.getElementById('amigo').value = '';

    mostrarListaAmigos();

}
function validarAmigoIngresado(amigo){
    if(amigo === ''){
        alert('Por favor, ingresa un nombre válido.');
        return false;
    }
    return true;
}
function verificarAmigosLista(amigo){
    if(listaAmigos.includes(amigo)){
        alert('El amigo ya se encuentra en la lista.');
        return true;
    }
    return false;
}

function mostrarListaAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for(let amigo of listaAmigos){
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    }
}
function sortearAmigo(){
    if(listaAmigos.length === 0){
        alert('No se incluyeron amigos en la lista.');
        return;
    }

    let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    let resultado = document.getElementById('resultado');
    resultado.textContent = 'El amigo secreto sorteado es: ' + amigoSorteado;
}