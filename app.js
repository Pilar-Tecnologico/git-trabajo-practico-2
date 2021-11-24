const movies = require('./movies.json');

/**
 * Get the first ten movies.
 * @returns {Array}
 */
function getFirstTenMovies(){
    const first10Movies = movies.slice(0, 10);
    return first10Movies;
}

/**
 * Get every movie of a given genre.
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    //complete with your code
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log("Only first ten movies:\n", firstTenMovies, "\n");
    console.log("Only Drama movies:\n", dramaMovies, "\n");
}

main();