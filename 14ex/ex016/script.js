function contagem() {
    var ini = document.getElementById('txti').value
    var iniN = Number(ini)
    var fim = document.getElementById('txtf').value
    var fimN = Number(fim)
    var passo = document.getElementById('txtp').value
    var passoN = Number(passo)
    var res = document.getElementById('resultado')

    if(ini.length == 0 || fim.length == 0 ||  passo.length == 0) {
        res.innerText = 'Impossível contar!'
    } else {
        if(passoN == 0) {
            alert('Passo inválido! Considerando PASSO 1')
            passoN = 1
        } else if(passoN < 0) {
            passoN *= -1;
        }
        document.getElementById('txtp').value = `${passoN}`
        
        res.innerHTML = 'Contando:<br>'
        if(iniN <= fimN) {
            // Contagem crescente
            while(iniN <= fimN) {
                res.innerText += ` ${iniN} \u{1F449}`
                iniN += passoN
            }
            res.innerText += ` \u{1F3C1}`
        } else {
            // Contagem decrescente
            while(iniN >= fimN) {
                res.innerText += ` ${iniN} \u{1F449}`
                iniN -= passoN
            }
            res.innerText += ` \u{1F3C1}`
        }
    }
}