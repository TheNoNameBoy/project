'use strict'

const numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');

let personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
private: false

};

const a = prompt('Сколько фильмов вы уже смотрели?', ''),
b = prompt('На сколько оцениет его?',''),
c = prompt('Один из последних просмотренных фильмов?', ''),
d = prompt('На сколько оцениет его?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);