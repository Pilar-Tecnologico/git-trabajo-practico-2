const movies = require("./movies.json");

/**
 * Complete with a brief definition of what this function should do
 * @returns {Array}
 * this function returns the first ten movies found in the .json "movies"
 */
function getFirstTenMovies() {
  let aux = [];
  for (let i = 0; i < 10; i++) {
    aux.push(movies[i].title);
  }
  return aux;
}

/**
 * Complete with a brief definition of what this function should do
 * @param  {String} genre
 * @returns {Array}
 * this function returns all the movies filtering by a genre, which is a string I give as a paramater
 */
function getMoviesWithGenre(genre) {
    let aux = [];
    for (let i = 0; i < 10; i++) {
    if (movies[i].genre.includes(genre)) aux.push(movies[i].title);
    }
    return aux;
}

function main() {
  const firstTenMovies = getFirstTenMovies();
  const dramaMovies = getMoviesWithGenre("Drama");
  console.log(`Only first ten movies:\n${firstTenMovies}\n`);
  console.log(`Only Drama movies:\n${dramaMovies}\n`);
}

main();
