import axios from 'axios'

const loginConfig = {
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json'
  }
}

export const loginRequest = axios.create(loginConfig)

const defaultConfig = {
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json'
  }
}

export const defaultRequest = axios.create(defaultConfig)