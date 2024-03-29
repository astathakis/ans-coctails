// console.log('hello');
import get from './getElement.js'
import presentDrinks from './presentDrinks.js'

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const form = get('.search-form')
//attribute selector
const input = get('[name="drink"]')

form.addEventListener('keyup', function (e) {
  e.preventDefault()
  const value = input.value
  console.log(input.value)
  if (!value) return
  presentDrinks(`${baseURL}${value}`)
})
