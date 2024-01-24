import http from 'src/utills/https'
export interface LocationBody {
  location_name: string
  location: string
  price: string
  description: string
  location_img: string
  total_person: number
}

export const searchLocation = (keyword: string) => http.get(`location/search/:${keyword}`)
export const getLocationId = (id: string) => http.get(`location/${id}`)
export const createLocation = (body: LocationBody) => http.post('location', body)
export const updateLocation = (body: LocationBody, id: string) => http.put(`location/${id}`, body)
