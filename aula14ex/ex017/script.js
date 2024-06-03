function gerar(){
    var n = Number(document.querySelector('input#numero').value)
    var tab = document.querySelector('select#setab')

    tab.innerHTML = ''

    for(var c = 1;c <= 10; c++){
        var item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
    }

}