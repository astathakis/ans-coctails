const setDrink = (section) => {
  //   console.log(section)

  section.addEventListener('click', function (e) {
    // e.preventDefault()
    const id = e.target.parentElement.dataset.id
    //no need to use stringify method
    localStorage.setItem('drink', id)
    console.log(id)
  })
}

export default setDrink
