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
    const url = '/accounts/users/'
    return defaultRequest.get(url)
  },
  getUser(userId) {
    const url = `/accounts/users/${userId}/`
    return defaultRequest.get(url)
  },
  loadClubs() {
    const url = '/accounts/clubs/'
    return defaultRequest.get(url)
  },
  getClub(clubId) {
    const url = `/accounts/clubs/${clubId}/`
    return defaultRequest.get(url)
  },
  loadClubStatus(site_link) {
    const url = '/accounts/clubs/status/'
    const bodyFormData = new FormData()
    bodyFormData.append('site_link', site_link)
    return defaultRequest.post(url, bodyFormData)
  }
}