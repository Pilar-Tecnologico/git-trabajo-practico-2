const movies = require('./movies.json');

/**
 * This function returns first 10 movies from an array
 * @returns {Array}
 */
function getFirstTenMovies(){
    //complete with your code
}

/**
 * This function returns a movie by genre
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    //complete with your code
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:${firstTenMovies}`);
    console.log(`Only Drama movies:\n${dramaMovies}\n`);
}

main();