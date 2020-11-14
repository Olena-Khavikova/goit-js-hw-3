function getAllPropValues(array, prop) {
  "use strict";
  // Write code under this line
  const selectedPropValues = [];
  for (const item of array) {
    if (prop in item) {
      selectedPropValues.push(item[prop]);
    }
  }
  return selectedPropValues;
}

// Объекты и ожидаемый результат
const products = [
  { name: "Радар", price: 1300, quantity: 4 }, //item
  { name: "Радар", price: 1280, quantity: 2 }, //item
  { name: "Радар", price: 1320, quantity: 1 },
  { name: "Сканер", price: 2700, quantity: 1 },
  { name: "Сканер", price: 2500, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
]; //array

console.log(getAllPropValues(products, "name"));
// ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, "quantity"));
// [4, 2, 1, 1, 3, 7, 2]

console.log(getAllPropValues(products, "category"));
//  []

const test1 = { name: "Радар", price: 1300 };

console.log(test1["name"]);
console.log(test1.price);

// Задача 3 - 5
// Оператор in и метод push
// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.

// Функция возвращает массив значений определенного свойства prop из каждого объекта в массиве.

// Используй метод push для добавления значения в массив и оператор in для проверки наличия свойства в объекте.

// Ожидается объявление 'Function Declaration'
// Функции присвоено имя 'getAllPropValues'
// Функция 'getAllPropValues' имеет два параметра - 'array' и 'prop'
// Ожидается что при вызове 'getAllPropValues([])' вернется пустой массив
// Ожидается что вызов getAllPropValues(products, 'name') вернет массив['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']
// Ожидается что вызов getAllPropValues(products, 'quantity') вернет массив[4, 2, 1, 1, 3, 7, 2]
// Ожидается что вызов getAllPropValues([], 'category') вернет массив[]
// Ожидается использование операторов 'in' и 'push'
