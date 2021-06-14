const prepareIceCream = (money, flavor) =>
  new Promise((resolve, reject) => {
    if (money >= 500) {
      console.log(`We are preparing your ${flavor} Ice cream...`);
      setTimeout(() => {
        resolve(`Take your ${flavor} Ice cream`);
      }, 2000);
    } else {
      reject(
        `Sorry! You do not have enough money to buy a ${flavor} Ice Cream.`
      );
    }
  });

const buyIceCream = async (money, flavor) => {
  console.log('Welcome to Ice Cream World!');
  try {
    console.log(await prepareIceCream(money, flavor));
    console.log('Thanks for your purchase!');
  } catch (error) {
    console.log(error);
  }
};

buyIceCream(700, 'Chocolate');
