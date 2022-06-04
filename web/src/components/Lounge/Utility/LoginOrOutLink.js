import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

export const LoginOrOutLink = (props) => {
  const { isAuthenticated, logOut } = useAuth()

  let linkHTML = ''

  if (isAuthenticated) {
    linkHTML = (
      <Link
        className={props.className}
        to={routes.home()}
        onClick={logOut}
      >
        Logout
      </Link>
    )
  } else {
    linkHTML = (
      <Link
        className={props.className + ' ' + props.activeClassName}
        to={routes.login()}
      >
        Login
      </Link>
    )
  }

  return linkHTML
}
