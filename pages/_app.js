import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "next/head";
import { Provider } from 'react-redux';
import { useStore } from '../src/store';


function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  
  return (
    <Provider store={store}>
      <Head>
        <title>Easyrent Gh</title>
        <link rel="icon" href="/img/Easy-Rent-logo.png"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"></link> */}
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
