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
    //complete with your code
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:${JSON.stringify(firstTenMovies)}`);
    console.log(`Only Drama movies:\n${dramaMovies}\n`);
}

main();