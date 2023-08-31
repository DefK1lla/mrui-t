import AuthService from 'services/auth'
import { IUserData } from '@/types/userData'
import { useState } from 'react'

export const useAuth = () => {
  const [error, setError] = useState<string | null>(null)
  const [token, setToken] = useState<string | null>(null)

  const signIn = (data: IUserData) => {
    try {
      const token = AuthService.signIn(data)
      setError(null)
      setToken(token)
    } catch (e) {
      const err = e as Error
      console.log(err)
      setError(err.message)
      setToken(null)
    }
  }

  const signUp = (data: IUserData) => {
    try {
      const token = AuthService.signUp(data)
      setError(null)
      setToken(token)
    } catch (e) {
      const err = e as Error
      console.log(err)
      setError(err.message)
      setToken(null)
    }
  }

  return {
    error,
    token,
    signIn,
    signUp,
  }
}
