import { Link, routes } from "@redwoodjs/router"
import { LoginOrOutLink } from "src/components/Lounge/Utility/LoginOrOutLink"

const Footer = () => {
  return (
    <footer id="footer">

      <ul className="icons">
        <li><a href="https://github.com/skateec/rwjs-skateec" target={'_blank'} className="icon large brands fa-github"><span className="label">Github</span></a></li>
        <li><a href="mailto://skateec+contact@proton.me?Subject=Contact+|+Skate+EC" target={'_blank'} className="icon large fa-envelope"><span className="label">pm.me</span></a></li>
      </ul>

      <ul className="copyright">
        <li>&copy; <a href="https://www.darrensopiarz.com/" target={'_blank'}>d11z</a></li>
        <li><LoginOrOutLink /></li>
        <li>Design: <a href="https://html5up.net" target={"_blank"}>HTML5 UP</a></li>
      </ul>

    </footer>
  )
}

export default Footer
