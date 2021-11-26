const movies = require('./movies.json');

/**
 * Get the first ten elements of the array
 * @returns {Array}
 */
function getFirstTenMovies(){
    

    let firstTenMovies =  movies.slice(0,10)
    return JSON.stringify(firstTenMovies, null, '\t')
}

/**
 * Get all the movies that contain the genre passed by parameter
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