import axios from 'axios';

const instance = axios.create({
    /* axios 라이브러리 인스턴스로 url 저장 */
    //baseURL : 'http://localhost:3000/'
    baseURL: process.env.VUE_APP_API_URL,
})

function registerUser(userData){
    instance.post('signup', userData);
}

export { registerUser };