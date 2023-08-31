import { Container } from '@mui/material'
import type { FC } from 'react'

import { AuthForm } from 'components'
import { useAuth } from 'hooks/useAuth'

import s from './auth.module.css'

export const Auth: FC = () => {
  const { error, signIn, signUp } = useAuth()

  return (
    <Container>
      <div className={s.wrapper}>
        <AuthForm errorMessage={error} onSignIn={signIn} onSignUp={signUp} />
      </div>
    </Container>
  )
}
