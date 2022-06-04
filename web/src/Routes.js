import { Set, Router, Route, Private } from '@redwoodjs/router'
import UsersLayout from 'src/layouts/UsersLayout'
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout'

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated='login'>
        <Set wrap={DefaultLayout}>
          <Route path="/lounge" page={LoungeLoungePage} name="lounge" />
        </Set>
      </Private>

      <Private unauthenticated='login' role={"admin"}>
      <Set wrap={DefaultLayout}>
        <Route path="/lounge/users/new" page={LoungeUserNewUserPage} name="newUser" />
        <Route path="/lounge/users/{id}/edit" page={LoungeUserEditUserPage} name="editUser" />
        <Route path="/lounge/users/{id}" page={LoungeUserUserPage} name="user" />
        <Route path="/lounge/users" page={LoungeUserUsersPage} name="users" />
      </Set>
      </Private>

      <Set wrap={DefaultLayout}>
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/sk8" page={Sk8Page} name="sk8" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
