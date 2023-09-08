import { service } from ".";

export default {
  getOne: () => service.get("/calendars"),
  create: (data) => service.post(`/calendars`, data),
  update: (id, data) => service.put(`/calendars/${id}`, data),
};
