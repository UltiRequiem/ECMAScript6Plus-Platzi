const PERSONS = [
  { name: 'Zero', age: 14 },
  { name: 'Yukiteru', age: 14 },
];

// Old way
// const ListOfNames = names.map(function (item){
//  return item.name
// })

const ListOfNames = PERSONS.map((item) => item.name);
console.log(ListOfNames); // [ 'Zero', 'Yukiteru' ]

const square = (n) => n * n;

console.log(square(7));
