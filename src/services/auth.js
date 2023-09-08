import axios from "axios";

const url = process.env.REACT_APP_API_URL;

export default {
  login: (data) => axios.post(`${url}/auth/login`, data),
};
