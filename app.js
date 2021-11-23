const movies = require('./movies.json');

/**
 * Get the first ten movies data of the dataset.
 * @returns {Array}
 */
function getFirstTenMovies(){
    
    let first_ten_movies = [];

    for (let i=0 ; i<10 ; i++) {

        first_ten_movies[i] = JSON.stringify(movies[i]) + '\n_______________________\n'; //Copying json movies to the array
        first_ten_movies[i] = first_ten_movies[i].replace(/,"/g,'\n');  //replacing ," by a linefeed
                                                                        //if I replace just the comma (/,/g), each comma in description will be replaced too.
        first_ten_movies[i] = first_ten_movies[i].replace(/"/g,' ');  //replacing " by a space 
        first_ten_movies[i] = first_ten_movies[i].replace(/[{}]/g,'');  //erasing { and }

        // first_ten_movies.push(`Movie ${i+1}:\n${JSON.stringify(movies[i])}\n`);  //copying classmates.

    }
    // console.log(Array.isArray(first_ten_movies))  //Is this object an array?

    return first_ten_movies;

}

/**
 * Get each movie of a genre (independent of whether it has other genres)
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