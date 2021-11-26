const movies = require('./movies.json');

/**
 * this function should get from movies,json the ten fisrt movies listed.
 * @returns {Array}
 */
function getFirstTenMovies(){
    //complete with your code
}

/**
 * this fuction should get from movies.json the movies with the selected genre (could be than more one genre)
 * 
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