//Задача 

//Перепишите с использованием функции-стрелки

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );

//Мой ответ

// let ask = (question, yes, no) => {
//     if (confirm(question)) { 
//         yes()
//     }
//     else {
//       no();  
//     } 
// }

// ask(
//   "Вы согласны?",
//  (yes) =>  { 
//     alert("Вы согласились.");
// },
//   (no) => { 
//     alert("Вы отменили выполнение."); 
// }
// );

//Правильный ответ 

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   () => alert("Вы согласились."),
//   () => alert("Вы отменили выполнение.")
// );


