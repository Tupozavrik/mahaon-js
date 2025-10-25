var pustoyMassiv = [];

var massivChisel = [1, 2, 3, 4, 5];

console.log(massivChisel.length);

var pervyyElement = massivChisel[0];
var seredniyElement = massivChisel[Math.floor(massivChisel.length / 2)];
var posledniyElement = massivChisel[massivChisel.length - 1];
console.log(pervyyElement);
console.log(seredniyElement);
console.log(posledniyElement);

var smeshannyeTipy = ['text', 42, true, null, undefined, {name: 'object'}, [1, 2, 3]];
console.log(smeshannyeTipy.length);

var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length - 1]);

console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

console.log(itCompanies[0] + ', ' + itCompanies[1] + ', ' + itCompanies[2] + ', ' + itCompanies[3] + ', ' + itCompanies[4] + ', ' + itCompanies[5] + ', ' + itCompanies[6] + ' - крупные IT-компании.');

var kompaniyaDlyaProverki = prompt('Введите название компании:');
var naydena = false;
for (var i = 0; i < itCompanies.length; i++) {
  if (itCompanies[i] == kompaniyaDlyaProverki) {
    naydena = true;
    break;
  }
}
if (naydena) {
  console.log(kompaniyaDlyaProverki);
} else {
  console.log('Компания не найдена');
}

var kompaniiSMnogoO = [];
for (var i = 0; i < itCompanies.length; i++) {
  var kompaniya = itCompanies[i];
  var schetchikO = 0;
  for (var j = 0; j < kompaniya.length; j++) {
    if (kompaniya[j].toLowerCase() == 'o') {
      schetchikO++;
    }
  }
  if (schetchikO > 1) {
    kompaniiSMnogoO.push(kompaniya);
  }
}
console.log(kompaniiSMnogoO);

console.log(itCompanies);

console.log(itCompanies.sort());

console.log(itCompanies.reverse());

console.log(itCompanies.slice(0, 3));

console.log(itCompanies.slice(itCompanies.length - 3));

var seredinaIndex = Math.floor(itCompanies.length / 2);
if (itCompanies.length % 2 == 0) {
  console.log(itCompanies.slice(seredinaIndex - 1, seredinaIndex + 1));
} else {
  console.log([itCompanies[seredinaIndex]]);
}

itCompanies.shift();
console.log(itCompanies);

var seredinaIndex = Math.floor(itCompanies.length / 2);
if (itCompanies.length % 2 == 0) {
  itCompanies.splice(seredinaIndex - 1, 2);
} else {
  itCompanies.splice(seredinaIndex, 1);
}
console.log(itCompanies);

itCompanies.pop();
console.log(itCompanies);

itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);

var tekst = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
var slova = tekst.split(' ');
console.log(slova);
console.log(slova.length);

var shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

if (shoppingCart.indexOf('Meat') == -1) {
  shoppingCart.unshift('Meat');
}
console.log(shoppingCart);

if (shoppingCart.indexOf('Sugar') == -1) {
  shoppingCart.push('Sugar');
}
console.log(shoppingCart);

var allergiyaNaMed = true;
if (allergiyaNaMed) {
  var indexMeda = shoppingCart.indexOf('Honey');
  if (indexMeda != -1) {
    shoppingCart.splice(indexMeda, 1);
  }
}
console.log(shoppingCart);

var indexChaya = shoppingCart.indexOf('Tea');
if (indexChaya != -1) {
  shoppingCart[indexChaya] = 'Green Tea';
}
console.log(shoppingCart);

var countries = ['Ethiopia', 'Eritrea', 'Denmark', 'Finland', 'Germany', 'Norway', 'Sweden'];
if (countries.indexOf('Ethiopia') != -1) {
  console.log('ETHIOPIA');
} else {
  countries.push('Ethiopia');
}

var webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];
if (webTechs.indexOf('Sass') != -1) {
  console.log('Sass - это CSS препроцессор');
} else {
  webTechs.push('Sass');
  console.log(webTechs);
}

var frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
var backEnd = ['Node', 'Express', 'MongoDB'];
var fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

var ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort();
console.log('Отсортированные возрасты:', ages);

var minVozrast = ages[0];
var maxVozrast = ages[ages.length - 1];
console.log('Минимальный возраст:', minVozrast);
console.log('Максимальный возраст:', maxVozrast);

var medianaVozrast;
if (ages.length % 2 == 0) {
  var sred1 = ages[ages.length / 2 - 1];
  var sred2 = ages[ages.length / 2];
  medianaVozrast = (sred1 + sred2) / 2;
} else {
  medianaVozrast = ages[Math.floor(ages.length / 2)];
}
console.log('Медиана возраста:', medianaVozrast);

var summa = 0;
for (var i = 0; i < ages.length; i++) {
  summa = summa + ages[i];
}
var sredniyVozrast = summa / ages.length;
console.log('Средний возраст:', sredniyVozrast);

var razmer = maxVozrast - minVozrast;
console.log('Диапазон:', razmer);

var minRaznica = minVozrast - sredniyVozrast;
if (minRaznica < 0) {
  minRaznica = -minRaznica;
}

var maxRaznica = maxVozrast - sredniyVozrast;
if (maxRaznica < 0) {
  maxRaznica = -maxRaznica;
}

console.log('Разница минимального от среднего:', minRaznica);
console.log('Разница максимального от среднего:', maxRaznica);

var countries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria'];

var seredinaIndex = Math.floor(countries.length / 2);
if (countries.length % 2 == 0) {
  var pervayaPolovina = countries.slice(0, seredinaIndex);
  var vtorayaPolovina = countries.slice(seredinaIndex);
} else {
  var pervayaPolovina = countries.slice(0, seredinaIndex + 1);
  var vtorayaPolovina = countries.slice(seredinaIndex + 1);
}
console.log('Первая половина:', pervayaPolovina);
console.log('Вторая половина:', vtorayaPolovina);
