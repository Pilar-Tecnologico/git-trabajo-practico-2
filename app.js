const movies = require('./movies.json');

/**
 * returns an array with ten elements
 * @returns {Array}
 */
function getFirstTenMovies(){
   let First = [];
for(let i=0 ;  i<=10; i++){
    First.push(movies[i]);
}
return  (First);
 }

/**
 * this function brings all the movies that contain the genre passed by parameter
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    //complete with your code
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:\n${ JSON.stringify(firstTenMovies)}\n`);
    console.log(`Only Drama movies:\n${dramaMovies}\n`);
}

main();