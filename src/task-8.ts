import axios from 'axios';

// Визначаємо інтерфейс Post для опису структури поста
interface Post {
  id: number; // Поле id типу number
  title: string; // Поле title типу string
  body: string; // Поле body типу string
}

// Асинхронна функція fetchPosts повертає масив постів
async function fetchPosts(): Promise<Post[]> {
  // Виконуємо GET-запит до API
  const response = await axios.get<Post[]>(
    'https://jsonplaceholder.typicode.com/posts'
  );
  // Повертаємо дані з відповіді
  return response.data;
}

// Викликаємо функцію та виводимо заголовок першого поста
fetchPosts().then((posts) => {
  console.log(posts[0].title);
});
