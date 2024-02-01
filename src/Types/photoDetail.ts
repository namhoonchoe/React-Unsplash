export type PhotoDetail = {
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
  links: Links
  likes: number
  liked_by_user: boolean
  current_user_collections: any[]
  sponsorship: any
  topic_submissions: TopicSubmissions
  user: User
  exif: Exif
  location: Location
  meta: Meta
  public_domain: boolean
  tags: Tag[]
  tags_preview: TagsPreview[]
  views: number
  downloads: number
  topics: any[]
  related_collections: RelatedCollections
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
  wallpapers?: Wallpapers;
  nature?: Nature;
  "textures-patterns"?: TexturesPatterns;
  monochromatic?: Monochromatic;
  blue?: Blue;
  travel?: Travel;
  "current-events"?: CurrentEvents;
  "food-drink"?: FoodDrink;
  "the-holidays"?: TheHolidays;
  health?: Health;
  "act-for-nature"?: ActForNature;
  spirituality?: Spirituality;
}


interface Wallpapers {
  status: string;
  approved_on: string;
}

interface Nature {
  status: string;
  approved_on: string;
}

interface TexturesPatterns {
  status: string;
  approved_on: string;
}

interface Monochromatic {
  status: string;
  approved_on: string;
}

interface Blue {
  status: string;
  approved_on: string;
}

interface Travel {
  status: string;
}

interface CurrentEvents {
  status: string;
  approved_on?: string;
}

interface FoodDrink {
  status: string;
  approved_on: string;
}

interface TheHolidays {
  status: string;
  approved_on: string;
}

interface Health {
  status: string;
  approved_on: string;
}

interface ActForNature {
  status: string;
  approved_on: string;
}

