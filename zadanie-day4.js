var vozrast = Number(prompt('Введите ваш возраст:'));

if (vozrast >= 18) {
  console.log('Вы достаточно взрослый, чтобы водить.');
} else {
  var ostalosLet = 18 - vozrast;
  console.log('Вам осталось ' + ostalosLet + ' лет до вождения.');
}

var myAge = 30;
var yourAge = Number(prompt('Введите ваш возраст:'));

if (myAge > yourAge) {
  var raznica = myAge - yourAge;
  console.log('Я старше вас на ' + raznica + ' лет.');
} else if (yourAge > myAge) {
  var raznica = yourAge - myAge;
  console.log('Вы старше меня на ' + raznica + ' лет.');
} else {
  console.log('Мы одного возраста.');
}

var a = 4;
var b = 3;

if (a > b) {
  console.log('a больше b');
} else {
  console.log('a меньше b');
}

var rezultat = a > b ? 'a больше b' : 'a меньше b';
console.log(rezultat);

var chislo = Number(prompt('Введите число:'));

if (chislo % 2 == 0) {
  console.log(chislo + ' - чётное число');
} else {
  console.log(chislo + ' - нечётное число');
}

var ball = Number(prompt('Введите баллы студента:'));

if (ball >= 80 && ball <= 100) {
  console.log('Оценка: A');
} else if (ball >= 70 && ball <= 89) {
  console.log('Оценка: B');
} else if (ball >= 60 && ball <= 69) {
  console.log('Оценка: C');
} else if (ball >= 50 && ball <= 59) {
  console.log('Оценка: D');
} else if (ball >= 0 && ball <= 49) {
  console.log('Оценка: F');
} else {
  console.log('Неверный балл');
}

var mesyac = prompt('Введите месяц:');
var mesyacNizh = mesyac.toLowerCase();

if (mesyacNizh == 'september' || mesyacNizh == 'october' || mesyacNizh == 'november') {
  console.log('Сезон: Осень.');
} else if (mesyacNizh == 'december' || mesyacNizh == 'january' || mesyacNizh == 'february') {
  console.log('Сезон: Зима.');
} else if (mesyacNizh == 'march' || mesyacNizh == 'april' || mesyacNizh == 'may') {
  console.log('Сезон: Весна.');
} else if (mesyacNizh == 'june' || mesyacNizh == 'july' || mesyacNizh == 'august') {
  console.log('Сезон: Лето.');
} else {
  console.log('Неверный месяц');
}

var den = prompt('Какой сегодня день?');
var denNizh = den.toLowerCase();
var pervayaBukva = den.charAt(0).toUpperCase();
var ostalnyeBukvy = '';
for (var i = 1; i < den.length; i++) {
  ostalnyeBukvy = ostalnyeBukvy + den.charAt(i).toLowerCase();
}
var denKapital = pervayaBukva + ostalnyeBukvy;

if (denNizh == 'saturday' || denNizh == 'sunday') {
  console.log(denKapital + ' - выходной день.');
} else if (denNizh == 'monday' || denNizh == 'tuesday' || denNizh == 'wednesday' || denNizh == 'thursday' || denNizh == 'friday') {
  console.log(denKapital + ' - рабочий день.');
} else {
  console.log('Неверный день');
}

var mesyac = prompt('Введите месяц:');
var mesyacNizh = mesyac.toLowerCase();
var pervayaBukva = mesyac.charAt(0).toUpperCase();
var ostalnyeBukvy = '';
for (var i = 1; i < mesyac.length; i++) {
  ostalnyeBukvy = ostalnyeBukvy + mesyac.charAt(i).toLowerCase();
}
var mesyacKapital = pervayaBukva + ostalnyeBukvy;

if (mesyacNizh == 'january' || mesyacNizh == 'march' || mesyacNizh == 'may' || mesyacNizh == 'july' || mesyacNizh == 'august' || mesyacNizh == 'october' || mesyacNizh == 'december') {
  console.log('В ' + mesyacKapital + ' 31 день.');
} else if (mesyacNizh == 'april' || mesyacNizh == 'june' || mesyacNizh == 'september' || mesyacNizh == 'november') {
  console.log('В ' + mesyacKapital + ' 30 дней.');
} else if (mesyacNizh == 'february') {
  console.log('В ' + mesyacKapital + ' 28 дней.');
} else {
  console.log('Неверный месяц');
}

var mesyac = prompt('Введите месяц:');
var god = Number(prompt('Введите год:'));
var mesyacNizh = mesyac.toLowerCase();
var pervayaBukva = mesyac.charAt(0).toUpperCase();
var ostalnyeBukvy = '';
for (var i = 1; i < mesyac.length; i++) {
  ostalnyeBukvy = ostalnyeBukvy + mesyac.charAt(i).toLowerCase();
}
var mesyacKapital = pervayaBukva + ostalnyeBukvy;

var visokosnyy = false;
if (god % 4 == 0) {
  if (god % 100 == 0) {
    if (god % 400 == 0) {
      visokosnyy = true;
    }
  } else {
    visokosnyy = true;
  }
}

if (mesyacNizh == 'january' || mesyacNizh == 'march' || mesyacNizh == 'may' || mesyacNizh == 'july' || mesyacNizh == 'august' || mesyacNizh == 'october' || mesyacNizh == 'december') {
  console.log('В ' + mesyacKapital + ' 31 день.');
} else if (mesyacNizh == 'april' || mesyacNizh == 'june' || mesyacNizh == 'september' || mesyacNizh == 'november') {
  console.log('В ' + mesyacKapital + ' 30 дней.');
} else if (mesyacNizh == 'february') {
  if (visokosnyy) {
    console.log('В ' + mesyacKapital + ' 29 дней.');
  } else {
    console.log('В ' + mesyacKapital + ' 28 дней.');
  }
} else {
  console.log('Неверный месяц');
}
