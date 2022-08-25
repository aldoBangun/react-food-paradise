import axios from 'axios'
import { dispatch } from '../app/store'
import { setLoading } from '../features/slices/loading'

axios.defaults.baseURL = process.env.REACT_APP_API_URL

axios.interceptors.request.use((config) => {
  dispatch(setLoading(true))
  return config
  
}, (error) => {
  dispatch(setLoading(false))
  return Promise.reject(error)
})

axios.interceptors.response.use((config) => {
  dispatch(setLoading(false))
  return config
  
}, (error) => {
  dispatch(setLoading(false))
  return Promise.reject(error)
})

export default axios