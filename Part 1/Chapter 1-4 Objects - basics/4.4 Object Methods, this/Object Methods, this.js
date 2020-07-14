//Задача №1

//Каким будет результат выполнения этого кода?
// let user = {
//   name: "Джон",
//   go: function() { alert(this.name) }
// }

// (user.go)()

//Мой ответ

//ДЖон

//Правильный ответ

// ошибка!






//Задача №2  
// В представленном ниже коде мы намерены вызвать obj.go() метод 4 раза подряд.

// Но вызовы (1) и (2) работают иначе, чем (3) и (4). Почему?

// let obj, method;

// obj = {
//   go: function() { alert(this); }
// };

// obj.go();               // (1) [object Object]

// (obj.go)();             // (2) [object Object]

// (method = obj.go)();    // (3) undefined    //в переменной method отсутсвует свойство go

// (obj.go || obj.stop)(); // (4) undefined  /в объекте obj отсутсвует свойство stop




//Правильный ответ
// Здесь мы имеем более сложный вызов (expression).method(). Такой вызов работает, как если бы он был разделён на 2 строчки:

// f = obj.go; // вычисляется выражение (переменная f ссылается на код функции)
// f();        // вызов функции, на которую ссылается f
// Здесь f() выполняется как функция, без передачи значения this.

// Тут похожая ситуация на случай (3) – идёт потеря значения this.

// Чтобы объяснить поведение в примерах (3) и (4), нам нужно помнить, что доступ к свойству (через точку или квадратные скобки) возвращает специальное значение ссылочного типа (Reference Type).

// За исключением вызова метода, любая другая операция (подобно операции присваивания = или сравнения через логические операторы, например ||) превращает это значение в обычное, которое не несёт информации, позволяющей установить this.









// Задача №3
// Здесь функция makeUser возвращает объект.

// Каким будет результат при обращении к свойству объекта ref? Почему?

// function makeUser() {
//   return {
//     name: "Джон",
//     ref: this
//   };
// };

// let user = makeUser();

// alert( user.ref.name ); // Каким будет результат?

//Мой ответ undefined или ошибка





// Задача №4 . Создайте калькулятор
// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
// let calculator = {
//   // ... ваш код ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

 
//Мой ответ
// let calculator = {
//   sum() {
//     let sumResult = this.firstNumber + this.secondNumber;
//     return sumResult
//   },
//   mul() {
//     let mulResult = this.firstNumber * this.secondNumber;
//     return mulResult
//   },
//   read() {
//     let firstNumber, secondNumber;
//      this.firstNumber = +prompt(firstNumber, 'Введите число a');
//      this.secondNumber = +prompt(secondNumber, 'Введите число b');
//   }
// }


// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );






// Задача №5    Цепь вызовов
// Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() { // показывает текущую ступеньку
//     alert( this.step );
//   }
// };
// Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

// ladder.up().up().down().showStep(); // 1


//Мой ответ  
// let ladder = {
//   step: 0,
//   up() {
//     let step;
//     step++;
//     return this;
//   },
//   down() {
//     let step;
//     step--;
//     return this;
//   },
//   showStep() { // показывает текущую ступеньку
//     alert(this.step) ;
//     return this;
//   }
// };

//  ladder.up().up().down().showStep();  // 0 


//Правильный ответ
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
}

ladder.up().up().down().up().down().showStep(); // 1