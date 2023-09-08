import { service } from ".";

export default {
  getAll: (data) => service.post("/mobilereports/macAddres", data),
};
