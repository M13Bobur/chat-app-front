import { service } from ".";

export default {
  getAll: () => service.get("/sectors"),
  getOne: (id) => service.get(`/sectors/${id}`),
  create: (data) => service.post(`/sectors`, data),
  update: (id, data) => service.put(`/sectors/${id}`, data),
  delete: (id) => service.delete(`/sectors/${id}`),
};
