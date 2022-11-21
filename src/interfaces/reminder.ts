export interface IReminderRes {
  status: number;
  message: string;
}

export interface IReminderReq {
  email: string;
  skin_id: string;
  puuid?: string;
  region?: string;
}
