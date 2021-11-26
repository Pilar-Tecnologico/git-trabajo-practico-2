const movies = require("./movies.json");

/**
 * Get an array with the first 10 movies in the movies.json file
 * @returns {Array}
 */
function getFirstTenMovies() {
  return movies.slice(0, 10);
}

/**
 * Get an array of all the movies with the specified genre
 * @param  {String} genre
 * @returns {Array}
 */
function getMoviesWithGenre(genre) {
  return movies.filter((movies) => movies.genre.includes(genre));
}

function main() {
  const firstTenMovies = getFirstTenMovies();
  const dramaMovies = getMoviesWithGenre("Drama");
  console.log(`Only first ten movies:`);
  firstTenMovies.forEach((movie) => console.log(movie));
  console.log(`Only Drama movies:`);
  dramaMovies.forEach((movie) => console.log(movie));
}

main();
