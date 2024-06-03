function contar() {
    var ini = Number(document.querySelector('input#txtinicio').value)
    var fim = Number(document.querySelector('input#txtfim').value)
    var pas = Number(document.querySelector('input#txtpasso').value)
    var res = document.querySelector('div#res')

    if (ini == 0 || fim == 0 || pas <= 0) {
        res.innerHTML += `Impossivel contar`
        //window.alert('Impossivel contar')
        
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = ini
        var f = fim
        var p = pas
    }

    if (i < f) {
        for (var c = i; c <= f; c += p) {
            res.innerHTML += `${c} 👉`
        }
    } else if (i > f) {
        for (var c = i; c >= f; c -= p) {
            res.innerHTML += `${c} 👉`
        }

    }

    res.innerHTML += `🛑`
}

