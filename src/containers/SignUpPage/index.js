import React from 'react';
import './_index.scss';
import Login from 'components/Login';

import TestForm from './testForm';

const url = 'http://18.219.0.22:1337/auth/local';

const SignUpPage =() => {
  return (
    <Login
      Forms={TestForm}
      loginDomain={url}
    />
  );
}

export default SignUpPage;

