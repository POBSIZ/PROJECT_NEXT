import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import ProfileComponent from './profile_component';
import { ProfilePropsType } from './profile_types';

const Profile: React.FC<ProfilePropsType> = (
  props,
  { radius }: ProfilePropsType,
) => {
  return (
    <>
      <ProfileComponent {...props} />
    </>
  );
};

export default Profile;
