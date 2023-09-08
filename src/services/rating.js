import { service } from ".";

export default {
  getAll: (data) => service.get("/checklists", data),
  getOne: (data) => service.get("/checklists", data),
  create: (data) => service.post(`/checklists`, data),
  update: (id, data) => service.put(`/checklists/${id}`, data),
  delete: (id) => service.delete(`/checklists/${id}`),
};
