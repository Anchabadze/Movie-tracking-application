let numberOfMovies; 

function start() {
    numberOfMovies = +prompt('How many movies have you seen so far?', ''); 

    while (numberOfMovies == '' || numberOfMovies == null || isNaN(numberOfMovies)) {
        numberOfMovies = +prompt('How many movies have you seen so far?', '');
    }

}

// start();

const personalMovieDB = {
    count: numberOfMovies,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyMovies() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('One of the last movies you saw?', ''), 
                b = prompt('How do you rate it?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done!');
        } else {
            console.log('Error!');
            i--;
        }
    }
}

// rememberMyMovies();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Watched few movies');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('You are a classic viewer');
    } else if (personalMovieDB.count >= 30) {
        console.log('You are a movie buff');
    } else {
        console.log('Error!');
    }
}

// detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

// showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favorite genre by number ${i}`);
    }
}

writeYourGenres();
