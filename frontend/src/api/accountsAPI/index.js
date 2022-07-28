import { loginRequest } from '../config.js'

export const AuthAPI = {
  login(username, password) {
    const url = '/accounts/login/'
    const data = { username, password }
    return loginRequest.post(url, data)
  },
  verify(token) {
    const url = '/accounts/login/verify/'
    const data = { token }
    return loginRequest.post(url, data)
  }
}