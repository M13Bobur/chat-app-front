import { service } from '.';

export default {
  getAll: () => service.get('/categories'),
  importants: () => service.get('/importants'),
  addImportant: (data) => service.post('/importants', data),
  updateImportant: (id, data) => service.put(`/importants/${id}`, data),
  getOne: (id) => service.get(`/categories/${id}`),
  create: (data) => service.post(`/categories`, data),
  update: (id, data) => service.put(`/categories/${id}`, data),
  delete: (id) => service.delete(`/categories/${id}`),
  deleteImportant: (data) =>
    service.delete('/importants', {
      data,
    }),
};
