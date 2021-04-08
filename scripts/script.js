"use strict";
const buttonGame = document.querySelector('.button-game' );

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function validationNumber(userNumber) {
  let randomNumber = 15;
  let counter = 0;

  (function valueNumber() {
    if (counter >= 9) {
      let newGame = confirm("Попытки закончились, хотите сыграть еще?");
        if (!newGame) {
        return  alert('Игра окончена');
        }
      counter = 0;
      return validationNumber(userNumber = prompt('Угадай число от 1 до 100 у вас 10 попыток'));
    }

    if (userNumber === null ) {
    return alert('Игра окончена');
    }

    if (!isNumber(userNumber)) {
      userNumber = prompt(' Введите число!');
      
      valueNumber();
    } else if (userNumber > 100) {
      userNumber = prompt(
        `Вы ввели число больше 100. Попробуйте еще раз!`);

      valueNumber();
    } else if (userNumber > randomNumber && userNumber !== 0) {
      counter++;
      userNumber = prompt(
        `Загаданное число меньше. Введите другое число. У вас осталось ${10 - counter} попыток`);

      valueNumber();
    }else if (userNumber < randomNumber && userNumber!==0) {
      counter++;
      userNumber = prompt(
        `Загаданное число больше. Введите другое число. У вас осталось ${10 - counter} попыток`);
      
      valueNumber();
    }else if (+userNumber===randomNumber){
      let newGame = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
        if (!newGame) {
          return alert('Игра окончена');
        }
      counter = 0;
     return validationNumber(userNumber = prompt('Угадай число от 1 до 100 у вас 10 попыток'));
    }
  }());
}


buttonGame.addEventListener('click', () => {
  let userNumber = prompt('Угадай число от 1 до 100 у вас 10 попыток');
  if (userNumber === null) {
   return alert('Игра окончена');
  }
  validationNumber(userNumber);
});
