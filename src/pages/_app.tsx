import { Provider, useDispatch  } from 'react-redux';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import HeaderComponent from '../components/HeaderComponent';
import React, { useEffect } from 'react';
import { setToken } from '../api/authSlice';
import { store } from '../redux/store';



function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Access localStorage only if `window` is defined
      const token = localStorage.getItem('token');
      if (token) {
        store.dispatch(setToken(token));
      }
    }
  }, []);

  
  return (
    <Provider store={store}>
      <HeaderComponent />
      <Component {...pageProps} />

    </Provider>
  );
}

export default MyApp;