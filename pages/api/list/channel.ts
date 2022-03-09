import type { NextApiRequest, NextApiResponse } from 'next';

import { ChannelBoxPropsType } from 'Molecules/channelBox/channelBox_types';

const dummyData = (): ChannelBoxPropsType[] => {
  let _list: ChannelBoxPropsType[] = [];
  for (let index = 0; index < 100; index++) {
    _list.push({
      is_private: true,
      title: `Title ${index}`,
      time: '12:30 ~ 13:30',
      point: index,
      curr_user: index,
      max_user: index * 2,
      info: `Nasdaq-${index} Random`,
      creator: 'John Doe',
      link: `${index}`,
    });
  }
  return _list;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ChannelBoxPropsType[]>,
) {
  res.status(200).json(dummyData());
}
