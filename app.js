const movies = require('./movies.json');

/**
 * Returns an array which contains the first ten movies
 * @returns {Array}
 */
function getFirstTenMovies(){
    return movies.slice(0,10);
}

/**
 * Returns an array which contains movies filtered by genre
 * @param  {String} genre
 * @returns {Array}
 */
function getMoviesWithGenre(genre){
    return movies.filter(movie => movie.genre.includes(genre));
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:\n${firstTenMovies}\n`);
    console.log(`Only Drama movies:\n${dramaMovies}\n`);
}

main();