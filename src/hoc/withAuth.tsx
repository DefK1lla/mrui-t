import type { ComponentType } from 'react'
import { LinearProgress } from '@mui/material'
import { Navigate } from 'react-router-dom'

import { useAuth } from 'hooks/useAuth'

export const withAuth = <Props extends object>(
  Component: ComponentType<Props>
) => {
  return (props: Props) => {
    const { isAuth } = useAuth()

    if (isAuth === null) return <LinearProgress />
    if (isAuth === false) return <Navigate to='/auth' />
    return <Component {...props} />
  }
}
