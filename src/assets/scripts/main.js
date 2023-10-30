function ver_hora(){
    var data = new Date()
    var hora = data.getHours()
    var txt = document.querySelector("#text")
    var img = document.querySelector("#img")

    if(hora >= 0 && hora < 12){
        txt.innerHTML = `Agora são ${hora} horas, bom dia !`
        img.src = '../src/assets/images/bomdia.png'
        document.body.style.background = '#ffef9f'
    }

    else if(hora >= 12 && hora < 18){
        txt.innerHTML = `Agora são ${hora} horas, boa tarde!`
        img.src = '../src/assets/images/boatarde.webp'
        document.body.style.background = '#ffc300'
    }

    else if(hora >= 18 && hora <=24){
        txt.innerHTML = `Agora são ${hora} horas, boa noite!`
        img.src = '../src/assets/images/boanoite.jfif'
        document.body.style.background = '#415a77'
    }
}
