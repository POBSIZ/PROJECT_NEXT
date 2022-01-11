import React from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { useRouter } from 'next/router';

import HeaderComponent from './header_component';

import { Logout, LOGOUT } from 'Actions/authAction';

const Header: React.FC<any> = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const auth = useSelector((store: RootStateOrAny) => store.auth);

  const setLogout = () => {
    dispatch(Logout.call(LOGOUT));
    router.push('/');
  };

  return (
    <HeaderComponent
      logout={setLogout}
      isAuthenticated={auth.isAuthenticated}
      profile={auth.userData}
      {...props}
    />
  );
};

export default Header;
