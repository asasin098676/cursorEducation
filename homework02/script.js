const N = Number(prompt("Введіть число:"));
const M = Number(prompt("Введіть число:"));

let finalSum = 0;
// console.log(truOrFalse);

if (N >= M) {
  alert("M and N must be more");
} else if (N <= 0) {
  alert("fail");
} else if (M % 1 !== 0 || N % 1 !== 0) {
  alert("N and M must be whole number");
} else {
  const truOrFalse = confirm("Do you want to skip even numbers?");
  if (truOrFalse) {
    for (let i = N; i <= M; i++) {
      if (i % 2 != 0) finalSum += i;
    }
  } else {
    for (let i = N; i <= M; i++) {
      finalSum = finalSum + i;
    }
  }
}
alert(finalSum);
