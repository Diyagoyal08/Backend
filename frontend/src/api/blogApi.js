import axiosClient from './axiosClient'

export const fetchPosts = () => axiosClient.get('/posts')
export const fetchPost = (id) => axiosClient.get(`/posts/${id}`)
export const createPost = (postData) => axiosClient.post('/posts', postData)
export const updatePost = (id, postData) => axiosClient.put(`/posts/${id}`, postData)
export const deletePost = (id) => axiosClient.delete(`/posts/${id}`)
