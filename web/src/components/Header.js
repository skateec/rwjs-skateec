import { useAuth } from "@redwoodjs/auth"
import { Link, routes } from "@redwoodjs/router"
import { useState } from "react"
import { LoginOrOutLink } from "src/components/Lounge/Utility/LoginOrOutLink"
import skateEClogo from 'src/images/skateec-logo.png'

const Header = () => {
  const { isAuthenticated } = useAuth(false)
  const [navVisible, setNavVisible] = useState(false)

  return (
    <>
      <div id="navButton" className={navVisible ? "visible" : ""}>
        <button className="toggle" onClick={(e) => { setNavVisible(!navVisible); console.log(navVisible) }}></button>
      </div>
      <div id="navPanel" className={navVisible ? "visible" : ""} onClick={() => { setNavVisible(false) }}>
        <nav>
          <Link className="link depth-0" to={routes.home()}><span className="indent-0"></span><strong>Skate EC</strong></Link>

          {isAuthenticated ? (
            <Link className="link depth-0" to={routes.lounge()}><span className="indent-0"></span>Lounge</Link>
          ) : (
            <Link className="link depth-0" to={routes.home()}><span className="indent-0"></span>Home</Link>
          )}

          <Link className="link depth-0" to={routes.sk8()}><span className="indent-0"></span><strong>Play Skate!</strong></Link>
        </nav>

        <hr />

        <LoginOrOutLink className="button" activeClassName="primary large" />
      </div>

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
    </>
  )
}

export default Header
