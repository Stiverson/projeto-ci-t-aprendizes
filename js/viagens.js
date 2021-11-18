function fazGet(url) {
  let request = new XMLHttpRequest()
  request.open('GET', url, false)
  request.send()
  return request.responseText
}

function criaLinha(viagens) {
  linha = document.createElement('tr')

  tdCidade = document.createElement('p')
  tdData = document.createElement('p')
  tdLocal = document.createElement('p')

  tdCidade.innerHTML = viagens.cidade
  tdData.innerHTML = viagens.data
  tdLocal.innerHTML = viagens.local

  linha.appendChild(tdCidade)
  linha.appendChild(tdData)
  linha.appendChild(tdLocal)

  return linha
}

function criaViagem() {
  let viagens = JSON.parse(
    fazGet('http://localhost:8080/v1/viagens/1'),
    (key, value) => {
      return value
    }
  )
  viagens.data.forEach(element => {
    let linha = criaLinha(element)
    tabela.appendChild(linha)
  })
}

function criaViagem2() {
  let viagens = JSON.parse(
    fazGet('http://localhost:8080/v1/viagens/2'),
    (key, value) => {
      return value
    }
  )
  viagens.data.forEach(element => {
    let linha = criaLinha(element)
    tabela2.appendChild(linha)
  })
}

criaViagem()
criaViagem2()
