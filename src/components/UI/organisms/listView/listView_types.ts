export interface ItemListType {
  id: string;
  title: string;
  username: string;
  create_date: string;
  short_text: string;
  tags: string[];
  is_favorite: boolean;
  favorite_count: number;
}

export interface ListViewPropsType {
  item_list: ItemListType[];
  with_imgs: boolean;
}
