function fullName() {
  console.log('Иван Петров');
}
fullName();

function fullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
console.log(fullName('Иван', 'Петров'));

function addNumbers(num1, num2) {
  return num1 + num2;
}
console.log(addNumbers(5, 10));

function areaOfRectangle(length, width) {
  return length * width;
}
console.log(areaOfRectangle(10, 5));

function perimeterOfRectangle(length, width) {
  return 2 * (length + width);
}
console.log(perimeterOfRectangle(10, 5));

function volumeOfRectPrism(length, width, height) {
  return length * width * height;
}
console.log(volumeOfRectPrism(10, 5, 3));

function areaOfCircle(r) {
  var pi = 3.14;
  return pi * r * r;
}
console.log(areaOfCircle(5));

function circumOfCircle(r) {
  var pi = 3.14;
  return 2 * pi * r;
}
console.log(circumOfCircle(5));

function density(mass, volume) {
  return mass / volume;
}
console.log(density(100, 50));

function speed(distance, time) {
  return distance / time;
}
console.log(speed(100, 2));

function weight(mass, gravity) {
  return mass * gravity;
}
console.log(weight(10, 9.8));

function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
console.log(convertCelsiusToFahrenheit(25));

function bmi(weight, height) {
  var indexBMI = weight / (height * height);
  if (indexBMI < 18.5) {
    return 'Недостаточный вес';
  } else if (indexBMI >= 18.5 && indexBMI <= 24.9) {
    return 'Нормальный вес';
  } else if (indexBMI >= 25 && indexBMI <= 29.9) {
    return 'Избыточный вес';
  } else {
    return 'Ожирение';
  }
}
console.log(bmi(70, 1.75));

function checkSeason(month) {
  var mesyacNizh = month.toLowerCase();
  if (mesyacNizh == 'september' || mesyacNizh == 'october' || mesyacNizh == 'november') {
    return 'Осень';
  } else if (mesyacNizh == 'december' || mesyacNizh == 'january' || mesyacNizh == 'february') {
    return 'Зима';
  } else if (mesyacNizh == 'march' || mesyacNizh == 'april' || mesyacNizh == 'may') {
    return 'Весна';
  } else if (mesyacNizh == 'june' || mesyacNizh == 'july' || mesyacNizh == 'august') {
    return 'Лето';
  }
}
console.log(checkSeason('January'));

function findMax(a, b, c) {
  var max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  return max;
}
console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));

function solveLinEquation(a, b, c) {
  if (a == 0) {
    return 'Не линейное уравнение';
  }
  return -c / a;
}
console.log(solveLinEquation(2, 0, -4));

function solveQuadEquation(a, b, c) {
  if (a == undefined) {
    return [0];
  }
  var diskriminant = b * b - 4 * a * c;
  if (diskriminant < 0) {
    return [];
  } else if (diskriminant == 0) {
    return [-b / (2 * a)];
  } else {
    var koren = Math.sqrt(diskriminant);
    var x1 = (-b + koren) / (2 * a);
    var x2 = (-b - koren) / (2 * a);
    return [x1, x2];
  }
}
console.log(solveQuadEquation());
console.log(solveQuadEquation(1, 4, 4));
console.log(solveQuadEquation(1, -1, -2));
console.log(solveQuadEquation(1, 7, 12));
console.log(solveQuadEquation(1, 0, -4));
console.log(solveQuadEquation(1, -1, 0));

function printArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
printArray([1, 2, 3, 4, 5]);

function showDateTime() {
  var seychas = new Date();
  var mesyac = seychas.getMonth() + 1;
  var den = seychas.getDate();
  var god = seychas.getFullYear();
  var chasy = seychas.getHours();
  var minuty = seychas.getMinutes();
  
  if (mesyac < 10) mesyac = '0' + mesyac;
  if (den < 10) den = '0' + den;
  if (chasy < 10) chasy = '0' + chasy;
  if (minuty < 10) minuty = '0' + minuty;
  
  console.log(mesyac + '/' + den + '/' + god + ' ' + chasy + ':' + minuty);
}
showDateTime();

function swapValues(x, y) {
  console.log('x => ' + y + ', y => ' + x);
}
swapValues(3, 4);
swapValues(4, 5);

function reverseArray(arr) {
  var novyyMassiv = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    novyyMassiv.push(arr[i]);
  }
  return novyyMassiv;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(['A', 'B', 'C']));

function capitalizeArray(arr) {
  var novyyMassiv = [];
  for (var i = 0; i < arr.length; i++) {
    novyyMassiv.push(arr[i].toUpperCase());
  }
  return novyyMassiv;
}
console.log(capitalizeArray(['яблоко', 'банан', 'апельсин']));

function addItem(item) {
  var massiv = [];
  massiv.push(item);
  return massiv;
}
console.log(addItem('тест'));

function removeItem(arr, index) {
  var novyyMassiv = [];
  for (var i = 0; i < arr.length; i++) {
    if (i != index) {
      novyyMassiv.push(arr[i]);
    }
  }
  return novyyMassiv;
}
console.log(removeItem([1, 2, 3, 4, 5], 2));

