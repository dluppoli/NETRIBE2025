function giocata(row, col)
{
    if(chiHaVinto()!=undefined)
    {
        alert('Partita terminata')
        return
    }

    let grid = document.getElementById('grid')
    let cella = grid.children[row].children[col]

    if(cella.innerHTML!="")
    {
        alert('Posizione già occupata')
        return
    }

    let turno = document.getElementsByClassName('header')[0].lastElementChild

    cella.innerHTML = turno.outerHTML

    if( turno.innerText == "X")
        turno.outerHTML = '<div class="o">O</div>'
    else
        turno.outerHTML = '<div class="x">X</div>'

    let footer = document.getElementsByClassName('footer')[0]
    let vincitore = chiHaVinto()
    if( vincitore=="x" || vincitore=="o")
        footer.innerText = `Ha vinto ${vincitore.toUpperCase()}`
    else if(vincitore=="pari")
        footer.innerText = 'Partita Pari'
}

function nuovaPartita()
{
    let turno = document.getElementsByClassName('header')[0].lastElementChild
    let footer = document.getElementsByClassName('footer')[0]
    let celle = document.getElementsByClassName('cella')

    turno.outerHTML = '<div class="x">X</div>'
    footer.innerText = ''
    for(let cella of celle)
        cella.innerText = ''
}
