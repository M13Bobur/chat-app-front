import { service } from ".";

export default {
  getAll: () => service.post("/evaluations/filter"),
  getOne: (id) => service.get(`/evaluations/${id}`),
  create: (data) => service.post(`/evaluations `, data),
  update: (id, data) => service.put(`/evaluations/${id}`, data),
  delete: (id) => service.delete(`/evaluations/${id}`),
};
