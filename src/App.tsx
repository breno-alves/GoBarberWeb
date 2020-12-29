import React from 'react';

import GlobalStyle from './styles/global';

import SignIn from './pages/Signin';
import SingUp from './pages/SignUp';

const App: React.FC = () => (
  <>
    <SingUp />
    <GlobalStyle />
  </>
);

export default App;
