// Визначаємо інтерфейс Product для елементів масиву products
interface Product {
  id: number; // Поле id типу number
  title: string; // Поле title типу string
}

// Оголошуємо масив usernames з типом string[]
const usernames: string[] = ['alice', 'bob', 'charlie'];

// Оголошуємо масив ratings з типом number[]
const ratings: number[] = [4.5, 3.8, 5];

// Оголошуємо масив products з типом Product[]
const products: Product[] = [
  { id: 1, title: 'Phone' },
  { id: 2, title: 'Laptop' },
];

// Виводимо масиви у консоль у форматі JSON
console.log(`Usernames: ${JSON.stringify(usernames)}`);
console.log(`Ratings: ${JSON.stringify(ratings)}`);
console.log(`Products: ${JSON.stringify(products)}`);
