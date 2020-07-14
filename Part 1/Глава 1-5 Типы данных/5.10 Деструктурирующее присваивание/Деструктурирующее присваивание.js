//Задача №1  
// Деструктурирующее присваивание

// У нас есть объект:

// let user = {
//   name: "John",
//   years: 30
// };
// Напишите деструктурирующее присваивание, которое:

// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
// Пример переменных после вашего присваивания:

// let user = { name: "John", years: 30 };

// // ваш код должен быть с левой стороны:
// // ... = user

// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false




//Мой ответ  +

// let user = { name: "John", years: 30 };

// let {name: name, years: age, isAdmin : isAdmin = false } = user;


// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false


//Правильный вариант 
// let user = {
//   name: "John",
//   years: 30
// };

// let {name, years: age, isAdmin = false} = user;

// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false  




//Задача 2Максимальная зарплата
//  У нас есть объект salaries с зарплатами:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.


//Мой ответ  - 
// function topSalary(salaries) {

//     let top = 0;

//     for (let [key, value] of Object.entries(salaries)) {

//         console.log(value[i]);
//             if (value > value++ ) {
//                 top = `${key}:${value}`;
//                 console.log(salaries.value);

//         }
// }

// return top;
// }


// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// topSalary(salaries)



//Правильный вариант
// function topSalary(salaries) {

//   let max = 0;
//   let maxName = null;

//   for(const [name, salary] of Object.entries(salaries)) {
//     if (max < salary) {
//       max = salary;
//       maxName = name;
//     }
//   }

//   return maxName;
// }

