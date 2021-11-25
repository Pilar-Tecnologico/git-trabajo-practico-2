const movies = require('./movies.json');

/**
 * Gets the first ten movies of the array 
 * @returns {Array}
 */
function getFirstTenMovies(){
    const res = movies.slice(0,10).map((movie) => movie.title)
   return res;
}

/**
 * gets movies by its genre
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    const moviesFilted = movies.filter((movie) => movie.genre === genre)
    return JSON.stringify(moviesFilted)
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:\n${firstTenMovies}\n`);
    console.log(`Only Drama movies:\n${dramaMovies}\n`);
}

main();