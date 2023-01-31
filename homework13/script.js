function* createIdGenerator() {
  for (let i = 1; i < Infinity; i++) {
    yield i;
  }
}
const idGenerator = createIdGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

function* GeneratorSizeText(val) {
  fontSize = val;
  upOrDown = yield fontSize;
  while (true) {
    if (upOrDown === "up") {
      fontSize += 2;
      upOrDown = yield fontSize;
    } else if (upOrDown === "down") {
      fontSize -= 2;
      upOrDown = yield fontSize;
    } else {
      upOrDown = yield fontSize;
    }
  }
}
const SizeGenerator = GeneratorSizeText(14);
console.log(SizeGenerator.next("up").value);
console.log(SizeGenerator.next("up").value);
console.log(SizeGenerator.next("down").value);
console.log(SizeGenerator.next("up").value);
console.log(SizeGenerator.next("up").value);
console.log(SizeGenerator.next("up").value);
