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
       s += `<div class="number ${risultato[i] ? 'noprimo':'primo'}">${i}</div>`
    }
    ph.innerHTML = s
}

function cancella()
{
    document.getElementById('placeholder').innerHTML = ''
}
