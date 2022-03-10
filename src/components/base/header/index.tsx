import React from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { useRouter } from 'next/router';

import HeaderComponent from './header_component';

import { LogoutAsync, LOGOUT } from 'Actions/authAction';

const Header: React.FC<any> = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const auth = useSelector((store: RootStateOrAny) => store.authReducer);
  const nav_list = [
    { url: '/game/investing', text: '모의 투자 게임' },
    { url: '/game/investing/test', text: '모의 투자 게임[TEST]' },
  ];

  const setLogout = () => {
    dispatch(LogoutAsync.request());
    router.push('/');
  };

  return (
    <HeaderComponent
      logout={setLogout}
      isAuthenticated={auth?.isAuthenticated}
      profile={auth?.userData}
      navList={nav_list}
      {...props}
    />
  );
};

export default Header;
