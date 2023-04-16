//1. Виведіть число згенероване випадковим чином.

let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
//2. Створити змінні базових типів, виведіть їх на екран.
let myNumber = 42;
let myString = "Hello, world!";
let myBoolean = true;
console.log(myNumber);
console.log(myString);
console.log(myBoolean);
//3. Збережіть суму двох чисел і збережіть її у третю змінну, виведіть її на екран.
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log("Сума чисел: " + sum);
//4. Створіть файл script.js. Підключіть його в нижню частину файлу index.html. створіть три діалогових вікна з alert(), prompt(), confirm().
alert("Це повідомлення з діалогового вікна alert()");

let name = prompt("Як вас звати?");
console.log("Привіт, " + name + "!");

let result = confirm("Ви впевнені, що хочете видалити цей файл?");
if (result) {
  console.log("Файл видалено");
} else {
  console.log("Видалення скасовано");
}
//5. Запитайте у користувача його вік. Виведіть фразу “Ваш вік ____”
let age = prompt("Скільки вам років?");
console.log("Ваш вік " + age);
//6. Ввести кількість купленого товару, ціну за одиницю. Виведіть суму покупки.
let quantity = prompt("Скільки товару ви купили?");
let price = prompt("Яка ціна за одиницю товару?");
let total = quantity * price;

console.log("Ви купили " + quantity + " одиниць товару за " + price + " грн. Загальна сума покупки: " + total + " грн.");
//7. Введіть число – визначте чи воно від’ємне.
let num = prompt("Введіть число:");
if (num < 0) {
    console.log("Введене число є від'ємним.");
}
//8. Введіть номер дня тижня, виведіть його назву.
let day = prompt("Введіть номер дня тижня (від 1 до 7):");
let daysOfWeek = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
console.log("Назва дня тижня: " + daysOfWeek[day - 1]);
//Виведіть таблицю множення числа 6.
for (let i = 1; i <= 10; i++) {
    console.log("6 * " + i + " = " + 6 * i);
}
//10 Задайте одномірний масив n=5. Виведіть квадрат третього числа, суму першого і останнього елемента, суму квадратів від’ємних елементів.
let arr = [1, -2, 3, 4, -5];
let third = arr[2];
let squareThird = third ** 2;
let sumFirstLast = arr[0] + arr[arr.length - 1];
let sumNegatives = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        sumNegatives += arr[i] ** 2;
    }
}
console.log("Квадрат третього числа: " + squareThird);
console.log("Сума першого і останнього елемента: " + sumFirstLast);
console.log("Сума квадратів від'ємних елементів: " + sumNegatives);
//11. Створіть об’єкт машина. Поля: ім’я власника, назва моделі, об’єм двигуна. Створіть масив зкількома об’єктами, виведіть машину з мінімальним об’ємом двигуна.
// Створюємо об'єкт "машина" з полями "ім'я власника", "назва моделі", "об'єм двигуна"
let car = {
  ownerName: "John",
  modelName: "Toyota",
  engineCapacity: 1.8
};

// Створюємо масив з кількома об'єктами машин
let cars = [
  { ownerName: "John", modelName: "Toyota", engineCapacity: 1.8 },
  { ownerName: "Kate", modelName: "Honda", engineCapacity: 1.5 },
  { ownerName: "Alex", modelName: "BMW", engineCapacity: 2.0 },
  { ownerName: "Mary", modelName: "Nissan", engineCapacity: 1.6 }
];

// Знаходимо машину з мінімальним об'ємом двигуна
let minEngineCar = cars[0];
for (let i = 1; i < cars.length; i++) {
  if (cars[i].engineCapacity < minEngineCar.engineCapacity) {
    minEngineCar = cars[i];
  }
}

// Виводимо інформацію про машину з мінімальним об'ємом двигуна
console.log("Машину з мінімальним об'ємом двигуна має власник " + minEngineCar.ownerName + ", вона має модель " + minEngineCar.modelName + " та об'єм двигуна " + minEngineCar.engineCapacity);
//12. Введіть 4 числа, Знайти max{min(a, b), min(c, d)
// Введення чотирьох чисел
let a = parseInt(prompt("Введіть число a:"));
let b = parseInt(prompt("Введіть число b:"));
let c = parseInt(prompt("Введіть число c:"));
let d = parseInt(prompt("Введіть число d:"));

// Знаходимо максимум з мінімумів двох пар чисел
let max = Math.max(Math.min(a, b), Math.min(c, d));

// Виводимо результат
console.log("Максимум з мінімумів двох пар чисел: " + max);
//String word = "arduino";
int length = word.length();
String reversedWord = "";

for (int i = length - 1; i >= 0; i--) {
    reversedWord += word.charAt(i);
}

System.out.println("Довжина слова: " + length);
System.out.println("Слово в зворотньому порядку: " + reversedWord);
//13 Задайте слово, виведіть його довжину та запишіть його в зворотному порядку. arduino
String word = "arduino";
int length = word.length();
String reversedWord = "";

for (int i = length - 1; i >= 0; i--) {
    reversedWord += word.charAt(i);
}

System.out.println("Довжина слова: " + length);
System.out.println("Слово в зворотньому порядку: " + reversedWord);
