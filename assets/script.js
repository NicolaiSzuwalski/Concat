
// Disse 5 opgaver er til at træne string sammensætning i javaScript med string+string metoden.



// Sammensætning af navn:
// Opret to variabler, fornavn og efternavn, og tildel dem dine fornavn og efternavn. Lav en ny variabel, fuldtNavn, der indeholder hele dit navn ved at sammensætte fornavn og efternavn. Udskriv fuldtNavn til konsollen.

fName = 'Nicolai';
eName = 'Szuwalski';
FullName = fName + ' ' + eName;
console.log(FullName);


// Velkomstbesked:
// Lav en variabel, brugernavn, og tildel den værdien af dit valgte brugernavn. Opret en velkomstbesked, der siger "Velkommen, [brugernavn]!" ved at sammensætte strengen "Velkommen, " og brugernavn. Udskriv velkomstbeskeden til konsollen.

username = 'MegaGigaChadPlayer9000WithSkillsOfAmadMan4millionLvlMasteryChampUltraSonicLegend'

greeting = 'Hello' + ' ' + username;

console.log(greeting)



// Bynavn og Postnummer:
// Opret to variabler, by og postnummer, og tildel dem værdierne af din by og dit postnummer. Brug string + string metoden til at sammensætte dem og gem resultatet i en ny variabel kaldet adresse. Udskriv adresse til konsollen.

city = 'Aalborg';
zipcode = '9000';

address = city + ' ' + zipcode; 
console.log(address)



// Ferieplanlægning:
// Lav en variabel, ferieDestination, og tildel den værdien af dit ønskede feriemål. Opret en anden variabel, feriePlan, der indeholder en besked, der siger: "Jeg planlægger at tage til [ferieDestination] i næste uge." Brug string + string metoden til at sammensætte beskeden og udskriv den til konsollen.

destination = 'Spanien'
plan = 'Jeg planlægger at tage til ' + destination +  ' i næste uge.';

console.log(plan)



// Produktnavn og Pris:
// Opret to variabler, produktNavn og produktPris, og tildel dem værdierne af et produkt og dets pris. Lav en besked, der siger: "Det valgte produkt er [produktNavn], og det koster [produktPris] dollars." Brug string + string metoden til at sammensætte beskeden og udskriv den til konsollen.

productName = 'Mega fedt TV';
productPrice = '45.000'

productMessage ='Det valge produkt er ' + productName + ' og det koster ' + productPrice + ' dollars.'

console.log(productMessage)

///// NOTICE ///// NYE OPGAVER HERFRA ///

// Her er 5 opgaver til at træne concat() funktionen.

// 1. Sammensætning af navn med concat()
//    Opret to variabler, `fornavn` og `efternavn`, og tildel dem dine fornavn og efternavn. Lav en ny variabel, `fuldtNavn`, der indeholder hele dit navn ved hjælp af `concat()` funktionen. Udskriv `fuldtNavn` til konsollen.

fornavn = 'Nicolai'
efternavn = 'Szuwalski'

fuldtnavn = fornavn.concat(' ',efternavn)
console.log(fuldtnavn)

// Velkomstbesked med concat()
//    Lav en variabel, `brugernavn`, og tildel den værdien af dit valgte brugernavn. Opret en velkomstbesked ved hjælp af `concat()` funktionen, der siger "Velkommen, [brugernavn]!" Udskriv velkomstbeskeden til konsollen.

brugernavn = 'DobbyTheDementor'
velkomstbesked = 'Velkommen'.concat(' ',brugernavn)
console.log(velkomstbesked)



// Bynavn og Postnummer med concat()
//    Opret to variabler, `by` og `postnummer`, og tildel dem værdierne af din by og dit postnummer. Brug `concat()` funktionen til at sammensætte dem og gem resultatet i en ny variabel kaldet `adresse`. Udskriv `adresse` til konsollen.

bynavn = 'Aalborg';
postnummer = '9000';

addresse = bynavn.concat(' ',postnummer)
console.log(addresse);

// Ferieplanlægning med concat()
//    Lav en variabel, `ferieDestination`, og tildel den værdien af dit ønskede feriemål. Opret en anden variabel, `feriePlan`, der indeholder en besked ved hjælp af `concat()` funktionen, der siger: "Jeg planlægger at tage til [ferieDestination] i næste uge." Udskriv `feriePlan` til konsollen.

ferieDestination = 'Italien'
feriePlan = 'Jeg planlægger at tage til'.concat(' ', ferieDestination)
console.log(feriePlan)

// Produktnavn og Pris med concat()
//    Opret to variabler, `produktNavn` og `produktPris`, og tildel dem værdierne af et produkt og dets pris. Lav en besked ved hjælp af `concat()` funktionen, der siger: "Det valgte produkt er [produktNavn], og det koster [produktPris] dollars." Udskriv beskeden til konsollen.

produktNavn = 'Blæret tæppe'
produktPris = '199'

produktBesked = 'Det valgte produkt er '.concat(produktNavn, ' ', 'og det koster ', produktPris)

console.log(produktBesked)


// du skal arbejde videre i dit repo fra din opgave med string+string, eller alternativt aflevere et nyt repo her.
