import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import Atoms, { Logo } from 'Atoms/index';
import Molecules from 'Molecules/index';
import Organisms from 'Organisms/index';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faBars } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC
import Link from 'next/link';
import { nanoid } from 'nanoid';

import StyledHeader from './header_styled';

function NavTab({ logout, isAuthenticated, profile, navList }) {
  const [navTabStyle, setNavTabStyle] = useState<any>();
  const [navBgStyle, setNavBgStyle] = useState<any>();
  const [navStyle, setNavStyle] = useState<any>();

  const navOpen = () => {
    setNavTabStyle({
      transform: 'translateX(-50%)',
      opacity: '100%',
    });
    setNavStyle({
      transform: 'translateX(0%)',
      opacity: '100%',
    });
    setNavBgStyle({
      transform: 'translateX(0%)',
      opacity: '100%',
    });
  };

  const navClose = () => {
    setNavStyle({
      transform: `translateX(100%)`,
      opacity: '0',
    });
    setNavBgStyle({
      transform: `translateX(-100%)`,
      opacity: '100%',
    });
    setTimeout(() => {
      setNavTabStyle({
        transform: `translateX(-300%)`,
        opacity: '0',
      });
    }, 400);
  };

  return (
    <nav className="nav">
      <FontAwesomeIcon
        icon={faBars}
        className="nav-menuBar"
        onClick={navOpen}
      />

      <div className="navTab" style={navTabStyle}>
        <div className="navTab-container" style={navStyle}>
          <div className="navTab-user">
            {isAuthenticated == false || isAuthenticated == undefined ? (
              <>
                <Link href="/auth/login">
                  <a className="user-login" onClick={navClose}>
                    로그인
                  </a>
                </Link>

                <p className="user-more">안녕하세요!</p>
              </>
            ) : (
              <>
                <div className="user-profile">
                  <div className="profile_left">
                    <Link href="/profile">
                      <a className="profile-img" onClick={navClose}></a>
                    </Link>
                    <span>
                      <strong>{profile?.username || 'USER'}</strong> 님
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
            {navList?.map((item) => (
              <Link href={item.url} key={nanoid()}>
                <a onClick={navClose}>{item.text}</a>
              </Link>
            ))}
          </ul>
        </div>
        <div className="navTab-bg" onClick={navClose} style={navBgStyle}></div>
      </div>
    </nav>
  );
}

const HeaderComponent: React.FC<any> = ({
  logout,
  isAuthenticated,
  profile,
  navList,
}) => {
  return (
    <StyledHeader className="header">
      <div className="logo">
        <Logo href={'/'}>PROJECT</Logo>
      </div>
      <NavTab
        logout={logout}
        isAuthenticated={isAuthenticated}
        profile={profile}
        navList={navList}
      />
    </StyledHeader>
  );
};

export default HeaderComponent;
