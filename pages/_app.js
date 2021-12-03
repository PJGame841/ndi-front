import '../styles/globals.css';
import '../styles/navBar.css';
import Head from 'next/head';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
        />
        <meta
          name='google-signin-client_id'
          content='889316701294-19c0rh58da5po65qbejpsch9d47i5ogp.apps.googleusercontent.com'
        />

        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
