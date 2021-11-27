const movies = require('./movies.json');


/**
 * the function must fetch the first ten elements of the array
 * @returns {Array}
 */


function getFirstTenMovies(){
   moviesTen = movies.slice(0, 10)
   /* return JSON.stringify(moviesTen) */
    console.log(moviesTen);
}

 
/**
 * the function must bring all the movies that contain the genre passed by parameter
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    
    movies.filter(gen =>{
        if(gen.genre == genre)
        return console.log(gen.title)
    })
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:\n${firstTenMovies}\n`);
    console.log(`Only Drama movies:\n${dramaMovies}\n`);
}

main();