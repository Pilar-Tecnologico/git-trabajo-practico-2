const movies = require('./movies.json');

/**
 * take the first ten movies as an object in the app.js file.
 * @returns {Array}
 */
function getFirstTenMovies(){
    //complete with your code
}

/**
* create a filtering arrayd with the specified genre of the movies using the .filter () method that returns a new array.
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    return movies.filter((gen)=> gen.genre == genre);
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log("Only first ten movies:\n",firstTenMovies,"\n");
    console.log("Only Drama movies:\n",dramaMovies,"\n");
}

main();