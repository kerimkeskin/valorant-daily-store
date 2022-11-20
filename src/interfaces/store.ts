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

export interface ILevel {
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
  levels: ILevel[];
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

export interface IData {
  uuid: string;
  displayName: string;
  levelItem: string;
  displayIcon: string;
  streamedVideo: string;
  assetPath: string;
  price: string;
  quantity: number;
  start_date: any;
  isHiddenIfNotOwned?: boolean;
  themeUuid: string;
  smallArt: string;
  wideArt: string;
  largeArt: string;
  charmLevel?: number;
  category: string;
  fullIcon: string;
  fullTransparentIcon: string;
  animationPng: string;
  animationGif: string;
  levels: ILevel[];
}

export interface ISkinRes {
  type: string;
  data: IData;
  quantity?: number;
}

export interface ISkinParams {
  region: string;
  access_token: string;
  entitlement_token: string;
}

export interface ISkinReq {
  params: ISkinParams;
  language: string;
}
