function* helloUniverse(condition) {
  if (condition) {
    yield 'Hi ';
  }

  if (condition) {
    yield 'World!';
  }
}

const generatorHello = helloUniverse(true);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
// Undefined: console.log(generatorHello.next().value)
