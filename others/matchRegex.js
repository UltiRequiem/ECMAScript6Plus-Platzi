const regexData = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
const match = regexData.exec('2018-04-20');
const { year, month, day } = match.groups;

console.log(year, month, day);
