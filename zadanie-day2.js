var challenge = '30 Days Of JavaScript';

console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0, 2));
console.log(challenge.substring(3));
console.log(challenge.includes('Script'));
console.log(challenge.split());
console.log(challenge.split(' '));

var kompanii = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(kompanii.split(', '));

console.log(challenge.replace('JavaScript', 'Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(11));

var predlozhenie = 'You cannot end a sentence with because because because is a conjunction';
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));
console.log(predlozhenie.indexOf('because'));
console.log(predlozhenie.lastIndexOf('because'));
console.log(predlozhenie.search('because'));

var challengeSProb = ' 30 Days Of JavaScript ';
console.log(challengeSProb.trim());
console.log(challenge.startsWith('30'));
console.log(challenge.endsWith('JavaScript'));
console.log(challenge.match(/a/g));

var chast1 = '30 Days of';
var chast2 = 'JavaScript';
console.log(chast1.concat(' ', chast2));
console.log(challenge.repeat(2));

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."');

console.log(typeof '10');
console.log(typeof '10' === typeof 10);
console.log(Number('10') === 10);
console.log(parseInt('10') === 10);

console.log(parseFloat('9.8'));
console.log(parseFloat('9.8') === 10);
console.log(Math.ceil(parseFloat('9.8')) === 10);
console.log(Math.round(parseFloat('9.8')) === 10);

var slovo1 = 'python';
var slovo2 = 'jargon';
console.log(slovo1.includes('on'));
console.log(slovo2.includes('on'));

var tekst = 'I hope this course is not full of jargon';
console.log(tekst.includes('jargon'));

var sluchChislo1 = Math.floor(Math.random() * 101);
console.log(sluchChislo1);

var sluchChislo2 = Math.floor(Math.random() * 51) + 50;
console.log(sluchChislo2);

var sluchChislo3 = Math.floor(Math.random() * 256);
console.log(sluchChislo3);

var js = 'JavaScript';
var sluchIndex = Math.floor(Math.random() * js.length);
console.log(js[sluchIndex]);

console.log('1 1 1 1 1');
console.log('2 1 2 4 8');
console.log('3 1 3 9 27');
console.log('4 1 4 16 64');
console.log('5 1 5 25 125');

var predlozhenie2 = 'You cannot end a sentence with because because because is a conjunction';
var nachIndex = predlozhenie2.indexOf('because');
var fraza = predlozhenie2.substr(nachIndex, 23);
console.log(fraza);

var loveText = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
var loveTextLower = loveText.toLowerCase();
var countLove = 0;
var searchPos = 0;
while (loveTextLower.indexOf('love', searchPos) !== -1) {
  countLove++;
  searchPos = loveTextLower.indexOf('love', searchPos) + 1;
}
console.log(countLove);

var becauseSentence = 'You cannot end a sentence with because because because is a conjunction';
var becauseLower = becauseSentence.toLowerCase();
var countBecause = 0;
var searchPosBecause = 0;
while (becauseLower.indexOf('because', searchPosBecause) !== -1) {
  countBecause++;
  searchPosBecause = becauseLower.indexOf('because', searchPosBecause) + 1;
}
console.log(countBecause);

var sentence3 = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
var ochText = '';
var badSymbols = '%$@&#;!?';
for (var i = 0; i < sentence3.length; i++) {
  var sym = sentence3[i];
  if (badSymbols.indexOf(sym) === -1) {
    ochText = ochText + sym;
  }
}
console.log(ochText);

var slova = ochText.toLowerCase().split(' ');
var schetSlov = {};
for (var i = 0; i < slova.length; i++) {
  var sl = slova[i];
  if (sl) {
    if (schetSlov[sl]) {
      schetSlov[sl] = schetSlov[sl] + 1;
    } else {
      schetSlov[sl] = 1;
    }
  }
}

var maxKol = 0;
var samSlovo = '';
for (var slKey in schetSlov) {
  if (schetSlov[slKey] > maxKol) {
    maxKol = schetSlov[slKey];
    samSlovo = slKey;
  }
}
console.log('Самое частое слово: "' + samSlovo + '" встречается ' + maxKol + ' раз(а)');

var incomeText = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
var chisla = [];
var currentNumber = '';
for (var i = 0; i < incomeText.length; i++) {
  var symbol = incomeText[i];
  if (symbol >= '0' && symbol <= '9') {
    currentNumber = currentNumber + symbol;
  } else {
    if (currentNumber !== '') {
      chisla.push(currentNumber);
      currentNumber = '';
    }
  }
}
if (currentNumber !== '') {
  chisla.push(currentNumber);
}
console.log(chisla);

var zarplata = Number(chisla[0]);
var bonus = Number(chisla[1]);
var dohKursy = Number(chisla[2]);
var godDohod = (zarplata * 12) + bonus + (dohKursy * 12);
console.log('Общий годовой доход: ' + godDohod + ' евро');
