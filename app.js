const movies = require('./movies.json');

/**
 * Complete with a brief definition of what this function should do
 * This function go through the array, evaluate the position of each element in the array, 
 * and if the position is less than 10, it will return the element in that position.
 * @returns {Array}
 */
function getFirstTenMovies(){
    //complete with your code
    return movies.slice(0, 9)
}

/**
 * Complete with a brief definition of what this function should do
 * This function go through the array, evaluate if the genre of each element 
 * is equal to the genre of the condition, and return the element that meets that condition.
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    //complete with your code
    return movies.filter((elemento) => elemento.genre === genre)
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:\n${firstTenMovies}\n`);
    console.log(`Only Drama movies:\n${dramaMovies}\n`);
}

main();