import { service } from ".";

export default {
  // get all parent objects without paginate
  getAll: (data) => service.post("/objects/searchall", data),
  // get all sub objects without paginate
  getAllSubsList: (data) => service.post("/objects/search", data),
  // get sub ojects list with pagination

  getAllSubsListByParentId: (data) => service.post("/objects/search", data),
  getOne: (id) => service.get(`/objects/${id}`),
  create: (data) => service.post(`/objects`, data),
  update: (id, data) => service.put(`/objects/${id}`, data),
  delete: (id) => service.delete(`/objects/${id}`),
};
