import presentDrinks from './src/presentDrinks.js';
import './src/searchForm.js';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';
// const URL = 'https://www.freetogame.com/api/games';
// const URL = 'https://api.disneyapi.dev/characters';

window.addEventListener('DOMContentLoaded', () => {
  presentDrinks(URL);
});
