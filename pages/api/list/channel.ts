import type { NextApiRequest, NextApiResponse } from 'next';

import { ChannelBoxPropsTypeTest } from 'Molecules/channelBox/channelBox_types';

const dummyData = (): ChannelBoxPropsTypeTest[] => {
  let _list: ChannelBoxPropsTypeTest[] = [];
  for (let index = 0; index < 100; index++) {
    _list.push({
      id: `${index}`,
      channelNum: index,
      channelName: `Title ${index}`,
      entryFee: index,
      users: [...Array(index)],
      pointPsum: index,
      hostId: index,
      limitOfParticipants: index,
    });
    // _list.push({
    //   is_private: true,
    //   title: `Title ${index}`,
    //   time: '12:30 ~ 13:30',
    //   point: index,
    //   curr_user: index,
    //   max_user: index * 2,
    //   info: `Nasdaq-${index} Random`,
    //   creator: 'John Doe',
    //   link: `${index}`,
    // });
  }
  return _list;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ChannelBoxPropsTypeTest[]>,
) {
  const resData = await dummyData();
  res.status(200).json(resData);
}
