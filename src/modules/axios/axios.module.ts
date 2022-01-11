import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://eixmnainm4.execute-api.us-east-1.amazonaws.com/dev/',
});

export default axiosInstance;