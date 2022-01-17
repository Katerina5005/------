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
    
    personalMovieDB.movies[a] = b;
}

console.log(personalMovieDB);