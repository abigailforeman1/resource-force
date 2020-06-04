import axios from 'axios'

const baseUrl = '/api'

export const getResources = () => {
    return axios.get(`${baseUrl}/resources`)
  } 

export const getSingleResource = resourceId => {
  return axios.get(`${baseUrl}/resources/${resourceId}`)
}

export const register = data => {
  return axios.post(`${baseUrl}/register`, data)
}

export const login = data => {
  return axios.post(`${baseUrl}/login`, data)
}

export const resourceGetEdit = resourceId => {
  return axios.get(`${baseUrl}/resources/${resourceId}`)
}

export const resourceEdit = (resourceId, data, headers) => {
  console.log(`${baseUrl}/resources/${resourceId}/edit`, data, headers)
  return axios.put(`${baseUrl}/resources/${resourceId}/edit`, data, headers)
}

export const getCategories = () => {
  return axios.get(`${baseUrl}/categories`)
}