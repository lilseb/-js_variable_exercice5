let chiffre1 = 13
let chiffre2 = 56

let resultat1= chiffre1 + chiffre2;
alert(resultat1);

let resultat2= chiffre1 - chiffre2;
alert(resultat2)

let resultat3= chiffre1 / chiffre2;
alert(resultat3)

let resultat4= chiffre1 * chiffre2;
alert(resultat4)

let askage = prompt("Quel age avez-vous?");
console.log(askage);

let chiffre3 = parseInt(askage);

let askname= prompt ("ton nom?");
console.log(askname);

console.log(`${askname} a ${askage} ans cette année.`);

console.log(`${askname} a ${chiffre3 + 3} ans cette année.`);