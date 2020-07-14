//Задача №1  Создайте дату

// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

//Мой ответ +
// let Feb20_2012 = new Date(2012, 1, 20, 3, 12, 0, 0);
// alert(Feb20_2012);






//Задача 2
// Покажите день недели

// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

// Например:

// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getWeekDay(date) );        // нужно вывести "ВТ"

//Мой ответ  +-

// function getWeekDay(date) {

//   switch (date.getDay()) {
//     case 1:
//       return("ПН");
//       break;
//     case 2:
//       return("ВТ");
//       break;
//     case 3:
//       return("СР");
//       break;
//     case 4:
//       return("ЧТ");
//       break;
//     case 5:
//       return("ПТ");
//       break;
//     case 6:
//       return ("СБ");
//       break;
//     case 0:
//       return("ВС");
//       break;
//   }
// }


// let date = new Date(2012, 0, 20);  
// alert( getWeekDay(date) );        



//Правильный ответ
// function getWeekDay(date) {
//     let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
//     return days[date.getDay()];
//   }

//   let date = new Date(2014, 0, 3); // 3 января 2014 года
//   alert( getWeekDay(date) ); // ПТ









//Задача 3
// День недели в европейской нумерации

// В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getLocalDay(date) );       // вторник, нужно показать 2


//Мой ответ +

// function getLocalDay(date) {
//     let days = ['1', '2', '3', '4', '5', '6'];


//     if (date.getDay() == 0) {
//         return 7;
//     }

//     return days[date.getDay()-1];
// }

// let date = new Date(2012, 0, 29);  // 3 января 2012 года
// alert( getLocalDay(date) );       // вторник, нужно показать 2



//Правильный ответ
//     function getLocalDay(date) {

//     let day = date.getDay();

//     if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
//       day = 7;
//     }

//     return day;
//   }






// Задача 4
// Какой день месяца был много дней назад?
// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

// Функция должна надёжно работать при значении days=365 и больших значениях:

// let date = new Date(2015, 0, 2);

// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
// P.S. Функция не должна изменять переданный ей объект date.


//Мой ответ  +-

// function getDateAgo(date, days) {

//     let day = date.setDate((date.getDate() - days));
//     return date.getDate();
// }

// let date = new Date(2015, 0, 2);

// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

//Правильный ответ

// function getDateAgo(date, days) {
//   let dateCopy = new Date(date);

//   dateCopy.setDate(date.getDate() - days);
//   return dateCopy.getDate();
// }

// let date = new Date(2015, 0, 2);

// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)






//Задача 5
// Последнее число месяца?

// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

// Параметры:

// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).


//Мой ответ  +
// function getLastDayOfMonth(year, month) {

//     let theBigDay = new Date(year, month + 1, 0);

//     alert(theBigDay.getDate()) 
// }

// getLastDayOfMonth(2013, 1)







//Задача 6
// Сколько сегодня прошло секунд?

// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

// getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.


//Мой ответ

// function getSecondsToday() {

//     let Day = new Date();

//     alert('Сегодня прошло '  + (Day.getHours() * 3600 + Day.getMinutes() * 60 + Day.getSeconds()) + ' секунд' )

// }


// getSecondsToday()

//Правильный ответ
// function getSecondsToday() {
//   let now = new Date();

//   // создаём объект с текущими днём/месяцем/годом
//   let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

//   let diff = now - today; // разница в миллисекундах
//   return Math.round(diff / 1000); // получаем секунды
// }

// alert( getSecondsToday() );








//Задача 7
// Сколько секунд осталось до завтра?

// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

// Например, если сейчас 23:00, то:

// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.


//Мой ответ +

// function getSecondsToTomorrow() {

//     let Day = new Date();

//     alert('До завтра осталось '  + (86400 - (Day.getHours() * 3600 + Day.getMinutes() * 60 + Day.getSeconds())) + ' секунд' )
// }

// getSecondsToTomorrow()




