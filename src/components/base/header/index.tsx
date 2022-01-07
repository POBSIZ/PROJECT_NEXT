import React from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

import HeaderComponent from './header_component';

import { logout, LOGOUT } from 'Actions/authAction';

const Header: React.FC<any> = (props) => {
  const dispatch = useDispatch();
  const auth = useSelector((store: RootStateOrAny) => store.auth);

  const setLogout = () => {
    dispatch(logout.call(LOGOUT));
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

class Test {
  constructor(testMethod) {
    this.testMethod = testMethod;
  }

  testMethod = (num) => {
    return num * 10;
  };
}
