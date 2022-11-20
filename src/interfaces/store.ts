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
