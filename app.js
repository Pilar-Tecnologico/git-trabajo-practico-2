const movies = require('./movies.json');

/**
 * this function should get from movies.json the ten first movies listed
 * @returns {Array}
 */
function getFirstTenMovies(){
    const firstTenMovies = movies.slice(0, 10);
    return firstTenMovies; 
}

/**
 * this function should get from movies.json the movies whit the selected genre (could be more than one genre)
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    const moviesGenre = movies.filter(a => a.genre == genre);
    return moviesGenre;
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Comedy');
    console.log(`Only first ten movies:\n${firstTenMovies}\n`);
    console.log(`Only Drama movies:\n${dramaMovies}\n`);
}

main();