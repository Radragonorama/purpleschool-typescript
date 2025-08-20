import https from 'https';

import {ResponseSuccess} from './types';

function fetchUsers() {
  return new Promise((resolve, reject) => {
    https
      .get('https://dummyjson.com/users', (response) => {
        let data = '';

        response.on('data', (chunk) => {
          data += chunk;
        });

        response.on('end', () => {
          try {
            resolve(JSON.parse(data) as ResponseSuccess);
          } catch (error) {
            reject(error);
          }
        });
      })
      .on('error', reject);
  });
}

fetchUsers()
  .then((users) => console.log('Пользователи:', users))
  .catch((error) => console.error('Ошибка:', error));
