export type UserResult = {
  total: number
  total_pages: number
  results: IUserResult[]
}

export interface IUserResult {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string
  last_name?: string
  twitter_username?: string
  portfolio_url?: string
  bio?: string
  location: string
  links: Links
  profile_image: ProfileImage
  instagram_username?: string
  total_collections: number
  total_likes: number
  total_photos: number
  total_promoted_photos: number
  accepted_tos: boolean
  for_hire: boolean
  social: Social
  followed_by_user: boolean
  photos: Photo[]
}

export interface Links {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
  following: string
  followers: string
}

export interface ProfileImage {
  small: string
  medium: string
  large: string
}

export interface Social {
  instagram_username?: string
  portfolio_url?: string
  twitter_username?: string
  paypal_email: any
}

export interface Photo {
  id: string
  slug: string
  created_at: string
  updated_at: string
  blur_hash: string
  urls: Urls
}

export interface Urls {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
  small_s3: string
}
