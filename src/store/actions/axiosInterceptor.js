import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://182.72.203.245:1837",
});

const getAuthToken = () => {
  return localStorage.getItem("jwtToken");
};

axiosInstance.interceptors.request.use(
  function (config) {
    config.headers = { ...config.headers, auth_token: getAuthToken() };
    // you can also do other modification in config
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    if (response.status === 401) {
      // your failure logic
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
