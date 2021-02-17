// 'use strict';

// let userName = prompt('what is your name?').toUpperCase();
// alert('Hello! ' + userName);
// //console.log(userName);

// let count = 0;


// let asac = prompt('Am I Studying at (ASAC)?');
// asac = asac.toLowerCase();
// //console.log(asac.toLowerCase());

// while (asac !== 'yes' && asac !== 'y' && asac !== 'ye' && asac !== 'no' && asac !== 'n') {
//   asac = prompt('Am I Studying at (ASAC)?').toLowerCase();
// }

// if (asac === 'y' || asac === 'ye' || asac === 'yes') {
//   alert('This is right I am Studying in Asac');
//   count++;
// } else if (asac === 'n' || asac === 'no') {
//   alert('This is Wrong I am Studying in Asac');
// }



// let progrogramming = prompt('Do I love Programming?');
// progrogramming = progrogramming.toLowerCase();
// //console.log(progrogramming.toLowerCase());

// while (progrogramming !== 'yes' && progrogramming !== 'y' && progrogramming !== 'ye' && progrogramming !== 'no' && progrogramming !== 'n') {
//   progrogramming = prompt('Do I love Programming?').toLowerCase();
// }

// if (progrogramming === 'y' || progrogramming === 'ye' || progrogramming === 'yes') {
//   alert('This is right I Love Programming');
//   count++;
// } else if (progrogramming === 'n' || progrogramming === 'no') {
//   alert('Why not? :/ ');
// }

// let major = prompt('Does Information Security & Networks my major at college?');
// major = major.toLowerCase();
// //console.log(major);

// while (major !== 'yes' && major !== 'y' && major !== 'ye' && major !== 'no' && major !== 'n') {
//   major = prompt('Does Information Security & Networks my major at college?').toLowerCase();
// }

// if (major === 'y' || major === 'ye' || major === 'yes') {
//   alert('This is right my major in College Was IS&N ');
//   count ++;
// } else if (major === 'n' || major === 'no') {
//   alert('This is Wrong -.-');
// }

// let season = prompt('Does Spring my favourite season?');
// season = season.toLowerCase();
// //console.log(season);

// while (season !== 'yes' && season !== 'y' && season !== 'ye' && season !== 'no' && season !== 'n') {
//   season = prompt('Does Spring my favourite season?').toLowerCase();
// }

// if (season === 'y' || season === 'ye' || season === 'yes') {
//   alert('This is Wrong -.- \n winter is my favourite season ');
// } else if (season === 'n' || season === 'no') {
//   alert('Right Winter is my Fav Season :)');
//   count++;
// }

// let parrot = prompt(' Do I have a parrot?');
// parrot = parrot.toLowerCase();
// //console.log(parrot);

// while (parrot !== 'yes' && parrot !== 'y' && parrot !== 'ye' && parrot !== 'no' && parrot !== 'n') {
//   parrot = prompt(' Do I have a parrot?').toLowerCase();
// }

// if (parrot === 'y' || parrot === 'ye' || parrot === 'yes') {
//   alert('This is right I have one :D ');
//   count++;
// } else if (parrot === 'n' || parrot === 'no') {
//   alert('This is Wrong I do have one ');
// }


// let age = Number(prompt('How old am I ?'));
// //console.log(age);

// while (age === ' ' && age === null) {
//   age = Number(prompt('How old am I ?'));
// }

// for (let i = 0; i <= 3 ; i++) {
//   if (age > 20) {
//     alert('you did not guess it ☹️   \n  This is too high  Try again');
//     age = Number(prompt('How old am I ?'));
//   }
//   if (age < 20) {
//     alert('you did not guess it ☹️   \n This is too low  Try again');
//     age = Number(prompt('How old am I ?'));
//   }
//   if (age === 20) {

//     alert('This is right you got it 😄 \n I am 20 years old ');
//     count++;
//     { break; }
//   }

// }
// let arr0=[ 'orange' , 'watermelon' , 'apple' , 'peach '];
// let fruit=prompt('What is my favourite fruit?').toLowerCase();
// //console.log(arr0);

// for(let i=0; i<=5 ;i++){
//   if (fruit === arr0[0]){
//     alert('Great 😄 \n Orange is my favourite fruit ');
//     count++;
//     {break;}
//   }
//   else{
//     alert('you did not guess it ☹️   \n  Try again ');
//     fruit=prompt('What is my favourite fruit?').toLowerCase();
//   }
// }
// alert ('your score is : ' + count + '  of  7 ');

// let asac = prompt('Am I Studying at (ASAC)?');
// asac = asac.toLowerCase();
// //console.log(asac.toLowerCase());

// while (asac !== 'yes' && asac !== 'y' && asac !== 'ye' && asac !== 'no' && asac !== 'n') {
//   asac = prompt('Am I Studying at (ASAC)?').toLowerCase();
// }

// if (asac === 'y' || asac === 'ye' || asac === 'yes') {
//   alert('This is right I am Studying in Asac');
//   count++;
// } else if (asac === 'n' || asac === 'no') {
//   alert('This is Wrong I am Studying in Asac');
// }


// let asac = prompt('Am I Studying at (ASAC)?');
// asac = asac.toLowerCase();
// //console.log(asac.toLowerCase());

// while (asac !== 'yes' && asac !== 'y' && asac !== 'ye' && asac !== 'no' && asac !== 'n') {
//   asac = prompt('Am I Studying at (ASAC)?').toLowerCase();
// }

