const hiUniverse = () =>
  new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve('Listo!'))
      : reject(new Error('Test Error'));
  });

const anotherFunction = async () => {
  try {
    const hello = await hiUniverse();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();
