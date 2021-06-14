function* helloUniverse(condition) {
  if (condition) {
    yield 'Hi ';
  }

  if (condition) {
    yield 'World!';
  }
}

const generatorHello = helloUniverse(2 > 1);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
// Undefined: console.log(generatorHello.next().value)
