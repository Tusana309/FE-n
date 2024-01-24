import http from 'src/utills/https'
export type BookingBody = {
  hotel_id?: string
  date_pick: number
  car_id?: string
  location_id?: string
  transportation_id?: string
  seater?: number
  location?: string
  name?: string
  tour_day?: number
  auto_drive?: boolean
  amount_human?: number
  time_start?: number
  timeBack?: number
  timeOrder?: number
}
export const getHotelPartner = () => http.get('booking/partner')
export const getHotelUser = () => http.get('booking')
export const getBooking = (key: string) => http.get(`booking/partner/${key}`)
export const createBooking = (body: BookingBody) => http.post('booking', body)
export const updateStatus = (id: string, body: { status: string }) => http.put(`booking/status/${id}`, body)
