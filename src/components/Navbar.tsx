import Link from "next/link"
import LogoutForm from "./logoutForm"

const Navbar = async () => {
  const session = true;

  return (
    <nav>
      <Link href="/">Homepage</Link>
      <Link href="/premium">Premium</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/login">Login</Link>
      {session && <LogoutForm/>}
    </nav>
  )
}

export default Navbar