class calc {
  constructor(numberOne, numberTwo) {
    this.numberOne = numberOne;
    this.numberTwo = numberTwo;
  }

  sum() {
    return this.numberOne + this.numberTwo;
  }
}

const calcOne = new calc(2, 3);
console.log(calcOne.sum());
