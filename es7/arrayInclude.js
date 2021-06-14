const NUMBERS = [1, 2, 3, 4, 5];

const printIfInclude = (number) => {
  if (NUMBERS.includes(number)) {
    console.log(`The number ${number} is in the array.`);
  } else {
    console.log(`The number ${number} is not in the array.`);
  }
};

printIfInclude(4);
