export type Topic = {
  id: string
  slug: string
  title: string
  description: string
  published_at: string
  updated_at: string
  starts_at: string
  ends_at: any
  only_submissions_after: any
  visibility: string
  featured: boolean
  total_photos: number
  current_user_contributions: any[]
  total_current_user_submissions: any
  links: Links
  status: string
  owners: Owner[]
  top_contributors: TopContributor[]
  cover_photo: CoverPhoto
  preview_photos: PreviewPhoto[]
}

export interface Links {
  self: string
  html: string
  photos: string
}

export interface Owner {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string
  last_name: any
  twitter_username: string
  portfolio_url: string
  bio: string
  location: string
  links: Links2
  profile_image: ProfileImage
  instagram_username: string
  total_collections: number
  total_likes: number
  total_photos: number
  total_promoted_photos: number
  accepted_tos: boolean
  for_hire: boolean
  social: Social
}

export interface Links2 {
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
  instagram_username: string
  portfolio_url: string
  twitter_username: string
  paypal_email: any
}

export interface TopContributor {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string
  last_name: string
  twitter_username?: string
  portfolio_url?: string
  bio: string
  location: string
  links: Links3
  profile_image: ProfileImage2
  instagram_username?: string
  total_collections: number
  total_likes: number
  total_photos: number
  total_promoted_photos: number
  accepted_tos: boolean
  for_hire: boolean
  social: Social2
}

export interface Links3 {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
  following: string
  followers: string
}

export interface ProfileImage2 {
  small: string
  medium: string
  large: string
}

export interface Social2 {
  instagram_username?: string
  portfolio_url?: string
  twitter_username?: string
  paypal_email: any
}

export interface CoverPhoto {
  id: string
  slug: string
  created_at: string
  updated_at: string
  promoted_at: string
  width: number
  height: number
  color: string
  blur_hash: string
  description: any
  alt_description: string
  breadcrumbs: any[]
  urls: Urls
  links: Links4
  likes: number
  liked_by_user: boolean
  current_user_collections: any[]
  sponsorship: any
  topic_submissions: TopicSubmissions
  user: User
}

export interface Urls {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
  small_s3: string
}

export interface Links4 {
  self: string
  html: string
  download: string
  download_location: string
}

export interface TopicSubmissions {
  "current-events": CurrentEvents
  "street-photography": StreetPhotography
  health: Health
}

export interface CurrentEvents {
  status: string
  approved_on: string
}

export interface StreetPhotography {
  status: string
}

export interface Health {
  status: string
  approved_on: string
}

export interface User {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string
  last_name: string
  twitter_username: any
  portfolio_url: any
  bio: any
  location: any
  links: Links5
  profile_image: ProfileImage3
  instagram_username: string
  total_collections: number
  total_likes: number
  total_photos: number
  total_promoted_photos: number
  accepted_tos: boolean
  for_hire: boolean
  social: Social3
}

export interface Links5 {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
  following: string
  followers: string
}

export interface ProfileImage3 {
  small: string
  medium: string
  large: string
}

export interface Social3 {
  instagram_username: string
  portfolio_url: any
  twitter_username: any
  paypal_email: any
}

export interface PreviewPhoto {
  id: string
  slug: string
  created_at: string
  updated_at: string
  blur_hash: string
  urls: Urls2
}

export interface Urls2 {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
  small_s3: string
}
