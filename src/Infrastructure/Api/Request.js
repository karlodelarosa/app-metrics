import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1";

const config = {
  headers: {
    "Content-Type": "application/json"
  }
};

export const axiosGet = (requestUrl, data) => {
  const url = BASE_URL + requestUrl;
  return axios
    .get(url, data, config)
    .then(response => {
      return response;
    })
    .catch(error => {
      throw error;
    });
};
