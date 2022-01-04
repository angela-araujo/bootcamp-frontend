import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import theme from './themes/main/theme';
import Login from './screens/login/login.screen';
import Home from './screens/home/home.screen';
import { LoginPath } from './screens/login/login.types';
import { HomePath } from './screens/home/home.types';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './themes/main/global-style';
import { Provider } from 'react-redux';
import store from './store/store/store';
import UserGuard from './components/routers/user-guard/user-guard.component';

function App() {

  // const navigate = useNavigate();

  // useEffect(
  //   () => {
  //     navigate(HomePath)
  //   },
  //   []
  // )

  return (
    // O <Provider>componente torna o Redux store disponível 
    // para qualquer componente aninhado que precise acessar 
    // a loja Redux. 
    <Provider store={store}>
      {/* */}
      <ThemeProvider theme={theme}>
        {/* Criando estilo global da aplicação */}
        <GlobalStyle />
        <Routes>
          <Route path={LoginPath} element={<Login />} />
          <Route path={HomePath} element={<UserGuard><Home /></UserGuard> } />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
