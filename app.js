const movies = require('./movies.json');

/**
 * Get only the first ten elements of the movies array
 * @returns {Array}
 */
function getFirstTenMovies(){
    //complete with your code
}

/**
 * Bring all the movies that contain the genre passed by parameter (in this case Drama)
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    //complete with your code
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:\n${firstTenMovies}\n`);
    console.log(`Only Drama movies:\n${dramaMovies}\n`);
}

main();