//Правильный ответ
// Чтобы получить количество миллисекунд до завтра, можно из «завтра 00:00:00» вычесть текущую дату.

// Сперва сгенерируем дату на «завтра» и сделаем следующее:



// function getSecondsToTomorrow() {
//   let now = new Date();

//   // завтрашняя дата
//   let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

//   let diff = tomorrow - now; // разница в миллисекундах
//   return Math.round(diff / 1000); // преобразуем в секунды
// }
// Альтернативное решение:

// function getSecondsToTomorrow() {
//   let now = new Date();
//   let hour = now.getHours();
//   let minutes = now.getMinutes();
//   let seconds = now.getSeconds();
//   let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
//   let totalSecondsInADay = 86400;

//   return totalSecondsInADay - totalSecondsToday;
// }






//Задача 8
// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
// Например:

// alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// // вчерашняя дата вроде 31.12.2016, 20:00
// alert( formatDate(new Date(new Date - 86400 * 1000)) );


//Мой ответ -
 
// function formatDate(date) {
//     datenow = new Date();

    

//     if (date.getSeconds() - 1 < datenow.getSeconds() ) {
//         return 'Прямо сейчас'

//     }

//     else if (date.getSeconds() - 1 < date  < date.getSeconds() + 60 * 1000) {
//         return date.getSeconds() + ' сек. назад'
//     }

//     else if (date.getTime() + 60 * 1000 < date < datenow + 3600 * 1000) {
//         return date.getMinutes() + ' мин. назад'
//     }

//     else  datenow =   datenow.getDate() + '.0' + ( datenow.getMonth() + 1 ) + '.' + datenow.getFullYear() + ' ' + datenow.getHours() + ':' + datenow.getMinutes();

//     console.log(date.getTime() - 1);
//     console.log(date + 450);
// }

// alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
// alert( formatDate(new Date(new Date - 86400 * 1000)) );


//Правильный ответ


// function formatDate(date) {
//   let diff = new Date() - date; // разница в миллисекундах

//   if (diff < 1000) { // меньше 1 секунды
//     return 'прямо сейчас';
//   }

//   let sec = Math.floor(diff / 1000); // преобразовать разницу в секунды

//   if (sec < 60) {
//     return sec + ' сек. назад';
//   }

//   let min = Math.floor(diff / 60000); // преобразовать разницу в минуты
//   if (min < 60) {
//     return min + ' мин. назад';
//   }

//   // отформатировать дату
//   // добавить ведущие нули к единственной цифре дню/месяцу/часам/минутам
//   let d = date;
//   d = [
//     '0' + d.getDate(),
//     '0' + (d.getMonth() + 1),
//     '' + d.getFullYear(),
//     '0' + d.getHours(),
//     '0' + d.getMinutes()
//   ].map(component => component.slice(-2)); // взять последние 2 цифры из каждой компоненты

//   // соединить компоненты в дату
//   return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
// }

// alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// // вчерашняя дата вроде 31.12.2016, 20:00
// alert( formatDate(new Date(new Date - 86400 * 1000)) );


// Альтернативное решение:

// function formatDate(date) {
//   let dayOfMonth = date.getDate();
//   let month = date.getMonth() + 1;
//   let year = date.getFullYear();
//   let hour = date.getHours();
//   let minutes = date.getMinutes();
//   let diffMs = new Date() - date;
//   let diffSec = Math.round(diffMs / 1000);
//   let diffMin = diffSec / 60;
//   let diffHour = diffMin / 60;

//   // форматирование
//   year = year.toString().slice(-2);
//   month = month < 10 ? '0' + month : month;
//   dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
//   hour = hour < 10 ? '0' + hour : hour;
//   minutes = minutes < 10 ? '0' + minutes : minutes;

//   if (diffSec < 1) {
//     return 'прямо сейчас';
//   } else if (diffMin < 1) {
//     return `${diffSec} сек. назад`
//   } else if (diffHour < 1) {
//     return `${diffMin} мин. назад`
//   } else {
//     return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
//   }
// }