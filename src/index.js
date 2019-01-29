import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';

export const myInterceptor = axios.interceptors.request.use(
  request => {
    console.log(request);
    //Edit request
    return request;
  },
  error => {
    // request sending fail, not bad response
    console.log(error);
    return Promise.reject(error);
  },
);

//removing interceptor
// axios.interceptors.request.eject(myInterceptor);

axios.interceptors.response.use(
  response => {
    console.log(response);
    return response;
  },
  error => {
    // request sending fail, not bad response
    console.log(error);
    return Promise.reject(error);
  },
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
