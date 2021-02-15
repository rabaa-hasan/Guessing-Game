'use strict';

let userName = prompt('what is your name?');
alert('Hello! '+ userName);
console.log(userName);


let asac = prompt('Am I Studying at (ASAC)?');
asac=asac.toLowerCase();
console.log(asac.toLowerCase());

if (asac === 'y' || asac === 'ye' || asac === 'yes') {
  alert('This is right I am Studying in Asac');
}else if (asac === 'n' || asac === 'no'){
  alert('This is Wrong I am Studying in Asac');
}


let progrogramming = prompt('Do I love Programming?');
progrogramming=progrogramming.toLowerCase();
console.log(progrogramming.toLowerCase());

if (progrogramming === 'y' || progrogramming === 'ye' || progrogramming === 'yes') {
  alert('This is right I Love Programming');
}else if (progrogramming === 'n' || progrogramming === 'no'){
  alert('Why not? :/ ');
}

let major = prompt('Does Information Security & Networks my major at college?');
major=major.toLowerCase();
console.log(major);

if (major === 'y' || major === 'ye' || major === 'yes') {
  alert('This is right my major in College Was IS&N ');
}else if (major === 'n' || major === 'no'){
  alert('This is Wrong -.-');
}

let season = prompt('Does winter my favourite season?');
season=season.toLowerCase();
console.log(season);

if (season === 'y' || season === 'ye' || season === 'yes') {
  alert('Right Winter is my Fav Season :)');
}else if (season === 'n' || season === 'no'){
  alert('This is Wrong -.-');
}

let parrot = prompt(' Do I have a parrot?');
parrot=parrot.toLowerCase();
console.log(parrot);

if (parrot === 'y' || parrot === 'ye' || parrot === 'yes') {
  alert('This is right I have one :D ');
}else if (parrot === 'n' || parrot === 'no'){
  alert('This is Wrong I do have one ');
}
