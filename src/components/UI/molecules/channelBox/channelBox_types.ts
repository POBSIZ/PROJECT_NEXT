export interface ChannelBoxPropsType {
  title: string;
  time: string;
  point: number;
  curr_user: number;
  max_user: number;
  info: string;
  creator: string;
  is_private: boolean;
  on_click?: () => {};
  radius?: 0 | 4 | 8 | 16 | 32;
}
