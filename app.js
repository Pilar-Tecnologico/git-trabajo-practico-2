const movies = require('./movies.json');

/**
 * Gets the first ten movies fron the movie array
 * @returns {Array}
 */
function getFirstTenMovies(){
    return JSON.stringify(movies.slice(0,10))
}

/**
 * Gets the movies givin a gender by parameter
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