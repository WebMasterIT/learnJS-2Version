//Задача №1  Фильтрация уникальных элементов массива
// Допустим, у нас есть массив arr.

// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

// Например:

// function unique(arr) {
//   /* ваш код */
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(values) ); // Hare, Krishna, :-O
// P.S. Здесь мы используем строки, но значения могут быть любого типа.

// P.P.S. Используйте Set для хранения уникальных значений.




//  МОЙ ОТВЕТ 

// function unique(arr) {
//     let set = new Set(arr);



//     for (let value of set) alert(value);
         
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
// "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(values) ); // Hare, Krishna, :-O





// //Правильный ответ 

// function unique(arr) {
//   return Array.from(new Set(arr));
// }





//Задача №2  Отфильтруйте анаграммы
// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

// Например:

// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

// Например:

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.





//Мой ответ  - 
// function aclean(arr) {
//     let ann  = Array.from(arr);

//     let ann2 =  ann.map(item => item);
 

//     let ann3 = 0;

//     for (let word of ann2.values()) {
//         let wordAnn = word.split('').sort().join(''); 
//         for (let i= 0; i < ann2.length; i++) {
//             if ( wordAnn[i] !=  wordAnn[i+1]  ) {
//                 ann3 =  wordAnn;
//             }
//         }
//   }

//    console.log(ann3);
// }


// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"




//Правильный ответ
// function aclean(arr) {
//   let map = new Map();

//   for (let word of arr) {
//     // разбиваем слово на буквы, сортируем и объединяем снова в строку
//     let sorted = word.toLowerCase().split("").sort().join(""); // (*)
//     map.set(sorted, word);
//   }


//   return Array.from(map.values());
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) );


 

//Перебираемые ключи
// Мы хотели бы получить массив ключей map.keys() в переменную и 
// далее работать с ними, например, применить метод .push.
// Но это не выходит:

let map = new Map();

map.set("name", "John"); 

console.log(map);

let keys = map.keys(); 

console.log(map.length);

// Error: keys.push is not a function 
keys.push("more");

// Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?
//Потому что keys не массив и у него нет метода push

//Правильный ответ  
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys); // name, more