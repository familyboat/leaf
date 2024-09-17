import axios, { AxiosInstance } from "axios";

// 创建 Axios 实例
const createAxiosInstance = (
  baseURL: string,
  version: number,
): AxiosInstance => {
  return axios.create({
    baseURL: `${baseURL}/v${version}`,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const api = createAxiosInstance(import.meta.env.VITE_API_BASE_URL, 1);

export default api;
