// Узагальнена функція getFirstElement, яка працює з масивами типу T
function getFirstElement<T>(arr: T[]): T {
  // Повертаємо перший елемент масиву
  return arr[0];
}

// Викликаємо функцію з масивом чисел, явно вказуючи тип number
const numberResult = getFirstElement<number>([1, 2, 3]); // 1
console.log(numberResult);

// Викликаємо функцію з масивом рядків, явно вказуючи тип string
const stringResult = getFirstElement<string>(['a', 'b', 'c']); // "a"
console.log(stringResult);

// Викликаємо функцію з масивом булевих значень, явно вказуючи тип boolean
const booleanResult = getFirstElement<boolean>([true, false, true]); // true
console.log(booleanResult);
