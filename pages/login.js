import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Login() {
  const [cookie, setCookie] = useCookies(['authToken']);
  const router = useRouter();

  if (router.query.token) {
    setCookie('authToken', router.query.token);
  }

  const login = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/auth/login', {
        body: JSON.stringify({
          username: event.target.username.value,
          password: event.target.password.value,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      const result = await res.json();
      console.log(result);
      console.log(res.headers.get('Set-Cookie'));
      console.log(res.headers.get('Content-Length'));
      res.headers.forEach((val, key) => {
        console.log(val, key);
      });

      setCookie('authToken', result.data.token);
    } catch (e) {
      console.log(e);
    }
  };

  const testLogin = async function () {
    try {
      const res2 = await fetch(process.env.NEXT_PUBLIC_API_URL + '/client/', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + cookie.authToken,
        },
      });

      const resu = await res2.json();
      console.log(resu);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <form onSubmit={login}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' required />
        <label htmlFor='password'>Mot de passe</label>
        <input id='password' type='password' required />
        <button type='submit'>Se connecter</button>
      </form>
      <Link href='/register'>S&apos;enregistrer</Link>
      <div className='row'>
        <div className='col-md-3'>
          <a
            className='btn btn-outline-dark'
            href={process.env.NEXT_PUBLIC_API_URL + '/auth/google'}
            role='button'
          >
            <img
              width='20px'
              alt='Google sign-in'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png'
            />
            Login with Google
          </a>
        </div>
        <div className='col-md-3'>
          <a
            className='btn btn-outline-dark'
            href={process.env.NEXT_PUBLIC_API_URL + '/auth/facebook'}
            role='button'
          >
            <img
              width='20px'
              alt='Facebook sign-in'
              src='https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png'
            />
            Login with Facebook
          </a>
        </div>
        <div className='col-md-3'>
          <a
            className='btn btn-outline-dark'
            href={process.env.NEXT_PUBLIC_API_URL + '/auth/github'}
            role='button'
          >
            <img
              width='20px'
              alt='Github sign-in'
              src='https://img2.freepng.fr/20180326/gxq/kisspng-github-computer-icons-icon-design-github-5ab8a31e334e73.4114704215220498222102.jpg'
            />
            Login with Github
          </a>
        </div>
      </div>
      <link
        rel='stylesheet'
        href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
        integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm'
        crossOrigin='anonymous'
      />
    </>
  );
}
