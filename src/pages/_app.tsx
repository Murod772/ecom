import { Provider } from 'react-redux';
import { store } from '../redux/store';
import '../styles/globals.css';
import HeaderComponent from '../components/HeaderComponent';


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <HeaderComponent />
      <Component {...pageProps} />

    </Provider>
  );
}

export default MyApp;