//Dato un numero n


//Stampare tutti i numeri primi <= n
//Risolvere il problema implementando l'algoritmo di Eratostene (Crivello di Eratostene)

/*Versione 1 - NON OTTIMIZZATA*/
function eratostene_v1(n)
{
    let numeri = []
    for(let i = 2; i<=n ; i++)
        numeri.push(i)

    for( let i=0; i<numeri.length-1; i++)
    {
        if(numeri[i]==undefined) continue;

        for(let j=i+1; j<numeri.length; j++)
        {
            if( numeri[j]!=undefined && numeri[j] % numeri[i] == 0 ) numeri[j] = undefined
        }
    }

    return numeri
}

/*Versione 2*/
function eratostene_v2(n)
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

let n = 50
let risultati = eratostene_v2(n)
for(let i=0; i<=risultati.length; i++)
{
    if( risultati[i]==false) console.log(i)
}

