import http from 'src/utills/https'
export interface TransBody {
  tranportation_name: string
  description: string
  location: string
  price: string
  total_of_vehicle: number
  car_vehicle: string // img
}

export const searchTransportation = (keyword: string) => http.get(`transportation/search/:${keyword}`)
export const getTrans = (id: string) => http.get(`transportation/${id}`)
export const createTrans = (body: TransBody) => http.post('transportation', body)
export const updateTrans = (body: TransBody, id: string) => http.put(`transportation/${id}`, body)
