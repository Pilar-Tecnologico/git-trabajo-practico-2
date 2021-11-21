const movies = require('./movies.json');

/**
 * Get an array with all the data of the firts 10 movies 
 * @returns {Array}
 */
function getFirstTenMovies(){
    firstTenMovies = movies.slice(0,10);
    return firstTenMovies;
}

/**
 * Get an array of all movies with the specified genre
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    moviesByGenre = movies.filter(m => m.genre.includes(genre));
    return moviesByGenre;
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:`);
    console.log(firstTenMovies);
    console.log(`\nOnly Drama movies:`);
    console.log(dramaMovies);
}

main();