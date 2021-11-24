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
    
    let getMovies = [];
    for(let i = 0; i < movies.length; i++) {
        if(movies[i].genre.includes(genre)){
            getMovies.push(movies[i])
            
        }
        
    }
    return (getMovies)
}


function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:\n${ JSON.stringify(firstTenMovies)}\n`);
    console.log(`Only Drama movies:\n${ JSON.stringify(dramaMovies)}\n`);
}

main();