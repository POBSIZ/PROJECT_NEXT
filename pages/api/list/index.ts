import type { NextApiRequest, NextApiResponse } from 'next';

interface Data {
  id: string;
  title: string;
  username: string;
  create_date: string;
  short_text: string;
  tags: string[];
  is_favorite: boolean;
  favorite_count: number;
}

const dummyData = (): Data[] => {
  let _list: Data[] = [];
  for (let index = 0; index < 100; index++) {
    _list.push({
      id: '1',
      title: `Dummy ${index}`,
      username: `John Doe ${index}`,
      create_date: `2${index}.${index}.${index}`,
      short_text:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni repudiandae cum voluptates ad facere, ab consequuntur possimus pariatur aut aliquid ipsum, nemo commodi facilis architecto! Nostrum in corrupti sint cumque?',
      tags: [...Array(index).fill(String(index))],
      is_favorite: true,
      favorite_count: index,
    });
  }
  return _list;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>,
) {
  res.status(200).json(dummyData());
}
