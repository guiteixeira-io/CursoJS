function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora < 12){
        //bom dia
        img.src = 'foto-manha.png'
        document.body.style.background = '#F9E48F'
    } else if (hora >= 12 && hora <18) {
        //boa tarde
        img.src = 'foto-tarde.png'
        document.body.style.background = '#AA2900'
    } else {
        //boa noite
        img.src = 'foto-noite.png'
        document.body.style.background = '#01103B'
    }

}