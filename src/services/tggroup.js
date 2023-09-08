import { service } from ".";

export default {
  getAll: () => service.get("/group"),
  create: (data) => service.post(`/group`, data),
  update: (id, data) => service.put(`/group/${id}`, data),
  delete: (id) => service.delete(`/group/${id}`),
};
