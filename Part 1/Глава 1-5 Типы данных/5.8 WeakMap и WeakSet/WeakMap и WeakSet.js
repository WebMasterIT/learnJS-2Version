//Задача №1  

//Мой ответ использовать WeakSet

//Правильный ответ 
// Можно хранить прочитанные сообщения в WeakSet:

// let messages = [
//     {text: "Hello", from: "John"},
//     {text: "How goes?", from: "John"},
//     {text: "See you soon", from: "Alice"}
// ];

// let readMessages = new WeakSet();

// // Два сообщения были прочитаны
// readMessages.add(messages[0]);
// readMessages.add(messages[1]);
// // readMessages содержит 2 элемента

// // ...давайте снова прочитаем первое сообщение!
// readMessages.add(messages[0]);
// // readMessages до сих пор содержит 2 элемента

// // Вопрос: было ли сообщение message[0] прочитано?
// alert("Read message 0: " + readMessages.has(messages[0])); // true

// messages.shift();
// // теперь readMessages содержит 1 элемент (хотя технически память может быть очищена позже)
// WeakSet позволяет хранить набор сообщений и легко проверять наличие сообщения в нём.

// Он очищается автоматически. Минус в том, что мы не можем перебрать его содержимое, не можем получить «все прочитанные сообщения» напрямую. Но мы можем сделать это, перебирая все сообщения и фильтруя те, которые находятся в WeakSet.

// Альтернативным решением может быть добавление свойства вида message.isRead=true к сообщению после его прочтения. Так как сообщения принадлежат чужому коду, то это не очень хорошо, но если использовать свойство-символ, то вероятность конфликтов будет небольшой.

// Например:

// // символьное свойство вместо имени, которое известно только нашему коду
// let isRead = Symbol("isRead");
// messages[0][isRead] = true;



//Задача №2

//Хранение времени прочтения
 
// Есть массив сообщений такой же, как и в предыдущем задании.

// let messages = [
//   { text: "Hello", from: "John" },
//   { text: "How goes?", from: "John" },
//   { text: "See you soon", from: "Alice" }
// ];


//Мой ответ   WeakMap

// Правильный ответ 

// Для хранения даты мы можем использовать WeakMap:

// let messages = [
//   {text: "Hello", from: "John"},
//   {text: "How goes?", from: "John"},
//   {text: "See you soon", from: "Alice"}
// ];

// let readMap = new WeakMap();

// readMap.set(messages[0], new Date(2017, 1, 1));
// Объект Date мы рассмотрим позднее