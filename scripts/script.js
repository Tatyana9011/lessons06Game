"use strict";
const buttonGame = document.querySelector('.button-game' );

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let closeGame = function (userNumber) {
  if (userNumber === null || !userNumber) {
    alert('Игра окончена');
  }
};

function validationNumber(userNumber) {
  let randomNumber = 15;
  let counter = 0;

  (function valueNumber() {
    if (counter >= 9) {
      console.log(counter);
        let newGame = confirm("Попытки закончились, хотите сыграть еще?");
         if (!newGame) {
          return  closeGame(newGame);
          }
      counter = 0;
      return validationNumber();
    }

    if (!isNumber(userNumber)) {
      userNumber = prompt(' Введите число!');
      if (userNumber === null) {
       return closeGame(userNumber);
      }
      valueNumber();
    }else if (userNumber > 100) {
      userNumber = prompt(
        `Вы ввели число больше 100. Попробуйте еще раз!`);
      if (userNumber === null) {
       return closeGame(userNumber);
      }
      valueNumber();
    } else if (userNumber > randomNumber && userNumber !== 0) {
      counter++;
      userNumber = prompt(
        `Загаданное число меньше. Введите другое число. У вас осталось ${10 - counter} попыток`);
      if (userNumber === null) {
       return closeGame(userNumber);
      }
      valueNumber();
    }else if (userNumber < randomNumber && userNumber!==0) {
      counter++;
      userNumber = prompt(
        `Загаданное число больше. Введите другое число. У вас осталось ${10 - counter} попыток`);
      if (userNumber === null) {
       return closeGame();
      }
      valueNumber();
    }else if (+userNumber===randomNumber){
      let newGame = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
        if (!newGame) {
          return closeGame(newGame); 
        }
      counter = 0;
     return validationNumber();
    }
  }());
}


buttonGame.addEventListener('click', () => {
  let userNumber = prompt('Угадай число от 1 до 100 у вас 10 попыток');
  if (userNumber === null) {
   return closeGame(userNumber);
  }
  validationNumber(userNumber);
});
