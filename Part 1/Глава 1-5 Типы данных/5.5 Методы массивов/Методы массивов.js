//Задача №1 Переведите текст вида border-left-width в borderLeftWidth

//Мой ответ - 
// function camelize(str) {

//     str = str.split('');

//     star = [];
//     star = str;

//     for (val of star) {
//         if (val == '-') {
//             str.splice(val);
//         }    
//     }
    
    

//     str2 = str.join('');
//     alert(str2)

// }

// camelize("background-color")



//правильный ответ 
// function camelize(str) {
//  return str
//     .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
//     .map(
//       // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
//       // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
//       (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
//     console.log(str)
// }


// camelize("background-color")






//Задача №2 Фильтрация по диапазону
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

// Функция должна возвращать новый массив и не изменять исходный.

// Например:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr ); // 5,3,8,1 (без изменений)


//Мой ответ -  ( не понял как задать двойное условие  (a >= value) && (value <= b) получилось только либо по а либо по b 
// если задавал двойное то выводился просто весь массив )
// function filterRange(arr, a, b) {
//     let filtered = arr.filter(value => value < b);

//     console.log(filtered);
// }
//     let arr = [5, 3, 8, 1, 2];

//     let filtered = filterRange(arr, 1, 4);
//     alert( filtered ); // 3,1 (совпадающие значения)

//     alert( arr ); // 5,3,8,1 (без изменений)


//Правильный ответ 
// function filterRange(arr, a, b) {
//   // добавлены скобки вокруг выражения для улучшения читабельности
//   return arr.filter(item => (a <= item && item <= b));
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr ); // 5,3,8,1 (без изменений)







//Задача №3
//Фильтрация по диапазону "на месте"
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

//Мой ответ  -
//Не понял нормально ли то что alert за пределом массива как в примере выдает весь массив или там тоже должно быть 3,1 ?
// function filterRangeInPlace(arr, a, b) {
//    let filtered = arr.filter(item => (a <= item && item <= b));
//    arr = filtered;
//    alert(arr)  // [3, 1]
// }


// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr,  1, 4);

// alert( arr ); // [3, 1]

//Правильный ответ 

// function filterRangeInPlace(arr, a, b) {

//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];

//     // удалить, если за пределами интервала
//     if (val < a || val > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }

// }

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert( arr ); // [3, 1]







//Задача №4 Сортировать в порядке по убыванию
// let arr = [5, 2, 1, -10, 8];
 
// alert( arr ); // 8, 5, 2, 1, -10

//Мой ответ   +
// function descendingOrder(arr) {
//     arr.sort();
//     arr.reverse();
    
//     alert(arr);
// }

// let arr = [5, 2, 1, -10, 8];

// descendingOrder(arr);


//Правильный ответ
// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// alert( arr );






// Задача №5 Скопировать и отсортировать массив
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)


//Мой ответ   +
// function copySorted(arr) {
    
//     let sort1 = arr.slice();
//     sort1.sort();
//     return sort1;

// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)



//Правильный ответ 
// function copySorted(arr) {
//   return arr.slice().sort();
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted );
// alert( arr );




 



// Задача №6 Создать расширяемый калькулятор

// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

// Задание состоит из двух частей.

// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

// Пример использования:

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

// Например, давайте добавим умножение *, деление / и возведение в степень **:

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.
// Не лишним будет добавить обработку ошибок.

//Мой ответ -
// function Calculator() {

//     let calc = {

//     calculate(str) {
//         return Number(str);
//     }
// }

//     alert( calc.calculate("3 + 7") ); // 10

// //     addMethod(name, func(a,b));

// //     let powerCalc = new Calculator;
// //     powerCalc.addMethod("*", (a, b) => a * b);
// //     powerCalc.addMethod("/", (a, b) => a / b);
// //     powerCalc.addMethod("**", (a, b) => a ** b);
// }

// Calculator();


//Правильный ответ
// function Calculator() {

//   this.methods = {
//     "-": (a, b) => a - b,
//     "+": (a, b) => a + b
//   };

//   this.calculate = function(str) {

//     let split = str.split(' '),
//       a = +split[0],
//       op = split[1],
//       b = +split[2]

//     if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//       return NaN;
//     }

//     return this.methods[op](a, b);
//   }

//   this.addMethod = function(name, func) {
//     this.methods[name] = func;
//   };
// }

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("16 /   4");
// alert( result ); // 8









