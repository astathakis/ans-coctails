import fetchDrinks from './fetchDrinks.js'
import displayDrinks from './displayDrinks.js'
import setDrink from './setDrink.js'

const showDrinks = async (url) => {
  //feetch drinks
  const data = await fetchDrinks(url)

  //dispaly drinks
  const section = await displayDrinks(data)
  console.log(section)
  console.log(url)
  if (section) {
    setDrink(section)
  }
}

export default showDrinks
