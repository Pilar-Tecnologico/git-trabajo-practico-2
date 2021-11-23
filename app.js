const movies = require('./movies.json');

/**
 * This function returns the first 10 movies of an array
 * @returns {Array}
 */
function getFirstTenMovies(){
    //complete with your code
}

/**
 * This function returns an array of all the movies that contain the genre passed by parameter
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