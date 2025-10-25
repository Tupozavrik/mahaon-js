var firstName = 'Ivan';
var lastName = 'Petrov';
var country = 'Russia';
var city = 'Moscow';
var age = 25;
var isMarried = false;
var year = 2025;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

console.log(typeof '10' == typeof 10);

console.log(parseInt('9.8') == 10);

console.log(Boolean(1));
console.log(Boolean('text'));
console.log(Boolean(100));

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(null));

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');

var pythonLength = 'python'.length;
var jargonLength = 'jargon'.length;
console.log(pythonLength == jargonLength);

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));

var dragon = 'dragon';
var python = 'python';
console.log(dragon.indexOf('on') == -1 && python.indexOf('on') == -1);

var seychas = new Date();
console.log(seychas.getFullYear());
console.log(seychas.getMonth());
console.log(seychas.getDate());
console.log(seychas.getDay());
console.log(seychas.getHours());
console.log(seychas.getMinutes());
console.log(seychas.getTime());

var osnovaniye = Number(prompt('Введите основание:'));
var vysota = Number(prompt('Введите высоту:'));
var ploshchad = 0.5 * osnovaniye * vysota;
console.log('Площадь треугольника: ' + ploshchad);

var storonaA = Number(prompt('Введите сторону a:'));
var storonaB = Number(prompt('Введите сторону b:'));
var storonaC = Number(prompt('Введите сторону c:'));
var perimetr = storonaA + storonaB + storonaC;
console.log('Периметр треугольника: ' + perimetr);

var dlina = Number(prompt('Введите длину:'));
var shirina = Number(prompt('Введите ширину:'));
var ploshchadPryam = dlina * shirina;
var perimetrPryam = 2 * (dlina + shirina);
console.log('Площадь прямоугольника: ' + ploshchadPryam);
console.log('Периметр прямоугольника: ' + perimetrPryam);

var radius = Number(prompt('Введите радиус:'));
var pi = 3.14;
var ploshchadKruga = pi * radius * radius;
var dlinaOkruzhnosti = 2 * pi * radius;
console.log('Площадь круга: ' + ploshchadKruga);
console.log('Длина окружности: ' + dlinaOkruzhnosti);

var m = 2;
var xIntercept = 1;
var yIntercept = -2;
console.log('Наклон: ' + m);
console.log('X-пересечение: ' + xIntercept);
console.log('Y-пересечение: ' + yIntercept);

var y2 = 10;
var y1 = 2;
var x2 = 6;
var x1 = 2;
var naklonPryamoy = (y2 - y1) / (x2 - x1);
console.log('Наклон между точками: ' + naklonPryamoy);

console.log(naklonPryamoy == m);

var x = -3;
var y = x * x + 6 * x + 9;
console.log('Когда x = ' + x + ', y = ' + y);

var chasy = Number(prompt('Введите часы:'));
var stavkaZaChas = Number(prompt('Введите ставку в час:'));
var zarabotokZaNedelyu = chasy * stavkaZaChas;
console.log('Ваш недельный заработок: ' + zarabotokZaNedelyu);

var moyoImya = 'Ivan';
if (moyoImya.length > 7) {
  console.log('Ваше имя длинное');
} else {
  console.log('Ваше имя короткое');
}

var firstName = 'Asabeneh';
var lastName = 'Yetayeh';
if (firstName.length > lastName.length) {
  console.log('Ваше имя ' + firstName + ' длиннее, чем фамилия ' + lastName);
} else {
  console.log('Ваше имя ' + firstName + ' короче, чем фамилия ' + lastName);
}

var myAge = 250;
var yourAge = 25;
var raznicaVozrasta = myAge - yourAge;
console.log('Я старше вас на ' + raznicaVozrasta + ' лет.');

var godRozhdeniya = Number(prompt('Введите год рождения:'));
var tekushchiyGod = 2025;
var vozrast = tekushchiyGod - godRozhdeniya;
if (vozrast >= 18) {
  console.log('Вам ' + vozrast + '. Вы достаточно взрослый, чтобы водить');
} else {
  var letDoVozhdeniya = 18 - vozrast;
  console.log('Вам ' + vozrast + '. Вы сможете водить через ' + letDoVozhdeniya + ' лет.');
}

var letZhizni = Number(prompt('Введите количество лет жизни:'));
var sekundVGodu = 365 * 24 * 60 * 60;
var obshchiyeSekundy = letZhizni * sekundVGodu;
console.log('Вы прожили ' + obshchiyeSekundy + ' секунд.');

var seychas = new Date();
var god = seychas.getFullYear();
var mesyac = seychas.getMonth() + 1;
var den = seychas.getDate();
var chas = seychas.getHours();
var minuta = seychas.getMinutes();

if (mesyac < 10) {
  mesyac = '0' + mesyac;
}
if (den < 10) {
  den = '0' + den;
}
if (chas < 10) {
  chas = '0' + chas;
}
if (minuta < 10) {
  minuta = '0' + minuta;
}

console.log(god + '-' + mesyac + '-' + den + ' ' + chas + ':' + minuta);
console.log(den + '-' + mesyac + '-' + god + ' ' + chas + ':' + minuta);
console.log(den + '/' + mesyac + '/' + god + ' ' + chas + ':' + minuta);

var seychas = new Date();
var god = seychas.getFullYear();
var mesyac = seychas.getMonth() + 1;
var den = seychas.getDate();
var chas = seychas.getHours();
var minuta = seychas.getMinutes();

if (mesyac < 10) {
  mesyac = '0' + mesyac;
}
if (den < 10) {
  den = '0' + den;
}
if (chas < 10) {
  chas = '0' + chas;
}
if (minuta < 10) {
  minuta = '0' + minuta;
}

console.log(god + '-' + mesyac + '-' + den + ' ' + chas + ':' + minuta);
