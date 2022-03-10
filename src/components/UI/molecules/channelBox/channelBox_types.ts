export interface ChannelBoxPropsType {
  on_click?: () => {};
  radius?: 0 | 4 | 8 | 16 | 32;
}

export interface ChannelBoxPropsTypeTest {
  id: string;
  channelNum: number;
  channelName: string;
  entryFee: number;
  users: any;
  pointPsum: number;
  hostId: number;
  limitOfParticipants: number;
}
