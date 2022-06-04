import { db } from 'api/src/lib/db'
import CryptoJS from 'crypto-js'

export default async () => {
  const importUsers = () => {
    try {
      db.user.deleteMany()

      const source = require('./data/users.json')
      const data = []

      for (let i = 0; i < source.length; i++) {
        let tempSalt = CryptoJS.lib.WordArray.random(128 / 8).toString()

        data.push({
          email: source[i].email,
          hashedPassword: CryptoJS.PBKDF2(
            source[i].unHashedPassword,
            tempSalt,
            { keySize: 256 / 32 }
          ).toString(),
          salt: tempSalt,
          firstName: source[i].firstName,
          lastName: source[i].lastName,
          bio: source[i].bio,
          roles: source[i].roles,
        })
      }

      Promise.all(
        data.map(async (data) => {
          const record = await db.user.create({ data })
          console.log('id:' + record.id + ' imported')
        })
      )
    } catch (error) {
      console.warn('Please define your user data.')
      console.error(error)
    }
  }

  importUsers()
}
