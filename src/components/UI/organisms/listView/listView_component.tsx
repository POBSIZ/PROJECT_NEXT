import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faHeart } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import StyledListView from './listView_styled';

import { ListViewPropsType, ItemListType } from './listView_types';

import Atoms, { Like } from 'Atoms';

const ListViewComponent: React.FC<ListViewPropsType> = (
  props,
  { item_list }: ListViewPropsType,
) => {
  return (
    <>
      <StyledListView {...props}>
        {props.item_list?.map((item: ItemListType, i: number) => {
          return (
            <li className="list_item" key={i}>
              <div className="list_item-info">
                <a href="">
                  <h3 className="list_item-title">{item.title}</h3>
                  <div className="list_item_detail">
                    <span className="list_item_detail-user">
                      {item.username}
                    </span>
                    <span className="list_item_detail-date">
                      {item.create_date}
                    </span>
                  </div>
                  <p className="list_item-text">{item.short_text}</p>
                  <div className="list_item_badges">
                    {item?.tags?.map((tag: string, k: number) => {
                      if (k > 2) {
                        return null;
                      }
                      return k === 2 ? (
                        <div className="list_item_badges-item" key={k}>
                          ...
                        </div>
                      ) : (
                        <div className="list_item_badges-item" key={k}>
                          {tag}
                        </div>
                      );
                    })}
                  </div>
                </a>
              </div>
              <div className="list_item-like">
                <Like className="like-button" isLike={item.is_favorite} />
                <span className="like-count">{item.favorite_count}</span>
              </div>
            </li>
          );
        })}
      </StyledListView>
    </>
  );
};

export default ListViewComponent;
