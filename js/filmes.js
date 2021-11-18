function fazGet(url) {
  let request = new XMLHttpRequest()
  request.open('GET', url, false)
  request.send()
  return request.responseText
}

function criaLinha(filmes) {
  linha = document.createElement('tr')

  tdTitulo = document.createElement('p')
  tdDiretor = document.createElement('p')
  tdElenco = document.createElement('p')
  tdData_Lancamento = document.createElement('p')
  tdDuracao = document.createElement('p')
  tdStreaming = document.createElement('p')

  tdTitulo.innerHTML = filmes.titulo
  tdDiretor.innerHTML = filmes.diretor
  tdElenco.innerHTML = filmes.elenco
  tdData_Lancamento.innerHTML = filmes.data_lancamento
  tdDuracao.innerHTML = filmes.duracao
  tdStreaming.innerHTML = filmes.streaming

  linha.appendChild(tdTitulo)
  linha.appendChild(tdDiretor)
  linha.appendChild(tdElenco)
  linha.appendChild(tdElenco)
  linha.appendChild(tdData_Lancamento)
  linha.appendChild(tdDuracao)
  linha.appendChild(tdStreaming)

  return linha
}

function criaFilme() {
  let filmes = JSON.parse(
    fazGet('http://localhost:8080/v1/filmes/1'),
    (key, value) => {
      return value
    }
  )
  filmes.data.forEach(element => {
    let linha = criaLinha(element)
    tabela.appendChild(linha)
  })
}

function criaFilme2() {
  let filmes = JSON.parse(
    fazGet('http://localhost:8080/v1/filmes/2'),
    (key, value) => {
      return value
    }
  )
  filmes.data.forEach(element => {
    let linha = criaLinha(element)
    tabela2.appendChild(linha)
  })
}

criaFilme()
criaFilme2()
