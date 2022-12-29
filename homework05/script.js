function getRandomArray(length, min, max) {
  let someValue = [];
  if (someValue.length !== length) {
    someValue = Math.floor(Math.random() * (max - min) + min);
  }

  return someValue;
}
console.log(getRandomArray(12, 10, 30));

// function randomNumber(length) {

//     return Math.floor(Math.pow(10, length-1) + (Math.random() ) * (Math.pow(10, length) - Math.pow(10, length-1) - 1));
// }
