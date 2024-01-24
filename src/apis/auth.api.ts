import axios from 'axios'
import http from 'src/utills/https'
export interface RegisterBody {
  username: string
  email: string
  password: string
  full_name: string
  phone: string
  address: string
  role?: number
  field?: string
  account_number?: string
  account_name?: string
  bank_name?: string
  qr_img?: string
}
export interface LoginBody {
  email: string
  password: string
}
export const registerApi = (body: RegisterBody) => http.post('users/register', body)
export const loginApi = (body: LoginBody) => http.post('users/login', body)
// export const logout = () => http.post('users/logout')
export const fetchUser = () => http.get('users')
export const uploadImage = (body: FormData) =>
  http.post('medias/images', body, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
export const searchFlight = (params: { fromId: string; toId: string; date: string; returnDate: string }) =>
  axios({
    method: 'get',
    url: 'https://sky-scrapper1.p.rapidapi.com/api/v1/flights/searchFlights',
    headers: {
      'X-RapidAPI-Key': '9986c21fd2msh6fd2d343e6bfb8bp10f11fjsn039753285fa6',
      'X-RapidAPI-Host': 'sky-scrapper1.p.rapidapi.com'
    },
    params
  })
export const searchAirport = (params: { query: string }) =>
  axios({
    method: 'get',
    url: 'https://sky-scrapper1.p.rapidapi.com/api/v1/flights/searchAirport',
    headers: {
      'X-RapidAPI-Key': '9986c21fd2msh6fd2d343e6bfb8bp10f11fjsn039753285fa6',
      'X-RapidAPI-Host': 'sky-scrapper1.p.rapidapi.com'
    },
    params
  })
