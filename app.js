const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i =0; i < 2; i++) {
    const a = prompt('Один из посмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');

    if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
    
if (personalMovieDB.count < 10) {
    console.log('Мало');
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('класс');
} else if(personalMovieDB.count >= 30) {
    console.log('киноман');
} else {
    console.log('ошибка');
}

}

console.log(personalMovieDB);