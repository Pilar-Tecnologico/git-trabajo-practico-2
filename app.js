const movies = require('./movies.json');

/**
 * Get the first ten movies data of the dataset.
 * @returns {Array}
 */
function getFirstTenMovies(){
    //complete with your code
}

/**
 * Get each movie of a genre (independent of whether it has other genres)
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