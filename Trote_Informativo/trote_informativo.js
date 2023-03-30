var bntR = document.getElementById("bntRegras")
var contentR = document.getElementById("conteudoRegras")

bntR.addEventListener('click', function() {
    if(contentR.style.display === 'none') 
        {contentR.style.display = 'block'
        contentO.style.display = 'none'
        contentE.style.display = 'none'
        }
    else {
        contentR.style.display = 'none'
    }
}

)

var bntO = document.getElementById("bntObjetivos")
var contentO = document.getElementById("conteudoObjetivos")

bntO.addEventListener('click', function() {
    if(contentO.style.display === 'none') 
        {contentO.style.display = 'block'
        contentR.style.display = 'none'
        contentE.style.display = 'none'
        }
    else {
        contentO.style.display = 'none'
    }
}

)

var bntE = document.getElementById("bntEquipes")
var contentE = document.getElementById("conteudoEquipes")

bntE.addEventListener('click', function() {
    if(contentE.style.display === 'none') 
        {contentE.style.display = 'block'
        contentR.style.display = 'none'
        contentO.style.display = 'none'
        }
    else {
        contentE.style.display = 'none'
    }
}

)

function trocaSwitch() {
    // vamos obter o doc HTML(root)
    const html = document.documentElement
    //verificar se no doc tem a classe claro
    if (html.classList.contains('claro')) {
        html.classList.remove('claro')
    }
    else {
        html.classList.add('claro')
    }
}