"use strict";
const getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // это необязательный вариант защиты если перепутать мин и макс местами
 // min = Math.min(min, max); 
 // max = Math.max(min, max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const getNumber = function (str) {
  const numUser = prompt(str);

  if (numUser === null) {
    return null;
  }
  if (isNumber(numUser)) {
    return +numUser;
  }
  alert('Кажется вы забыли ввести число Попробуйте еще раз!');
  getNumber(str);

};
// будет возвращать ф-цию которая будет увеличивать counter и конешно же ф-ция будет возвр counter
const getCounter = function () {
  let counter = 0;
  return function () {
    return counter++;
  };
};

const gameBot = function (attemps, min, max) {
  attemps = attemps || 10;
  min = min || 0;
  max = max || 100;

  const random = getRandomInt(min, max);
  const counter = getCounter();

  function checkNumber() {

    const count = counter();

    if (count < attemps) {
      const number = getNumber('Попробуйте угадать число от ' + min + ' до ' + max);
      if (number === null) return alert('Досвидос Амиго!');
      
      if (number > random) {
        alert('Загаданное число меньше чем ваше!');
        //когда рекурсия пойдет в обратную сторону что бы наша функция не пошла дальше выполняться
        return checkNumber();
      }
      if (number < random) {
        alert('Загаданное число больше чем ваше!');
        return checkNumber();
      }
      if (number === random) {
        alert('Молодец угадал!');
        return checkNumber();
      }
    } else {
      alert('Количество попыток закончилось! Было загаданно число' + random);
    }

    const questAC = confirm('Хотите сыграть еще');

    if (questAC) {
      alert('Отлично начинаем!');
      gameBot(attemps, min, max);
    } else {
      alert('Спасибо за игру еще увидимся!');
    }
  }

  checkNumber();

};

gameBot(20, 0, 10);