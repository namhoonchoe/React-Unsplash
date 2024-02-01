export type CollectionInfo = {
  id: string
  title: string
  description: string
  published_at: string
  last_collected_at: string
  updated_at: string
  featured: boolean
  total_photos: number
  private: boolean
  share_key: string
  tags: Tag[]
  links: Links3
  user: User2
  cover_photo: CoverPhoto2
  preview_photos: PreviewPhoto[]
  meta: Meta
}

export interface Tag {
  type: string
  title: string
  source?: Source
}

 interface Source {
  ancestry: Ancestry
  title: string
  subtitle: string
  description: string
  meta_title: string
  meta_description: string
  cover_photo: CoverPhoto
}

 interface Ancestry {
  type: Type
  category: Category
}

 interface Type {
  slug: string
  pretty_slug: string
}

 interface Category {
  slug: string
  pretty_slug: string
}

 interface CoverPhoto {
  id: string
  slug: string
  created_at: string
  updated_at: string
  promoted_at: string
  width: number
  height: number
  color: string
  blur_hash: string
  description: string
  alt_description: string
  breadcrumbs: any[]
  urls: Urls
  links: Links
  likes: number
  liked_by_user: boolean
  current_user_collections: any[]
  sponsorship: any
  topic_submissions: TopicSubmissions
  premium: boolean
  plus: boolean
  user: User
}

 interface Urls {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
  small_s3: string
}

 interface Links {
  self: string
  html: string
  download: string
  download_location: string
}

 interface TopicSubmissions {
  health: Health
}

 interface Health {
  status: string
  approved_on: string
}

 interface User {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string
  last_name: string
  twitter_username: any
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

 interface Links2 {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
  following: string
  followers: string
}

 interface ProfileImage {
  small: string
  medium: string
  large: string
}

 interface Social {
  instagram_username: string
  portfolio_url: string
  twitter_username: any
  paypal_email: any
}

 interface Links3 {
  self: string
  html: string
  photos: string
  related: string
}

 interface User2 {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string
  last_name: any
  twitter_username: any
  portfolio_url: any
  bio: any
  location: any
  links: Links4
  profile_image: ProfileImage2
  instagram_username: any
  total_collections: number
  total_likes: number
  total_photos: number
  total_promoted_photos: number
  accepted_tos: boolean
  for_hire: boolean
  social: Social2
}

 interface Links4 {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
  following: string
  followers: string
}

 interface ProfileImage2 {
  small: string
  medium: string
  large: string
}

 interface Social2 {
  instagram_username: any
  portfolio_url: any
  twitter_username: any
  paypal_email: any
}

 interface CoverPhoto2 {
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
  urls: Urls2
  links: Links5
  likes: number
  liked_by_user: boolean
  current_user_collections: any[]
  sponsorship: any
  topic_submissions: TopicSubmissions2
  user: User3
}

 interface Urls2 {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
  small_s3: string
}

 interface Links5 {
  self: string
  html: string
  download: string
  download_location: string
}

 interface TopicSubmissions2 {}

 interface User3 {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string
  last_name: string
  twitter_username: string
  portfolio_url: string
  bio: string
  location: string
  links: Links6
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

 interface Links6 {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
  following: string
  followers: string
}

 interface ProfileImage3 {
  small: string
  medium: string
  large: string
}

 interface Social3 {
  instagram_username: string
  portfolio_url: string
  twitter_username: string
  paypal_email: any
}

 interface PreviewPhoto {
  id: string
  slug: string
  created_at: string
  updated_at: string
  blur_hash: string
  urls: Urls3
}

 interface Urls3 {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
  small_s3: string
}

 interface Meta {
  title: any
  description: any
  index: boolean
}
