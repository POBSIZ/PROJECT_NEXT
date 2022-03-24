import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import CreateChannelComponent from './createChannel_component';

const CreateChannel: React.FC<any> = (props, {}) => {
  return(
    <>
      <CreateChannelComponent {...props} />
    </>
  );
};

export default CreateChannel;