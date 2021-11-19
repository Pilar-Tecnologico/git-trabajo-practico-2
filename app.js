const movies = require('./movies.json');

/**
 * Get an array with all data of the fisrt 10 movies
 * @returns {Array}
 */
function getFirstTenMovies(){
    return movies.slice(0,10);
}

/**
 * Get an Array of all movies with the specified genre
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