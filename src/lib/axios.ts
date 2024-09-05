import { env } from '@/env';
import axios from 'axios'

const api = axios.create({
    baseURL: env.VITE_API_URL,
});

export {
    api
}