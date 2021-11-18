function fazGet(url) {
  let request = new XMLHttpRequest()
  request.open('GET', url, false)
  request.send()
  return request.responseText
}

function criaLinha(dadoPessoal) {
  linha = document.createElement('tr')

  // tdId = document.createElement('p')
  tdNome = document.createElement('p')
  tdIdade = document.createElement('p')
  tdNacionalidade = document.createElement('p')
  tdEstadoCivil = document.createElement('p')
  tdDataNascimento = document.createElement('p')
  tdEndereco = document.createElement('p')

  // tdId.innerHTML = dadoPessoal.idPessoa
  tdNome.innerHTML = dadoPessoal.nome
  tdIdade.innerHTML = dadoPessoal.idade
  tdNacionalidade.innerHTML = dadoPessoal.nacionalidade
  tdEstadoCivil.innerHTML = dadoPessoal.estadoCivil
  tdDataNascimento.innerHTML = dadoPessoal.dataNascimento
  tdEndereco.innerHTML = dadoPessoal.endereco

  // linha.appendChild(tdId)
  linha.appendChild(tdNome)
  linha.appendChild(tdIdade)
  linha.appendChild(tdNacionalidade)
  linha.appendChild(tdEstadoCivil)
  linha.appendChild(tdDataNascimento)
  linha.appendChild(tdEndereco)

  return linha
}

function criaCurso(curso) {
  estudo = document.createElement('tr')

  tdTitulo = document.createElement('p')
  // tdInstituicao = document.createElement('p')

  tdTitulo.innerHTML = curso.titulo
  // tdInstituicao.innerHTML = curso.instituicao

  estudo.appendChild(tdTitulo)
  // estudo.appendChild(tdInstituicao)

  return estudo
}

// function main() {
//   let info = JSON.parse(
//     fazGet('http://localhost:8080/v1/info'),
//     (key, value) => {
//       return value
//     }
//   )
//   info.data.forEach(element => {
//     let linha = criaLinha(element.dadoPessoal)
//     tabela.appendChild(linha)

//     console.log(element.dadoPessoal)
//   })
// }

function dadoPessoalMikael() {
  let dadoPessoal = JSON.parse(
    fazGet('http://localhost:8080/v1/dadospessoais/1'),
    (key, value) => {
      return value
    }
  )
  dadoPessoal.data.forEach(element => {
    let linha = criaLinha(element)
    tabela.appendChild(linha)
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
    tabela2.appendChild(linha)
  })
}

function cursosMikael() {
  let curso = JSON.parse(
    fazGet('http://localhost:8080/v1/cursos/1'),
    (key, value) => {
      return value
    }
  )
  curso.data.forEach(element => {
    let estudo = criaCurso(element)
    cursos.appendChild(estudo)
  })
}

function cursosGabi() {
  let curso = JSON.parse(
    fazGet('http://localhost:8080/v1/cursos/2'),
    (key, value) => {
      return value
    }
  )
  curso.data.forEach(element => {
    let estudo = criaCurso(element)
    cursos2.appendChild(estudo)
  })
}

dadoPessoalMikael()
dadoPessoalGabi()
cursosMikael()
cursosGabi()
