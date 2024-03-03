import { Photo } from "./photo"

export type PhotoResults = {
  total: number
  total_pages: number
  results: Photo[]
}