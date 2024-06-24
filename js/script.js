"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function showMyDB() {
    if (personalMovieDB['privat'] === false ) {
        console.log(personalMovieDB);
    }
}

showMyDB();




function rememberMyFilms() {

    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", '').trim(),
              b = prompt("На сколько оцените его?", '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    };

}

rememberMyFilms();


function detectPersonalLevel() {

    if (personalMovieDB.count < 10) {
        alert('Просмотрено мало фильмов');
    } else if (personalMovieDB.count <= 30) {
        alert('Просмотрено среднее количество фильмов');
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман!');
    } else {
        alert('error');
    }
}

detectPersonalLevel();

function writeYourGenres() {
    for (let i = 0; i <= 2; i++) {
        let  question = prompt(`Ваш любимый жанр под номером ${i + 1}`);
        personalMovieDB.genres[i] = question;
    }
}

writeYourGenres();
