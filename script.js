
function alterarFundo() {
    var mensagem = document.querySelector('div#mensagem')
    let body = document.querySelector('body')
    let imagem = document.getElementById('imagem')
    let horas = new Date().getHours()

    if (horas < 12) {
        var bomx = 'Bom dia!'
        imagem.style.backgroundImage = "url('images/manha.png')"
        body.style.backgroundColor = ('lightgoldenrodyellow')

    } else if (horas >= 12 && horas < 18) {
        var bomx = 'Boa tarde!'
        imagem.style.backgroundImage = "url('images/tarde.png')"
        body.style.backgroundColor = ('brown')
    } else {
        var bomx = 'Boa noite!'
        imagem.style.backgroundImage = "url('images/noite.png')"
        body.style.backgroundColor = ('darkslateblue')
    }

    mensagem.innerHTML = `Agora são ${horas} horas. ${bomx}`
}


alterarFundo()