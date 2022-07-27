import { loginRequest } from '../config.js'

export const AuthAPI = {
  login(username, password) {
    const url = '/accounts/login/'
    const data = { username, password }
    return loginRequest.post(url, data)
  }
}