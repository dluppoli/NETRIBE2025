//Dato il seguente array di stringhe, svolgere i seguenti esercizi UTILIZZANDO LE LAMBDA EXPRESSION
let cartoonCharacters = [
  "Mickey Mouse", "Donald Duck", "Goofy", "Minnie Mouse", "Daisy Duck",
  "Pluto", "Bugs Bunny", "Daffy Duck", "Porky Pig", "Elmer Fudd",
  "Tweety", "Sylvester", "Road Runner", "Wile E. Coyote", "Yosemite Sam",
  "Tom", "Jerry", "Scooby-Doo", "Shaggy", "Fred",
  "Daphne", "Velma", "SpongeBob SquarePants", "Patrick Star", "Squidward Tentacles",
  "Mr. Krabs", "Sandy Cheeks", "Plankton", "Gary", "Popeye",
  "Olive Oyl", "Bluto", "Betty Boop", "Felix the Cat", "Richie Rich",
  "Casper", "The Pink Panther", "Inspector Gadget", "George Jetson", "Jane Jetson",
  "Elroy Jetson", "Judy Jetson", "Astro", "Fred Flintstone", "Wilma Flintstone",
  "Barney Rubble", "Betty Rubble", "Bamm-Bamm Rubble", "Pebbles Flintstone", "Yogi Bear",
  "Boo-Boo Bear", "Cindy Bear", "Huckleberry Hound", "Top Cat", "Snagglepuss",
  "Magilla Gorilla", "Winnie the Pooh", "Tigger", "Piglet", "Eeyore",
  "Christopher Robin", "Kanga", "Roo", "Owl", "Gopher",
  "Baloo", "King Louie", "Bagheera", "Shere Khan", "Kaa",
  "Mowgli", "Peter Pan", "Tinker Bell", "Captain Hook", "Smee",
  "Ariel", "Flounder", "Sebastian", "Ursula", "Simba",
  "Mufasa", "Scar", "Timon", "Pumbaa", "Aladdin",
  "Jasmine", "Genie", "Jafar", "Abu", "Rajah",
  "Hercules", "Megara", "Hades", "Phil", "Tarzan",
  "Jane", "Clayton", "Mulan", "Mushu", "Shang",
  "Stitch", "Lilo", "Angel", "Jumba", "Pleakley"
];



//1 - Ordinare in ordine alfabetico decrescente (e stampare su video)
cartoonCharacters
  .sort( (a, b) => a < b ? 1 : -1 )
  .forEach( e => console.log(e) )


//2 - Ordinare per lunghezza della stringa crescente (e stampare a video)
cartoonCharacters
  .sort( (a,b) => a.length - b.length  )
  .forEach( e => console.log(e) )


//3 - Determinare se c'è un personaggio il cui nome completo è più corto di 5 caratteri (stampare true o false)
console.log( cartoonCharacters.some( e => e.length<5) )
console.log( cartoonCharacters.find( e => e.length<5) != undefined )

//4 - Stampare tutti i personaggi della famiglia Flintstone
cartoonCharacters
  .filter( e => e.endsWith('Flintstone') )
  .forEach( e => console.log(e) )

//5 - Creare un nuovo array che contiene tutti i nomi in lettere maiuscole (e stampare a video)
cartoonCharacters
  .map( e => e.toUpperCase() )
  .forEach( e => console.log(e) )

//6 - Calcolare la somma delle lunghezze dei nomi dei personaggi (usando reduce)
console.log( cartoonCharacters.reduce( (t,e) => t + e.length, 0 ) )


//7 - Identificare e stampare a video il personaggio con il nome più lungo
console.log(cartoonCharacters.reduce( (t,e) => e.length > t.length ? e : t))


console.log(cartoonCharacters.sort( (a,b) => b.length - a.length  )[0])






