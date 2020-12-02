import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-project-8f069.firebaseio.com/'
})

export default instance;