import { defaultRequest } from '../config.js'

export const ClientbaseAPI = {
  loadClients() {
    const url = '/clientbase/clients/'
    return defaultRequest.get(url)
  },
  getClient(clientId) {
    const url = `/clientbase/clients/${clientId}/`
    return defaultRequest.get(url)
  }
}