// Задача №7 Трансформировать в массив имён
// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

// Например:

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = /* ... ваш код */

// alert( names ); // Вася, Петя, Маша


//Мой ответ +
 // function namesArray() {

 //    let vasya = { name: "Вася", age: 25 };
 //    let petya = { name: "Петя", age: 30 };
 //    let masha = { name: "Маша", age: 28 };
    
 //    let users = [ vasya, petya, masha ];

 //    let names =  users.map(item => item.name);
 //    alert( names );
 
 // }

 // namesArray();
 








// Задача №8
// Трансформировать в объекты

// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

// Например:

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = /* ... ваш код ... */

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин



//Мой ответ   +
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];
 
 
// usersMapped = [
//   { fullName: users.map(item => item.name).slice(0,1)  + ' ' + users.map(item => item.surname).slice(0,1), id: 1 },
//   { fullName: users.map(item => item.name).slice(1,2)  + ' ' + users.map(item => item.surname).slice(1,2), id: 2 },
//   { fullName: users.map(item => item.name).slice(2)  + ' ' + users.map(item => item.surname).slice(2), id: 3 }
// ]
 

// console.log(usersMapped[0], usersMapped[0].id);
// console.log(usersMapped[1], usersMapped[1].id);
// console.log(usersMapped[2], usersMapped[2].id);
// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин


//Правильный ответ 

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(user => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id
// }));

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

// alert( usersMapped[0].id ); // 1
// alert( usersMapped[0].fullName ); // Вася Пупкин





// Задача №9 Отсортировать пользователей по возрасту
// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
//  function sortByAge(users) {
//     for (let i = 0; i < arr.length; i++) {
//          for(let j = i + 1; j < arr.length; j++) {
//         if (arr[i].age > arr[j].age) {
//             return 1;
//         }
//         else if (arr[i].age == arr[j].age) {
//             return 0;
//         }

//         else if (arr[i].age < arr[j].age) {
//             return -1;
//         }
//     }
// }
//     arr.sort();
//  }

 

// Правильный ответ
// function sortByAge(arr) {
//   arr.sort((a, b) => a.age > b.age ? 1 : -1);
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// sortByAge(arr);

// // теперь отсортировано: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя










// Задача №10   
//Перемешайте массив

// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

// Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:

// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...
// Все последовательности элементов должны иметь одинаковую вероятность. Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая.

//Мой ответ  -
// function shuffle(arr) {
//     // arr.map(item => item);

//     console.log(arr)
//     alert(arr[Math.floor(arr.length * Math.random())]);

//     let shuffle1 = arr[Math.floor(arr.length * Math.random())].sort;
//     alert(shuffle1)
// }


// let arr = [1, 2, 3];

// shuffle(arr);
 


//Правильный ответ 
//  function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

// for (let i = 0; i < 1000000; i++) {
//   let array = [1, 2, 3];
//   shuffle(array);
//   count[array.join('')]++;
// }

// // показать количество всех возможных вариантов
// for (let key in count) {
//   alert(`${key}: ${count[key]}`);
// }









// Задача №11  Получить средний возраст

// function getAverageAge(users) {
//     let userAge = users.map(item => item.age);
//     let resultSum = 0;
//     for (let i = 0; i < userAge.length  ; i++) {
//         resultSum += userAge[i];
//     }
//     resultDev = resultSum / userAge.length;
//     alert(resultDev)
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let users = [ vasya, petya, masha ];

// getAverageAge(users);


// function getAverageAge(users) {
//   return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// alert( getAverageAge(arr) ); // 28



// Задача №12  Оставить уникальные элементы массива
 
// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
 
//Мой ответ 
//  function unique(arr) {
//    arrSort = arr.sort();
//    arrSortNew = [];
//    for (let i = 0; i < arrSort.length; i++) {
//     if (arrSort[i] != arrSort[i+1]) {
//         arrSortNew += arrSort[i] + ' '
//     } 
//    }
     
//    return arrSortNew;
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];

// alert( unique(strings) ); // кришна, харе, :-O


//Правильный ответ
// function unique(arr) {
//   let result = [];

//   for (let str of arr) {
//     if (!result.includes(str)) {
//       result.push(str);
//     }
//   }

//   return result;
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];

// alert( unique(strings) ); // кришна, харе, :-O


