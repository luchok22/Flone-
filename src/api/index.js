import axios from 'axios'
export const base_url = 'https://63730f4f348e94729901faaf.mockapi.io/api/v4/houses'


export const Api = axios.create({
    baseURL:base_url
})