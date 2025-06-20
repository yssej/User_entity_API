import axios from 'axios'

const API_URL = 'http://localhost:3000/entities'

export default {
  getAll(page = 1, limit = 5) {
    return axios.get(`${API_URL}?page=${page}&limit=${limit}`)
  },
  getById(id) {
    return axios.get(`${API_URL}/${id}`)
  },
  create(user) {
    return axios.post(API_URL, user)
  },
  update(id, user) {
    return axios.put(`${API_URL}/${id}`, user)
  },
  delete(id) {
    return axios.delete(`${API_URL}/${id}`)
  }
}