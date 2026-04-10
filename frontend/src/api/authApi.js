import axiosClient from './axiosClient'

export const loginUser = (credentials) => axiosClient.post('/auth/login', credentials)
export const registerUser = (registrationData) => axiosClient.post('/auth/register', registrationData)
