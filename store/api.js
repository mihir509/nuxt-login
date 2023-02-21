import axios from 'axios'

const API_URL = 'https://jaimbackend.itaims.in/api' // Replace with your API URL

export const registerUser = (data) => {
  return axios.post(`${API_URL}/register`, data)
}

export const loginUser = (data) => {
  return axios.post(`${API_URL}/login`, data)
}


export const logoutUser = (data) => {
    return axios.post(`${API_URL}/logout`, data)
  }
