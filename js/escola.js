function fazGet(url) {
  let request = new XMLHttpRequest()
  request.open('GET', url, false)
  request.send()
  return request.responseText
}

function criaLinha(dadoPessoal) {
  linha = document.createElement('tr')

  tdNomeEscola = document.createElement('p')
  tdEscolaridade = document.createElement('p')

  tdNomeEscola.innerHTML = dadoPessoal.nomeEscola
  tdEscolaridade.innerHTML = dadoPessoal.escolaridade

  linha.appendChild(tdNomeEscola)
  linha.appendChild(tdEscolaridade)

  return linha
}

function dadoPessoalMikael() {
  let dadoPessoal = JSON.parse(
    fazGet('http://localhost:8080/v1/dadospessoais/1'),
    (key, value) => {
      return value
    }
  )
  dadoPessoal.data.forEach(element => {
    let linha = criaLinha(element)
    escola.appendChild(linha)
  })
}

function dadoPessoalGabi() {
  let dadoPessoal = JSON.parse(
    fazGet('http://localhost:8080/v1/dadospessoais/2'),
    (key, value) => {
      return value
    }
  )
  dadoPessoal.data.forEach(element => {
    let linha = criaLinha(element)
    escola2.appendChild(linha)
  })
}

dadoPessoalMikael()
dadoPessoalGabi()
