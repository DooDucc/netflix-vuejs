export interface AuthStore {
  userInfo: any;
}

export interface FeatureType {
  id: number;
  heading: string;
  content: string;
  image: string;
  subImage?: string;
  direction: string;
  video?: string;
}
