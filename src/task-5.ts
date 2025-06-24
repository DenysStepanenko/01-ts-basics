// Функція logStatus з типізацією параметра status і поверненням void
function logStatus(status: 'loading' | 'success' | 'error'): void {
  // Якщо status дорівнює "loading", виводимо "Loading..."
  if (status === 'loading') {
    console.log('Loading...');
    // Якщо status дорівнює "success", виводимо "Success!"
  } else if (status === 'success') {
    console.log('Success!');
    // Якщо status дорівнює "error", виводимо "Something went wrong"
  } else if (status === 'error') {
    console.log('Something went wrong');
  }
}

// Викликаємо функцію з дозволеним значенням
logStatus('loading');
