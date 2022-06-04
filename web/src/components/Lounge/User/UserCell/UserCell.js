import User from 'src/components/Lounge/User/User'

export const QUERY = gql`
  query FindUserById($id: String!) {
    user: user(id: $id) {
      id
      email
      hashedPassword
      salt
      resetToken
      resetTokenExpiresAt
      firstName
      lastName
      bio
      roles
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>User not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ user }) => {
  return <User user={user} />
}
