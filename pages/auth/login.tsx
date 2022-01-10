import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';

import Atoms, { Input, Button } from 'Atoms';
import Organisms, { AuthForm, LoginForm } from 'Organisms';

const AuthLogin: React.FC<any> = ({}) => {
  return (
    <>
      <AuthForm>
        <LoginForm />
      </AuthForm>
    </>
  );
};

export default AuthLogin;
