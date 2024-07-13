import axios, { AxiosInstance } from 'axios';

export const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'https://api.example.com',
    timeout: 1000,
});
export function setHttpHeaders(headerName: string, headerValue: string): void {
    axiosInstance.defaults.headers.common[headerName] = headerValue;
}