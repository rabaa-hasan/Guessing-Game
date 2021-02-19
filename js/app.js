'use strict';


let userName = prompt('what is your name?');
function greetingMsg() {
  let message = 'Hello ' + userName + '! 😄 '+ '\nThere are seven questions to know how much do you know about me !!';
  alert(message);
}
greetingMsg();



let count = 0;




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




  secondQuestion('This is right i love programming 😄', 'Why not 😕', ' Do I love Programming?');
  function secondQuestion(correctMessage, WrongMessage, question) {
    let progrogramming = prompt(question).toLowerCase();
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





  thirdQuestion('This is right my major in College Was IS&N 😄', 'This is Wrong ☹️', 'Does Information Security & Networks my major at college?');
  function thirdQuestion(correctMessage, WrongMessage, question) {
    let major = prompt(question).toLowerCase();

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




  fourthQuestion('Right Winter is my Fav Season 😄', 'This is Wrong ☹️ \n winter is my favourite season ', 'Does Spring my favourite season?');
  function fourthQuestion(correctMessage, WrongMessage, question) {
    let season = prompt(question).toLowerCase();

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




  fifthQuestion('This is right I have one 🐦 ', 'This is Wrong I have one ☹️', ' Do I have a parrot?');
  function fifthQuestion(correctMessage, WrongMessage, question) {
    let parrot = prompt(question).toLowerCase();

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



sixthQuestion('This is right you got it 😄 \n I am 20 years old', 'you did not guess it ☹️   \n  This is too high  Try again', 'you did not guess it ☹️   \n This is too low  Try again', ' How old am I ?');
function sixthQuestion(correct, tooHigh, tooLow, question) {
  let age = Number(prompt(question));
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




seventhQuestion('Great 😄 \n Orange is my favourite fruit ', 'you did not guess it ☹️   \n  Try again ', 'What is my favourite fruit?');
function seventhQuestion(correct, wrong, question) {

  let arr0 = ['orange', 'watermelon', 'apple', 'peach '];
  let fruit = prompt(question).toLowerCase();


  for (let i = 0; i < 5; i++) {
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
  alert('your score is : ' + count + '  of  7 ' + '\nThanks for your precious time 😄');
}
