const movies = require('./movies.json');

/**
 * Complete with a brief definition of what this function should do
 * @returns {Array}
 */
function getFirstTenMovies() {
    //complete with your code
    return movies.slice(0, 10)

}

/**
 * Complete with a brief definition of what this function should do
 * @param  {String} genre
 * @returns {Array}
 */


function main() {
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:`);
    firstTenMovies.forEach(movies => {
        console.log(movies.title)

    });

 
}

main();