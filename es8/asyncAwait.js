const hiUniverse = () =>
  new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve('Listo!'))
      : reject(new Error('Test Error'));
  });

const hiAsyncUniverse = async () => {
  const hello = await hiUniverse();
  console.log(hello);
};

hiAsyncUniverse()
