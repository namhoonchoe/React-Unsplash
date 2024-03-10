 import { http, HttpResponse } from 'msw'

 
export const handlers = [
    /*  http.get(`https://api.unsplash.com/topics?client_id=${import.meta.env.VITE_REACT_APP_API_KEY}&per_page=25&order_by=featured`, () => {
    return    HttpResponse.error()
  }),  */
  http.get(`https://api.unsplash.com/photos?page=1&client_id=${import.meta.env.VITE_REACT_APP_API_KEY}&per_page=25&order_by=latest`, () => {
    return      HttpResponse.error()
  }),  
 
]

  
