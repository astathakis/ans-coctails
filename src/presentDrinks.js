import fetchDrinks from './fetchDrinks.js';
import displayDrinks from './displayDrinks.js';

const showDrinks = async (url) => {
  //feetch drinks
  const data = await fetchDrinks(url);

  //dispaly drinks
  const section = await displayDrinks(data);
  console.log(section);
  console.log(url);
};

export default showDrinks;
