import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import Atoms from 'Atoms';
import Molecules from 'Molecules';
import Organisms from 'Organisms';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import Link from 'next/link';

function NavTab({ logout, isAuthenticated }) {
  const [navTabStyle, setNavTabStyle] = useState<any>();
  const [navBgStyle, setNavBgStyle] = useState<any>();
  const [navStyle, setNavStyle] = useState<any>();

  const navOpen = () => {
    // setNavTabStyle({
    //   transform: 'translateX(-50%)',
    //   opacity: '100%',
    // });
    // setNavStyle({
    //   transform: 'translateX(0%)',
    //   opacity: '100%',
    // });
    // setNavBgStyle({
    //   transform: 'translateX(0%)',
    //   opacity: '100%',
    // });
  };

  const navClose = () => {
    // setNavStyle({
    //   transform: `translateX(100%)`,
    //   opacity: '0',
    // });
    // setNavBgStyle({
    //   transform: `translateX(-100%)`,
    //   opacity: '100%',
    // });
    // setTimeout(() => {
    //   setNavTabStyle({
    //     transform: `translateX(-300%)`,
    //     opacity: '0',
    //   });
    // }, 400);
  };

  return (
    <nav className="nav">
      <button className="nav-menuBar material-icons" onClick={navOpen}>
        menu
      </button>

      <div className="navTab" style={navTabStyle}>
        <div className="navTab-container" style={navStyle}>
          <div className="navTab-user">
            {isAuthenticated == false ? (
              <>
                <Link href="/login">
                  <a className="user-login" onClick={navClose}>
                    로그인
                  </a>
                </Link>

                <p className="user-more">
                  회원가입을 하실려면{' '}
                  <Link href="/register">
                    <a onClick={navClose}>여기</a>
                  </Link>
                  를 클릭해주세요
                </p>
              </>
            ) : (
              <>
                <div className="user-profile">
                  <div className="profile_left">
                    <Link href="/profile">
                      <a className="profile-img" onClick={navClose}></a>
                    </Link>
                    <span>
                      <strong>USER</strong> 님
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      logout();
                      navClose();
                    }}
                    className="user-logout"
                  >
                    로그아웃
                  </button>
                </div>
              </>
            )}
          </div>
          <ul className="navTab-link">
            <Link href="/mbti">
              <a onClick={navClose}>📝DETI</a>
            </Link>
            <Link href="/survey/applier/detail/">
              <a onClick={navClose}>📨지원하기</a>
            </Link>
          </ul>
        </div>
        <div className="navTab-bg" onClick={navClose} style={navBgStyle}></div>
      </div>
    </nav>
  );
}

const HeaderComponent: React.FC<any> = ({ logout, isAuthenticated }) => {
  return (
    <header className="header">
      <div className="logo">
        <Link href="/">PROJECT</Link>
      </div>
      <NavTab logout={logout} isAuthenticated={isAuthenticated} />
    </header>
  );
};

export default HeaderComponent;
