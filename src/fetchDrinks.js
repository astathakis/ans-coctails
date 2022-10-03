const fetchDrinks = async (url) => {
  //   return 1;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchDrinks;
