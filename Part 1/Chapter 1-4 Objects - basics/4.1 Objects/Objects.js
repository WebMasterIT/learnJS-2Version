//Задача №1

//Напишите код, выполнив задание из каждого пункта отдельной строкой:
// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

//Мой ответ:

// user = {}

// user.name = "John";
// user.surname = "Smith";

// user.name = "Pete";
// delete user.name;








//Задача №2  
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Должно работать так:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false


//Мой ответ:

// user = {
   
// }


// const isEmpty = (object) => {
//   for (var key in object) {
//          if (key === undefined) {
//             console.log(true)
//   } else {
//     console.log(false)
//   }
 
//    }
// }  

// isEmpty(user);




//Правильный ответ 

// user = {
//    age: 123
// }

// function isEmpty(obj) {
//   for (let key in obj) {
//     // если тело цикла начнет выполняться - значит в объекте есть свойства
//     return false;
//   }
//   return true;
// }

// console.log(isEmpty(user))







// Задача №3
// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

//Мой ответ 

//Можно, путем добавления в него новых свойств и изменения старых 

// const user = {
//   name: "John"
// };

// // это будет работать?  Да
// user.name = "Pete";





// Задача №4 .  Сумма свойств объекта
//У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.


//Мой ответ

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

//  let sum = (object) => {
//     for (let key in object ) {
//        console.log( (object.John + object.Ann + object.Pete) )
//     }
//  }
// console.log(sum(salaries))


//Правильный ответ 


// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }

// alert(sum); // 390






// Задача №5
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// Например:

// // до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

// P.S. Используйте typeof для проверки, что значение свойства числовое.


//Мой ответ 

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
    let multiply = 1;
    for (let key in obj) {
        if (typeof(obj[key]) == 'number' ) {
        multiply = 2 * obj[key]
      }
    }
    alert(multiply)
}

multiplyNumeric(menu) // результат 600,  вместо 400 и 600

//Правильный вариант      Почему в результате undefined?
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}