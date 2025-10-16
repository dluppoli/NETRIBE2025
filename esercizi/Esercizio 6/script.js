//Dato un numero n
let n = 50

//Stampare tutti i numeri primi <= n
//Risolvere il problema implementando l'algoritmo di Eratostene (Crivello di Eratostene)

/*Versione 1 - NON OTTIMIZZATA*/
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

for(let i=0; i<numeri.length; i++)
{
    if( numeri[i]!=undefined) console.log(numeri[i])
}

/*Versione 2*/
numeri = [true,true]
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

for(let i=0; i<numeri.length; i++)
{
    if( numeri[i]!=true) console.log(i)
}