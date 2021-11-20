const movies = require('./movies.json');

/**
 * Returns the first 10 elements of an array
 * @returns {Array}
 */
function getFirstTenMovies(){
    let first10Movies = [];
    for(let i = 0; i < 10; i++){
        first10Movies.push(`Movie ${i+1}:\n${JSON.stringify(movies[i])}\n`);
    }
    return first10Movies;
}

/**
 * Returns all movies by genre
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    //complete with your code
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:\n${firstTenMovies.join('\n')}\n`);
    console.log(`Only Drama movies:\n${dramaMovies}\n`);
}

main();