import axios from "axios";

const baseURL = "https://localhost:8080/";

const headers = {
  "Accept-Language": "tr-TR",
  "Content-Type": "application/json"
};


const configuration = {
  baseURL,
  headers
};

const axiosInstance = axios.create({ ...configuration });

axiosInstance.interceptors.request.use(config => {
  if (localStorage.token) {
    try {
      config.headers.Authorization = `Bearer ${JSON.parse(localStorage.token).accessToken
        }`;
    } catch (error) { }
  }
  return config;
});



///Axios///
export const axiosGet = async (url: string, headers?: any, params?: any) => {
  const response = await axiosInstance.get(url, {
    headers,
    params
  });
  return response;
}

export const axiosPost = async (url: string, data?: any, headers?: any, params?: any) => {
  const response = await axiosInstance.post(url, data, {
    headers,
    params
  });
  return response;
}

export const axiostDelete = async (url:string, headers?: any, params?: any) => {
  const response = await axiosInstance.delete(url, {
    headers,
    params
  });
  return response;
}

export const axiosPut = async (url: string, data?: any, headers?: any, params?: any) => {
  const response = await axiosInstance.put(url, data, {
    headers,
    params
  });
  return response;
}
