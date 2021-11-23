const movies = require('./movies.json');

/**
 * This function returns first 10 movies from an array
 * @returns {Array}
 */
function getFirstTenMovies(){
    return movies.slice(0, 10)
}

/**
 * This function returns a movie by genre
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    return movies.filter(movie => movie.genre.includes(genre))
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:\n${JSON.stringify(firstTenMovies)}\n`);
    console.log(`Only Drama movies:\n${JSON.stringify(dramaMovies)}\n`);
}

main();