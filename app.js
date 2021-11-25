const movies = require('./movies.json');

/**
 * Get the first ten movies.
 * @returns {Array}
 */
function getFirstTenMovies(){
    return movies.slice(0, 10);
}

/**
 * Get every movie of a given genre.
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    return movies.filter(item => item.genre.includes(genre));
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log("Only first ten movies:\n", firstTenMovies, "\n");
    console.log("Only Drama movies:\n", dramaMovies, "\n");
}

main();