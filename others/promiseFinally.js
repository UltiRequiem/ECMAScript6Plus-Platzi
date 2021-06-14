const helloWorld = () =>
  new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve('Hello World!');
        }, 3000)
      : reject(new Error('Test Error.'));
  });

helloWorld()
  .then((result) => console.log('result -> ', result))
  .catch((err) => console.log('err -> ', err))
  .finally(() => console.log('Termino.'));
