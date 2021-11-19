const movies = require('./movies.json');

/*
 * This function must go through the array, evaluate the position of each element in the array, 
 * and if the position is less than 10, return the element in that position.  
 * @returns {Array}
 */
function getFirstTenMovies() {
  //complete with your code
}

/*
 * This function must go through the array, evaluate if the gender of each element 
 * is equal to the gender of the condition, and return the element that meets that condition. 
 * @param  {String} genre
 * @returns {Array}
 */
function getMoviesWithGenre(genre) {
  //complete with your code
}

function main() {
  const firstTenMovies = getFirstTenMovies();
  const dramaMovies = getMoviesWithGenre('Drama');
  console.log(`Only first ten movies:\n${firstTenMovies}\n`);
  console.log(`Only Drama movies:\n${dramaMovies}\n`);
}

main();
