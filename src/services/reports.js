import { service } from ".";

export default {
  getAllgroupsReport: (data) => service.post("/reports/planAllgroups", data),
  getAllRegionsReport: (data) => service.post("/reports/planRegions", data),
  getGroupReport: (data) => service.post("/reports/reportGroup", data),
  getAllRateReport: (data) => service.post("/reports/rateReport", data),
  getAllByRegions: (data) => service.post("/reports/planRegionsAll", data),
  getOneRateReport: (data) => service.post("/reports/oneRate", data),
  getAllDaiyReport: (data) => service.post("/reports/rateByDaily", data),
  getOneDaiyReport: (data) => service.post("/reports/oneRateByDaily", data),
  getAllgroupRateReport: (data) => service.post("/reports/groupRate", data),
  getAllgroupDailyReport: (data) =>
    service.post("/reports/groupRateDaily", data),
  getReportByCategory: (data) => service.post("/reports/report", data),
  getAllOnegroupReport: (data) => service.post("/reports/getOne", data),
  getCharts: () => service.get("/works/charts"),
  getAreaCharts: (data) => service.post("/works/lines", data),
};
