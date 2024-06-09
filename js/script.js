"use strict";


const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    alert('Просмотрено мало фильмов');
} else if (personalMovieDB.count <= 30) {
    alert('Просмотрено среднее количество фильмов');
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман!');
} else {
    alert('error');
}



    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", ''),
              b = prompt("На сколько оцените его?", '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    };



console.log(personalMovieDB)

