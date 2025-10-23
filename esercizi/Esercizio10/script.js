function eratostene(n)
{
    let numeri = [true,true]
    for(let i = 2; i<=n ; i++)
        numeri.push(false)

    for( let i=2; i<= Math.sqrt(n); i++)
    {
        if(numeri[i]==true) continue;

        for(let j=i*2; j<numeri.length; j+=i)
        {
            if( numeri[j]!=true && j%i == 0 ) numeri[j] = true
        }
    }
    return numeri;
}

function eratostene_async(n,soloPrimi)
{
    return fetch(`https://eratosteneservice-18768020259.europe-west8.run.app/${n}/${soloPrimi}`).then( r => r.json() )
}

async function calcola()
{
    let n = document.getElementById("n").value
    let soloPrimi = document.getElementById('soloprimi').checked

    //Versione sync
    //let risultato = eratostene(n)


    //Versione async 1
    //fetch(`https://eratosteneservice-18768020259.europe-west8.run.app/${n}/${soloPrimi ? 1 : 0}`)
    //.then( r => r.json() )
    //.then( risultati => scriviRisultati(risultati) )

    //Versione async 2
    //eratostene_async(n,soloPrimi ? 1 : 0)
    //.then( risultati => scriviRisultati(risultati) )

    //Versione async 3 - await
    //let r = await fetch(`https://eratosteneservice-18768020259.europe-west8.run.app/${n}/${soloPrimi ? 1 : 0}`)
    //let j = await r.json()
    //scriviRisultati(j)

    //Versione async 4 - await
    //let j = await eratostene_async(n,soloPrimi ? 1 : 0)
    scriviRisultati(await eratostene_async(n,soloPrimi ? 1 : 0))
}

function scriviRisultati(risultati)
{
    let ph = document.getElementById('placeholder')
    let soloPrimi = document.getElementById('soloprimi').checked

    let s = ""
    for(let risultato of risultati)
    {
        if( risultato.primo==true || !soloPrimi )
            s += `<div class="number ${risultato.primo ? 'primo':'noprimo'}">${risultato.numero}</div>`
    }
    ph.innerHTML = s
}

function cancella()
{
    document.getElementById('placeholder').innerHTML = ''
}

function calcola2()
{
    console.log('start')

    fetch('https://eratosteneservice-18768020259.europe-west8.run.app/50/0')
    .then(r => r.json() )
    .then(b => b.filter(n => n.primo==true).forEach(element => {
        console.log(element.numero)
    }))

    console.log('end')
}