function sumOfNumbers(n) {
  var summa = 0;
  for (var i = 0; i <= n; i++) {
    summa = summa + i;
  }
  return summa;
}
console.log(sumOfNumbers(10));

function sumOfOdds(n) {
  var summa = 0;
  for (var i = 0; i <= n; i++) {
    if (i % 2 != 0) {
      summa = summa + i;
    }
  }
  return summa;
}
console.log(sumOfOdds(10));

function sumOfEven(n) {
  var summa = 0;
  for (var i = 0; i <= n; i++) {
    if (i % 2 == 0) {
      summa = summa + i;
    }
  }
  return summa;
}
console.log(sumOfEven(10));

function evensAndOdds(n) {
  var chetnyh = 0;
  var nechetnyh = 0;
  for (var i = 0; i <= n; i++) {
    if (i % 2 == 0) {
      chetnyh++;
    } else {
      nechetnyh++;
    }
  }
  console.log('Количество нечётных: ' + nechetnyh + '.');
  console.log('Количество чётных: ' + chetnyh + '.');
}
evensAndOdds(100);

function sum() {
  var summa = 0;
  for (var i = 0; i < arguments.length; i++) {
    summa = summa + arguments[i];
  }
  return summa;
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));

function randomUserIp() {
  return Math.floor(Math.random() * 256) + '.' +
         Math.floor(Math.random() * 256) + '.' +
         Math.floor(Math.random() * 256) + '.' +
         Math.floor(Math.random() * 256);
}
console.log(randomUserIp());

function randomMacAddress() {
  var hex = '0123456789abcdef';
  var mac = '';
  for (var i = 0; i < 6; i++) {
    if (i > 0) mac = mac + ':';
    for (var j = 0; j < 2; j++) {
      mac = mac + hex[Math.floor(Math.random() * 16)];
    }
  }
  return mac;
}
console.log(randomMacAddress());

function randomHexaNumberGenerator() {
  var hex = '0123456789abcdef';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color = color + hex[Math.floor(Math.random() * 16)];
  }
  return color;
}
console.log(randomHexaNumberGenerator());

function userIdGenerator() {
  var simvoly = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var id = '';
  for (var i = 0; i < 7; i++) {
    id = id + simvoly[Math.floor(Math.random() * simvoly.length)];
  }
  return id;
}
console.log(userIdGenerator());

function userIdGeneratedByUser() {
  var kolSimvolov = Number(prompt('Сколько символов в ID?'));
  var kolId = Number(prompt('Сколько ID генерировать?'));
  var simvoly = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
  for (var i = 0; i < kolId; i++) {
    var id = '';
    for (var j = 0; j < kolSimvolov; j++) {
      id = id + simvoly[Math.floor(Math.random() * simvoly.length)];
    }
    console.log(id);
  }
}
userIdGeneratedByUser();

function rgbColorGenerator() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}
console.log(rgbColorGenerator());

function arrayOfHexaColors(kolichestvo) {
  var massiv = [];
  var hex = '0123456789abcdef';
  for (var i = 0; i < kolichestvo; i++) {
    var color = '#';
    for (var j = 0; j < 6; j++) {
      color = color + hex[Math.floor(Math.random() * 16)];
    }
    massiv.push(color);
  }
  return massiv;
}
console.log(arrayOfHexaColors(3));

function arrayOfRgbColors(kolichestvo) {
  var massiv = [];
  for (var i = 0; i < kolichestvo; i++) {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    massiv.push('rgb(' + r + ',' + g + ',' + b + ')');
  }
  return massiv;
}
console.log(arrayOfRgbColors(3));

function convertHexaToRgb(hexa) {
  var r = parseInt(hexa.substring(1, 3), 16);
  var g = parseInt(hexa.substring(3, 5), 16);
  var b = parseInt(hexa.substring(5, 7), 16);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}
console.log(convertHexaToRgb('#ff5733'));

function convertRgbToHexa(rgb) {
  var chisla = rgb.substring(4, rgb.length - 1).split(',');
  var r = Number(chisla[0]);
  var g = Number(chisla[1]);
  var b = Number(chisla[2]);
  
  var hexR = r.toString(16);
  var hexG = g.toString(16);
  var hexB = b.toString(16);
  
  if (hexR.length == 1) hexR = '0' + hexR;
  if (hexG.length == 1) hexG = '0' + hexG;
  if (hexB.length == 1) hexB = '0' + hexB;
  
  return '#' + hexR + hexG + hexB;
}
console.log(convertRgbToHexa('rgb(255,87,51)'));

function generateColors(tip, kolichestvo) {
  if (tip == 'hexa') {
    if (kolichestvo == 1) {
      return arrayOfHexaColors(1)[0];
    }
    return arrayOfHexaColors(kolichestvo);
  } else if (tip == 'rgb') {
    if (kolichestvo == 1) {
      return arrayOfRgbColors(1)[0];
    }
    return arrayOfRgbColors(kolichestvo);
  }
}
console.log(generateColors('hexa', 3));
console.log(generateColors('hexa', 1));
console.log(generateColors('rgb', 3));
console.log(generateColors('rgb', 1));

