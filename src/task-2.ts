// Визначаємо інтерфейс Product для опису структури об'єкта
interface Product {
  readonly id: number; // Поле id тільки для читання
  title: string; // Поле title обов'язкове
  description?: string; // Поле description необов'язкове
}

// Типізуємо об'єкт product за допомогою інтерфейсу Product
const product: Product = {
  id: 1,
  title: 'Tablet',
  description: 'Compact and fast',
};

// Виводимо об'єкт у консоль у форматі JSON
console.log(`Product: ${JSON.stringify(product)}`);
