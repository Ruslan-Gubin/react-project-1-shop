//Фоматирование чисел

const sum1 = 120323;
const sum2 = 100200200;
const sum3 = 1600.33;

const toEuro = new Intl.NumberFormat("ru", {
  // регион
  style: "currency", // по умалчанию decimal
  currency: "rub", // валюта
  currencyDisplay: "name", //знак валюты или  название валюты
  useGrouping: false, // разделительный пропуск
  minimumFractionDigits: 0, // копейки в конце через запятую
});

document.getElementById("app").innerHTML = `
<h1>JS NumberFormat</h1>
<div>
 ${sum1.toLocaleString("ru", {
   // 2 вариант прописать все отдельно
   style: "currency",
   currency: "EUR",
   currencyDisplay: "name",
   useGrouping: false,
   minimumFractionDigits: 0,
 })}
 <br/>
 ${toEuro.format(sum2)}    
</div>
`;