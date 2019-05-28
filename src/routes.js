
import LoginPage from './containers/LoginPage';
import HomePage from './containers/HomePage';
import SignUpPage from './containers/SignUpPage';

import Inception from './node_modules/components/Inception';

// import Base from './containers/Base';

const routes = [
  {
    path: '/login',
    exact: true,
    component: Inception(LoginPage)
  },
  {
    path: '/',
    exact: true,
    component: Inception(HomePage)
  },
  {
    path: '/signup',
    exact: true,
    component: Inception(SignUpPage)
  }
];

export default routes;
