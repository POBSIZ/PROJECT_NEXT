import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import StyledTextInput from './textInput_styled';

import Atoms, { Input, Select } from 'Atoms/index';

const TextInputComponent: React.FC<any> = (props) => {
  const item = ['남자', '여자'];
  const select_default = '선택해주세요';
  const [TextInputType, set_TextInputType] = useState({
    text: '아이디',
    type: 'username',
    name: 'userName',
    placeholder: '아이디',
  });
  const setType = (value: string) => {
    switch (value) {
      case 'username':
        set_TextInputType({
          text: '아이디',
          type: 'username',
          name: 'username',
          placeholder: '아이디',
        });
        break;

      case 'password':
        set_TextInputType({
          text: '비밀번호',
          type: 'password',
          name: 'password',
          placeholder: '비밀번호',
        });
        break;
      case 'password_check':
        set_TextInputType({
          text: '비밀번호 확인',
          type: 'password',
          name: 'password',
          placeholder: '비밀번호 확인',
        });
        break;
      case 'email':
        set_TextInputType({
          text: '이메일',
          type: 'email',
          name: 'email',
          placeholder: 'e-mail',
        });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setType(props.type);
    return () => {};
  }, [props.type]);
  return (
    <>
      <StyledTextInput {...props}>
        {props.type == 'gender' ? (
          <label className="line">
            <span className="gender">성별</span>
            <div className="line_container">
              <Select
                isFail={props.isFail}
                name="gender"
                placeholder={select_default}
                item={item}
              />
            </div>
          </label>
        ) : props.type == 'name' ? (
          <label className="line">
            <span className="name">이름</span>
            <div className="line_container">
              <div style={{ width: '100%' }}>
                <Input
                  isFail={props.isFail}
                  placeholder="성"
                  type="text"
                  name="first_name"
                />
              </div>
              <div style={{ width: '100%' }}>
                <Input
                  isFail={props.isFail}
                  placeholder="이름"
                  type="text"
                  name="last_name"
                />
              </div>
            </div>
          </label>
        ) : (
          <label className="line">
            <span className="username">{TextInputType.text}</span>
            <div className="line_container">
              <Input
                isFail={props.isFail}
                placeholder={TextInputType.placeholder}
                type={TextInputType.type}
                name={TextInputType.name}
              />
            </div>
          </label>
        )}

        {props.warnning == true ? (
          <div className="warnning">
            <FontAwesomeIcon
              icon={faExclamationCircle}
              style={{ marginRight: '5px' }}
            />
            영문 및 숫자를 포함한 8자 이상이어야 합니다.
          </div>
        ) : (
          ''
        )}
      </StyledTextInput>
    </>
  );
};

export default TextInputComponent;
