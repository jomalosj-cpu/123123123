// Практические задания JavaScript №46–60.
// Запустите файл в Node.js: node solutions_46_60.js

console.log("\n=== Задание 46. Проверка возраста ===");
function checkRegistration(age) {
  if (age >= 16) return "Регистрация разрешена";
  else return "Регистрация недоступна";
}
for (const age of [15, 16, 20]) console.log(`Возраст ${age}: ${checkRegistration(age)}`);

console.log("\n=== Задание 47. Студенческая скидка ===");
function calculatePrice(price, isStudent) {
  let discount = 0;
  if (isStudent) discount = price * 0.10;
  return { originalPrice: price, discount, finalPrice: price - discount };
}
for (const isStudent of [true, false]) console.log({ isStudent, ...calculatePrice(12000, isStudent) });

console.log("\n=== Задание 48. Проверка треугольника ===");
function isTriangle(a, b, c) {
  return a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a;
}
console.log(isTriangle(5, 7, 10) ? "Треугольник существует" : "Треугольник не существует");

console.log("\n=== Задание 49. Категория пользователя ===");
function getRoleMessage(role) {
  let message;
  switch (role) {
    case "admin": message = "Полный доступ"; break;
    case "teacher": message = "Доступ преподавателя"; break;
    case "student": message = "Доступ студента"; break;
    default: message = "Доступ запрещён"; break;
  }
  return message;
}
for (const role of ["admin", "teacher", "student", "guest"]) console.log(`${role}: ${getRoleMessage(role)}`);

console.log("\n=== Задание 50. Заряд батареи ===");
function getBatteryMessage(battery) {
  if (!Number.isFinite(battery) || battery < 0 || battery > 100) {
    return "Некорректное значение заряда";
  } else if (battery <= 15) return "Срочно подключите зарядку";
  else if (battery <= 30) return "Низкий заряд";
  else if (battery <= 80) return "Нормальный заряд";
  else return "Высокий заряд";
}
for (const battery of [10, 25, 65, 95, 110]) console.log(`${battery}%: ${getBatteryMessage(battery)}`);

console.log("\n=== Задание 51. Числа, кратные пяти ===");
let count = 0;
const divisibleByFive = [];
for (let number = 1; number <= 100; number++) if (number % 5 === 0) { divisibleByFive.push(number); count++; }
console.log(divisibleByFive.join(", "));
console.log(`Количество: ${count}`);

console.log("\n=== Задание 52. Факториал ===");
const n = 6; let factorial = 1;
for (let number = 1; number <= n; number++) factorial *= number;
console.log(`${n}! = ${factorial}`);

console.log("\n=== Задание 53. Отрицательные числа ===");
const numbers = [12, -5, 8, -9, 15, -2, 0, 21];
const negativeNumbers = [];
for (const number of numbers) if (number < 0) negativeNumbers.push(number);
console.log("Отрицательные числа:", negativeNumbers);
console.log("Количество:", negativeNumbers.length);

console.log("\n=== Задание 54. Поиск студента ===");
const students = ["Алия", "Руслан", "Мадина", "Арман", "Данияр"];
function findStudent(name) { return students.includes(name) ? "Студент найден" : "Студент не найден"; }
console.log(findStudent("Мадина")); console.log(findStudent("Айжан"));

console.log("\n=== Задание 55. Сортировка оценок ===");
const scores = [75, 92, 48, 85, 67, 100, 58];
const ascending = [...scores].sort((a, b) => a - b);
const descending = [...scores].sort((a, b) => b - a);
console.log("По возрастанию:", ascending); console.log("Минимум:", ascending[0]);
console.log("Максимум:", ascending[ascending.length - 1]); console.log("По убыванию:", descending);

console.log("\n=== Задание 56. Площадь прямоугольника ===");
function calculateArea(width, height) { return width * height; }
console.log(calculateArea(5, 8)); console.log(calculateArea(3, 4));

console.log("\n=== Задание 57. Палиндром ===");
function isPalindromeWord(word) { const normalized = word.toLowerCase(); return normalized === normalized.split("").reverse().join(""); }
for (const word of ["level", "radar", "hello"]) console.log(`${word}: ${isPalindromeWord(word)}`);

console.log("\n=== Задание 58. Подсчёт слов ===");
function countWords(text) { const trimmed = text.trim(); return trimmed === "" ? 0 : trimmed.split(/\s+/).length; }
console.log(countWords("JavaScript is a popular programming language")); console.log(countWords("   "));

console.log("\n=== Задание 59. Генератор пароля ===");
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let password = "";
for (let i = 0; i < 8; i++) password += characters[Math.floor(Math.random() * characters.length)];
console.log("Случайный пароль:", password);

console.log("\n=== Задание 60. Конвертер валют ===");
function convertCurrency(amount, rate) {
  if (!Number.isFinite(amount) || amount < 0) throw new Error("Сумма должна быть неотрицательным числом");
  if (!Number.isFinite(rate) || rate <= 0) throw new Error("Курс должен быть положительным числом");
  return amount / rate;
}
console.log(`${convertCurrency(50000, 500).toFixed(2)} USD`);
