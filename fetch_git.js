var route = "https://github.com/juanrfigueiredo/teste/blob/main/teste.txt"
var requestParams = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors',
  cache: 'default'
}



async function fetch2(url, params) {
    try {
        let response = await fetch(url, params)
        let data = await response.json()
        const json = JSON.parse(data.payload.blob.rawLines.join('\n'));
        if(json.value === 0){
          console.log("nada acontece feijoada")
        } else {
          const matrix = require('./matrix.js')
          matrix.matrix(1000)
        }
      } catch (error) {
        console.log(error)
    }
}

fetch2(route, requestParams)

