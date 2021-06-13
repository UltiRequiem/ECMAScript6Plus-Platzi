// Old JavaScript ⬇️
// function newFunction(name, age, country) {
//   var name = name || 'Zero';
//   var age = age || 14;
//   var country = country || 'Perú';
//   console.log(name, age, country);
// }

// ECMAScript 6+
const newFunctionTwo = (name = 'Zero', age = 14, country = 'Perú') => {
  console.log(name, age, country);
};

newFunctionTwo();
newFunctionTwo('UltiRequiem', 28, 'MX');
