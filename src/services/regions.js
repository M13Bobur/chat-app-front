import { service } from ".";

export default {
  getAll: () => service.get("/regions"),
  getOne: (id) => service.get(`/regions/${id}`),
  create: (data) => service.post(`/regions`, data),
  update: (id, data) => service.put(`/regions/${id}`, data),
  delete: (id) => service.delete(`/regions/${id}`),
};
