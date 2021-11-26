const movies = require("./movies.json");

/**
 * Complete with a brief definition of what this function should do
 * with the slice method we took the first 10 elements from the main array,
 * without changing de original array
 * @returns {Array}
 */
function getFirstTenMovies() {
  //complete with your code
  return movies.slice(0, 10);
}

/**
 * Complete with a brief definition of what this function should do
 * with the filter method we took all the  elements from the main array according to the condition returning a new array
 *
 * @param  {String} genre
 * @returns {Array}
 */

function getMoviesWithGenre(genre) {
  //complete with your code
  return movies.filter((item) => item.genre === genre);
}

function main() {
  const firstTenMovies = getFirstTenMovies();
  const dramaMovies = getMoviesWithGenre("Drama");

  console.log(
    `Only first ten movies:\n${JSON.stringify(firstTenMovies, null, 1)}\n`
  );

  console.log(`Only Drama movies:\n${JSON.stringify(dramaMovies, null, 1)}\n`);
}

main();
