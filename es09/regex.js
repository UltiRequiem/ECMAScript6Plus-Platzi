const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2021-06-13');
// console.log(match);
// [
//  '2021-06-13',
//  '2021',
//  '06',
//  '13',
//  index: 0,
//  input: '2021-06-13',
//  groups: undefined
// ]
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);
