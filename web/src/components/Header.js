import { Link, routes } from "@redwoodjs/router"
import { LoginOrOutLink } from "src/components/Lounge/Utility/LoginOrOutLink"
import skateEClogo from 'src/images/skateec-logo.png'

const Header = () => {
  return (
    <header id="header">
      <h1 id="logo"><img src={skateEClogo} alt="Skate EC Logo" /> <Link to={routes.home()}>Skate <span className="visually-hidden">EC</span></Link></h1>
      <nav id="nav">
        <ul>
          <li><Link to={routes.lounge()}>Lounge</Link></li>
          <li><Link to={routes.sk8()}>Play <strong>Skate</strong>!</Link></li>
          <li><Link to={routes.contact()}>Contact</Link></li>
          <li><LoginOrOutLink className="button" activeClassName="primary" /></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
