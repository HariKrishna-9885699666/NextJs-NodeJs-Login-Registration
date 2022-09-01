import { BASE_URL } from '../../lib/constants';

export default async function loginAPI (data) {
    const response = await fetch(BASE_URL + '/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data
      })
      .then(res => res.json())
      .then(data => data)
      .catch(error => error);
    return response
};