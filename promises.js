const hiPromise = () =>
  new Promise((resolve, reject) => {
    if (true) {
      resolve('Yeah!');
    } else {
      reject('Oops...');
    }
  });

hiPromise()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
