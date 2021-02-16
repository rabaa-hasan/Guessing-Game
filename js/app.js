'use strict';

let userName = prompt('what is your name?').toUpperCase();
alert('Hello! ' + userName);
//console.log(userName);

let count = 0;


let asac = prompt('Am I Studying at (ASAC)?');
asac = asac.toLowerCase();
//console.log(asac.toLowerCase());

while (asac !== 'yes' && asac !== 'y' && asac !== 'ye' && asac !== 'no' && asac !== 'n') {
  asac = prompt('Am I Studying at (ASAC)?').toLowerCase();
}

if (asac === 'y' || asac === 'ye' || asac === 'yes') {
  alert('This is right I am Studying in Asac');
  count++;
} else if (asac === 'n' || asac === 'no') {
  alert('This is Wrong I am Studying in Asac');
}



let progrogramming = prompt('Do I love Programming?');
progrogramming = progrogramming.toLowerCase();
//console.log(progrogramming.toLowerCase());

while (progrogramming !== 'yes' && progrogramming !== 'y' && progrogramming !== 'ye' && progrogramming !== 'no' && progrogramming !== 'n') {
  progrogramming = prompt('Do I love Programming?').toLowerCase();
}

if (progrogramming === 'y' || progrogramming === 'ye' || progrogramming === 'yes') {
  alert('This is right I Love Programming');
  count++;
} else if (progrogramming === 'n' || progrogramming === 'no') {
  alert('Why not? :/ ');
}

let major = prompt('Does Information Security & Networks my major at college?');
major = major.toLowerCase();
//console.log(major);

while (major !== 'yes' && major !== 'y' && major !== 'ye' && major !== 'no' && major !== 'n') {
  major = prompt('Does Information Security & Networks my major at college?').toLowerCase();
}

if (major === 'y' || major === 'ye' || major === 'yes') {
  alert('This is right my major in College Was IS&N ');
  count ++;
} else if (major === 'n' || major === 'no') {
  alert('This is Wrong -.-');
}

let season = prompt('Does Spring my favourite season?');
season = season.toLowerCase();
//console.log(season);

while (season !== 'yes' && season !== 'y' && season !== 'ye' && season !== 'no' && season !== 'n') {
  season = prompt('Does Spring my favourite season?').toLowerCase();
}

if (season === 'y' || season === 'ye' || season === 'yes') {
  alert('This is Wrong -.- \n winter is my favourite season ');
} else if (season === 'n' || season === 'no') {
  alert('Right Winter is my Fav Season :)');
  count++;
}

let parrot = prompt(' Do I have a parrot?');
parrot = parrot.toLowerCase();
//console.log(parrot);

while (parrot !== 'yes' && parrot !== 'y' && parrot !== 'ye' && parrot !== 'no' && parrot !== 'n') {
  parrot = prompt(' Do I have a parrot?').toLowerCase();
}

if (parrot === 'y' || parrot === 'ye' || parrot === 'yes') {
  alert('This is right I have one :D ');
  count++;
} else if (parrot === 'n' || parrot === 'no') {
  alert('This is Wrong I do have one ');
}


let age = Number(prompt('How old am I ?'));
//console.log(age);

while (age === ' ' && age === null) {
  age = Number(prompt('How old am I ?'));
}

for (let i = 0; i <= 3 ; i++) {
  if (age > 20) {
    alert('you did not guess it ☹️   \n  This is too high  Try again');
    age = Number(prompt('How old am I ?'));
  }
  if (age < 20) {
    alert('you did not guess it ☹️   \n This is too low  Try again');
    age = Number(prompt('How old am I ?'));
  }
  if (age === 20) {

    alert('This is right you got it 😄 \n I am 20 years old ');
    count++;
    { break; }
  }

}
let arr0=[ 'orange' , 'watermelon' , 'apple' , 'peach '];
let fruit=prompt('What is my favourite fruit?').toLowerCase();
//console.log(arr0);

for(let i=0; i<=5 ;i++){
  if (fruit === arr0[0]){
    alert('Great 😄 \n Orange is my favourite fruit ');
    count++;
    {break;}
  }
  else{
    alert('you did not guess it ☹️   \n  Try again ');
    fruit=prompt('What is my favourite fruit?').toLowerCase();
  }
}
alert ('your score is : ' + count + '  of  7 ');


