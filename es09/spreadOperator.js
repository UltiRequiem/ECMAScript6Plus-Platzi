const DATA = {
  name: 'Richard',
  lastname: 'Watterson',
  age: 43,
};

const { name, ...all } = DATA;
console.log(name, all);
