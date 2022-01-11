import React, { useEffect, useState, useRef } from 'react';
import Organisms, { AuthForm, LoginForm } from 'Organisms/index';

const LoginPageComponent: React.FC<any> = ({}) => {
    return (
      <>
        <AuthForm>
          <LoginForm />
        </AuthForm>
      </>
    );
  };
  
  export default LoginPageComponent;
  