import { useRouter } from 'next/router';

export default function Register() {
  const router = useRouter();

  async function register(event) {
    event.preventDefault();

    if (event.target.password.value != event.target.password2.value) {
      document.getElementById('error').innerHTML =
        'Les deux mots de passe ne correspondent pas !';
      return;
    }

    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + '/auth/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nom: event.target.nom.value,
          prenom: event.target.prenom.value,
          username: event.target.username.value,
          password: event.target.password.value,
          email: event.target.email.value,
        }),
      }
    );

    const data = await res.json();
    if (!data.valid) {
      document.getElementById('error').innerHTML = data.data.message;
    }

    router.push('/login');
  }

  return (
    <>
      <p id='error' style={{ hidden: true }}></p>
      <form onSubmit={register}>
        <label htmlFor='nom'>Nom</label>
        <input id='nom' type='text' required />
        <br />
        <label htmlFor='prenom'>Prénom</label>
        <input id='prenom' type='text' required />
        <br />
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' required />
        <br />
        <label htmlFor='password'>Mot de passe</label>
        <input id='password' type='password' required />
        <br />
        <label htmlFor='password2'>Confirmation mot de passe</label>
        <input id='password2' type='password' required />
        <br />
        <label htmlFor='email'>Email</label>
        <input id='email' type='email' required />
        <br />
        <button type='submit'>Créer un compte</button>
      </form>
    </>
  );
}
