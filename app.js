'use strict'

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', ''); 
    
        while(personalMovieDB.count == '' || numberOfFilms == null || isNaN(personalMovieDB.count) ) {
            personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '')
        }
    },
    rememberMyFilms: function () {
        for(let i =0; i < 2; i++) {
            const a = prompt('Один из посмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        
            if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPesonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Мало');
        } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('класс');
        } else if(personalMovieDB.count >= 30) {
            console.log('киноман');
        } else {
            console.log('ошибка');
        }
    },
    showDB: function(hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVIsibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre === ''|| genre == null) {
                console.log('Mistake');
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.forEach((item, i) => {
            console.log(`Любимый жанр номер ${i + 1} - это ${item}`);
        });
    }
};
