const N = Number(prompt("Введіть число:", "0"));
let finalSum = 0;

if (N / N == 1 && N % 1 == 0) {
  const M = Number(prompt("Введіть число:", "0"));
  var x = NaN;

  if (M / M == 1 && M > N && M % 1 == 0) {
    const TrueOrFalse = prompt("пропускати парні: True Or False");
    TrueOrFalse.trim().toLowerCase();
    if (TrueOrFalse === "false") {
      //   console.log("false");
      for (let i = N; i <= M; i++) {
        finalSum = finalSum + i;
      }
    } else if (TrueOrFalse === "true") {
      for (let i = N; i <= M; i++) {
        if (i % 2 == true) {
          finalSum = finalSum + i;
        }
      }
    } else {
      console.log("error");
    }
  } else {
    console.log("error");
  }
} else {
  console.log("error");
}
alert(finalSum);
