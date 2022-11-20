export interface IWalletReq {
  region: string;
  access_token: string;
  entitlement_token: string;
  puuid: string;
}

export interface IWalletRes {
  VP: number;
  Radianite: number;
  'Free Agent': number;
}

export interface IStoreReq {
  params: IWalletReq;
  language: string;
}

export interface Level {
  uuid: string;
  sprayLevel: number;
  displayName: string;
  displayIcon: string;
  assetPath: string;
}

export interface Item {
  uuid: string;
  displayName: string;
  levelItem?: any;
  displayIcon: string;
  streamedVideo: string;
  assetPath: string;
  BasePrice: number;
  DiscountPercent: number;
  DiscountedPrice: number;
  IsPromoItem: boolean;
  charmLevel?: number;
  isHiddenIfNotOwned?: boolean;
  themeUuid?: any;
  smallArt: string;
  wideArt: string;
  largeArt: string;
  category?: any;
  fullIcon: string;
  fullTransparentIcon: string;
  animationPng?: any;
  animationGif?: any;
  levels: Level[];
}

export interface IItems {
  uuid: string;
  displayName: string;
  levelItem?: any;
  displayIcon: string;
  streamedVideo: string;
  assetPath: string;
  displayNameSubText?: any;
  description: string;
  extraDescription: string;
  promoDescription: string;
  useAdditionalContext?: boolean;
  displayIcon2: string;
  verticalPromoImage: string;
  items: Item[];
}

export interface IStoreRes {
  type: string;
  remaning_time_in_seconds: number;
  data: IItems[];
}
