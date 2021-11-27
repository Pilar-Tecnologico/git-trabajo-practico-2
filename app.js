const movies = require('./movies.json');

/**
 * Complete with a brief definition of what this function should do
 * @returns {Array}
 */
function getFirstTenMovies(){
    //complete with your code
    const firstTenMovies = movies.slice(0,10);
    return firstTenMovies;
}

/**
 * Complete with a brief definition of what this function should do
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    //complete with your code
    const moviesGenre = movies.filter(a => a.genre == genre);
    return moviesGenre;
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:\n`+ JSON.stringify(firstTenMovies, null, 2)+ `\n`);
    console.log(`Only Drama movies:\n`+ JSON.stringify(dramaMovies, null, 2)+ `\n`);
}

main();