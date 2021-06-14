const hiHayasaka = (condition) =>
  new Promise((resolve, reject) => {
    condition ? resolve('HEY, HEY!') : reject(new Error('Shinomiya-san!'));
  });

hiHayasaka(true)
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log(':0'));
