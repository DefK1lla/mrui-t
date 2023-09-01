import { IUserData } from 'types/userData'

class AuthService {
  static signIn = (authData: IUserData) => {
    const usersRaw = localStorage.getItem('users')

    if (!usersRaw) {
      throw new Error('Incorrect username or password')
    }

    const users: IUserData[] = JSON.parse(usersRaw)
    const currentUser = users.find(u => u.email === authData.email)

    if (!currentUser || currentUser.password !== authData.password) {
      throw new Error('Incorrect username or password')
    }

    const token = btoa(JSON.stringify(authData))
    localStorage.setItem('token', token)
    return token
  }

  static signUp = (authData: IUserData) => {
    const usersRaw = localStorage.getItem('users')

    if (!usersRaw) {
      localStorage.setItem('users', JSON.stringify([authData]))
      const token = btoa(JSON.stringify(authData))
      localStorage.setItem('token', token)
      return token
    }

    const users: IUserData[] = JSON.parse(usersRaw)
    const isUserExists = users.find(u => u.email === authData.email)

    if (isUserExists) {
      throw new Error('Username already taken')
    }

    users.push(authData)
    localStorage.setItem('users', JSON.stringify(users))

    const token = btoa(JSON.stringify(authData))
    localStorage.setItem('token', token)
    return token
  }

  static check = () => {
    const usersRaw = localStorage.getItem('users')
    const token = localStorage.getItem('token')
    if (!usersRaw || !token) return false

    const users: IUserData[] = JSON.parse(usersRaw)
    const currentUser: IUserData = JSON.parse(atob(token))

    return !!users.find(u => u.email === currentUser.email)
  }

  static logout = () => {
    localStorage.removeItem('token')
  }
}

export default AuthService
