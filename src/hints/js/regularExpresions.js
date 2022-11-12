// regular expressions

// 1.Обьявление
const regExp = /ruslan/gim; // найти'ruslan', флаги gmi - нельзя добавить ${const}
const regExp2 = new RegExp("ruslan", "gmi"); // найти'ruslan', флаги gmi

function checkStr(str, subStr) {
  const regExp = new RegExp(subStr);
  // return regExp.exec(str) //[ 'ruslan', index: 5, input: 'I am ruslan', groups: undefined ]
  return regExp.test(str); // boolean  true || false
}
// console.log(checkStr('I am ruslan', 'ruslan'))

//  2. флаги
/RUSLAN/i.exec("I am ruslan"); // i не чуствителен к регистру
const checkStrRuslan = /RUSLAN/i.exec("I am ruslan").input; //вернул в const = 'I am ruslan'
"I am ruslan".replace("a", "s"); //поменяли букву = I sm ruslan
//g глобальный поиск
"I am am am ruslan".match(/am/); //первое совпадение[ 'am', index: 2, input: 'I am am am ruslan', groups: undefined ]
"I am am am ruslan".match(/am/g); // вернули только совпадение[ 'am', 'am', 'am' ]
// m мультистрочный поиск
const str = `1 котенок
2 котенок
3 котенок`;
str.match(/^\d/gm); //[ '1', '2', '3' ]

// 3. Методы
// srt.match(regexp)
"I am ruslan".match(/ruslan/); //[ 'ruslan', index: 5, input: 'I am ruslan', groups: undefined ]
"I am ruslan".match(/anna/); // null
"I am ruslan".replace(/ruslan/, "anna"); // I am anna  поменяли имя
/ruslan/i.test("Ruslan"); // true || false

// 4. Буквенные классы
//    \d - любая цифра
//    \w - латинская буква, цифра, _
//    \s - пробел
//    \D - любой символ кроме \d
//    \W - любой символ кроме \w
//    \S - любой символ кроме \s
//    . - любой символ кроме \n
/\@\.\w\w\w\d/.test("22 January @.rus3"); // проверяет очередность символов true

// 5.Якоря
// ^ - начало строки
// $ - конец строки
// \b - граница слова
const str3 = /^\d\d$/.test("22 January @.rus3"); // fasle
const str4 = /^\d\d\w$/.test("22f"); // true
const str5 = /\bJava\b/i.test("java!"); // true  \b граница слова

// 6.Пропуск специальных символов
// [ \ ^ ( ) . | ? * + /
const myreg3 = new RegExp("\\^\\$\\.", "i").test("^$."); // true
const str6 = /\^\$\./i.test("^$."); // true

// 7.  Наборы диапазоны
// [sdr] - любой символ из скобок
// [0-9] - любой цифра из скобок
// [A-Z] - любые большие буквы из скобок
// [a-z] - любые маленькие буквы из скобок или включаем регистр i
// [0-9A-Za-z] - все большие маленькие и цифры
// [а-я0-9] - кириллица и любые цифры
// [^а-я] - ^ исключение
// [\s\d\D]
const str7 = /[r]/i.test("my name is Ruslan"); //true
const str8 = /[а-я0-9]/i.test("ЛРЛОВЫ235"); //true
const str9 = /[^а-я]/i.test("лорвы"); // все что угодно кроме киррилицы
const str10 = /[\d\w]/.test("sf4432"); //

// 8. Квантификаторы
// {n} - точное количество // или сокращение +{1,} от 1 и больше
// {n1,n2} - от n1 до n2    // или сокращение ?{0,1} есть ли вообще символ
// {n,} - больше или равно n  // или сокращение *{0,} есть ли вообще символ

const str11 = /\d{3,}/.test("g1213"); //true
const str12 = /\d+/.test("g1213"); //true

// 8. Жадность или лень
const str13 = 'I "Love" or "like" you'.match(/".+"/g); // жадно  [ '"Love" or "like"' ]
const str14 = 'I "Love" or "like" you'.match(/".+?"/g); // лениво  [ '"Love"', '"like"' ]

// 9 . Группа захвата
const str15 = /(go){3,}/.test("gogogogo"); // true
const str16 = "I am Ruslan".match(/(rus)(lan)/i); //['Ruslan','Rus','lan',index: 5,input:
// 'I am Ruslan', groups: undefined]
const str17 = "Ruslan Gubin".replace(/(\w+) (\w+)/i, "$2 $1"); //Gubin Ruslan поменяли местами
const str18 = "Ruslan Gubin".replace(/(?:\w+) (\w+)/i, "$1"); //Gubin  первое слово не расматриваем

// 10. or или
const str19 = /html|js|css/.test("I love js"); //true

// Пример валидация инпута на отсуствие пробелов

const input = "          ";
const validInputSpace = /\S/.test(input); //false  есть ли любой символ кроме пробела?

const inputUs1 = "   My name is Ruslan   ".replace(/^\s+|\s+$/g, ""); // заменяем пробелы на '' пустоту
inputUs1.trim(); // удаляем пробелы в начале и в конце
const inputUs2 = "My   name   is   Ruslan".replace(/\s+/g, " "); // находим больше одного пробела и меняем на 1н пробел

const checkUrl = "https://ruslan.com";
