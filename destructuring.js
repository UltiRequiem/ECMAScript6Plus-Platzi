const BRUNO = {
  name: 'Bruno',
  lastname: 'Bucciarati',
  age: 20,
};

// Old JavaScript ⬇️
// const name = BRUNO.name
// const age = BRUNO.age

// Now
const { name, lastname, age } = BRUNO;
console.log(`${name} ${lastname} has ${age} years.`);
