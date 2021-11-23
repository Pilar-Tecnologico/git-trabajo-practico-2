const movies = require('./movies.json');

/**
 * Cycle through the array. Push the first ten elements into another array
 * @returns {Array}
 */
function getFirstTenMovies(){
    //complete with your code
    const element=[]
    for (let i = 0; i < movies.length; i++) {
        if (i<10) {
            element.push(movies[i])

        }
        
        
    }
    return element
}

/**
 * Complete with a brief definition of what this function should do
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    //complete with your code
    
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:\n `);
    console.log(Object.values(firstTenMovies))
    console.log(`Only Drama movies:\n`);
    //console.log(Object.values(dramaMovies))
}

main();