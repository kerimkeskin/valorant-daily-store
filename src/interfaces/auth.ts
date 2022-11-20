export interface ILoginReq {
  username: string;
  password: string;
}

export interface ICookies {
  __cf_bm: string;
  tdid: string;
  clid: string;
  csid: string;
  ssid: string;
  sub: string;
}

export interface ILoginRes {
  access_token: string;
  entitlement_token: string;
  puuid: string;
  region: string;
  game_name: string;
  tag_line: string;
  cookies: ICookies;
}

export interface ILoginTwoFactorRes {
  type: string;
  email: string;
  cookies: ICookiesWithTwoFactor;
}

export interface ICookiesWithTwoFactor {
  __cf_bm: string;
  tdid: string;
  asid: string;
  clid: string;
}

export interface ILoginTwoFactorReq {
  code: string;
  cookies: ICookiesWithTwoFactor;
}

export interface IRefreshTokenReq extends ICookies {}

export interface IRefreshTokenRes {
  access_token: string;
  entitlement_token: string;
  cookies: ICookies;
}
