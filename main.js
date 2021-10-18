function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(filmes) {
    console.log(filmes)
    linha = document.createElement("tr");

    tdId = document.createElement("td");
    tdTitulo = document.createElement("td");
    tdDiretor = document.createElement("td");
    tdElenco = document.createElement("td");
    tdData_lancamento = document.createElement("td");
    tdDuracao_do_filme = document.createElement("td");
    tdStreaming = document.createElement("td");


    tdId.innerHTML = filmes.id
    tdTitulo.innerHTML = filmes.titulo
    tdDiretor.innerHTML = filmes.diretor
    tdElenco.innerHTML = filmes.elenco
    tdData_lancamento.innerHTML = filmes.data_lancamento
    tdDuracao_do_filme.innerHTML = filmes.duracao_do_filme
    tdStreaming.innerHTML = filmes.Streaming


    linha.appendChild(tdId);
    linha.appendChild(tdTitulo);
    linha.appendChild(tdDiretor);
    linha.appendChild(tdElenco);
    linha.appendChild(tdData_lancamento);
    linha.appendChild(tdDuracao_do_filme);
    linha.appendChild(tdStreaming);


    return linha;
}

function main() {
    let data = fazGet("http://948rl.mocklab.io/filmes");
    let filmes = JSON.parse(data);
    let tabela = document.getElementById("tabela");
    filmes.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
    // Para cada filmes
        // criar uma linha
        // adicionar na tabela
}

main()