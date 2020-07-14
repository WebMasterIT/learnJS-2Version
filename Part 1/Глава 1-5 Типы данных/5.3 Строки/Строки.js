//Задача №1
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

// ucFirst("вася") == "Вася";

//Мой ответ    +
// function ucFirst(str) {
//     alert( str[0].toUpperCase() +  str.slice(1, str.length));
// }

// ucFirst("вячеслав")

//Правильный ответ
// function ucFirst(str) {
//     if (!str) return str;

//     return str[0].toUpperCase() + str.slice(1);
//   }

//   alert( ucFirst("вася") ); // Вася

//Задача №2  Проверка на спам

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

//Мой ответ  +
// function checkSpam(str) {
//     for (let char of str) {
//         if (( str.toLowerCase().includes("viagra", 0) || str.toLowerCase().includes("xxx", 0))) {
//             return true
//         } else {
//             return false
//         }
//     }
// }

// console.log(checkSpam('buy ViAgRA now'));
// console.log(checkSpam('free xxxxx'));
// console.log(checkSpam("innocent rabbit"));

//Правильный ответ
// function checkSpam(str) {
//     let lowerStr = str.toLowerCase();

//     return lowerStr.includes('viagra') || lowerStr.includes('xxx');
//   }

//   alert( checkSpam('buy ViAgRA now') );
//   alert( checkSpam('free xxxxx') );
//   alert( checkSpam("innocent rabbit") );

//Задача №3 Усечение строки
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

// Например:

// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

// truncate("Всем привет!", 20) = "Всем привет!"

//Мой ответ  +
// function truncate(str, maxlength){
//     if (str.length > maxlength) {
//         let str2 = str.slice(0, maxlength -1 ) + '...';
//         // console.log(str[str2.length - 1]);
//         // let str3 = str2;
//         alert(str2);
//     } else {
//         alert(str.slice(0, maxlength))
//     }
// }

// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)// = "Вот, что мне хотело…"

// truncate("Всем привет!", 20)  //  "Всем привет!"

//Задача №4 Усечение строки
// Выделить число
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

// // Например:
// alert( extractCurrencyValue('$120') === 120 ); // true


//Мой вариант    -    нерабочий   
// function extractCurrencyValue(str) {
//     let str2 = str.slice(0, str.length);
//     for (let j = 0; j <= str2.length; j++ )  {
//         for (let i = 49; i <= 57; i++) {
//         if (str2.charCodeAt(j) == String.fromCodePoint(i)){
//         let str3;
//         str3 += str2[i];
//         console.log(str2.charCodeAt(j) )
//         console.log(str3 )
//             }
//         }
//       } 
// }

//  alert(extractCurrencyValue("$120") === 120); // true

//Правильный ответ
// function extractCurrencyValue(str) {
//     console.log(+str.slice(0));
//   }
//   alert(extractCurrencyValue("$120") === 120); // true


