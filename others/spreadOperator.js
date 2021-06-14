const DATA = {
  name: 'Oscar',
  age: 32,
  country: 'MX',
};

const { name, ...addInfo } = DATA;
console.log(`name: ${name}`);
console.log('additional information: ', addInfo);

const { country, ...nameAndAge } = DATA;
console.log('name and age: ', nameAndAge);
