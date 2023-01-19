async function getRandomChinese(length) {
  let val = "";
  for (let i = 0; i <= length - 1; i++) {
    let date = Date.now().toString();
    let sign = String.fromCharCode(date);
    val += sign.slice(-5);
    await new Promise((value) => setTimeout(() => value(), 50));
  }
  console.log(val);
}
getRandomChinese(6);
