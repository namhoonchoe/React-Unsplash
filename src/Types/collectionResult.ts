import { CollectionInfo } from "./collection"
export type CollectionResult = {
  total: number
  total_pages: number
  results: CollectionInfo[]
}