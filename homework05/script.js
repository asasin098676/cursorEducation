function getRandomArray(length, min, max) {
  let someValue = [];
  for (let i = 0; i < length; i++) {
    someValue.push([Math.floor(min + Math.random() * (max + 1 - min))]);
  }

  return someValue;
  console.log(someValue.length);
}
function getAverage(...numbers) {
  let sumNum = numbers.reduce((sum, element) => {
    if (Number.isInteger(element)) {
      sum += element;
    }
    return sum;
  });
  return sumNum / numbers.length;
}
function filterEvenNumbers(...numbers) {
  return numbers.filter((value) => !(value % 2 === 0));
}
function countPositiveNumbers(...numbers) {
  let res = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (Math.sign(numbers[i]) === 1) {
      res = res + 1;
    }
  }
  return res;
}
function getDividedByFive(...numbers) {
  let res = [];
  for (let i = 0; i < numbers.length; i++) {
    if (Number.isInteger(numbers[i] / 5)) {
      res.push([numbers[i]]);
    }
  }
  return res;
}
function replaceBadWords(str) {
  const badWords = ["shit", "fuck"];
  let res = str.split(" ");
  badWords.forEach((value) => {
    res = res.map((element) => {
      if (element.includes(value)) {
        element = element.replace(`${value}`, " **** ");
      }
      return element;
    });
  });
  return res.join(" ");
}

console.log(getRandomArray(15, 1, 100));
console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));
console.log(
  getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
);
console.log(replaceBadWords("It's bullshit!"));
