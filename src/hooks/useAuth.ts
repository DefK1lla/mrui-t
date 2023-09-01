import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthService from 'services/auth'
import { IUserData } from 'types/userData'

export const useAuth = () => {
  const navigate = useNavigate()

  const [error, setError] = useState<string | null>(null)
  const [isAuth, setIsAuth] = useState<boolean | null>(null)

  useEffect(() => {
    try {
      const isAuth = AuthService.check()
      setIsAuth(isAuth)
      if (isAuth) navigate('/')
    } catch (e) {
      const err = e as Error
      console.log(err)
      setError(err.message)
      setIsAuth(false)
    }
  }, [navigate])

  const signIn = (data: IUserData) => {
    try {
      const token = AuthService.signIn(data)
      setError(null)
      setIsAuth(!!token)
      navigate('/')
    } catch (e) {
      const err = e as Error
      console.log(err)
      setError(err.message)
      setIsAuth(false)
    }
  }

  const signUp = (data: IUserData) => {
    try {
      const token = AuthService.signUp(data)
      setError(null)
      setIsAuth(!!token)
      navigate('/')
    } catch (e) {
      const err = e as Error
      console.log(err)
      setError(err.message)
      setIsAuth(false)
    }
  }

  const logout = () => {
    try {
      AuthService.logout()
      setError(null)
      setIsAuth(false)
      navigate('/auth')
    } catch (e) {
      const err = e as Error
      console.log(err)
      setError(err.message)
      setIsAuth(false)
    }
  }

  return {
    error,
    isAuth,
    signIn,
    signUp,
    logout,
  }
}
