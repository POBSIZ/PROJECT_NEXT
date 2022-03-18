import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import CreatePageComponent from './createPage_component';

const CreatePage: React.FC<any> = (props, {}) => {
  return (
    <>
      <CreatePageComponent {...props} />
    </>
  );
};

export default CreatePage;
