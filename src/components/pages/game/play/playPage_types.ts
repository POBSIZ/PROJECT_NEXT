export interface UsersType {
  userName: string;
  task: string;
  coins: number;
  flags: number;
  hearts: number;
  rank: number;
  isReady?: boolean;
  isMe: boolean;
}

export interface PlayPagePropsType {
  title: string;
  info: string;
  creator: string;
  entryFee: number;
  currUser: number;
  maxUser: number;
  stocksList: string[];
  users: UsersType[];
}
