const movies = require('./movies.json');


/**
* the first ten elements of the array
 * @returns {Array}
 */
function getFirstTenMovies(){
       let movie = movies.slice(0,10)
       covert =  JSON.stringify(movie)
       return movie
}

/**
 * movies containing the genre passed by parameter
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
        getMovieGen = movies.map((getMovieGen)=>getMovieGen.title || getMovieGen.title)
        covert1 = JSON.stringify(getMovieGen)
        return getMovieGen
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:\n${firstTenMovies}\n`);
    console.log(`Only Drama movies:\n${dramaMovies}\n`);
}

main();