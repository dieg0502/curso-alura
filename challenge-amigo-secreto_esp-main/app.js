// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function agregarAmigo(){
    let listaAmigos = [];
    let amigoIngresado = document.getElementById('amigo').value;
    if(amigoIngresado !== ''){
        listaAmigos.push(amigoIngresado);
    }
    
    console.log(listaAmigos);
    

}