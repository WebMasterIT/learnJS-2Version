//Задача 1 

// Следующая функция возвращает true, если параметр age больше 18.

// В ином случае она запрашивает подтверждение через confirm и возвращает его результат:

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return confirm('Родители разрешили?');
//   }
// }
// Будет ли эта функция работать как-то иначе, если убрать else?

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm('Родители разрешили?');
// }
// Есть ли хоть одно отличие в поведении этого варианта?

//Мой ответ: не будет выведено сообщение "Родители разрешили?"  при вводе числа меньше 18   -

//Правильный ответ Оба варианта функций работают одинаково, отличий нет.  





//Задача 2 
//Перепишите функцию, используя оператор '?' или '||'

// Следующая функция возвращает true, если параметр age больше 18.

// В ином случае она задаёт вопрос confirm и возвращает его результат.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }
// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

// Сделайте два варианта функции checkAge:

// 1) Используя оператор ?
// 2) Используя оператор ||

//Мой ответ

//1)
// let age = +prompt('Введите ваш возраст');

// function checkAge(age) { 
//  let accessAllowed =  (age > 18) ? true : 'Родители разрешили?';
//  alert(accessAllowed);
// }

// checkAge(age);

//2)

// let age = +prompt('Введите ваш возраст');

// function checkAge(age) { 
//  let accessAllowed =  ((age > 18)   || 'Родители разрешили?');
//  alert(accessAllowed);
// }

// checkAge(age);





//Задача 3 Функция min(a, b)
//Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// Пример вызовов:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

//Мой  Ответ:
// function min(a,b) {
//  if (a < b) {
//      alert(a)
//  } else {
//      alert(b)
//  }
// }

// min(1, 1);



//Задача 4 Функция pow(x,n)
// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

// // Мой ответ  -
// function pow() {
//  let x = prompt('x?');
//  let n = prompt('n?');
//  let answer = 1;
//  for (i = 1; i <= n; i++) {
//      answer = x * x;
//  }
//  alert(answer);
    
// }

// pow();                 


// Правильный ответ +

// function pow(x, n) {
//   let result = x;

//   for (let i = 1; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// let x = prompt("x?", '');
// let n = prompt("n?", '');

// if (n < 1) {
//   alert(`Степень ${n} не поддерживается, используйте натуральное число`);
// } else {
//   alert( pow(x, n) );
// }
