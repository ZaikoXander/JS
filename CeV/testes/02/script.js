function carregar() {
    var body = document.body
    body.style.font = 'normal 18pt Arial'
    body.style.padding = '50px'
    var div = document.body.querySelector('div')
    div.style.backgroundColor = 'rgb(156, 27, 156)'
    div.style.borderRadius = '15px'
    var header = document.getElementsByTagName('header')[0]
    header.innerHTML = '<h1>Boi da cara preta</h1>'
    header.style.textAlign = 'center'
    header.style.padding = '5px'
    var h1 = document.querySelector('h1')
    h1.style.textShadow = '3px 3px 10px rgba(0, 0, 0, 0.364)'
    var p = document.querySelector('p')
    p.style.textAlign = 'center'
    p.style.color = 'white'
    p.style.padding = '20px'

    var data = new Date()
    var hora = data.getHours()
    if(hora < 12) {
        p.innerText = 'Buenos Dias!'
    } else if(hora < 18) {
        p.innerText = 'Buenas Tardes!'
    } else {
        p.innerText = 'Buenas Notches!'
    }
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    img.setAttribute('src', 'img/norman.png')
    var res = document.querySelector('div.res')
    res.appendChild(img)
    res.style.textAlign = 'center'
    var foto = document.querySelector('img#foto')
    foto.style.width = '500px'
    foto.style.marginBottom = '15px'
}   