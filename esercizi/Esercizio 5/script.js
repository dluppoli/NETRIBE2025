//Dato il seguente array di stringhe, svolgere i seguenti 3 esercizi
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

//1 - Determinare se c'è un personaggio il cui nome completo è più corto di 5 caratteri (stampare true o false)
let trovato=false;
for(let i=0; i< cartoonCharacters.length /*&& !trovato*/; i++)
{
  if( cartoonCharacters[i].length < 5 ) 
  {
    trovato=true;
    break;
  }
}
console.log(trovato)

//2 - Calcolare la somma delle lunghezze dei nomi dei personaggi (stampare il numero a video)
let somma=0
for(let character of cartoonCharacters)
{
  somma += character.length
}
console.log(somma);

//3 - Identificare e stampare a video il personaggio con il nome più lungo
let personaggioNomeLungo = cartoonCharacters[0]
for(let character of cartoonCharacters)
{
  if( character.length > personaggioNomeLungo.length)
    personaggioNomeLungo = character   
}
console.log(personaggioNomeLungo)


//4 - Stampare tutti i personaggi della famiglia Flintstone
for(let character of cartoonCharacters)
{
  if( character.endsWith('Flintstone')) 
    console.log(character) 
}




