function fazGet(url) {
  let request = new XMLHttpRequest()
  request.open('GET', url, false)
  request.send()
  return request.responseText
}

function criaLinha(dadoPessoal) {
  linha = document.createElement('tr')

  tdTelefone = document.createElement('p')
  tdEmail = document.createElement('p')

  tdTelefone.innerHTML = dadoPessoal.telefone
  tdEmail.innerHTML = dadoPessoal.email

  linha.appendChild(tdTelefone)
  linha.appendChild(tdEmail)

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
    contato.appendChild(linha)
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
    contato2.appendChild(linha)
  })
}

dadoPessoalMikael()
dadoPessoalGabi()
