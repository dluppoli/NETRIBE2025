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

function calcola()
{
    let n = document.getElementById("n").value
    
    let risultato = eratostene(n)
 
    
    let ph = document.getElementById('placeholder')
    let soloPrimi = document.getElementById('soloprimi').checked


    //<div class="number primo/noprimo">3</div>
    let s = ""
    for(let i=1; i<risultato.length; i++)
    {
        /*
        if( risultato[i]==true)
            ph.innerHTML += `<div class="number noprimo">${i}</div>`
        else
            ph.innerHTML += `<div class="number primo">${i}</div>`
        */
       if( risultato[i]==false || !soloPrimi )
            s += `<div class="number ${risultato[i] ? 'noprimo':'primo'}">${i}</div>`
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