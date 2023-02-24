const firstValue = 15.678;
const secondValue = 123.965;
const thirdValue = 90.2345;

const maxValue =
  "Максимальна ціна: " + Math.max(firstValue, secondValue, thirdValue);
const minValue =
  "Мінімальна ціна: " + Math.min(firstValue, secondValue, thirdValue);
const sumValue = firstValue + secondValue + thirdValue;
const price =
  Math.floor(firstValue) + Math.floor(secondValue) + Math.floor(thirdValue);
const allPrice = "округленна сума: " + Math.round(price);
const surrender = "суму решти: " + (500 - sumValue);
const averageValue =
  "округлене до другого знаку після коми: " + (sumValue / 3).toFixed(2);
const Sale = parseInt(Math.random() * 100);
const randomSale = "випадковa знижкa = " + Sale + "%";
const saleCash = (sumValue - (Sale / 100) * sumValue).toFixed(2);
const finalSaleCash = "сума зі знижкою: " + saleCash;
const interest = (Sale / 100) * Math.floor(sumValue);
const cost = Math.floor(sumValue) / 2 - interest;
const lastValue = "чистий прибуток: " + cost.toFixed(0);

function addAll() {
  return (
    <div>
      <p>{maxValue}</p>
      <p>{minValue}</p>
      <p>{sumValue}</p>
      <p>{allPrice}</p>
      <p>{surrender}</p>
      <p>{randomSale}</p>
      <p>{finalSaleCash}</p>
      <p>{lastValue}</p>
    </div>
  );
}

export default addAll;
