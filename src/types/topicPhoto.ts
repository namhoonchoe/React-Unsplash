 
export type topicPhoto = {
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
  alt_description: string
  breadcrumbs: any[]
  urls: Urls
  links: Links
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

export interface Links {
  self: string
  html: string
  download: string
  download_location: string
}

export interface TopicSubmissions {
  "current-events": CurrentEvents
  "street-photography"?: StreetPhotography
  health?: Health
  travel?: Travel
  wallpapers?: Wallpapers
  "textures-patterns"?: TexturesPatterns
  people?: People
  "girls-vs-stereotypes"?: GirlsVsStereotypes
  "business-work"?: BusinessWork
  experimental?: Experimental
  "arts-culture"?: ArtsCulture
  "fashion-beauty"?: FashionBeauty
  "architecture-interior"?: ArchitectureInterior
  spirituality?: Spirituality
  minimalism?: Minimalism
  nature?: Nature
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
  approved_on?: string
}

export interface Travel {
  status: string
  approved_on?: string
}

export interface Wallpapers {
  status: string
  approved_on?: string
}

export interface TexturesPatterns {
  status: string
}

export interface People {
  status: string
  approved_on?: string
}

export interface GirlsVsStereotypes {
  status: string
}

export interface BusinessWork {
  status: string
}

export interface Experimental {
  status: string
}

export interface ArtsCulture {
  status: string
}

export interface FashionBeauty {
  status: string
}

export interface ArchitectureInterior {
  status: string
}

export interface Spirituality {
  status: string
}

export interface Minimalism {
  status: string
  approved_on?: string
}

export interface Nature {
  status: string
}

export interface User {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string
  last_name: string
  twitter_username?: string
  portfolio_url?: string
  bio?: string
  location?: string
  links: Links2
  profile_image: ProfileImage
  instagram_username?: string
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
  instagram_username?: string
  portfolio_url?: string
  twitter_username?: string
  paypal_email: any
}
