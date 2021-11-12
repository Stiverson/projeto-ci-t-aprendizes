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
  tdTelefone = document.createElement('p')
  tdEmail = document.createElement('p')
  tdNomeEscola = document.createElement('p')
  tdEscolaridade = document.createElement('p')

  // tdId.innerHTML = dadoPessoal.idPessoa
  tdNome.innerHTML = dadoPessoal.nome
  tdIdade.innerHTML = dadoPessoal.idade
  tdNacionalidade.innerHTML = dadoPessoal.nacionalidade
  tdEstadoCivil.innerHTML = dadoPessoal.estadoCivil
  tdDataNascimento.innerHTML = dadoPessoal.dataNascimento
  tdEndereco.innerHTML = dadoPessoal.endereco
  tdTelefone.innerHTML = dadoPessoal.telefone
  tdEmail.innerHTML = dadoPessoal.email
  tdNomeEscola.innerHTML = dadoPessoal.nomeEscola
  tdEscolaridade.innerHTML = dadoPessoal.escolaridade

  // linha.appendChild(tdId)
  linha.appendChild(tdNome)
  linha.appendChild(tdIdade)
  linha.appendChild(tdNacionalidade)
  linha.appendChild(tdEstadoCivil)
  linha.appendChild(tdDataNascimento)
  linha.appendChild(tdEndereco)
  linha.appendChild(tdTelefone)
  linha.appendChild(tdEmail)
  linha.appendChild(tdNomeEscola)
  linha.appendChild(tdEscolaridade)

  return linha
}

function criaCurso(curso) {
  estudo = document.createElement('tr')

  tdTitulo = document.createElement('p')
  tdInstituicao = document.createElement('p')

  // tdId.innerHTML = dadoPessoal.idPessoa
  tdTitulo.innerHTML = curso.titulo
  tdInstituicao.innerHTML = curso.instituicao

  // linha.appendChild(tdId)
  estudo.appendChild(tdTitulo)
  estudo.appendChild(tdInstituicao)

  return estudo
}

function criaFilme(filmes) {
  cine = document.createElement('tr')

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

  cine.appendChild(tdTitulo)
  cine.appendChild(tdDiretor)
  cine.appendChild(tdElenco)
  cine.appendChild(tdElenco)
  cine.appendChild(tdData_Lancamento)
  cine.appendChild(tdDuracao)
  cine.appendChild(tdStreaming)

  return cine
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

// function filmesMikael() {
//   let filmes = JSON.parse(
//     fazGet('http://localhost:8080/v1/filmes/1'),
//     (key, value) => {
//       return value
//     }
//   )
//   filmes.data.forEach(element => {
//     let cine = criaFilme(element)
//     filme.appendChild(cine)
//   })
// }

dadoPessoalMikael()
dadoPessoalGabi()
cursosMikael()
cursosGabi()
// filmesMikael()
