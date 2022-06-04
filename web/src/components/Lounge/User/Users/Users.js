import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Lounge/User/UsersCell'

const DELETE_USER_MUTATION = gql`
  mutation DeleteUserMutation($id: String!) {
    deleteUser(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

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

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const UsersList = ({ users }) => {
  const [deleteUser] = useMutation(DELETE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('User deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete user ' + id + '?')) {
      deleteUser({ variables: { id } })
    }
  }

  return (
    <article id="main">
      <header className="special container">
        <span className="icon solid fa-users"></span>
        <h2>Manage Users</h2>
      </header>

      <section className="wrapper style4 special container medium">
        <div className="content">
          <table className="rw-table">
            <thead>
              <tr>
                <th>Email</th>
                <th>First name</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{truncate(user.email)}</td>
                  <td>{truncate(user.firstName)}</td>

                  <td className='visually-hidden'>{truncate(user.lastName)}</td>
                  <td className='visually-hidden'>{truncate(user.roles)}</td>
                  <td className='visually-hidden'>{timeTag(user.createdAt)}</td>
                  <td className='visually-hidden'>{timeTag(user.updatedAt)}</td>
                  <td>
                    <nav className="rw-table-actions">
                      <Link
                        to={routes.user({ id: user.id })}
                        title={'Show user ' + user.id + ' detail'}
                        className="rw-button rw-button-small"
                      >
                        Show
                      </Link>
                      <Link
                        to={routes.editUser({ id: user.id })}
                        title={'Edit user ' + user.id}
                        className="rw-button rw-button-small rw-button-blue"
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        title={'Delete user ' + user.id}
                        className="rw-button rw-button-small rw-button-red"
                        onClick={() => onDeleteClick(user.id)}
                      >
                        Delete
                      </button>
                    </nav>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </section>
    </article>
  )
}

export default UsersList
