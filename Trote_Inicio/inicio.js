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