function shuffleArray(arr) {
  var novyyMassiv = [];
  var kopiya = [];
  for (var i = 0; i < arr.length; i++) {
    kopiya.push(arr[i]);
  }
  while (kopiya.length > 0) {
    var sluchIndex = Math.floor(Math.random() * kopiya.length);
    novyyMassiv.push(kopiya[sluchIndex]);
    kopiya.splice(sluchIndex, 1);
  }
  return novyyMassiv;
}
console.log(shuffleArray([1, 2, 3, 4, 5]));

function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  }
  var rezultat = 1;
  for (var i = 2; i <= n; i++) {
    rezultat = rezultat * i;
  }
  return rezultat;
}
console.log(factorial(5));

function isEmpty(znachenie) {
  return znachenie == null || znachenie == undefined || znachenie == '';
}
console.log(isEmpty(''));
console.log(isEmpty(null));
console.log(isEmpty('тест'));

function sum() {
  var summa = 0;
  for (var i = 0; i < arguments.length; i++) {
    summa = summa + arguments[i];
  }
  return summa;
}
console.log(sum(1, 2, 3, 4, 5));

function sumOfArrayItems(arr) {
  var summa = 0;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] != 'number') {
      return 'Все элементы должны быть числами';
    }
    summa = summa + arr[i];
  }
  return summa;
}
console.log(sumOfArrayItems([1, 2, 3, 4, 5]));
console.log(sumOfArrayItems([1, 'a', 3]));

function average(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] != 'number') {
      return 'Все элементы должны быть числами';
    }
  }
  var summa = 0;
  for (var i = 0; i < arr.length; i++) {
    summa = summa + arr[i];
  }
  return summa / arr.length;
}
console.log(average([1, 2, 3, 4, 5]));

function modifyArray(arr) {
  if (arr.length < 5) {
    return 'Не найдено';
  }
  var novyyMassiv = [];
  for (var i = 0; i < arr.length; i++) {
    if (i == 4) {
      novyyMassiv.push(arr[i].toUpperCase());
    } else {
      novyyMassiv.push(arr[i]);
    }
  }
  return novyyMassiv;
}
console.log(modifyArray(['Авокадо', 'Помидор', 'Картофель', 'Манго', 'Лимон', 'Морковь']));
console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon', 'Microsoft', 'IBM']));
console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon']));

function isPrime(n) {
  if (n <= 1) return false;
  for (var i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(7));
console.log(isPrime(10));

function areAllUnique(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        return false;
      }
    }
  }
  return true;
}
console.log(areAllUnique([1, 2, 3, 4]));
console.log(areAllUnique([1, 2, 2, 4]));

function areSameType(arr) {
  if (arr.length == 0) return true;
  var pervyyTip = typeof arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (typeof arr[i] != pervyyTip) {
      return false;
    }
  }
  return true;
}
console.log(areSameType([1, 2, 3]));
console.log(areSameType([1, '2', 3]));

function isValidVariable(imya) {
  if (imya.length == 0) return false;
  var pervyySimvol = imya.charAt(0);
  if (!(pervyySimvol >= 'a' && pervyySimvol <= 'z' || pervyySimvol >= 'A' && pervyySimvol <= 'Z' || pervyySimvol == '_' || pervyySimvol == '$')) {
    return false;
  }
  for (var i = 1; i < imya.length; i++) {
    var simvol = imya.charAt(i);
    if (!(simvol >= 'a' && simvol <= 'z' || simvol >= 'A' && simvol <= 'Z' || simvol >= '0' && simvol <= '9' || simvol == '_' || simvol == '$')) {
      return false;
    }
  }
  return true;
}
console.log(isValidVariable('myVar'));
console.log(isValidVariable('123var'));
console.log(isValidVariable('my-var'));

function sevenRandomNumbers() {
  var chisla = [];
  while (chisla.length < 7) {
    var sluchChislo = Math.floor(Math.random() * 10);
    var yestVMassive = false;
    for (var i = 0; i < chisla.length; i++) {
      if (chisla[i] == sluchChislo) {
        yestVMassive = true;
        break;
      }
    }
    if (!yestVMassive) {
      chisla.push(sluchChislo);
    }
  }
  return chisla;
}
console.log(sevenRandomNumbers());

function reverseCountries(arr) {
  var kopiya = [];
  for (var i = 0; i < arr.length; i++) {
    kopiya.push(arr[i]);
  }
  var obratnyy = [];
  for (var i = kopiya.length - 1; i >= 0; i--) {
    obratnyy.push(kopiya[i]);
  }
  return obratnyy;
}
var countries = ['Россия', 'США', 'Китай', 'Япония'];
console.log(reverseCountries(countries));
console.log(countries);
