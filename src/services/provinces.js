import { service } from ".";

export default {
  getAll: () => service.get("/provinces"),
  getOne: (id) => service.get(`/provinces/${id}`),
  create: (data) => service.post(`/provinces`, data),
  update: (id, data) => service.put(`/provinces/${id}`, data),
  delete: (id) => service.delete(`/provinces/${id}`),
};
