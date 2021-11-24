const movies = require("./movies.json");

/**
 * Returns an array of the first ten films
 * @returns {Array}
 */
function getFirstTenMovies() {

  let firstTen = [];
  for (let i = 0; i < 10; i++) {
    firstTen.push(movies[i]);
  }
  return JSON.stringify(firstTen);

  //complete with your code

}

/**
 * Returns an array of all movies that contain the genre passed by parameter
 * @param  {String} genre
 * @returns {Array}
 */
function getMoviesWithGenre(genre) {

  let moviesGenre = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].genre.includes(genre)) {
      moviesGenre.push(movies[i]);
    }
  }
  return JSON.stringify(moviesGenre);
=======
  //complete with your code
}

function main() {
  const firstTenMovies = getFirstTenMovies();
  const dramaMovies = getMoviesWithGenre("Drama");
  console.log(`Only first ten movies:\n${firstTenMovies}\n`);
  console.log(`Only Drama movies:\n${dramaMovies}\n`);
}

main();
