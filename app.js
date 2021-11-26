const movies = require("./movies.json");

/**
 * This function returns the first ten items inside movies
 * @returns {Array}
 */
function getFirstTenMovies() {
  return movies.slice(0, 10);
}

/**
 * This function returns the movies that belong in a certain genre
 * @param  {String} genre
 * @returns {Array}
 */
function getMoviesWithGenre(genre) {}

function main() {
  const firstTenMovies = getFirstTenMovies();
  const dramaMovies = getMoviesWithGenre("Drama");
  console.log(`Only first ten movies:\n${firstTenMovies}\n`);
  console.log(`Only Drama movies:\n${dramaMovies}\n`);
}

main();
