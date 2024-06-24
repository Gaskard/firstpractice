"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
        }
    },



    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    rememberMyFilms: function() {

        for (let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?", '').trim(),
                  b = prompt("На сколько оцените его?", '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        };
    
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count >= 0 && personalMovieDB.count <= 10) {
            alert('Просмотрено мало фильмов');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
            alert('Просмотрено среднее количество фильмов');
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман!');
        } else {
            alert('error');
        }
    },

    writeYourGenres: function() {
        for (let i = 0; i <= 2; i++) {
            let  question = prompt(`Ваш любимый жанр под номером ${i + 1}`);
            if (question === null || question === '') {
                i--;
            } else {
                personalMovieDB.genres[i] = question;
            }
        }
        personalMovieDB['genres'].forEach(function(item, i) {
            console.log(`Любимый жанр #${i + 1} - это ${item}`)
        })
    }
};

personalMovieDB.showMyDB(false);
/* personalMovieDB.toggleVisibleMyDB(); */
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();

