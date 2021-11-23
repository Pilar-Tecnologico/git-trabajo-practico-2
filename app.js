const movies = require("./movies.json");

/**
 * Returns an array of the first ten films
 * @returns {Array}
 */
function getFirstTenMovies() {
  //complete with your code
}

/**
 * Returns an array of all movies that contain the genre passed by parameter
 * @param  {String} genre
 * @returns {Array}
 */
function getMoviesWithGenre(genre) {
  //complete with your code
}

function main() {
  const firstTenMovies = getFirstTenMovies();
  const dramaMovies = getMoviesWithGenre("Drama");
  console.log(`Only first ten movies:\n${firstTenMovies}\n`);
  console.log(`Only Drama movies:\n${dramaMovies}\n`);
}

main();
