import request from '../utils/request';

const LOGIN_API = '/api/user/login';

export async function validateUser({ data }) {
  const options = {
    data,
    method: 'POST'
  }

  const res = await request(LOGIN_API, options);
  return res.data;
}
