import axios from 'axios';

const http = axios.create({
  baseURL: 'https://apertum-interview.herokuapp.com',
  headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
});

http.interceptors.request.use(
  (config) => {
    let token
    if (localStorage.key('token')) {
      token = localStorage.getItem('token');
    }

    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);


function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {

  const config = {
    method: options && options.method || 'get',
    url,
    data: options && options.method && options.method !== 'get' ? JSON.stringify(options.data) : null,
  }

  return http(config)
    .then(checkStatus)
    .then(data => ({ data }))
    .catch(err => {
        throw err
    });
}
