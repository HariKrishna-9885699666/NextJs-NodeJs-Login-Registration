// import { BASE_URL } from '../../pages/constants';

export default async function registerAPI (data) {
    const response = await fetch('https://nodejs-signup-signin-apis.up.railway.app/api/v1' + '/register', {
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