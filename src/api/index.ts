import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { RootState } from '../redux/rootReducer'

interface UserInstance extends AxiosInstance {
  request<T = any, R = T>(config: AxiosRequestConfig): Promise<R>
}

const userInstance: UserInstance = axios.create({
  baseURL: '/api/',
})
export const signUp = (auth: RootState) =>
  userInstance.request<{ data: any }>({
    method: 'POST',
    data: auth,
    url: 'signup',
  })
export const signIn = (auth: RootState) =>
  userInstance.request<{ data: any }>({
    method: 'POST',
    data: auth,
    url: 'login',
  })
