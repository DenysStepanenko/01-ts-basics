// Функція printUserInfo з типізацією параметрів і поверненням void
function printUserInfo(name: string, age: number, email?: string): void {
  // Виводимо ім'я
  console.log('Name:', name);
  // Виводимо вік
  console.log('Age:', age);
  // Якщо email передано, виводимо його
  if (email) {
    console.log('Email:', email);
  }
}

// Викликаємо функцію без email
printUserInfo('Alice', 30);
// Викликаємо функцію з email
printUserInfo('Bob', 25, 'bob@mail.com');
