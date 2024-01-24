import http from 'src/utills/https'
export type Props = {
  key: string
  body: {
    seater_number: number
  }
}
export interface CarBody {
  car_name: string
  description: string
  location: string
  price: string
  total_of_car: number
  car_img: string
  seater_number: number[]
}

export const searchCar = (name: Props) => http.post(`car/search/:${name.key}`, name.body)
export const getCarId = (id: string) => http.get(`car/${id}`)
export const createCar = (body: CarBody) => http.post('car', body)
export const updateCar = (body: CarBody, id: string) => http.put(`car/${id}`, body)