// if (asac === 'y' || asac === 'ye' || asac === 'yes') {
//   alert('This is right I am Studying in Asac');
//   count++;
// } else if (asac === 'n' || asac === 'no') {
//   alert('This is Wrong I am Studying in Asac');
// }

let userName = prompt('what is your name?');
function greetingMsg() {
  let message = 'Hello ' + userName;
  alert(message);
}
greetingMsg();

let count = 0;

// The First Question.
yesOrNoQuestions('This is right I am Studying in Asac', 'This is Wrong I am Studying in Asac', 'Am I Studying at (ASAC)?');
function yesOrNoQuestions(correctMessage, WrongMessage, question) {
  let asac = prompt(question).toLowerCase();
  while (asac !== 'yes' && asac !== 'y' && asac !== 'no' && asac !== 'n') {
    asac = prompt(question).toLowerCase();
  }
  if (asac === 'y' || asac === 'yes') {
    alert(correctMessage);
    count++;
  } else if (asac === 'n' || asac === 'no') {
    alert(WrongMessage);
  }

  // The Second Question:
  secondQuestion('This is right i love programming', 'this is wrong i do love programming', ' Do I love Programming?');
  function secondQuestion(correctMessage, WrongMessage, question) {
    let progrogramming = prompt(question).toLowerCase();

    //console.log(progrogramming.toLowerCase());

    while (progrogramming !== 'yes' && progrogramming !== 'y' && progrogramming !== 'no' && progrogramming !== 'n') {
      progrogramming = prompt('Do I love Programming?').toLowerCase();
    }

    if (progrogramming === 'y' || progrogramming === 'yes') {
      alert(correctMessage);
      count++;
    } else if (progrogramming === 'n' || progrogramming === 'no') {
      alert(WrongMessage);
    }
  }

  //The Third Question:
  thirdQuestion('This is right my major in College Was IS&N ', 'This is Wrong -.-', 'Does Information Security & Networks my major at college?');
  function thirdQuestion(correctMessage, WrongMessage, question) {
    let major = prompt(question).toLowerCase();
    //console.log(major);

    while (major !== 'yes' && major !== 'y' && major !== 'no' && major !== 'n') {
      major = prompt('Does Information Security & Networks my major at college?').toLowerCase();
    }

    if (major === 'y' || major === 'yes') {
      alert(correctMessage);
      count++;
    } else if (major === 'n' || major === 'no') {
      alert(WrongMessage);
    }
  }
  // Fourth Question
  fourthQuestion('Right Winter is my Fav Season :)', 'This is Wrong -.- \n winter is my favourite season ', 'Does Spring my favourite season?');
  function fourthQuestion(correctMessage, WrongMessage, question) {
    let season = prompt(question).toLowerCase();
    //console.log(season);

    while (season !== 'yes' && season !== 'y' && season !== 'no' && season !== 'n') {
      season = prompt('Does Spring my favourite season?').toLowerCase();
    }

    if (season === 'y' || season === 'yes') {
      alert(WrongMessage);
    } else if (season === 'n' || season === 'no') {
      alert(correctMessage);
      count++;
    }
  }
  // Fifth Question
  fifthQuestion('This is right I have one :D ', 'This is Wrong I do have one ', ' Do I have a parrot?');
  function fifthQuestion(correctMessage, WrongMessage, question) {
    let parrot = prompt(question).toLowerCase();
    //console.log(parrot);

    while (parrot !== 'yes' && parrot !== 'y' && parrot !== 'no' && parrot !== 'n') {
      parrot = prompt(' Do I have a parrot?').toLowerCase();
    }

    if (parrot === 'y' || parrot === 'yes') {
      alert(correctMessage);
      count++;
    } else if (parrot === 'n' || parrot === 'no') {
      alert(WrongMessage);
    }

  }
}
// sixth question
let corAge = (20);
sixthQuestion('This is right you got it 😄 \n I am 20 years old', 'you did not guess it ☹️   \n  This is too high  Try again', 'you did not guess it ☹️   \n This is too low  Try again', ' How old am I ?');
function sixthQuestion(correct, tooHigh, tooLow, question) {
  let age = Number(prompt(question));
  // console.log(age);
  // if (isNaN(age)) {
  //   alert('please enter a number!');
  // }
  //age = Number(prompt(question));

  while (age === ' ' && age === null) {
    age = Number(prompt(question));
  }

  for (let i = 0; i < 3; i++) {
    if (isNaN(age)) {
      alert('please enter a number!');
      age = Number(prompt(question));
    }
    else if (age > 20) {
      alert(tooHigh);
      age = Number(prompt(question));
    }
    else if (age < 20) {
      alert(tooLow);
      age = Number(prompt(question));
    }
    else if (age === 20) {

      alert(correct);
      count++;
      { break; }
    }


  }

}

// else (age!==corAge) {
//   alert('You exceed your attempts the Correct answer ' + userName + ' is 26');}






// Seventh question.

seventhQuestion('Great 😄 \n Orange is my favourite fruit ', 'you did not guess it ☹️   \n  Try again ', 'What is my favourite fruit?');
function seventhQuestion(correct, wrong, question) {

  let arr0 = ['orange', 'watermelon', 'apple', 'peach '];
  let fruit = prompt(question).toLowerCase();
  //console.log(arr0);

  for (let i = 0; i <= 5; i++) {
    if (fruit === arr0[0]) {
      alert(correct);
      count++;
      { break; }
    }
    else {
      alert(wrong);
      fruit = prompt(question).toLowerCase();
    }
  }
  alert('fruits are ' + arr0);
  alert('your score is : ' + count + '  of  7 ');
}
