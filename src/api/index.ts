import axios from 'axios'
import { RootState } from '../redux/rootReducer'

const userInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API}/users`,
})
export const signIn = (auth: RootState) =>
  userInstance.request({ method: 'POST', data: auth, url: '/signIn' })
export const signUp = (auth: RootState) =>
  userInstance.request({ method: 'POST', data: auth, url: '/signUp' })
