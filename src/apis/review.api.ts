import http from 'src/utills/https'

export const search = (keyword: string) => http.get(`review/:${keyword}`)
export const create = (body: { comment: string; post_id: string }) => http.post('review', body)
export const get = (id: string) => http.get(`review/search/${id}`)
