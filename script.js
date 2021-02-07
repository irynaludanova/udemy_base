/* Задание на урок:
1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'
2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false
3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате:
    movies: {
        'logan': '8.1'
    }
Проверить, чтобы все работало без ошибок в консоли */

"use strict";
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}

let countQuestion = 2;
for (let i = 0; i < countQuestion; i++) {
  const a = prompt("Один из последних фильмов", ""),
    b = prompt("На сколько оцените его?", "");

  if (
    a != "" && //пустая строка
    a.length < 50 &&
    a != null && //при отмене ввода
    b != "" && //пустая строка
    b.length < 50 &&
    b != null //при отмене ввода
  ) {
    personalMovieDB.movies[a] = b;
  } else {
    i--; //ввозвращение на 1 итерацию назад(декремент)
  }
}

console.log(personalMovieDB);
