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
function getRandomPassword(def = 8) {
  let number = "1";
  for (let i = def; i > 0; i--) {
    number += "0";
  }
  let min = +number.slice(0, -1);
  let result = Math.round(Math.random().toFixed(def) * (+number - min) + min);
  return result;
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
document.writeln(
  `<p>Функція N6(рандомний пароль): ${getRandomPassword(3)}</p>`
);
