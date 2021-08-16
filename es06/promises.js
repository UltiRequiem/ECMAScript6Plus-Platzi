const hiPromise = (condition) =>
  new Promise((resolve, reject) => {
    if (condition) {
      resolve('Yeah!');
    } else {
      reject('Oops...');
    }
  });

hiPromise(true)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
