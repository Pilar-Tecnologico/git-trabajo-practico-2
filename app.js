const movies = require('./movies.json');

/**
 * Get the first ten movies of the list.
 * @returns {Array}
 */
function getFirstTenMovies(){
    const firstTenMovies = movies.slice(0, 10);
    return firstTenMovies;
}

/**
 * Get all the movies filter by genre name.
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    //complete with your code
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:\n`+ JSON.stringify(firstTenMovies, null, 2)+ `\n`);
    console.log(`Only Drama movies:\n${dramaMovies}\n`);
}

main();