interface Spirituality {
  status: string;
  approved_on: string;
}


 interface User {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string
  last_name: string
  twitter_username: any
  portfolio_url: any
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
  portfolio_url: any
  twitter_username: any
  paypal_email: any
}

 interface Exif {
  make: string
  model: string
  name: string
  exposure_time: string
  aperture: string
  focal_length: string
  iso: number
}

 interface Location {
  name: any
  city: any
  country: any
  position: Position
}

 interface Position {
  latitude: any
  longitude: any
}

 interface Meta {
  index: boolean
}

 interface Tag {
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
  subcategory?: Subcategory
}

 interface Type {
  slug: string
  pretty_slug: string
}

 interface Category {
  slug: string
  pretty_slug: string
}

 interface Subcategory {
  slug: string
  pretty_slug: string
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
  description: string
  alt_description: string
  breadcrumbs: Breadcrumb[]
  urls: Urls2
  links: Links3
  likes: number
  liked_by_user: boolean
  current_user_collections: any[]
  sponsorship: any
  topic_submissions: TopicSubmissions2
  premium: boolean
  plus: boolean
  user: User2
}

 interface Breadcrumb {
  slug: string
  title: string
  index: number
  type: string
}

 interface Urls2 {
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

 interface TopicSubmissions2 {
  nature?: Nature
  "textures-patterns"?: TexturesPatterns
}

 interface Nature {
  status: string
  approved_on: string
}

 interface TexturesPatterns {
  status: string
  approved_on: string
}

 interface User2 {
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
  links: Links4
  profile_image: ProfileImage2
  instagram_username: string
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
  instagram_username: string
  portfolio_url?: string
  twitter_username?: string
  paypal_email: any
}

 interface TagsPreview {
  type: string
  title: string
  source?: Source2
}

 interface Source2 {
  ancestry: Ancestry2
  title: string
  subtitle: string
  description: string
  meta_title: string
  meta_description: string
  cover_photo: CoverPhoto2
}

 interface Ancestry2 {
  type: Type2
  category: Category2
  subcategory?: Subcategory2
}

 interface Type2 {
  slug: string
  pretty_slug: string
}

 interface Category2 {
  slug: string
  pretty_slug: string
}

 interface Subcategory2 {
  slug: string
  pretty_slug: string
}

 interface CoverPhoto2 {
  id: string
  slug: string
  created_at: string
  updated_at: string
  promoted_at?: string
  width: number
  height: number
  color: string
  blur_hash: string
  description: string
  alt_description: string
  breadcrumbs: Breadcrumb2[]
  urls: Urls3
  links: Links5
  likes: number
  liked_by_user: boolean
  current_user_collections: any[]
  sponsorship: any
  topic_submissions: TopicSubmissions3
  premium: boolean
  plus: boolean
  user: User3
}

 interface Breadcrumb2 {
  slug: string
  title: string
  index: number
  type: string
}

 interface Urls3 {
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

 interface TopicSubmissions3 {
  nature?: Nature2
  "textures-patterns"?: TexturesPatterns2
}

 interface Nature2 {
  status: string
  approved_on: string
}

 interface TexturesPatterns2 {
  status: string
  approved_on: string
}

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

 interface RelatedCollections {
  total: number
  type: string
  results: Result[]
}

 interface Result {
  id: string
  title: string
  description: any
  published_at: string
  last_collected_at: string
  updated_at: string
  featured: boolean
  total_photos: number
  private: boolean
  share_key: string
  tags: Tag2[]
  links: Links9
  user: User5
  cover_photo: CoverPhoto4
  preview_photos: PreviewPhoto[]
}

 interface Tag2 {
  type: string
  title: string
  source?: Source3
}

 interface Source3 {
  ancestry: Ancestry3
  title: string
  subtitle: string
  description: string
  meta_title: string
  meta_description: string
  cover_photo: CoverPhoto3
}

 interface Ancestry3 {
  type: Type3
  category?: Category3
  subcategory?: Subcategory3
}

 interface Type3 {
  slug: string
  pretty_slug: string
}

 interface Category3 {
  slug: string
  pretty_slug: string
}

 interface Subcategory3 {
  slug: string
  pretty_slug: string
}

 interface CoverPhoto3 {
  id: string
  slug: string
  created_at: string
  updated_at: string
  promoted_at: string
  width: number
  height: number
  color: string
  blur_hash: string
  description?: string
  alt_description: string
  breadcrumbs: Breadcrumb3[]
  urls: Urls4
  links: Links7
  likes: number
  liked_by_user: boolean
  current_user_collections: any[]
  sponsorship: any
  topic_submissions: TopicSubmissions4
  premium: boolean
  plus: boolean
  user: User4
}

 interface Breadcrumb3 {
  slug: string
  title: string
  index: number
  type: string
}

 interface Urls4 {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
  small_s3: string
}

 interface Links7 {
  self: string
  html: string
  download: string
  download_location: string
}

 interface TopicSubmissions4 {
  nature?: Nature3
  wallpapers?: Wallpapers
  "textures-patterns"?: TexturesPatterns3
  "architecture-interior"?: ArchitectureInterior
  "color-of-water"?: ColorOfWater
}

 interface Nature3 {
  status: string
  approved_on: string
}

 interface Wallpapers {
  status: string
  approved_on: string
}

 interface TexturesPatterns3 {
  status: string
  approved_on: string
}

 interface ArchitectureInterior {
  status: string
  approved_on: string
}

 interface ColorOfWater {
  status: string
  approved_on: string
}

 interface User4 {
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
  links: Links8
  profile_image: ProfileImage4
  instagram_username: string
  total_collections: number
  total_likes: number
  total_photos: number
  total_promoted_photos: number
  accepted_tos: boolean
  for_hire: boolean
  social: Social4
}

 interface Links8 {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
  following: string
  followers: string
}

 interface ProfileImage4 {
  small: string
  medium: string
  large: string
}

 interface Social4 {
  instagram_username: string
  portfolio_url?: string
  twitter_username?: string
  paypal_email: any
}

 interface Links9 {
  self: string
  html: string
  photos: string
  related: string
}

 interface User5 {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string
  last_name: string
  twitter_username: any
  portfolio_url?: string
  bio?: string
  location?: string
  links: Links10
  profile_image: ProfileImage5
  instagram_username?: string
  total_collections: number
  total_likes: number
  total_photos: number
  total_promoted_photos: number
  accepted_tos: boolean
  for_hire: boolean
  social: Social5
}

 interface Links10 {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
  following: string
  followers: string
}

 interface ProfileImage5 {
  small: string
  medium: string
  large: string
}

 interface Social5 {
  instagram_username?: string
  portfolio_url?: string
  twitter_username: any
  paypal_email: any
}

 interface CoverPhoto4 {
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
  breadcrumbs: Breadcrumb4[]
  urls: Urls5
  links: Links11
  likes: number
  liked_by_user: boolean
  current_user_collections: any[]
  sponsorship: any
  topic_submissions: TopicSubmissions5
  user: User6
}

 interface Breadcrumb4 {
  slug: string
  title: string
  index: number
  type: string
}

 interface Urls5 {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
  small_s3: string
}

 interface Links11 {
  self: string
  html: string
  download: string
  download_location: string
}

 interface TopicSubmissions5 {}

 interface User6 {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string
  last_name: string
  twitter_username: any
  portfolio_url?: string
  bio?: string
  location?: string
  links: Links12
  profile_image: ProfileImage6
  instagram_username?: string
  total_collections: number
  total_likes: number
  total_photos: number
  total_promoted_photos: number
  accepted_tos: boolean
  for_hire: boolean
  social: Social6
}

 interface Links12 {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
  following: string
  followers: string
}

 interface ProfileImage6 {
  small: string
  medium: string
  large: string
}

 interface Social6 {
  instagram_username?: string
  portfolio_url?: string
  twitter_username: any
  paypal_email: any
}

 interface PreviewPhoto {
  id: string
  slug: string
  created_at: string
  updated_at: string
  blur_hash: string
  urls: Urls6
}

 interface Urls6 {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
  small_s3: string
}
