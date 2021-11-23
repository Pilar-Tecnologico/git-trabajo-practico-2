const movies = require('./movies.json');

/**
 * This function returns the first 10 movies of an array
 * @returns {Array}
 */
function getFirstTenMovies(){
    let moviesReturn = []
    for(let i=0; i<10; i++){
        moviesReturn.push(movies[i])
    }
    return JSON.stringify(moviesReturn)
}

/**
 * This function returns an array of all the movies that contain the genre passed by parameter
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    let moviesReturn = []
    for (let movie of movies){
        if(movie.genre.includes(genre)){
            moviesReturn.push(movie)
        }  
    }
    return JSON.stringify(moviesReturn)
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:\n${firstTenMovies}\n`);
    console.log(`Only Drama movies:\n${dramaMovies}\n`);
}

main();