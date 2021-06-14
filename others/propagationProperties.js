const PERSON = {
  name: 'Oscar',
  age: 32,
};

const personInformation = {
  ...PERSON,
  country: 'MX',
};
console.log('personInformation: ', personInformation);
