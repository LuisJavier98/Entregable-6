import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";

const axiosInstance = axios.create()

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  }

  , function (error: AxiosError<any, any>) {
    console.log(error.response, 'intercept')
    if (error.response?.status == 401) {
      console.log('entra')
      window.location.href = '/#/login'
      return Promise.reject(error)
    }
    if (error.response?.status == 400) {
      toast.error(error?.response?.data.mensaje)
      return Promise.reject(error)
    }
    return Promise.reject(error)
  }
)

export default axiosInstance;