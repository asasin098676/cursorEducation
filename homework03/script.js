function firstLarge(name) {
  const lower = name.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}
function delateLetters(a, b) {
  let res = "";
  b = b.toLowerCase();
  for (l in b) {
    if (b[l] !== a) {
      res += b[l];
    }
  }
  return res;
}
function taxSum(sum) {
  const tax = 19.5;
  const finalSum = sum - (tax / 100) * sum;
  return finalSum;
}
function randomNum(n, m) {
  const num = Math.random() * (m - n) + n;
  return Math.floor(num);
}
function sumLetter(letter, word) {
  let sumLet = 0;
  for (l in word) {
    if (word[l] === letter) {
      sumLet += 1;
    }
  }
  return sumLet;
}
function generatePassword(length = 8) {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let finalPassword = "";

  while (finalPassword.length !== length) {
    finalPassword += arr[Math.floor(Math.random() * arr.length - 1)];
  }

  return finalPassword;
}

document.writeln(
  `<p>Функція N1(перша буква велика): ${firstLarge("aNDRE")}</p>`
);
document.writeln(
  `<p>Функція N2(видалення певної букви): ${delateLetters(
    "a",
    "amddmssaa"
  )}</p>`
);
document.writeln(`<p>Функція N3(податок): ${taxSum(5000)}</p>`);
document.writeln(`<p>Функція N4(рандомне число): ${randomNum(1, 32)}</p>`);
document.writeln(
  `<p>Функція N5(сума певних букв): ${sumLetter("a", "amazonka")}</p>`
);
document.writeln(`<p>Функція N6(рандомний пароль): ${generatePassword(3)}</p>`);
