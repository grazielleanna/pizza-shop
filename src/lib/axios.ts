import { env } from '@/env';
import axios from 'axios'

const api = axios.create({
    baseURL: env.VITE_API_URL,
    withCredentials: true
});

if(env.VITE_ENABLE_API_DELAY){
    api.interceptors.request.use(async (config) => {
        await new Promise(resolve => setTimeout(resolve, Math.round(Math.random() * 300)));

        return config;
    });
}

export {
    api
}