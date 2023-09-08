import { service } from ".";

export default {
  getAll: () => service.get("/plans"),
  getOne: () => service.get("/plans"),
  getByCategory: (data) => service.post("/plans/groups", data),
  create: (data) => service.post(`/plans`, data),
  update: (id, data) => service.put(`/plans/${id}`, data),
  delete: (id) => service.delete(`/plans/${id}`),
};
