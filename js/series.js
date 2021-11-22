function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open('GET', url, false)
    request.send()
    return request.responseText
  }
  
  function criaLinha(series) {
    linha = document.createElement('tr')
  
    tdTitulo = document.createElement('p')
    tdDiretor = document.createElement('p')
    tdPrimeiroEpisodio = document.createElement('p')
    tdUltimoEpisodio = document.createElement('p')
    tdDuracao = document.createElement('p')
    tdElenco = document.createElement('p')
    tdStreaming = document.createElement('p')
    tdOpiniao = document.createElement('p')

  
    tdTitulo.innerHTML = series.titulo
    tdDiretor.innerHTML = series.diretor
    tdPrimeiroEpisodio.innerHTML = series.primeiroEpisodio
    tdUltimoEpisodio.innerHTML = series.ultimoEpisodio
    tdElenco.innerHTML = series.elenco
    tdStreaming.innerHTML = series.streaming
    tdOpiniao.innerHTML = series.opiniao
    
   
    tdStreaming.innerHTML = series.streaming
  
    linha.appendChild(tdTitulo)
    linha.appendChild(tdDiretor)
    linha.appendChild(tdPrimeiroEpisodio)
    linha.appendChild(tdUltimoEpisodio)
    linha.appendChild(tdElenco)
    linha.appendChild(tdStreaming)
    linha.appendChild(tdOpiniao)
  
    return linha
  }
  
  function criaSerie() {
    let series = JSON.parse(
      fazGet('http://localhost:8080/v1/series/1'),
      (key, value) => {
        return value
      }
    )
    series.data.forEach(element => {
      let linha = criaLinha(element)
      tabela.appendChild(linha)
    })
  }
  
  function criaSerie2() {
    let series = JSON.parse(
      fazGet('http://localhost:8080/v1/series/2'),
      (key, value) => {
        return value
      }
    )
    series.data.forEach(element => {
      let linha = criaLinha(element)
      tabela2.appendChild(linha)
    })
  }
  
  criaSerie()
  criaSerie2()
  