import { useAuth } from '@redwoodjs/auth'
import humanize from 'humanize-string'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_USER_MUTATION = gql`
  mutation DeleteUserMutation($id: String!) {
    deleteUser(id: $id) {
      id
    }
  }
`

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const User = ({ user }) => {
  const { currentUser } = useAuth()

  const [deleteUser] = useMutation(DELETE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('User deleted')
      navigate(routes.users())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete user ' + id + '?')) {
      deleteUser({ variables: { id } })
    }
  }

  return (
    <>
      <article id="main">
        <header className="special container">
          <span className="icon solid fa-folder"></span>
          <h2>Manage: {currentUser.firstName + ' ' + currentUser.lastName}</h2>
        </header>

        <section className="wrapper style4 special container medium">
          <div className="content">
            <table className="rw-table">
              <tbody>
                <tr>
                  <th>Id</th>
                  <td>{user.id}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{user.email}</td>
                </tr>
                <tr>
                  <th>Hashed password</th>
                  <td>{user.hashedPassword}</td>
                </tr>
                <tr>
                  <th>Salt</th>
                  <td>{user.salt}</td>
                </tr>
                <tr>
                  <th>Reset token</th>
                  <td>{user.resetToken}</td>
                </tr>
                <tr>
                  <th>Reset token expires at</th>
                  <td>{timeTag(user.resetTokenExpiresAt)}</td>
                </tr>
                <tr>
                  <th>First name</th>
                  <td>{user.firstName}</td>
                </tr>
                <tr>
                  <th>Last name</th>
                  <td>{user.lastName}</td>
                </tr>
                <tr>
                  <th>Bio</th>
                  <td>{user.bio}</td>
                </tr>
                <tr>
                  <th>Roles</th>
                  <td>{user.roles}</td>
                </tr>
                <tr>
                  <th>Created at</th>
                  <td>{timeTag(user.createdAt)}</td>
                </tr>
                <tr>
                  <th>Updated at</th>
                  <td>{timeTag(user.updatedAt)}</td>
                </tr>
              </tbody>
            </table>

          </div>
          <nav className="rw-button-group">
            <Link
              to={routes.editUser({ id: user.id })}
              className="rw-button rw-button-blue"
            >
              Edit
            </Link>
            <button
              type="button"
              className="rw-button rw-button-red"
              onClick={() => onDeleteClick(user.id)}
            >
              Delete
            </button>
          </nav>
        </section>
      </article>
    </>
  )
}

export default User
