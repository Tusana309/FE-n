import http from 'src/utills/https'
export interface HotelBody {
  hotel_name: string
  hotel_img: string
  location: string
  price: string
  total_of_room: number
  description: string
  hotel_facilities: string
}

export const searchHotel = (keyword: string) => http.get(`hotels/search/:${keyword}`)
export const getHotelId = (id: string) => http.get(`hotels/${id}`)
export const createHotel = (body: HotelBody) => http.post('hotels', body)
export const updateHotel = (body: HotelBody, id: string) => http.put(`hotels/${id}`, body)
