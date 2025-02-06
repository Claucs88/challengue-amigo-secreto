
// Obtener elementos del DOM
const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigo a la lista
function agregarAmigo() {
  const nombreAmigo = inputAmigo.value.trim();
  if (nombreAmigo !== '') {
    amigos.push(nombreAmigo);
    listaAmigos.innerHTML += `<li>${nombreAmigo}</li>`; //Muestra la lista en pantalla
    inputAmigo.value = '';
  } else {
    alert('Ingrese un nombre válido');
  }
}

// Función para sortear amigo secreto
function sortearAmigo() {
  if (amigos.length > 0) {
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];
    resultado.innerHTML = `El amigo secreto es: ${amigoSecreto}`;
  } else {
    alert('No hay amigos en la lista');
  }
}

