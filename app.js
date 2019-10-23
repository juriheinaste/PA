// Muutujad

// var
// muutujate defineerimine
var nimi = 'Jüri'; // defineerimine
console.log(nimi);
nimi = 'Tom'; // väärtuse omistamine
console.log(nimi);

// muutujate inistialiseerimine
var tervitus;
console.log(tervitus);
tervitus = 'Tere tulemast!';
console.log(tervitus);

// liitnimede kasutamine
var eesNimi = 'Jüri'; //Camel Style
var ees_nimi = 'Jüri'; //PHP Style
var EesNimi = 'Jüri'; //Pascal Style
var eesnimi = 'Jüri';

// let
let pereNimi = 'Heinaste';
console.log(pereNimi);
pereNimi = '?????';
console.log(pereNimi);

// const
const minuEesNimi = 'Jüri';
console.log(minuEesNimi);
// minuEesNimi = 'Jurr';

// const kasutamise näide
const inimene = {nimi : 'Katrin', vanus : 20};
console.table(inimene);
inimene.vanus = 21;
console.table(inimene);

// const kasutamise näide 2
const arvud = [1, 2, 3, 4, 5];
console.log(arvud);
arvud.push(6);
console.log(arvud);