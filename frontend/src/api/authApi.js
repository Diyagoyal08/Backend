import axiosClient from './axiosClient'

export const loginUser = (credentials) => axiosClient.post('/auth/login', credentials)
