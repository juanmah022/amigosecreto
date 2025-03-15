// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
console.log ();

function agregarNombre() {
    let nombreAmigo = document.querySelector("amigo").Value;
    if (nombreAmigo === "") {
        alert("por favor, inserte nombre");     
    } else { 
        amigos.push(nombreAmigo);
        document.querySelector ("amigo").Value = "";
    }
}

function mostrarLista () {
    let lista = document.querySelector("listaAmigos");
    lista.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
        const elemento = amigos [i]; 
        let listaHtml = document.createElement ("li");
        listaHtml.textContent = elemento;
        lista.appendChild(listaHtml);
    }

}
