import Link from 'next/link';

export default function Navbar() {
  return (
  <div class="topnav" id="myTopnav">
    <Link href="/maison" class="active">Maison</Link>
    <Link href="/about">About</Link>
    <Link href="/profil">Profil</Link>
    <input type="text" placeholder="Patronyme"></input>
  </div>
  )
}