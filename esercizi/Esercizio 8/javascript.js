function esercizio1()
{
    console.log(document.getElementsByTagName('div').length)

    let accordion = document.getElementById('accordionEsercizi')
    console.log(accordion.getElementsByTagName('div').length)
    //document.querySelectorAll('#accordionEsercizi div').length

    let containers = document.getElementsByClassName('container')
    console.log(containers.length)

    let contatore = 0
    for(let container of containers)
    {
        if( container.childElementCount > 10) contatore++;
    }
    console.log(contatore)
}

function esercizio2()
{
    let input = document.getElementsByName('echoInput')[0]
    alert(input.value)
}

function esercizio3(n)
{
    let contatore = document.getElementById('contatore')

    let valore = +contatore.innerText
    valore += n
    contatore.innerText = valore
}

function esercizio4_evidenzia()
{
    let par = document.getElementById('promessisposi')
    /*let testo = par.innerText
    let parole = testo.split(' ')

    parole = parole.map( p => p.length<8 ? p : `<span class="evidenzia">${p}</span>`)

    testo = parole.join(' ')
    par.innerHTML = testo*/
    par.innerHTML = par.innerText
                        .split(' ')
                        .map( p => p.length<8 ? p : `<span class="evidenzia">${p}</span>`)
                        .join(' ')
}

function esercizio4_rimuovi()
{
    let par = document.getElementById('promessisposi')
    par.innerHTML = par.innerText
}

function esercizio5()
{
    let div = document.getElementById('divEsercizio5')
    let btnAttivaChiara = document.getElementById('btnAttivaChiara')
    let btnAttivaScura = document.getElementById('btnAttivaScura')

    div.classList.toggle('bg-light')
    div.classList.toggle('text-dark')
    div.classList.toggle('bg-dark')
    div.classList.toggle('text-light')

    btnAttivaChiara.classList.toggle('d-none')
    btnAttivaScura.classList.toggle('d-none')
}

function esercizio5_setup()
{
    let btnAttivaScura = document.getElementById('btnAttivaScura')
    btnAttivaScura.classList.add('d-none')
}

function esercizio6()
{
    let input = document.getElementsByName('newElementInput')[0]
    let tableBody = document.getElementById('tableBody')

    //tableBody.innerHTML +=  `<tr><td>${input.value}</td></tr>`
    let text = document.createTextNode(input.value)
    let td = document.createElement('td')
    let tr = document.createElement('tr')
    td.appendChild(text)
    tr.appendChild(td)
    tableBody.appendChild(tr)
}