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
