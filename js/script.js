const numberOfMovies = +prompt('How many movies have you seen so far?', ''); 

const personalMovieDB = {
    count: numberOfMovies,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('One of the last movies you saw?', ''), 
        b = prompt('How do you rate it?', ''),
        c = prompt('One of the last movies you saw?', ''), 
        d = prompt('How do you rate it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);