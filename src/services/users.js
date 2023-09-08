import { service } from '.';

export default {
  getAll: () => service.post("/users/filter"),
  getUsersByFilter: (data) => service.post("/users/filter", data),
  getOne: (id) => service.get(`/users/${id}`),
  create: (data) => service.post('/users', data),
  update: (id, data) => service.put(`/users/${id}`, data),
  delete: (id) => service.delete(`/users/${id}`),
};
