var countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];

var webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
];

var mernStack = ['MongoDB', 'Express', 'React', 'Node'];

for (var i = 0; i <= 10; i++) {
  console.log(i);
}

var i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

var i = 0;
do {
  console.log(i);
  i++;
} while (i <= 10);

for (var i = 10; i >= 0; i--) {
  console.log(i);
}

var i = 10;
while (i >= 0) {
  console.log(i);
  i--;
}

var i = 10;
do {
  console.log(i);
  i--;
} while (i >= 0);

var n = 5;
for (var i = 0; i <= n; i++) {
  console.log(i);
}

for (var i = 1; i <= 7; i++) {
  var stroka = '';
  for (var j = 0; j < i; j++) {
    stroka = stroka + '#';
  }
  console.log(stroka);
}

for (var i = 0; i <= 10; i++) {
  console.log(i + ' x ' + i + ' = ' + (i * i));
}

console.log(' i    i^2   i^3');
for (var i = 0; i <= 10; i++) {
  console.log(' ' + i + '    ' + (i * i) + '     ' + (i * i * i));
}

for (var i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

for (var i = 0; i <= 100; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

for (var i = 0; i <= 100; i++) {
  if (i <= 1) continue;
  var prostoe = true;
  for (var j = 2; j < i; j++) {
    if (i % j == 0) {
      prostoe = false;
      break;
    }
  }
  if (prostoe) {
    console.log(i);
  }
}

var summa = 0;
for (var i = 0; i <= 100; i++) {
  summa = summa + i;
}
console.log('Сумма всех чисел от 0 до 100: ' + summa + '.');

var summaChetnyh = 0;
var summaNechetnyh = 0;
for (var i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    summaChetnyh = summaChetnyh + i;
  } else {
    summaNechetnyh = summaNechetnyh + i;
  }
}
console.log('Сумма всех чётных от 0 до 100: ' + summaChetnyh + '. Сумма всех нечётных от 0 до 100: ' + summaNechetnyh + '.');

var summaChetnyh = 0;
var summaNechetnyh = 0;
for (var i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    summaChetnyh = summaChetnyh + i;
  } else {
    summaNechetnyh = summaNechetnyh + i;
  }
}
console.log([summaChetnyh, summaNechetnyh]);

var sluchChisla = [];
for (var i = 0; i < 5; i++) {
  var sluchChislo = Math.floor(Math.random() * 100);
  sluchChisla.push(sluchChislo);
}
console.log(sluchChisla);

var unikalnyeChisla = [];
while (unikalnyeChisla.length < 5) {
  var sluchChislo = Math.floor(Math.random() * 100);
  var yestVMassive = false;
  for (var i = 0; i < unikalnyeChisla.length; i++) {
    if (unikalnyeChisla[i] == sluchChislo) {
      yestVMassive = true;
      break;
    }
  }
  if (!yestVMassive) {
    unikalnyeChisla.push(sluchChislo);
  }
}
console.log(unikalnyeChisla);

var simvoly = 'abcdefghijklmnopqrstuvwxyz0123456789';
var sluchId = '';
for (var i = 0; i < 6; i++) {
  var sluchIndex = Math.floor(Math.random() * simvoly.length);
  sluchId = sluchId + simvoly[sluchIndex];
}
console.log(sluchId);

var simvoly = 'abcdefghijklmnopqrstuvwxyz0123456789';
var dlina = Math.floor(Math.random() * 20) + 5;
var sluchId = '';
for (var i = 0; i < dlina; i++) {
  var sluchIndex = Math.floor(Math.random() * simvoly.length);
  sluchId = sluchId + simvoly[sluchIndex];
}
console.log(sluchId);

var hexSimvoly = '0123456789abcdef';
var hexColor = '#';
for (var i = 0; i < 6; i++) {
  var sluchIndex = Math.floor(Math.random() * hexSimvoly.length);
  hexColor = hexColor + hexSimvoly[sluchIndex];
}
console.log(hexColor);

var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);
console.log('rgb(' + r + ',' + g + ',' + b + ')');

var stranyZaglavnye = [];
for (var i = 0; i < countries.length; i++) {
  stranyZaglavnye.push(countries[i].toUpperCase());
}
console.log(stranyZaglavnye);

var dlinaStran = [];
for (var i = 0; i < countries.length; i++) {
  dlinaStran.push(countries[i].length);
}
console.log(dlinaStran);

var massivy = [];
for (var i = 0; i < countries.length; i++) {
  var strana = countries[i];
  var abbrev = strana.substring(0, 3).toUpperCase();
  var dlina = strana.length;
  massivy.push([strana, abbrev, dlina]);
}
console.log(massivy);

var stranyLand = [];
for (var i = 0; i < countries.length; i++) {
  if (countries[i].indexOf('land') != -1) {
    stranyLand.push(countries[i]);
  }
}
if (stranyLand.length > 0) {
  console.log(stranyLand);
} else {
  console.log('Все эти страны без land');
}

var stranyIa = [];
for (var i = 0; i < countries.length; i++) {
  var strana = countries[i];
  if (strana.substring(strana.length - 2) == 'ia') {
    stranyIa.push(strana);
  }
}
if (stranyIa.length > 0) {
  console.log(stranyIa);
} else {
  console.log('Эти страны заканчиваются без ia');
}

var samayaDlinnaya = '';
for (var i = 0; i < countries.length; i++) {
  if (countries[i].length > samayaDlinnaya.length) {
    samayaDlinnaya = countries[i];
  }
}
console.log(samayaDlinnaya);

var strany5Simvolov = [];
for (var i = 0; i < countries.length; i++) {
  if (countries[i].length == 5) {
    strany5Simvolov.push(countries[i]);
  }
}
console.log(strany5Simvolov);

var samoyeDlinnoye = '';
for (var i = 0; i < webTechs.length; i++) {
  if (webTechs[i].length > samoyeDlinnoye.length) {
    samoyeDlinnoye = webTechs[i];
  }
}
console.log(samoyeDlinnoye);

var webTechsSDlinoy = [];
for (var i = 0; i < webTechs.length; i++) {
  webTechsSDlinoy.push([webTechs[i], webTechs[i].length]);
}
console.log(webTechsSDlinoy);

var akronim = '';
for (var i = 0; i < mernStack.length; i++) {
  akronim = akronim + mernStack[i].charAt(0);
}
console.log(akronim);

var tehnologii = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'Express', 'MongoDB'];
for (var i = 0; i < tehnologii.length; i++) {
  console.log(tehnologii[i]);
}

var frukty = ['banana', 'orange', 'mango', 'lemon'];
var obratnyy = [];
for (var i = frukty.length - 1; i >= 0; i--) {
  obratnyy.push(frukty[i]);
}
console.log(obratnyy);

var fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];
for (var i = 0; i < fullStack.length; i++) {
  for (var j = 0; j < fullStack[i].length; j++) {
    console.log(fullStack[i][j].toUpperCase());
  }
}
