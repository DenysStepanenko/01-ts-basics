// Функція getMessage повертає проміс, який резолвиться рядком
function getMessage(): Promise<string> {
  // Створюємо новий проміс
  return new Promise((resolve) => {
    // Через 1 секунду резолвимо проміс зі значенням "Hello from TS"
    setTimeout(() => {
      resolve('Hello from TS');
    }, 1000);
  });
}

// Викликаємо функцію та виводимо результат
getMessage().then((result) => console.log(result));
