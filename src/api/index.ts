import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { RootState } from '../redux/rootReducer'

interface UserInstance extends AxiosInstance {
  request<T = any, R = T>(config: AxiosRequestConfig): Promise<R>
}

const userInstance: UserInstance = axios.create({
  baseURL: 'http://ec2-13-53-130-150.eu-north-1.compute.amazonaws.com:8080',
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
export const setUserProfile = (profile: RootState) =>
  userInstance.request<{ data: any }>({
    method: 'GET',
    data: profile,
    url: 'auth/me',
  })
