export interface ProfilePropsType {
  UserName: string;
  task: string;
  coins: number;
  flags: number;
  hearts: number;
  radius?: 0 | 4 | 8 | 16 | 32;
  rank?: number;
  isReady?: boolean;
  isMe?: boolean;
}
