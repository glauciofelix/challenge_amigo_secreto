//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []; // Array que contém os nomes dos amigos

function adicionarAmigo() {
    // Captura o valor do campo de entrada
    const input = document.getElementById('amigo');
    const nomeAmigo = input.value.trim(); // Remove espaços em branco

    // Valida a entrada
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.'); // Exibe alerta se o campo estiver vazio
        return; // Sai da função se a validação falhar
    }

    // Atualiza o array de amigos
    amigos.push(nomeAmigo); // Adiciona o nome ao array

    // Limpa o campo de entrada
    input.value = ''; // Redefine o campo de texto para uma string vazia

    // Atualiza a lista na interface
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista existente

    amigos.forEach(amigo => {
        const li = document.createElement('li'); // Cria um novo elemento <li>
        li.textContent = amigo; // Define o texto do <li> como o nome do amigo
        listaAmigos.appendChild(li); // Adiciona o <li> à lista
    });
}

    function sortearAmigo() {
        // Implementação da função para sortear amigo secreto
    // Valida que há amigos disponíveis
    if (amigos.length === 0) {
        alert('Não há amigos para sortear. Adicione nomes primeiro.'); // Mensagem de alerta se o array estiver vazio
        return; // Sai da função se não houver amigos
    }

    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Gera um índice entre 0 e o tamanho do array - 1

    // Obtém o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio]; // Acessa o nome correspondente ao índice aleatório

    // Mostra o resultado
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`; // Atualiza o conteúdo do elemento de resultado
}