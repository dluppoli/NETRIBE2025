

//Dato n numero intero dispari
let n = 5

/*Esercizio 1 - Stampare il triangolo Sx
*
**
***
****
*****
*/

for(let i=1; i<=n; i++)
{
    //construisco una stringa con i *
    let riga = ""
    for(let j=1; j<=i; j++)
        riga += "*"

    
    //stampo la stringa 
    console.log(riga)
}

for(let i=1; i<=n; i++)
    console.log("*".repeat(i))




/*Esercizio 2 - Stampare il triangolo Dx
    *
   **
  ***
 ****
*****
*/

for(let i=1; i<=n; i++)
{
    //construisco una stringa con i *
    let riga = ""

    for(let j=1; j<=n-i; j++)
        riga += " "

    for(let j=1; j<=i; j++)
        riga += "*"

    
    //stampo la stringa 
    console.log(riga)
}

for(let i=1; i<=n; i++)
    console.log(" ".repeat(n-i) + "*".repeat(i))

/*Esercizio 3 - Stampare la clessidra
*****
 ***
  *
 ***
*****
*/

for(let i=0; i<n; i++)
{
    if( i< n/2)
    {
        //Parte alta
        let riga = ""

        for(let j=1; j<=i; j++)
            riga += " "

        for(let j=1; j<=n-2*i; j++)
            riga += "*"

        
        //stampo la stringa 
        console.log(riga)
    }
    else
    {
        //Parte bassa
        let riga = ""

        for(let j=1; j<=n-i-1; j++)
            riga += " "

        for(let j=1; j<=2*i+2-n; j++)
            riga += "*"

        
        //stampo la stringa 
        console.log(riga)
    }
}

for(let i=0; i<n; i++)
{
    if( i< n/2)
    {
        //Parte alta
        console.log(" ".repeat(i) + "*".repeat(n-2*i))
    }
    else
    {
        //Parte bassa
        console.log(" ".repeat(n-i-1) + "*".repeat(2*i+2-n))
    }
}

for(let i=0; i<n; i++)
    console.log(i<n/2 ?  " ".repeat(i) + "*".repeat(n-2*i) : " ".repeat(n-i-1) + "*".repeat(2*i+2-n) )

