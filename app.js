const movies = require('./movies.json');

/**
 * - This first function returns only the first ten elements of the array:
 * @returns {Array}
 */
function getFirstTenMovies(){
    //complete with your code
    function getFirstTenMovies(){
        let first10Movies = [];
        for(let i = 0; i < 10; i++){
            first10Movies.push(`Movie ${i+1}:\n${JSON.stringify(movies[i])}\n`);
        }
        return first10Movies;
    }
    
}

/**
 * - This second function brings all the movies that contain the genre passed by parameter (they may have more than one):
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