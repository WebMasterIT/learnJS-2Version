//Задача №1  Две функции - один объект


// Возможно ли создать функции A и B в примере ниже, где объекты равны new A()==new B()?

// function A() { ... }
// function B() { ... }

// let a = new A;
// let b = new B;

// alert( a == b ); // true
// Если да – приведите пример вашего кода.


//Мой ответ   нет, вот пример кода, перепробывал много вариантов, всегда false

// function A() { 
//    let a = 1;
//    this.a = 1;
// }
// function B() {
//    let a = 1;
//    this.a = 1;
// }

// let a = new A;
// let b = new B;

// console.log(a, b)
// alert( a == b ); // false



//правильный ответ 
// Да, возможно.

// Если функция возвращает объект, то вместо this будет возвращён этот объект.

// Например, они могут вернуть один и тот же объект obj, определённый снаружи:

// let obj = {};

// function A() { return obj; }
// function B() { return obj; }

// alert( new A() == new B() ); // true







//Задача №2  Создание калькулятора при помощи конструктора

// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.
// Например:

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );



//Мой ответ


// function Calculator() {
//   this.sum = function() {
//     let sumResult = this.firstNumber + this.secondNumber;
//     return sumResult
//   },
//   this.mul = function() {
//     let mulResult = this.firstNumber * this.secondNumber;
//     return mulResult
//   },
//   this.read = function() {
//     let firstNumber, secondNumber;
//      this.firstNumber = +prompt(firstNumber, 'Введите число a');
//      this.secondNumber = +prompt(secondNumber, 'Введите число b');
//   }
// }

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum = " + calculator.sum() );
// alert( "Mul = " + calculator.mul() );










// Задача №3
// Создаём Accumulator

// Напишите функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() использует prompt для получения числа и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.

// Ниже вы можете посмотреть работу кода:



function Accumulator(startingValue) {
  this.read = function() {
    let someNumber;
     this.someNumber = +prompt(someNumber, 'Введите число')
     this.sum = this.someNumber + this.someNumber;
     this.value = this.sum + startingValue;
  }
}


let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению


console.log(accumulator.value)
alert(accumulator.value); // выведет сумму этих значений


//Правильный вариант

// function Accumulator(startingValue) {
//   this.value = startingValue;

//   this.read = function() {
//     this.value += +prompt('Сколько нужно добавить?', 0);
//   };

// }

// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// alert(accumulator.value);