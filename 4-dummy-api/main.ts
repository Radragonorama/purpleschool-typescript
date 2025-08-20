import https from 'https';

import {ResponseSuccess} from './types';

function fetchUsers() {
  return new Promise<ResponseSuccess>((resolve, reject) => {
    https
      .get('https://dummyjson.com/users', (response) => {
        let data = '';

        response.on('data', (chunk) => {
          data += chunk;
        });

        response.on('end', () => {
          try {
            resolve(JSON.parse(data));
          } catch (error) {
            reject(error);
          }
        });
      })
      .on('error', reject);
  });
}

fetchUsers()
  .then((response) =>
    console.log(
      'Пользователи:',
      response.users.map((user) => ({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      })),
    ),
  )
  .catch((error) => console.error('Ошибка:', error));
