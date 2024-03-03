export type Photo = {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  promoted_at?: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description?: string;
  alt_description: string;
  breadcrumbs: Breadcrumb[];
  urls: Urls;
  links: Links;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship?: Sponsorship;
  topic_submissions: TopicSubmissions;
  user: User;
}

interface Breadcrumb {
  slug: string;
  title: string;
  index: number;
  type: string;
}

interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

interface Links {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

interface Sponsorship {
  impression_urls: string[];
  tagline: string;
  tagline_url: string;
  sponsor: Sponsor;
}

interface Sponsor {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: any;
  twitter_username: string;
  portfolio_url: string;
  bio: string;
  location: string;
  links: Links2;
  profile_image: ProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  total_promoted_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
}

interface Links2 {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

interface Social {
  instagram_username: string;
  portfolio_url: string;
  twitter_username: string;
  paypal_email: any;
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
  approved_on?: string;
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
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name?: string;
  twitter_username?: string;
  portfolio_url?: string;
  bio?: string;
  location?: string;
  links: Links3;
  profile_image: ProfileImage2;
  instagram_username?: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  total_promoted_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social2;
}

interface Links3 {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

interface ProfileImage2 {
  small: string;
  medium: string;
  large: string;
}

interface Social2 {
  instagram_username?: string;
  portfolio_url?: string;
  twitter_username?: string;
  paypal_email: any;
}
