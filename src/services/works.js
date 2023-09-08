import { service } from ".";

export default {
  // getAllForMap: (data) => service.post("/works/maps", data),
  getAll: (data) => service.post("/works/search", data),
  // getAllOrganaztions: () => service.get("/users/search"),
  getSentAppeals: (data) => service.post("/works/search", data),
  getCompletedAppeals: (data) => service.post("/completeds/search", data),
  // getSentWorksSecretary: (data) =>
  //   service.post("/works/groupsecretary/send", data),
  // getSpecialWorksSupervisor: (data, type) =>
  //   service.post(`/works/supervisor/${type}`, data),
  // getTotal: (data) => service.post("/mobilereports/sendnew", data),
  // getWorkDays: (data) => service.post("/works/date", data),
  getOne: (id) => service.get(`/works/${id}`),
  // create: (data) => service.post(`/works`, data),
  update: (id, data) => service.put(`/works/${id}`, data),
  sendAnswer: (id, data) =>
    service.put(`/works/result/${id}`, data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    }),
  delete: (data) => service.post("/works/backup", data),
  offcast: (data) => service.put("/offcast/work", data),
  getAllOffcast: (data) => service.post("/offcast/allOffcast", data),
  getOneOffcast: (id) => service.get(`/offcast/${id}`),
  deleteOffcast: (id) => service.delete(`/offcast/${id}`),
  returnOffcast: (id) => service.put(`/offcast/returnWork/${id}`),

  // deleteImage: (data) => service.post("/deleteFiles", data),
  // createTag: (data) => service.post("/tags", data),
};
