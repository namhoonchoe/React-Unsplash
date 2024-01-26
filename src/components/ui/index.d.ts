/* eslint-disable @typescript-eslint/no-explicit-any */
 
 type Topic = {
  id: string
  slug: string
  title: string
  description: string
  published_at: string
  updated_at: string
  starts_at: string
  ends_at?: string
  only_submissions_after: any
  visibility: string
  featured: boolean
  total_photos: number
  current_user_contributions: any[]
  total_current_user_submissions: any
  links: Links
  status: string
  owners: Owner[]
  cover_photo: CoverPhoto
  preview_photos: PreviewPhoto[]
}

 interface Links {
  self: string
  html: string
  photos: string
}

 interface Owner {
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
  twitter_username: string
  paypal_email: any
}

 interface CoverPhoto {
  id: string
  slug: string
  created_at: string
  updated_at: string
  promoted_at?: string
  width: number
  height: number
  color: string
  blur_hash: string
  description?: string
  alt_description?: string
  breadcrumbs: any[]
  urls: Urls
  links: Links3
  likes: number
  liked_by_user: boolean
  current_user_collections: any[]
  sponsorship: any
  topic_submissions: TopicSubmissions
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

 interface Links3 {
  self: string
  html: string
  download: string
  download_location: string
}

 interface TopicSubmissions {
  health?: Health
  spirituality?: Spirituality
  travel?: Travel
  "textures-patterns"?: TexturesPatterns
  experimental?: Experimental
  nature?: Nature
  wallpapers?: Wallpapers
  "current-events"?: CurrentEvents
  "street-photography"?: StreetPhotography
  minimalism?: Minimalism
  "3d-renders"?: N3dRenders
  "architecture-interior"?: ArchitectureInterior
  film?: Film
  animals?: Animals
  "business-work"?: BusinessWork
  "food-drink"?: FoodDrink
  "fashion-beauty"?: FashionBeauty
  sports?: Sports
  people?: People
}

 interface Health {
  status: string
  approved_on?: string
}

 interface Spirituality {
  status: string
  approved_on?: string
}

 interface Travel {
  status: string
  approved_on?: string
}

 interface TexturesPatterns {
  status: string
  approved_on?: string
}

 interface Experimental {
  status: string
  approved_on?: string
}

 interface Nature {
  status: string
  approved_on?: string
}

 interface Wallpapers {
  status: string
  approved_on?: string
}

 interface CurrentEvents {
  status: string
  approved_on?: string
}

 interface StreetPhotography {
  status: string
  approved_on?: string
}

 interface Minimalism {
  status: string
  approved_on?: string
}

 interface N3dRenders {
  status: string
  approved_on: string
}

 interface ArchitectureInterior {
  status: string
  approved_on: string
}

 interface Film {
  status: string
  approved_on: string
}

 interface Animals {
  status: string
  approved_on: string
}

 interface BusinessWork {
  status: string
  approved_on: string
}

 interface FoodDrink {
  status: string
  approved_on: string
}

 interface FashionBeauty {
  status: string
  approved_on: string
}

 interface Sports {
  status: string
  approved_on: string
}

 interface People {
  status: string
  approved_on: string
}

 interface User {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string
  last_name?: string
  twitter_username?: string
  portfolio_url?: string
  bio?: string
  location?: string
  links: Links4
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
  instagram_username?: string
  portfolio_url?: string
  twitter_username?: string
  paypal_email: any
}

 interface PreviewPhoto {
  id: string
  slug: string
  created_at: string
  updated_at: string
  blur_hash: string
  urls: Urls2
}

 interface Urls2 {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
  small_s3: string
}
