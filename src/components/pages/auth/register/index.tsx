import React, { useEffect, useState, useRef } from 'react';
import Organisms, { AuthForm, RegisterForm } from 'Organisms/index';

const RegisterComponent: React.FC<any> = ({}) => {
  return (
    <>
      <AuthForm>
        <RegisterForm />
      </AuthForm>
    </>
  );
};

export default RegisterComponent;
