// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    if (nombreAmigo.trim() === "") {
        alert("por favor, inserte nombre");     
    } else { 
        amigos.push(nombreAmigo);
        document.querySelector("#amigo").value = "";
        mostrarLista();
    }
}

function mostrarLista () {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
        const elemento = amigos [i]; 
        let listaHtml = document.createElement("li");
        listaHtml.textContent = elemento;
        
        lista.appendChild(listaHtml);
    }



}
function sortearAmigo () {
    if  (amigos.length === 0) {
        alert ("Ingrese un nombre");
    }
     else { 
        let selecionAleatoria = Math.floor(Math.random() * (amigos.length));
        let resultado = document.querySelector("#resultado");
        resultado.innerHTML=amigos[selecionAleatoria];
    }  
}
