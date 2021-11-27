function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'homembebe.png')
            } else if(idade < 21) {
                // Jovem
                img.setAttribute('src', 'homemjovem.png')
            } else if(idade < 58) {
                // Adulto
                img.setAttribute('src', 'homemadulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'homemidoso.png')
            }
        } else if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'mulherbebe.png')
            } else if(idade < 21) {
                // Jovem
                img.setAttribute('src', 'mulherjovem.png')
            } else if(idade < 58) {
                // Adulto
                img.setAttribute('src', 'mulheradulta.png')
            } else {
                // Idoso
                img.setAttribute('src', 'mulheridosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}