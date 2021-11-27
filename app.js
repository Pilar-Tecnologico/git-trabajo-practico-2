const movies = require('./movies.json');

/**
 * Returns an array which contains the first ten movies
 * @returns {Array}
 */
function getFirstTenMovies(){
    //complete with your code
}

/**
 * Returns an array which contains movies filtered by genre
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