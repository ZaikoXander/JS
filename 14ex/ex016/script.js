function contagem() {
    var ini = Number(document.getElementById('txti').value)
    var fim = Number(document.getElementById('txtf').value)
    var passo = Number(document.getElementById('txtp').value)
    var res = document.getElementById('resultado')

    if(ini.length == 0 || fim.length == 0 ||  passo.length == 0) {
        res.innerText = 'Impossível contar!'
    } else {
        if(passo == 0) {
            alert('Passo inválido! Considerando PASSO 1')
            passo = 1
        }
        
        res.innerHTML = 'Contando:<br>'
        if(ini <= fim) {
            // Contagem crescente
            while(ini <= fim) {
                res.innerText += ` ${ini} \u{1F449}`
                ini += passo
            }
            res.innerText += ` \u{1F3C1}`
        } else {
            // Contagem decrescente
            while(ini >= fim) {
                res.innerText += ` ${ini} \u{1F449}`
                ini -= passo
            }
            res.innerText += ` \u{1F3C1}`
        }
    }
}