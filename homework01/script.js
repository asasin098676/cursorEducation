const firstValue = 15.678;
const secondValue = 123.965;
const thirdValue = 90.2345;

//Використовуючи вбудований об'єкт Math – виведіть максимальне число
const maxValue =
  "Максимальна ціна: " + Math.max(firstValue, secondValue, thirdValue);
document.writeln("<p>", maxValue, "</p>");
console.log(maxValue);

//Використовуючи вбудований об'єкт Math – виведіть мінімальне число
const minValue =
  "Мінімальна ціна: " + Math.min(firstValue, secondValue, thirdValue);
document.writeln("<p>", minValue, "</p>");
console.log(minValue);

//Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
const sumValue = firstValue + secondValue + thirdValue;
document.writeln("<p>", "Вартість всіх товарів: " + sumValue, "</p>");
console.log("Вартість всіх товарів: " + sumValue);

//Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару
//між собою. Округлення використовувати в МЕНЬШУ сторону.

const price =
  Math.floor(firstValue) + Math.floor(secondValue) + Math.floor(thirdValue);
const allPrice = "округленна сума: " + Math.round(price);
document.writeln("<p>", allPrice, "</p>");
console.log(allPrice);

//Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть
//300)
function round100(x) {
  document.writeln(
    "<p>",
    "округленна до сотих: " + Math.round(x / 100) * 100,
    "</p>"
  );
  console.log("округленна до сотих: " + Math.round(x / 100) * 100);
}
round100(sumValue);

//Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним
//чи непарним числом?

if (
  (Math.floor(firstValue) + Math.floor(secondValue) + Math.floor(thirdValue)) %
    2 ==
  0
) {
  document.writeln("<p>", "булеве значення: " + true, "</p>");
  console.log("булеве значення: " + true);
} else {
  document.writeln("<p>", "булеве значення: " + false, "</p>");
  console.log("булеве значення: " + false);
}

//Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500
//грн.
const surrender = "суму решти: " + (500 - sumValue);
document.writeln("<p>", surrender, "</p>");
console.log(surrender);

//Виведіть середнє значення цін, округлене до другого знаку після коми
const averageValue =
  "округлене до другого знаку після коми: " + (sumValue / 3).toFixed(2);
document.writeln("<p>", averageValue, "</p>");
console.log(averageValue);

//Створіть змінну, в якої збережіть випадкову знижку (використовуйте
//функцію Math.random).
const Sale = parseInt(Math.random() * 100);
const randomSale = "випадковa знижкa = " + Sale + "%";
document.writeln("<p>", randomSale, "</p>");
console.log(randomSale);

//Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків
//після коми.
const saleCash = (sumValue - (Sale / 100) * sumValue).toFixed(2);
const finalSaleCash = "сума зі знижкою: " + saleCash;
document.writeln("<p>", finalSaleCash, "</p>");
console.log(finalSaleCash);

//Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів
//рівно в два рази нижче їх ціни?
const interest = (Sale / 100) * Math.floor(sumValue);
const cost = Math.floor(sumValue) / 2 - interest;
const lastValue = "чистий прибуток: " + cost.toFixed(0);
document.writeln("<p>", lastValue, "</p>");
console.log(lastValue);
