import { loginRequest, defaultRequest } from '../config.js'

export const AuthAPI = {
  login(username, password) {
    const url = '/accounts/login/'
    const data = { username, password }
    return loginRequest.post(url, data)
  },
  verify() {
    const url = '/accounts/login/verify/'
    return defaultRequest.get(url)
  }
}

export const AccountsAPI = {
  loadUsers() {
    const url = '/accounts/'
    return defaultRequest.get(url)
  }
}